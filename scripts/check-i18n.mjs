/**
 * Catalog integrity check (mirrors velloc translation workflow §5).
 *
 * For every per-locale config in src/config.ts and src/content/capabilities.ts:
 *   - every locale must define the same key set (no missing / stray keys);
 *   - no value may be empty;
 *   - every `{placeholder}` in the English value must appear, spelled
 *     identically, in every other locale's value.
 *
 * Protocol values (hrefs, ids, package names, percentages) are exempt from
 * translation-equality checks — they must not be translated.
 */
const baseUrl = 'src';

const targets = [
  `${baseUrl}/config.ts`,
  `${baseUrl}/content/capabilities.ts`,
];

const LOCALES = ['en', 'zh', 'es', 'fr', 'de', 'ja', 'ko', 'bn', 'hi', 'pt', 'ru'];

/** Walk an object and return every leaf path -> value, keyed by path. */
function flatten(value, prefix = '') {
  const out = new Map();
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    for (const [k, v] of Object.entries(value)) {
      const path = prefix ? `${prefix}.${k}` : k;
      if (v && typeof v === 'object' && !Array.isArray(v)) {
        for (const [leafPath, leaf] of flatten(v, path)) out.set(leafPath, leaf);
      } else {
        out.set(path, v);
      }
    }
  }
  return out;
}

function extractPlaceholders(s) {
  const found = [];
  const re = /\{(\w+)\}/g;
  let m;
  while ((m = re.exec(s)) !== null) found.push(m[1]);
  return found;
}

let failures = 0;

for (const file of targets) {
  const moduleExports = await import(new URL(`../${file}`, import.meta.url).href);

  const isLangConfig = (v) =>
    v && typeof v === 'object' && Object.keys(v).length > 0 &&
    Object.keys(v).every((k) => LOCALES.includes(k));

  for (const [name, config] of Object.entries(moduleExports)) {
    if (!isLangConfig(config)) continue;
    const locales = Object.keys(config);
    if (!locales.includes('en')) continue;

    const enLeaves = flatten(config.en);
    const enKeys = [...enLeaves.keys()].sort();

    for (const loc of locales) {
      const leaves = flatten(config[loc]);
      const keys = [...leaves.keys()].sort();
      const missing = enKeys.filter((k) => !keys.includes(k));
      const stray = keys.filter((k) => !enKeys.includes(k));
      if (missing.length) {
        failures++;
        console.error(`[${name}][${loc}] MISSING keys: ${missing.join(', ')}`);
      }
      if (stray.length) {
        failures++;
        console.error(`[${name}][${loc}] STRAY keys: ${stray.join(', ')}`);
      }
      for (const k of enKeys) {
        const enVal = enLeaves.get(k);
        const val = leaves.get(k);
        if (typeof val === 'string' && val.trim() === '') {
          failures++;
          console.error(`[${name}][${loc}] EMPTY value at ${k}`);
        }
        if (typeof enVal === 'string' && typeof val === 'string') {
          const enPh = extractPlaceholders(enVal).sort();
          const locPh = extractPlaceholders(val).sort();
          if (enPh.join() !== locPh.join()) {
            failures++;
            console.error(
              `[${name}][${loc}] PLACEHOLDER mismatch at ${k}: en={${enPh.join('},{')}} loc={${locPh.join('},{')}}`
            );
          }
        }
      }
    }
    console.log(`[catalog] ${name}: ${locales.join(', ')} — key sets match, no empty values, placeholders consistent`);
  }
}

if (failures > 0) {
  console.error(`\n${failures} catalog issue(s) found.`);
  process.exit(1);
}
console.log('\nCatalog check passed.');
