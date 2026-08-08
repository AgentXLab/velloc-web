import type { Lang } from './i18n';

// ============================================================
// Site Configuration
//
// English is the source language; every other locale is a
// translation of the English value. Register per locale:
//   en    — clear, professional (source)
//   zh    — informal, 你
//   es    — formal, impersonal, usted-agreement
//   fr    — formal, vous
//   de    — informal, du
//   ja    — polite, です/ます
//   ko    — polite, 합니다
// ============================================================

export interface SiteConfig {
  language: string;
  brandName: string;
}

export const siteConfig: SiteConfig = {
  language: 'en',
  brandName: 'Velloc Code',
};

/** Interpolate `{name}` placeholders in a catalog value. */
export function interpolate(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key) =>
    key in vars ? String(vars[key]) : `{${key}}`
  );
}

// ============================================================
// Navigation
// ============================================================

export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  links: NavLink[];
  ctaText: string;
  ctaHref: string;
  /** aria-label for the language switcher. */
  languageLabel: string;
}

export const navigationConfig: Record<Lang, NavigationConfig> = {
  en: {
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Models', href: '#models' },
      { label: 'Extensions', href: '#marketplace' },
    ],
    ctaText: 'Download',
    ctaHref: '/download/install.exe',
    languageLabel: 'Language',
  },
  zh: {
    links: [
      { label: '功能', href: '#features' },
      { label: '模型', href: '#models' },
      { label: '扩展', href: '#marketplace' },
    ],
    ctaText: '下载',
    ctaHref: '/download/install.exe',
    languageLabel: '切换语言',
  },
  es: {
    links: [
      { label: 'Características', href: '#features' },
      { label: 'Modelos', href: '#models' },
      { label: 'Extensiones', href: '#marketplace' },
    ],
    ctaText: 'Descargar',
    ctaHref: '/download/install.exe',
    languageLabel: 'Idioma',
  },
  fr: {
    links: [
      { label: 'Fonctionnalités', href: '#features' },
      { label: 'Modèles', href: '#models' },
      { label: 'Extensions', href: '#marketplace' },
    ],
    ctaText: 'Télécharger',
    ctaHref: '/download/install.exe',
    languageLabel: 'Langue',
  },
  de: {
    links: [
      { label: 'Funktionen', href: '#features' },
      { label: 'Modelle', href: '#models' },
      { label: 'Erweiterungen', href: '#marketplace' },
    ],
    ctaText: 'Herunterladen',
    ctaHref: '/download/install.exe',
    languageLabel: 'Sprache',
  },
  ja: {
    links: [
      { label: '機能', href: '#features' },
      { label: 'モデル', href: '#models' },
      { label: '拡張機能', href: '#marketplace' },
    ],
    ctaText: 'ダウンロード',
    ctaHref: '/download/install.exe',
    languageLabel: '言語',
  },
  ko: {
    links: [
      { label: '기능', href: '#features' },
      { label: '모델', href: '#models' },
      { label: '확장 기능', href: '#marketplace' },
    ],
    ctaText: '다운로드',
    ctaHref: '/download/install.exe',
    languageLabel: '언어',
  },
  bn: {
    links: [
      { label: 'বৈশিষ্ট্য', href: '#features' },
      { label: 'মডেল', href: '#models' },
      { label: 'এক্সটেনশন', href: '#marketplace' },
    ],
    ctaText: 'ডাউনলোড',
    ctaHref: '/download/install.exe',
    languageLabel: 'ভাষা',
  },
  hi: {
    links: [
      { label: 'विशेषताएँ', href: '#features' },
      { label: 'मॉडल', href: '#models' },
      { label: 'एक्सटेंशन', href: '#marketplace' },
    ],
    ctaText: 'डाउनलोड करें',
    ctaHref: '/download/install.exe',
    languageLabel: 'भाषा',
  },
  pt: {
    links: [
      { label: 'Recursos', href: '#features' },
      { label: 'Modelos', href: '#models' },
      { label: 'Extensões', href: '#marketplace' },
    ],
    ctaText: 'Baixar',
    ctaHref: '/download/install.exe',
    languageLabel: 'Idioma',
  },
  ru: {
    links: [
      { label: 'Возможности', href: '#features' },
      { label: 'Модели', href: '#models' },
      { label: 'Расширения', href: '#marketplace' },
    ],
    ctaText: 'Скачать',
    ctaHref: '/download/install.exe',
    languageLabel: 'Язык',
  },
};

// ============================================================
// Hero
// ============================================================

export interface HeroStep {
  index: string;
  text: string;
}

export interface HeroRightCard {
  title: string;
  steps: HeroStep[];
  footerText: string;
}

export interface HeroConfig {
  eyebrow: string;
  titleLines: string[];
  descriptionLines: string[];
  primaryCta: { text: string; href: string };
  secondaryCta: { text: string; href: string };
  taglineLines: string[];
  rightCard: HeroRightCard;
}

export const heroConfig: Record<Lang, HeroConfig> = {
  en: {
    eyebrow: 'AI CODING AGENT',
    titleLines: ['Start Coding.', 'Make It Yours.'],
    descriptionLines: [
      'Velloc is ready from the first launch, with a familiar AI coding experience and sensible defaults.',
      'Start with one API key. Customize models, agents, memory, and extensions only when your project calls for more control.',
    ],
    primaryCta: { text: 'Download for Windows', href: '/download/install.exe' },
    secondaryCta: { text: 'See How It Works', href: '#features' },
    taglineLines: ['Simple by default.', 'Powerful by choice.'],
    rightCard: {
      title: 'Start in Minutes',
      steps: [
        { index: '01', text: 'Download Velloc' },
        { index: '02', text: 'Add your API key' },
        { index: '03', text: 'Open a project and start coding' },
      ],
      footerText: 'No agent setup required. Advanced configuration is optional.',
    },
  },
  zh: {
    eyebrow: 'AI 编程 Agent',
    titleLines: ['即刻开始编程。', '一切由你掌控。'],
    descriptionLines: [
      'Velloc 开箱即用，首次启动即可进入熟悉的 AI 编程工作流，无需复杂配置。',
      '只需一个 API Key 即可开始。需要更强大的能力时，再根据项目需求定制模型、Agent、记忆和扩展。',
    ],
    primaryCta: { text: '下载 Windows 版', href: '/download/install.exe' },
    secondaryCta: { text: '查看如何使用', href: '#features' },
    taglineLines: ['简单，是默认体验。', '强大，由你按需开启。'],
    rightCard: {
      title: '快速上手',
      steps: [
        { index: '01', text: '下载 Velloc' },
        { index: '02', text: '添加你的 API Key' },
        { index: '03', text: '打开项目，开始编程' },
      ],
      footerText: '无需预先配置 Agent，高级功能按需开启。',
    },
  },
  es: {
    eyebrow: 'AGENTE DE CODIFICACIÓN CON IA',
    titleLines: ['Empiece a programar.', 'Hágalo suyo.'],
    descriptionLines: [
      'Velloc está listo desde el primer inicio, con una experiencia de codificación con IA familiar y valores predeterminados sensatos.',
      'Empiece con una única clave de API. Personalice modelos, agentes, memoria y extensiones solo cuando su proyecto exija un mayor control.',
    ],
    primaryCta: { text: 'Descargar para Windows', href: '/download/install.exe' },
    secondaryCta: { text: 'Ver cómo funciona', href: '#features' },
    taglineLines: ['Simple por defecto.', 'Potente si así lo elige.'],
    rightCard: {
      title: 'Empiece en minutos',
      steps: [
        { index: '01', text: 'Descargue Velloc' },
        { index: '02', text: 'Añada su clave de API' },
        { index: '03', text: 'Abra un proyecto y empiece a programar' },
      ],
      footerText: 'No requiere configuración de agentes. La configuración avanzada es opcional.',
    },
  },
  fr: {
    eyebrow: 'AGENT DE CODAGE IA',
    titleLines: ['Commencez à coder.', 'Faites-le vôtre.'],
    descriptionLines: [
      'Velloc est prêt dès le premier lancement, avec une expérience de codage IA familière et des réglages par défaut judicieux.',
      'Commencez avec une seule clé API. Personnalisez modèles, agents, mémoire et extensions uniquement lorsque votre projet exige plus de contrôle.',
    ],
    primaryCta: { text: 'Télécharger pour Windows', href: '/download/install.exe' },
    secondaryCta: { text: 'Voir comment ça marche', href: '#features' },
    taglineLines: ['Simple par défaut.', 'Puissant si vous le choisissez.'],
    rightCard: {
      title: 'Commencez en quelques minutes',
      steps: [
        { index: '01', text: 'Téléchargez Velloc' },
        { index: '02', text: 'Ajoutez votre clé API' },
        { index: '03', text: 'Ouvrez un projet et commencez à coder' },
      ],
      footerText: 'Aucune configuration d’agent requise. La configuration avancée est facultative.',
    },
  },
  de: {
    eyebrow: 'KI-CODE-AGENT',
    titleLines: ['Leg los.', 'Mach es zu deinem.'],
    descriptionLines: [
      'Velloc ist ab dem ersten Start einsatzbereit, mit einer vertrauten KI-Coding-Erfahrung und sinnvollen Standardeinstellungen.',
      'Beginne mit einem einzigen API-Schlüssel. Passe Modelle, Agents, Speicher und Erweiterungen nur an, wenn dein Projekt mehr Kontrolle braucht.',
    ],
    primaryCta: { text: 'Für Windows herunterladen', href: '/download/install.exe' },
    secondaryCta: { text: 'So funktioniert es', href: '#features' },
    taglineLines: ['Standardmäßig einfach.', 'Stark, wenn du es willst.'],
    rightCard: {
      title: 'In Minuten starten',
      steps: [
        { index: '01', text: 'Velloc herunterladen' },
        { index: '02', text: 'API-Schlüssel hinzufügen' },
        { index: '03', text: 'Projekt öffnen und loslegen' },
      ],
      footerText: 'Keine Agent-Einrichtung nötig. Erweiterte Konfiguration ist optional.',
    },
  },
  ja: {
    eyebrow: 'AI コーディングエージェント',
    titleLines: ['コーディングを始めましょう。', 'あなた好みに。'],
    descriptionLines: [
      'Velloc は最初の起動からすぐに使えます。慣れ親しんだ AI コーディング体験と、わかりやすい初期設定を備えています。',
      'まず API キーを 1 つ追加するだけ。モデル、エージェント、メモリ、拡張機能は、プロジェクトでもっと細かい制御が必要になったときにカスタマイズできます。',
    ],
    primaryCta: { text: 'Windows 版をダウンロード', href: '/download/install.exe' },
    secondaryCta: { text: '使い方を見る', href: '#features' },
    taglineLines: ['デフォルトでシンプル。', '選べばパワフル。'],
    rightCard: {
      title: '数分で開始',
      steps: [
        { index: '01', text: 'Velloc をダウンロード' },
        { index: '02', text: 'API キーを追加' },
        { index: '03', text: 'プロジェクトを開いてコーディング開始' },
      ],
      footerText: 'エージェントのセットアップは不要。高度な設定は必要に応じて。',
    },
  },
  ko: {
    eyebrow: 'AI 코딩 에이전트',
    titleLines: ['코딩을 시작하세요.', '당신만의 것으로.'],
    descriptionLines: [
      'Velloc는 처음 실행하는 순간부터 사용할 준비가 되어 있습니다. 익숙한 AI 코딩 경험과 합리적인 기본 설정을 제공합니다.',
      'API 키 하나로 시작하세요. 모델, 에이전트, 메모리, 확장 기능은 프로젝트에서 더 많은 제어가 필요할 때만 맞춤 설정하면 됩니다.',
    ],
    primaryCta: { text: 'Windows용 다운로드', href: '/download/install.exe' },
    secondaryCta: { text: '사용 방법 보기', href: '#features' },
    taglineLines: ['기본은 단순하게.', '선택하면 강력하게.'],
    rightCard: {
      title: '몇 분 만에 시작',
      steps: [
        { index: '01', text: 'Velloc 다운로드' },
        { index: '02', text: 'API 키 추가' },
        { index: '03', text: '프로젝트를 열고 코딩 시작' },
      ],
      footerText: '에이전트 설정이 필요 없습니다. 고급 구성은 선택 사항입니다.',
    },
  },
  bn: {
    eyebrow: 'AI কোডিং এজেন্ট',
    titleLines: ['কোডিং শুরু করুন।', 'আপনার মতো করে গড়ে তুলুন।'],
    descriptionLines: [
      'Velloc প্রথম চালু থেকেই প্রস্তুত, পরিচিত AI কোডিং অভিজ্ঞতা এবং যুক্তিসঙ্গত ডিফল্ট সেটিংসসহ।',
      'একটি API কী দিয়ে শুরু করুন। আপনার প্রকল্পে আরও নিয়ন্ত্রণের প্রয়োজন হলে তবেই মডেল, এজেন্ট, মেমোরি এবং এক্সটেনশন কাস্টমাইজ করুন।',
    ],
    primaryCta: { text: 'Windows-এর জন্য ডাউনলোড', href: '/download/install.exe' },
    secondaryCta: { text: 'কীভাবে কাজ করে দেখুন', href: '#features' },
    taglineLines: ['ডিফল্টে সহজ।', 'ইচ্ছায় শক্তিশালী।'],
    rightCard: {
      title: 'মিনিটেই শুরু',
      steps: [
        { index: '01', text: 'Velloc ডাউনলোড করুন' },
        { index: '02', text: 'আপনার API কী যোগ করুন' },
        { index: '03', text: 'একটি প্রকল্প খুলে কোডিং শুরু করুন' },
      ],
      footerText: 'কোনো এজেন্ট সেটআপ প্রয়োজন নেই। উন্নত কনফিগারেশন ঐচ্ছিক।',
    },
  },
  hi: {
    eyebrow: 'AI कोडिंग एजेंट',
    titleLines: ['कोडिंग शुरू करें।', 'इसे अपना बनाएँ।'],
    descriptionLines: [
      'Velloc पहले लॉन्च से ही तैयार है, परिचित AI कोडिंग अनुभव और समझदार डिफ़ॉल्ट सेटिंग्स के साथ।',
      'सिर्फ़ एक API कुंजी से शुरू करें। मॉडल, एजेंट, मेमोरी और एक्सटेंशन तभी कस्टमाइज़ करें जब आपके प्रोजेक्ट को अधिक नियंत्रण की ज़रूरत हो।',
    ],
    primaryCta: { text: 'Windows के लिए डाउनलोड करें', href: '/download/install.exe' },
    secondaryCta: { text: 'यह कैसे काम करता है देखें', href: '#features' },
    taglineLines: ['डिफ़ॉल्ट रूप से सरल।', 'चुनने पर शक्तिशाली।'],
    rightCard: {
      title: 'मिनटों में शुरू करें',
      steps: [
        { index: '01', text: 'Velloc डाउनलोड करें' },
        { index: '02', text: 'अपनी API कुंजी जोड़ें' },
        { index: '03', text: 'प्रोजेक्ट खोलें और कोडिंग शुरू करें' },
      ],
      footerText: 'एजेंट सेटअप की आवश्यकता नहीं। उन्नत कॉन्फ़िगरेशन वैकल्पिक है।',
    },
  },
  pt: {
    eyebrow: 'AGENTE DE CODIFICAÇÃO COM IA',
    titleLines: ['Comece a programar.', 'Faça do seu jeito.'],
    descriptionLines: [
      'O Velloc está pronto desde o primeiro início, com uma experiência de codificação com IA familiar e configurações padrão sensatas.',
      'Comece com uma única chave de API. Personalize modelos, agentes, memória e extensões apenas quando o seu projeto exigir mais controle.',
    ],
    primaryCta: { text: 'Baixar para Windows', href: '/download/install.exe' },
    secondaryCta: { text: 'Veja como funciona', href: '#features' },
    taglineLines: ['Simples por padrão.', 'Poderoso por escolha.'],
    rightCard: {
      title: 'Comece em minutos',
      steps: [
        { index: '01', text: 'Baixe o Velloc' },
        { index: '02', text: 'Adicione sua chave de API' },
        { index: '03', text: 'Abra um projeto e comece a programar' },
      ],
      footerText: 'Nenhuma configuração de agente necessária. A configuração avançada é opcional.',
    },
  },
  ru: {
    eyebrow: 'ИИ-АГЕНТ ДЛЯ НАПИСАНИЯ КОДА',
    titleLines: ['Начните кодировать.', 'Сделайте его своим.'],
    descriptionLines: [
      'Velloc готов к работе с первого запуска: привычный опыт ИИ-кодирования и разумные настройки по умолчанию.',
      'Начните с одного API-ключа. Настраивайте модели, агентов, память и расширения только тогда, когда ваш проект требует большего контроля.',
    ],
    primaryCta: { text: 'Скачать для Windows', href: '/download/install.exe' },
    secondaryCta: { text: 'Как это работает', href: '#features' },
    taglineLines: ['Просто по умолчанию.', 'Мощно по вашему выбору.'],
    rightCard: {
      title: 'Начало за несколько минут',
      steps: [
        { index: '01', text: 'Скачайте Velloc' },
        { index: '02', text: 'Добавьте свой API-ключ' },
        { index: '03', text: 'Откройте проект и начните кодировать' },
      ],
      footerText: 'Настройка агента не требуется. Расширенная конфигурация — по желанию.',
    },
  },
};

// ============================================================
// Core Features (second screen — left nav + product showcase)
// ============================================================

export interface FeatureNavItem {
  id: string;
  title: string;
  description: string;
  detailTitle: string;
  detail: string;
  learnMore: string;
}

export interface FeaturesConfig {
  sectionLabel: string;
  title: string;
  subtitle: string;
  items: FeatureNavItem[];
}

export const featuresConfig: Record<Lang, FeaturesConfig> = {
  en: {
    sectionLabel: 'FEATURES',
    title: 'Start simple. Go further when you need to.',
    subtitle:
      'Begin with a familiar AI coding workflow, then add models, agents, memory, plugins, and skills as your needs grow.',
    items: [
      {
        id: 'start-coding',
        title: 'Start Coding',
        description: 'Open a project and begin working immediately.',
        detailTitle: 'Start with the defaults',
        detail:
          'Open a project and begin coding immediately. Advanced configuration stays out of the way until you need it.',
        learnMore: '/download/install.exe',
      },
      {
        id: 'choose-model',
        title: 'Choose Any Model',
        description: 'Switch models at any time without changing how you work.',
        detailTitle: 'Switch instantly',
        detail:
          'Use the default model or switch models whenever the task changes. One click — no configuration required.',
        learnMore: '#models',
      },
      {
        id: 'right-model',
        title: 'The Right Model for Every Task',
        description: 'Assign different models to planning, implementation, research, testing, and review.',
        detailTitle: 'Configure models by task',
        detail:
          'Use one model for everything, or assign the best model to each task. Advanced orchestration is entirely optional.',
        learnMore: '#models',
      },
      {
        id: 'remember-project',
        title: 'Remember Your Project',
        description: 'Preserve project context, decisions, and preferences across sessions.',
        detailTitle: 'Context that persists',
        detail:
          'Architecture decisions, coding conventions, and build instructions stay with your project — session after session.',
        learnMore: '',
      },
      {
        id: 'extend-workflow',
        title: 'Extend Your Workflow',
        description: 'Add plugins, skills, and custom capabilities.',
        detailTitle: 'Extend when you need to',
        detail:
          'Install compatible plugins and skills, or create capabilities of your own and wire them into any agent.',
        learnMore: '',
      },
    ],
  },
  zh: {
    sectionLabel: '功能',
    title: '简单上手，按需进阶。',
    subtitle: '从熟悉的 AI 编程工作流开始。随着项目需求增长，再逐步加入更多模型、Agent、记忆、插件和技能。',
    items: [
      {
        id: 'start-coding',
        title: '开始编程',
        description: '打开项目，即刻开始编程。',
        detailTitle: '从默认配置开始',
        detail: '打开项目，即刻开始编程。无需预先设置，高级功能需要时再开启。',
        learnMore: '/download/install.exe',
      },
      {
        id: 'choose-model',
        title: '自由选择模型',
        description: '随时切换模型，无需改变现有的工作方式。',
        detailTitle: '即时切换',
        detail: '使用默认模型，或随任务变化随时切换模型。一键完成，无需任何配置。',
        learnMore: '#models',
      },
      {
        id: 'right-model',
        title: '为每项任务选择合适的模型',
        description: '可分别为规划、实现、研究、测试和代码审查指定不同的模型。',
        detailTitle: '按任务配置模型',
        detail: '可以用一个模型完成所有工作，也可以为每项任务分配最合适的模型。高级编排完全可选。',
        learnMore: '#models',
      },
      {
        id: 'remember-project',
        title: '让 Velloc 记住你的项目',
        description: '跨会话保留项目上下文、关键决策和工作偏好。',
        detailTitle: '持续保留上下文',
        detail: '架构决策、编码规范与构建说明会随项目长期保留——每次会话都记得你的工作方式。',
        learnMore: '',
      },
      {
        id: 'extend-workflow',
        title: '扩展你的工作流',
        description: '通过插件、技能和自定义能力扩展 Velloc。',
        detailTitle: '按需扩展',
        detail: '安装兼容的插件和技能，或创建属于你自己的能力，并接入任意 Agent。',
        learnMore: '',
      },
    ],
  },
  es: {
    sectionLabel: 'Funciones',
    title: 'Empiece con lo esencial. Vaya más allá cuando lo necesite.',
    subtitle:
      'Empiece con un flujo de codificación con IA familiar y añada modelos, agentes, memoria, plugins y habilidades a medida que crezcan sus necesidades.',
    items: [
      {
        id: 'start-coding',
        title: 'Empiece a programar',
        description: 'Abra un proyecto y comience a trabajar de inmediato.',
        detailTitle: 'Empiece con los valores predeterminados',
        detail: 'Abra un proyecto y comience a programar de inmediato. La configuración avanzada se mantiene oculta hasta que la necesite.',
        learnMore: '/download/install.exe',
      },
      {
        id: 'choose-model',
        title: 'Elija cualquier modelo',
        description: 'Cambie de modelo en cualquier momento sin alterar su forma de trabajar.',
        detailTitle: 'Cambie al instante',
        detail: 'Use el modelo predeterminado o cámbielo cuando cambie la tarea. Un solo clic, sin necesidad de configuración.',
        learnMore: '#models',
      },
      {
        id: 'right-model',
        title: 'El modelo adecuado para cada tarea',
        description: 'Asigne distintos modelos a la planificación, la implementación, la investigación, las pruebas y la revisión.',
        detailTitle: 'Configure modelos por tarea',
        detail: 'Use un único modelo para todo o asigne el mejor modelo a cada tarea. La orquestación avanzada es totalmente opcional.',
        learnMore: '#models',
      },
      {
        id: 'remember-project',
        title: 'Recuerde su proyecto',
        description: 'Conserve el contexto, las decisiones y las preferencias del proyecto entre sesiones.',
        detailTitle: 'Contexto que perdura',
        detail: 'Las decisiones de arquitectura, las convenciones de código y las instrucciones de compilación permanecen en su proyecto, sesión tras sesión.',
        learnMore: '',
      },
      {
        id: 'extend-workflow',
        title: 'Amplíe su flujo de trabajo',
        description: 'Añada plugins, habilidades y capacidades personalizadas.',
        detailTitle: 'Amplíe cuando lo necesite',
        detail: 'Instale plugins y habilidades compatibles, o cree sus propias capacidades y conéctelas a cualquier agente.',
        learnMore: '',
      },
    ],
  },
  fr: {
    sectionLabel: 'Fonctionnalités',
    title: 'Commencez simplement. Allez plus loin quand vous en avez besoin.',
    subtitle:
      'Commencez avec un flux de codage IA familier, puis ajoutez modèles, agents, mémoire, plugins et compétences à mesure que vos besoins évoluent.',
    items: [
      {
        id: 'start-coding',
        title: 'Commencez à coder',
        description: 'Ouvrez un projet et travaillez immédiatement.',
        detailTitle: 'Commencez avec les réglages par défaut',
        detail: 'Ouvrez un projet et commencez à coder immédiatement. La configuration avancée reste discrète jusqu’à ce que vous en ayez besoin.',
        learnMore: '/download/install.exe',
      },
      {
        id: 'choose-model',
        title: 'Choisissez n’importe quel modèle',
        description: 'Changez de modèle à tout moment sans changer votre façon de travailler.',
        detailTitle: 'Changez instantanément',
        detail: 'Utilisez le modèle par défaut ou changez de modèle selon la tâche. Un clic, aucune configuration requise.',
        learnMore: '#models',
      },
      {
        id: 'right-model',
        title: 'Le bon modèle pour chaque tâche',
        description: 'Attribuez différents modèles à la planification, l’implémentation, la recherche, les tests et la revue.',
        detailTitle: 'Configurez les modèles par tâche',
        detail: 'Utilisez un seul modèle pour tout, ou attribuez le meilleur modèle à chaque tâche. L’orchestration avancée est entièrement facultative.',
        learnMore: '#models',
      },
      {
        id: 'remember-project',
        title: 'Souvenez-vous de votre projet',
        description: 'Préservez le contexte, les décisions et les préférences du projet d’une session à l’autre.',
        detailTitle: 'Un contexte qui persiste',
        detail: 'Les décisions d’architecture, les conventions de code et les instructions de compilation restent associées à votre projet, session après session.',
        learnMore: '',
      },
      {
        id: 'extend-workflow',
        title: 'Étendez votre flux de travail',
        description: 'Ajoutez des plugins, des compétences et des capacités personnalisées.',
        detailTitle: 'Étendez quand vous en avez besoin',
        detail: 'Installez des plugins et des compétences compatibles, ou créez vos propres capacités et connectez-les à n’importe quel agent.',
        learnMore: '',
      },
    ],
  },
  de: {
    sectionLabel: 'Funktionen',
    title: 'Einfach starten. Weiter gehen, wenn du es brauchst.',
    subtitle:
      'Starte mit einem vertrauten KI-Coding-Workflow und füge Modelle, Agents, Speicher, Plugins und Skills hinzu, wenn deine Anforderungen wachsen.',
    items: [
      {
        id: 'start-coding',
        title: 'Coding starten',
        description: 'Öffne ein Projekt und arbeite sofort los.',
        detailTitle: 'Mit den Standardeinstellungen starten',
        detail: 'Öffne ein Projekt und beginne sofort mit dem Coding. Erweiterte Konfiguration bleibt im Hintergrund, bis du sie brauchst.',
        learnMore: '/download/install.exe',
      },
      {
        id: 'choose-model',
        title: 'Beliebiges Modell wählen',
        description: 'Wechsle jederzeit das Modell, ohne deine Arbeitsweise zu ändern.',
        detailTitle: 'Sofort wechseln',
        detail: 'Nutze das Standardmodell oder wechsle das Modell, wann immer sich die Aufgabe ändert. Ein Klick — keine Konfiguration nötig.',
        learnMore: '#models',
      },
      {
        id: 'right-model',
        title: 'Das richtige Modell für jede Aufgabe',
        description: 'Weise Planung, Implementierung, Recherche, Tests und Review verschiedene Modelle zu.',
        detailTitle: 'Modelle nach Aufgabe konfigurieren',
        detail: 'Nutze ein Modell für alles oder weise jeder Aufgabe das beste Modell zu. Fortschrittliche Orchestrierung ist komplett optional.',
        learnMore: '#models',
      },
      {
        id: 'remember-project',
        title: 'Erinnere dich an dein Projekt',
        description: 'Behalte Projektkontext, Entscheidungen und Präferenzen über Sitzungen hinweg.',
        detailTitle: 'Kontext, der bleibt',
        detail: 'Architekturentscheidungen, Codierungskonventionen und Build-Anweisungen bleiben bei deinem Projekt — Sitzung für Sitzung.',
        learnMore: '',
      },
      {
        id: 'extend-workflow',
        title: 'Erweitere deinen Workflow',
        description: 'Füge Plugins, Skills und eigene Fähigkeiten hinzu.',
        detailTitle: 'Erweitern, wenn du es brauchst',
        detail: 'Installiere kompatible Plugins und Skills oder erstelle eigene Fähigkeiten und binde sie in jeden Agent ein.',
        learnMore: '',
      },
    ],
  },
  ja: {
    sectionLabel: '機能',
    title: 'シンプルに始めて、必要に応じてさらに。',
    subtitle: '慣れ親しんだ AI コーディングワークフローから始めて、必要に応じてモデル、エージェント、メモリ、プラグイン、スキルを追加していきます。',
    items: [
      {
        id: 'start-coding',
        title: 'コーディングを始める',
        description: 'プロジェクトを開いて、すぐに作業を始められます。',
        detailTitle: '初期設定のまま始める',
        detail: 'プロジェクトを開いて、すぐにコーディングを開始。高度な設定は必要なときまで邪魔になりません。',
        learnMore: '/download/install.exe',
      },
      {
        id: 'choose-model',
        title: 'お好みのモデルを選択',
        description: '作業の進め方はそのままに、いつでもモデルを切り替えられます。',
        detailTitle: 'すぐに切り替え',
        detail: 'デフォルトのモデルを使うか、タスクに合わせてモデルを切り替えましょう。クリック 1 回で、設定は不要です。',
        learnMore: '#models',
      },
      {
        id: 'right-model',
        title: 'タスクごとに最適なモデル',
        description: '計画、実装、調査、テスト、レビューにそれぞれ異なるモデルを割り当てられます。',
        detailTitle: 'タスクごとにモデルを設定',
        detail: 'すべてを 1 つのモデルで行うか、タスクごとに最適なモデルを割り当てるか。高度なオーケストレーションは完全にオプションです。',
        learnMore: '#models',
      },
      {
        id: 'remember-project',
        title: 'プロジェクトを記憶',
        description: 'プロジェクトのコンテキスト、決定事項、設定をセッションをまたいで保持します。',
        detailTitle: '持続するコンテキスト',
        detail: 'アーキテクチャの決定、コーディング規約、ビルド手順はプロジェクトとともに残り、セッションを重ねても保持されます。',
        learnMore: '',
      },
      {
        id: 'extend-workflow',
        title: 'ワークフローを拡張',
        description: 'プラグイン、スキル、独自の機能を追加できます。',
        detailTitle: '必要なときに拡張',
        detail: '互換性のあるプラグインやスキルをインストールするか、独自の機能を作成して任意のエージェントに組み込めます。',
        learnMore: '',
      },
    ],
  },
  ko: {
    sectionLabel: '기능',
    title: '간단하게 시작하고, 필요할 때 더 나아가세요.',
    subtitle: '익숙한 AI 코딩 워크플로로 시작하고, 요구 사항이 늘어남에 따라 모델, 에이전트, 메모리, 플러그인, 스킬을 추가하세요.',
    items: [
      {
        id: 'start-coding',
        title: '코딩 시작',
        description: '프로젝트를 열고 바로 작업을 시작하세요.',
        detailTitle: '기본 설정으로 시작',
        detail: '프로젝트를 열고 바로 코딩을 시작하세요. 고급 구성은 필요할 때까지 방해하지 않습니다.',
        learnMore: '/download/install.exe',
      },
      {
        id: 'choose-model',
        title: '원하는 모델 선택',
        description: '작업 방식을 바꾸지 않고 언제든 모델을 전환하세요.',
        detailTitle: '즉시 전환',
        detail: '기본 모델을 사용하거나 작업이 바뀔 때마다 모델을 전환하세요. 클릭 한 번으로 설정이 필요 없습니다.',
        learnMore: '#models',
      },
      {
        id: 'right-model',
        title: '모든 작업에 맞는 모델',
        description: '계획, 구현, 조사, 테스트, 검토에 각각 다른 모델을 지정하세요.',
        detailTitle: '작업별 모델 구성',
        detail: '하나의 모델로 모든 작업을 처리하거나, 각 작업에 가장 적합한 모델을 지정하세요. 고급 오케스트레이션은 완전히 선택 사항입니다.',
        learnMore: '#models',
      },
      {
        id: 'remember-project',
        title: '프로젝트 기억',
        description: '프로젝트 컨텍스트, 결정 사항, 기본 설정을 세션 간에 유지하세요.',
        detailTitle: '지속되는 컨텍스트',
        detail: '아키텍처 결정, 코딩 규칙, 빌드 지침이 프로젝트에 그대로 남아 세션이 지나도 유지됩니다.',
        learnMore: '',
      },
      {
        id: 'extend-workflow',
        title: '워크플로 확장',
        description: '플러그인, 스킬, 사용자 지정 기능을 추가하세요.',
        detailTitle: '필요할 때 확장',
        detail: '호환되는 플러그인과 스킬을 설치하거나, 직접 만든 기능을 어떤 에이전트에든 연결하세요.',
        learnMore: '',
      },
    ],
  },
  bn: {
    sectionLabel: 'বৈশিষ্ট্য',
    title: 'সহজে শুরু করুন। প্রয়োজন হলে আরও এগিয়ে যান।',
    subtitle: 'পরিচিত AI কোডিং ওয়ার্কফ্লো দিয়ে শুরু করুন, তারপর প্রয়োজনের সাথে সাথে আরও মডেল, এজেন্ট, মেমোরি, প্লাগইন এবং স্কিল যোগ করুন।',
    items: [
      {
        id: 'start-coding',
        title: 'কোডিং শুরু করুন',
        description: 'একটি প্রকল্প খুলে সঙ্গে সঙ্গে কাজ শুরু করুন।',
        detailTitle: 'ডিফল্ট সেটিংস দিয়ে শুরু',
        detail: 'একটি প্রকল্প খুলে সঙ্গে সঙ্গে কোডিং শুরু করুন। উন্নত কনফিগারেশন আপনার প্রয়োজন না হওয়া পর্যন্ত আড়ালে থাকে।',
        learnMore: '/download/install.exe',
      },
      {
        id: 'choose-model',
        title: 'যেকোনো মডেল বেছে নিন',
        description: 'কাজের ধরন বদল না করেই যেকোনো সময় মডেল পরিবর্তন করুন।',
        detailTitle: 'তক্ষুণি পরিবর্তন',
        detail: 'ডিফল্ট মডেল ব্যবহার করুন বা কাজ বদলালে মডেল বদলান। এক ক্লিকেই — কোনো কনফিগারেশন ছাড়াই।',
        learnMore: '#models',
      },
      {
        id: 'right-model',
        title: 'প্রতিটি কাজের জন্য সঠিক মডেল',
        description: 'পরিকল্পনা, বাস্তবায়ন, গবেষণা, টেস্টিং এবং রিভিউয়ের জন্য আলাদা মডেল নির্ধারণ করুন।',
        detailTitle: 'কাজ অনুযায়ী মডেল কনফিগার',
        detail: 'সবকিছুর জন্য একটি মডেল ব্যবহার করুন, বা প্রতিটি কাজের জন্য সেরা মডেল নির্ধারণ করুন। উন্নত অর্কেস্ট্রেশন সম্পূর্ণ ঐচ্ছিক।',
        learnMore: '#models',
      },
      {
        id: 'remember-project',
        title: 'আপনার প্রকল্প মনে রাখুন',
        description: 'সেশনের মধ্যে প্রকল্পের প্রসঙ্গ, সিদ্ধান্ত এবং পছন্দ সংরক্ষণ করুন।',
        detailTitle: 'স্থায়ী প্রসঙ্গ',
        detail: 'আর্কিটেকচার সিদ্ধান্ত, কোডিং কনভেনশন এবং বিল্ড নির্দেশনা আপনার প্রকল্পের সাথে থাকে — সেশনের পর সেশন।',
        learnMore: '',
      },
      {
        id: 'extend-workflow',
        title: 'আপনার ওয়ার্কফ্লো বাড়ান',
        description: 'প্লাগইন, স্কিল এবং নিজস্ব ক্ষমতা যোগ করুন।',
        detailTitle: 'প্রয়োজনে বাড়ান',
        detail: 'সামঞ্জস্যপূর্ণ প্লাগইন ও স্কিল ইনস্টল করুন, অথবা নিজের ক্ষমতা তৈরি করে যেকোনো এজেন্টে যুক্ত করুন।',
        learnMore: '',
      },
    ],
  },
  hi: {
    sectionLabel: 'विशेषताएँ',
    title: 'सरलता से शुरू करें। ज़रूरत पड़ने पर आगे बढ़ें।',
    subtitle: 'परिचित AI कोडिंग वर्कफ़्लो से शुरू करें, फिर ज़रूरत बढ़ने पर मॉडल, एजेंट, मेमोरी, प्लगइन्स और स्किल्स जोड़ते जाएँ।',
    items: [
      {
        id: 'start-coding',
        title: 'कोडिंग शुरू करें',
        description: 'प्रोजेक्ट खोलें और तुरंत काम शुरू करें।',
        detailTitle: 'डिफ़ॉल्ट सेटिंग्स से शुरू करें',
        detail: 'प्रोजेक्ट खोलें और तुरंत कोडिंग शुरू करें। उन्नत कॉन्फ़िगरेशन तब तक रास्ते से हटकर रहता है जब तक आपको ज़रूरत न पड़े।',
        learnMore: '/download/install.exe',
      },
      {
        id: 'choose-model',
        title: 'कोई भी मॉडल चुनें',
        description: 'अपने काम करने के तरीके को बदले बिना कभी भी मॉडल बदलें।',
        detailTitle: 'तुरंत बदलें',
        detail: 'डिफ़ॉल्ट मॉडल का उपयोग करें या काम बदलने पर मॉडल बदलें। एक क्लिक — कोई कॉन्फ़िगरेशन आवश्यक नहीं।',
        learnMore: '#models',
      },
      {
        id: 'right-model',
        title: 'हर काम के लिए सही मॉडल',
        description: 'योजना, कार्यान्वयन, शोध, परीक्षण और समीक्षा के लिए अलग-अलग मॉडल निर्धारित करें।',
        detailTitle: 'काम के अनुसार मॉडल कॉन्फ़िगर करें',
        detail: 'सब कुछ के लिए एक मॉडल उपयोग करें, या हर काम के लिए सबसे अच्छा मॉडल निर्धारित करें। उन्नत ऑर्केस्ट्रेशन पूरी तरह वैकल्पिक है।',
        learnMore: '#models',
      },
      {
        id: 'remember-project',
        title: 'अपना प्रोजेक्ट याद रखें',
        description: 'प्रोजेक्ट संदर्भ, निर्णय और प्राथमिकताओं को सत्रों के बीच संरक्षित रखें।',
        detailTitle: 'स्थायी संदर्भ',
        detail: 'आर्किटेक्चर निर्णय, कोडिंग परंपराएँ और बिल्ड निर्देश आपके प्रोजेक्ट के साथ बने रहते हैं — सत्र दर सत्र।',
        learnMore: '',
      },
      {
        id: 'extend-workflow',
        title: 'अपना वर्कफ़्लो बढ़ाएँ',
        description: 'प्लगइन्स, स्किल्स और कस्टम क्षमताएँ जोड़ें।',
        detailTitle: 'ज़रूरत पड़ने पर बढ़ाएँ',
        detail: 'संगत प्लगइन्स और स्किल्स इंस्टॉल करें, या अपनी खुद की क्षमताएँ बनाकर किसी भी एजेंट में जोड़ें।',
        learnMore: '',
      },
    ],
  },
  pt: {
    sectionLabel: 'Recursos',
    title: 'Comece simples. Vá além quando precisar.',
    subtitle:
      'Comece com um fluxo de codificação com IA familiar e adicione modelos, agentes, memória, plugins e skills conforme suas necessidades crescem.',
    items: [
      {
        id: 'start-coding',
        title: 'Comece a programar',
        description: 'Abra um projeto e comece a trabalhar imediatamente.',
        detailTitle: 'Comece com as configurações padrão',
        detail: 'Abra um projeto e comece a codificar imediatamente. A configuração avançada fica fora do caminho até você precisar dela.',
        learnMore: '/download/install.exe',
      },
      {
        id: 'choose-model',
        title: 'Escolha qualquer modelo',
        description: 'Alterne modelos a qualquer momento sem mudar sua forma de trabalhar.',
        detailTitle: 'Alterne instantaneamente',
        detail: 'Use o modelo padrão ou alterne sempre que a tarefa mudar. Um clique — nenhuma configuração necessária.',
        learnMore: '#models',
      },
      {
        id: 'right-model',
        title: 'O modelo certo para cada tarefa',
        description: 'Atribua modelos diferentes ao planejamento, à implementação, à pesquisa, aos testes e à revisão.',
        detailTitle: 'Configure modelos por tarefa',
        detail: 'Use um modelo para tudo ou atribua o melhor modelo a cada tarefa. A orquestração avançada é totalmente opcional.',
        learnMore: '#models',
      },
      {
        id: 'remember-project',
        title: 'Lembre-se do seu projeto',
        description: 'Preserve o contexto, as decisões e as preferências do projeto entre sessões.',
        detailTitle: 'Contexto que persiste',
        detail: 'Decisões de arquitetura, convenções de codificação e instruções de build permanecem com seu projeto — sessão após sessão.',
        learnMore: '',
      },
      {
        id: 'extend-workflow',
        title: 'Estenda seu fluxo de trabalho',
        description: 'Adicione plugins, skills e capacidades personalizadas.',
        detailTitle: 'Estenda quando precisar',
        detail: 'Instale plugins e skills compatíveis ou crie suas próprias capacidades e conecte-as a qualquer agente.',
        learnMore: '',
      },
    ],
  },
  ru: {
    sectionLabel: 'Возможности',
    title: 'Начните с простого. Расширяйтесь по мере необходимости.',
    subtitle:
      'Начните с привычного рабочего процесса ИИ-кодирования, а затем добавляйте модели, агентов, память, плагины и навыки по мере роста ваших потребностей.',
    items: [
      {
        id: 'start-coding',
        title: 'Начните кодировать',
        description: 'Откройте проект и сразу приступайте к работе.',
        detailTitle: 'Начните с настроек по умолчанию',
        detail: 'Откройте проект и сразу приступайте к кодированию. Расширенная конфигурация не мешает, пока она не нужна.',
        learnMore: '/download/install.exe',
      },
      {
        id: 'choose-model',
        title: 'Выбирайте любую модель',
        description: 'Меняйте модели в любой момент, не меняя привычный подход к работе.',
        detailTitle: 'Мгновенное переключение',
        detail: 'Используйте модель по умолчанию или переключайте её, когда меняется задача. Один клик — никакой настройки не требуется.',
        learnMore: '#models',
      },
      {
        id: 'right-model',
        title: 'Правильная модель для каждой задачи',
        description: 'Назначайте разные модели для планирования, реализации, исследований, тестирования и ревью.',
        detailTitle: 'Настройка моделей по задачам',
        detail: 'Используйте одну модель для всего или назначайте лучшую модель на каждую задачу. Расширенная оркестрация полностью необязательна.',
        learnMore: '#models',
      },
      {
        id: 'remember-project',
        title: 'Запоминайте свой проект',
        description: 'Сохраняйте контекст проекта, решения и предпочтения между сессиями.',
        detailTitle: 'Постоянный контекст',
        detail: 'Архитектурные решения, стиль кода и инструкции по сборке остаются с вашим проектом — сессия за сессией.',
        learnMore: '',
      },
      {
        id: 'extend-workflow',
        title: 'Расширяйте свой рабочий процесс',
        description: 'Добавляйте плагины, навыки и собственные возможности.',
        detailTitle: 'Расширяйте по мере необходимости',
        detail: 'Устанавливайте совместимые плагины и навыки или создавайте собственные возможности и подключайте их к любому агенту.',
        learnMore: '',
      },
    ],
  },
};

// ============================================================
// Models & Providers (third screen)
// ============================================================

export interface ProviderFeatureGroup {
  label: string;
  features: string[];
}

export interface ProvidersConfig {
  sectionLabel: string;
  title: string;
  subtitle: string;
  highlight: string;
  groups: ProviderFeatureGroup[];
}

export const providersConfig: Record<Lang, ProvidersConfig> = {
  en: {
    sectionLabel: 'MODELS & PROVIDERS',
    title: 'Use the models that fit your work.',
    subtitle:
      'Connect supported providers, add custom endpoints, and create as many model configurations as you need.',
    highlight: 'Stay independent of any single model or provider.',
    groups: [
      {
        label: 'CONNECT',
        features: ['Built-in and Custom Providers', 'Custom Models and Endpoints'],
      },
      {
        label: 'CONTROL',
        features: [
          'Per-Agent Model Selection',
          'Per-Task Model Selection',
          'Instant Model Switching',
          'Multi-Model Collaboration',
        ],
      },
    ],
  },
  zh: {
    sectionLabel: '模型与服务商',
    title: '为每项工作选择合适的模型。',
    subtitle: '接入内置或自定义模型服务商，添加自定义 API 端点，并按需创建多个模型配置。',
    highlight: '不受任何单一模型或服务商限制。',
    groups: [
      {
        label: '接入',
        features: ['内置与自定义模型服务商', '自定义模型与 API 端点'],
      },
      {
        label: '配置',
        features: ['为每个 Agent 指定模型', '为不同任务指定模型', '即时切换模型', '多模型协作'],
      },
    ],
  },
  es: {
    sectionLabel: 'Modelos y proveedores',
    title: 'Use los modelos que se ajustan a su trabajo.',
    subtitle:
      'Conecte proveedores compatibles, añada endpoints personalizados y cree tantas configuraciones de modelo como necesite.',
    highlight: 'Mantenga su independencia de cualquier modelo o proveedor único.',
    groups: [
      {
        label: 'Conectar',
        features: ['Proveedores integrados y personalizados', 'Modelos y endpoints personalizados'],
      },
      {
        label: 'Control',
        features: [
          'Selección de modelo por agente',
          'Selección de modelo por tarea',
          'Cambio instantáneo de modelo',
          'Colaboración entre modelos',
        ],
      },
    ],
  },
  fr: {
    sectionLabel: 'Modèles et fournisseurs',
    title: 'Utilisez les modèles adaptés à votre travail.',
    subtitle:
      'Connectez les fournisseurs pris en charge, ajoutez des endpoints personnalisés et créez autant de configurations de modèles que nécessaire.',
    highlight: 'Restez indépendant de tout modèle ou fournisseur unique.',
    groups: [
      {
        label: 'Connecter',
        features: ['Fournisseurs intégrés et personnalisés', 'Modèles et endpoints personnalisés'],
      },
      {
        label: 'Contrôler',
        features: [
          'Sélection du modèle par agent',
          'Sélection du modèle par tâche',
          'Changement de modèle instantané',
          'Collaboration multi-modèles',
        ],
      },
    ],
  },
  de: {
    sectionLabel: 'Modelle und Anbieter',
    title: 'Nutze die Modelle, die zu deiner Arbeit passen.',
    subtitle:
      'Verbinde unterstützte Anbieter, füge eigene Endpoints hinzu und erstelle so viele Modellkonfigurationen, wie du brauchst.',
    highlight: 'Bleib unabhängig von einem einzelnen Modell oder Anbieter.',
    groups: [
      {
        label: 'Verbinden',
        features: ['Integrierte und eigene Anbieter', 'Eigene Modelle und Endpoints'],
      },
      {
        label: 'Steuern',
        features: [
          'Modellauswahl pro Agent',
          'Modellauswahl pro Aufgabe',
          'Sofortiger Modellwechsel',
          'Multi-Modell-Kollaboration',
        ],
      },
    ],
  },
  ja: {
    sectionLabel: 'モデルとプロバイダー',
    title: '仕事に合ったモデルを。',
    subtitle: '対応プロバイダーに接続し、カスタムエンドポイントを追加して、必要な数だけモデル設定を作成できます。',
    highlight: '特定のモデルやプロバイダーに縛られません。',
    groups: [
      {
        label: '接続',
        features: ['内蔵・カスタムプロバイダー', 'カスタムモデルとエンドポイント'],
      },
      {
        label: '設定',
        features: [
          'エージェントごとのモデル選択',
          'タスクごとのモデル選択',
          'モデルの即時切り替え',
          '複数モデルの連携',
        ],
      },
    ],
  },
  ko: {
    sectionLabel: '모델 및 공급업체',
    title: '작업에 맞는 모델을 사용하세요.',
    subtitle: '지원되는 공급업체를 연결하고, 사용자 지정 엔드포인트를 추가하고, 필요한 만큼 모델 구성을 만드세요.',
    highlight: '특정 모델이나 공급업체에 얽매이지 마세요.',
    groups: [
      {
        label: '연결',
        features: ['기본 및 사용자 지정 공급업체', '사용자 지정 모델 및 엔드포인트'],
      },
      {
        label: '제어',
        features: [
          '에이전트별 모델 선택',
          '작업별 모델 선택',
          '즉시 모델 전환',
          '다중 모델 협업',
        ],
      },
    ],
  },
  bn: {
    sectionLabel: 'মডেল ও প্রোভাইডার',
    title: 'আপনার কাজের উপযোগী মডেল ব্যবহার করুন।',
    subtitle: 'সাপোর্টেড প্রোভাইডার সংযুক্ত করুন, কাস্টম এন্ডপয়েন্ট যোগ করুন এবং প্রয়োজনে যতগুলো মডেল কনফিগারেশন তৈরি করুন।',
    highlight: 'কোনো একক মডেল বা প্রোভাইডারের উপর নির্ভরশীল থাকবেন না।',
    groups: [
      {
        label: 'সংযোগ',
        features: ['বিল্ট-ইন ও কাস্টম প্রোভাইডার', 'কাস্টম মডেল ও এন্ডপয়েন্ট'],
      },
      {
        label: 'নিয়ন্ত্রণ',
        features: [
          'প্রতি এজেন্টে মডেল নির্বাচন',
          'প্রতি কাজে মডেল নির্বাচন',
          'তাৎক্ষণিক মডেল পরিবর্তন',
          'মাল্টি-মডেল সহযোগিতা',
        ],
      },
    ],
  },
  hi: {
    sectionLabel: 'मॉडल और प्रदाता',
    title: 'अपने काम के अनुरूप मॉडल का उपयोग करें।',
    subtitle: 'समर्थित प्रदाताओं को कनेक्ट करें, कस्टम एंडपॉइंट जोड़ें और जितनी चाहें उतनी मॉडल कॉन्फ़िगरेशन बनाएँ।',
    highlight: 'किसी एक मॉडल या प्रदाता पर निर्भर न रहें।',
    groups: [
      {
        label: 'कनेक्ट करें',
        features: ['बिल्ट-इन और कस्टम प्रदाता', 'कस्टम मॉडल और एंडपॉइंट'],
      },
      {
        label: 'नियंत्रण',
        features: [
          'एजेंट-वार मॉडल चयन',
          'कार्य-वार मॉडल चयन',
          'तत्काल मॉडल स्विचिंग',
          'बहु-मॉडल सहयोग',
        ],
      },
    ],
  },
  pt: {
    sectionLabel: 'Modelos e provedores',
    title: 'Use os modelos que se adequam ao seu trabalho.',
    subtitle:
      'Conecte provedores compatíveis, adicione endpoints personalizados e crie quantas configurações de modelo você precisar.',
    highlight: 'Mantenha-se independente de um único modelo ou provedor.',
    groups: [
      {
        label: 'Conectar',
        features: ['Provedores integrados e personalizados', 'Modelos e endpoints personalizados'],
      },
      {
        label: 'Controle',
        features: [
          'Seleção de modelo por agente',
          'Seleção de modelo por tarefa',
          'Alternância instantânea de modelo',
          'Colaboração multi-modelo',
        ],
      },
    ],
  },
  ru: {
    sectionLabel: 'Модели и провайдеры',
    title: 'Используйте модели, подходящие для вашей работы.',
    subtitle:
      'Подключайте поддерживаемых провайдеров, добавляйте собственные эндпоинты и создавайте столько конфигураций моделей, сколько нужно.',
    highlight: 'Оставайтесь независимыми от какой-либо одной модели или провайдера.',
    groups: [
      {
        label: 'Подключение',
        features: ['Встроенные и собственные провайдеры', 'Собственные модели и эндпоинты'],
      },
      {
        label: 'Управление',
        features: [
          'Выбор модели для каждого агента',
          'Выбор модели для каждой задачи',
          'Мгновенное переключение моделей',
          'Совместная работа нескольких моделей',
        ],
      },
    ],
  },
};

// ============================================================
// Extensions (fourth screen)
// ============================================================

export interface MarketplaceEntry {
  title: string;
  description: string;
}

export interface MarketplaceConfig {
  sectionLabel: string;
  title: string;
  description: string;
  entries: MarketplaceEntry[];
}

export const marketplaceConfig: Record<Lang, MarketplaceConfig> = {
  en: {
    sectionLabel: 'EXTENSIONS',
    title: 'Extend Velloc your way.',
    description:
      'Use Claude Code–compatible plugins and skills, discover new capabilities, or create your own.',
    entries: [
      {
        title: 'Plugin Marketplace',
        description:
          'Discover and install compatible plugins for tools, integrations, and workflow automation.',
      },
      {
        title: 'Skill Marketplace',
        description:
          'Browse reusable skills, build your own, and make them available to any agent.',
      },
    ],
  },
  zh: {
    sectionLabel: '扩展',
    title: '按你的方式扩展 Velloc。',
    description: '使用兼容 Claude Code 的插件和技能，发现更多扩展能力，或创建属于你自己的插件和技能。',
    entries: [
      {
        title: '插件市场',
        description: '发现并安装兼容插件，用于工具增强、服务集成和工作流自动化。',
      },
      {
        title: '技能市场',
        description: '浏览可复用的技能，创建自己的技能，并将其应用于任意 Agent。',
      },
    ],
  },
  es: {
    sectionLabel: 'Extensiones',
    title: 'Amplíe Velloc a su manera.',
    description:
      'Use plugins y habilidades compatibles con Claude Code, descubra nuevas capacidades o cree las suyas propias.',
    entries: [
      {
        title: 'Mercado de plugins',
        description:
          'Descubra e instale plugins compatibles para herramientas, integraciones y automatización de flujos de trabajo.',
      },
      {
        title: 'Mercado de habilidades',
        description:
          'Explore habilidades reutilizables, cree las suyas y póngalas a disposición de cualquier agente.',
      },
    ],
  },
  fr: {
    sectionLabel: 'Extensions',
    title: 'Étendez Velloc à votre façon.',
    description:
      'Utilisez des plugins et compétences compatibles avec Claude Code, découvrez de nouvelles capacités ou créez les vôtres.',
    entries: [
      {
        title: 'Marché de plugins',
        description:
          'Découvrez et installez des plugins compatibles pour les outils, les intégrations et l’automatisation des flux de travail.',
      },
      {
        title: 'Marché de compétences',
        description:
          'Parcourez des compétences réutilisables, créez les vôtres et mettez-les à disposition de n’importe quel agent.',
      },
    ],
  },
  de: {
    sectionLabel: 'Erweiterungen',
    title: 'Erweitere Velloc auf deine Art.',
    description:
      'Nutze Claude Code-kompatible Plugins und Skills, entdecke neue Fähigkeiten oder erstelle eigene.',
    entries: [
      {
        title: 'Plugin-Marktplatz',
        description:
          'Entdecke und installiere kompatible Plugins für Tools, Integrationen und Workflow-Automatisierung.',
      },
      {
        title: 'Skill-Marktplatz',
        description:
          'Stöbere durch wiederverwendbare Skills, erstelle eigene und stelle sie jedem Agent zur Verfügung.',
      },
    ],
  },
  ja: {
    sectionLabel: '拡張機能',
    title: 'Velloc を自由に拡張。',
    description: 'Claude Code 互換のプラグインとスキルを使い、新しい機能を見つけるか、自分で作れます。',
    entries: [
      {
        title: 'プラグインマーケットプレイス',
        description: 'ツール、統合、ワークフロー自動化に対応した互換プラグインを探してインストールできます。',
      },
      {
        title: 'スキルマーケットプレイス',
        description: '再利用可能なスキルを閲覧し、自分で作って任意のエージェントで使えるようにできます。',
      },
    ],
  },
  ko: {
    sectionLabel: '확장 기능',
    title: 'Velloc를 원하는 대로 확장하세요.',
    description: 'Claude Code 호환 플러그인과 스킬을 사용하고, 새로운 기능을 발견하거나 직접 만드세요.',
    entries: [
      {
        title: '플러그인 마켓플레이스',
        description: '도구, 통합, 워크플로 자동화를 위한 호환 플러그인을 발견하고 설치하세요.',
      },
      {
        title: '스킬 마켓플레이스',
        description: '재사용 가능한 스킬을 둘러보고, 직접 만들고, 어떤 에이전트에서든 사용할 수 있게 하세요.',
      },
    ],
  },
  bn: {
    sectionLabel: 'এক্সটেনশন',
    title: 'আপনার মতো করে Velloc সম্প্রসারিত করুন।',
    description: 'Claude Code-সামঞ্জস্যপূর্ণ প্লাগইন এবং স্কিল ব্যবহার করুন, নতুন ক্ষমতা আবিষ্কার করুন বা নিজের তৈরি করুন।',
    entries: [
      {
        title: 'প্লাগইন মার্কেটপ্লেস',
        description: 'টুল, ইন্টিগ্রেশন এবং ওয়ার্কফ্লো অটোমেশনের জন্য সামঞ্জস্যপূর্ণ প্লাগইন আবিষ্কার ও ইনস্টল করুন।',
      },
      {
        title: 'স্কিল মার্কেটপ্লেস',
        description: 'পুনর্ব্যবহারযোগ্য স্কিল দেখুন, নিজের তৈরি করুন এবং যেকোনো এজেন্টের জন্য উপলব্ধ করুন।',
      },
    ],
  },
  hi: {
    sectionLabel: 'एक्सटेंशन',
    title: 'अपने तरीके से Velloc को विस्तारित करें।',
    description: 'Claude Code-संगत प्लगइन्स और स्किल्स का उपयोग करें, नई क्षमताएँ खोजें या अपनी खुद की बनाएँ।',
    entries: [
      {
        title: 'प्लगइन मार्केटप्लेस',
        description: 'टूल्स, इंटीग्रेशन और वर्कफ़्लो ऑटोमेशन के लिए संगत प्लगइन्स खोजें और इंस्टॉल करें।',
      },
      {
        title: 'स्किल मार्केटप्लेस',
        description: 'पुनः उपयोग योग्य स्किल्स ब्राउज़ करें, अपनी खुद की बनाएँ और उन्हें किसी भी एजेंट के लिए उपलब्ध कराएँ।',
      },
    ],
  },
  pt: {
    sectionLabel: 'Extensões',
    title: 'Estenda o Velloc do seu jeito.',
    description:
      'Use plugins e skills compatíveis com o Claude Code, descubra novas capacidades ou crie as suas próprias.',
    entries: [
      {
        title: 'Marketplace de plugins',
        description:
          'Descubra e instale plugins compatíveis para ferramentas, integrações e automação de fluxos de trabalho.',
      },
      {
        title: 'Marketplace de skills',
        description:
          'Navegue por skills reutilizáveis, crie as suas próprias e disponibilize-as para qualquer agente.',
      },
    ],
  },
  ru: {
    sectionLabel: 'Расширения',
    title: 'Расширяйте Velloc по-своему.',
    description:
      'Используйте плагины и навыки, совместимые с Claude Code, открывайте новые возможности или создавайте собственные.',
    entries: [
      {
        title: 'Маркетплейс плагинов',
        description:
          'Открывайте и устанавливайте совместимые плагины для инструментов, интеграций и автоматизации рабочих процессов.',
      },
      {
        title: 'Маркетплейс навыков',
        description:
          'Просматривайте переиспользуемые навыки, создавайте собственные и делайте их доступными для любого агента.',
      },
    ],
  },
};

// ============================================================
// Footer
// ============================================================

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterLinkColumn {
  title: string;
  links: FooterLink[];
}

export interface FooterConfig {
  heading: string;
  subtitle: string;
  primaryCta: { text: string; href: string };
  columns: FooterLinkColumn[];
  disclaimer: string;
  copyright: string;
}

export const footerConfig: Record<Lang, FooterConfig> = {
  en: {
    heading: 'Start simple. Build your way.',
    subtitle: 'Use Velloc out of the box, then customize only what your project needs.',
    primaryCta: { text: 'Download Velloc Code', href: '/download/install.exe' },
    columns: [
      {
        title: 'Product',
        links: [
          { label: 'Features', href: '#features' },
          { label: 'Models', href: '#models' },
          { label: 'Extensions', href: '#marketplace' },
          { label: 'Download', href: '/download/install.exe' },
        ],
      },
      {
        title: 'Resources',
        links: [
          {
            label: 'Release Notes',
            href: 'https://github.com/AgentXLab/velloc-bootstrap/releases',
            external: true,
          },
          { label: 'GitHub', href: 'https://github.com/AgentXLab/velloc-bootstrap', external: true },
        ],
      },
    ],
    disclaimer:
      'Velloc Code is an independent product and is not affiliated with Anthropic, OpenAI, Google, or other model providers.',
    copyright: '© 2026 Velloc Code. All rights reserved.',
  },
  zh: {
    heading: '轻松上手，自由构建。',
    subtitle: 'Velloc 开箱即用，也可根据项目需要逐步定制。',
    primaryCta: { text: '下载 Velloc Code', href: '/download/install.exe' },
    columns: [
      {
        title: '产品',
        links: [
          { label: '功能', href: '#features' },
          { label: '模型', href: '#models' },
          { label: '扩展', href: '#marketplace' },
          { label: '下载', href: '/download/install.exe' },
        ],
      },
      {
        title: '资源',
        links: [
          {
            label: '更新日志',
            href: 'https://github.com/AgentXLab/velloc-bootstrap/releases',
            external: true,
          },
          { label: 'GitHub', href: 'https://github.com/AgentXLab/velloc-bootstrap', external: true },
        ],
      },
    ],
    disclaimer:
      'Velloc Code 是一款独立产品，与 Anthropic、OpenAI、Google 及其他模型服务商不存在隶属或官方关联关系。',
    copyright: '© 2026 Velloc Code. 保留所有权利。',
  },
  es: {
    heading: 'Empiece con lo esencial. Construya a su manera.',
    subtitle: 'Use Velloc tal como viene y personalice solo lo que su proyecto necesite.',
    primaryCta: { text: 'Descargar Velloc Code', href: '/download/install.exe' },
    columns: [
      {
        title: 'Producto',
        links: [
          { label: 'Características', href: '#features' },
          { label: 'Modelos', href: '#models' },
          { label: 'Extensiones', href: '#marketplace' },
          { label: 'Descargar', href: '/download/install.exe' },
        ],
      },
      {
        title: 'Recursos',
        links: [
          {
            label: 'Notas de la versión',
            href: 'https://github.com/AgentXLab/velloc-bootstrap/releases',
            external: true,
          },
          { label: 'GitHub', href: 'https://github.com/AgentXLab/velloc-bootstrap', external: true },
        ],
      },
    ],
    disclaimer:
      'Velloc Code es un producto independiente y no está afiliado a Anthropic, OpenAI, Google ni a otros proveedores de modelos.',
    copyright: '© 2026 Velloc Code. Todos los derechos reservados.',
  },
  fr: {
    heading: 'Commencez simplement. Construisez à votre façon.',
    subtitle: 'Utilisez Velloc tel quel, puis personnalisez uniquement ce dont votre projet a besoin.',
    primaryCta: { text: 'Télécharger Velloc Code', href: '/download/install.exe' },
    columns: [
      {
        title: 'Produit',
        links: [
          { label: 'Fonctionnalités', href: '#features' },
          { label: 'Modèles', href: '#models' },
          { label: 'Extensions', href: '#marketplace' },
          { label: 'Télécharger', href: '/download/install.exe' },
        ],
      },
      {
        title: 'Ressources',
        links: [
          {
            label: 'Notes de version',
            href: 'https://github.com/AgentXLab/velloc-bootstrap/releases',
            external: true,
          },
          { label: 'GitHub', href: 'https://github.com/AgentXLab/velloc-bootstrap', external: true },
        ],
      },
    ],
    disclaimer:
      'Velloc Code est un produit indépendant et n’est affilié ni à Anthropic, OpenAI, Google, ni à aucun autre fournisseur de modèles.',
    copyright: '© 2026 Velloc Code. Tous droits réservés.',
  },
  de: {
    heading: 'Einfach starten. Auf deine Art bauen.',
    subtitle: 'Nutze Velloc direkt nach der Installation und passe nur an, was dein Projekt braucht.',
    primaryCta: { text: 'Velloc Code herunterladen', href: '/download/install.exe' },
    columns: [
      {
        title: 'Produkt',
        links: [
          { label: 'Funktionen', href: '#features' },
          { label: 'Modelle', href: '#models' },
          { label: 'Erweiterungen', href: '#marketplace' },
          { label: 'Herunterladen', href: '/download/install.exe' },
        ],
      },
      {
        title: 'Ressourcen',
        links: [
          {
            label: 'Versionshinweise',
            href: 'https://github.com/AgentXLab/velloc-bootstrap/releases',
            external: true,
          },
          { label: 'GitHub', href: 'https://github.com/AgentXLab/velloc-bootstrap', external: true },
        ],
      },
    ],
    disclaimer:
      'Velloc Code ist ein unabhängiges Produkt und steht weder mit Anthropic, OpenAI, Google noch mit anderen Modellanbietern in Verbindung.',
    copyright: '© 2026 Velloc Code. Alle Rechte vorbehalten.',
  },
  ja: {
    heading: 'シンプルに始めて、自由に構築。',
    subtitle: 'Velloc をそのまま使って、プロジェクトに必要なものだけカスタマイズしましょう。',
    primaryCta: { text: 'Velloc Code をダウンロード', href: '/download/install.exe' },
    columns: [
      {
        title: '製品',
        links: [
          { label: '機能', href: '#features' },
          { label: 'モデル', href: '#models' },
          { label: '拡張機能', href: '#marketplace' },
          { label: 'ダウンロード', href: '/download/install.exe' },
        ],
      },
      {
        title: 'リソース',
        links: [
          {
            label: 'リリースノート',
            href: 'https://github.com/AgentXLab/velloc-bootstrap/releases',
            external: true,
          },
          { label: 'GitHub', href: 'https://github.com/AgentXLab/velloc-bootstrap', external: true },
        ],
      },
    ],
    disclaimer:
      'Velloc Code は独立した製品であり、Anthropic、OpenAI、Google その他のモデルプロバイダーとは提携していません。',
    copyright: '© 2026 Velloc Code. 無断複写・転載を禁じます。',
  },
  ko: {
    heading: '간단하게 시작하고, 자신만의 방식으로 구축하세요.',
    subtitle: 'Velloc를 설치 즉시 사용하고, 프로젝트에 필요한 부분만 맞춤 설정하세요.',
    primaryCta: { text: 'Velloc Code 다운로드', href: '/download/install.exe' },
    columns: [
      {
        title: '제품',
        links: [
          { label: '기능', href: '#features' },
          { label: '모델', href: '#models' },
          { label: '확장 기능', href: '#marketplace' },
          { label: '다운로드', href: '/download/install.exe' },
        ],
      },
      {
        title: '리소스',
        links: [
          {
            label: '릴리스 노트',
            href: 'https://github.com/AgentXLab/velloc-bootstrap/releases',
            external: true,
          },
          { label: 'GitHub', href: 'https://github.com/AgentXLab/velloc-bootstrap', external: true },
        ],
      },
    ],
    disclaimer:
      'Velloc Code는 독립적인 제품으로, Anthropic, OpenAI, Google 및 기타 모델 공급업체와 제휴 관계가 없습니다.',
    copyright: '© 2026 Velloc Code. All rights reserved.',
  },
  bn: {
    heading: 'সহজে শুরু করুন। আপনার মতো করে গড়ুন।',
    subtitle: 'Velloc সরাসরি ব্যবহার করুন, তারপর আপনার প্রকল্পের প্রয়োজন অনুযায়ী কাস্টমাইজ করুন।',
    primaryCta: { text: 'Velloc Code ডাউনলোড করুন', href: '/download/install.exe' },
    columns: [
      {
        title: 'পণ্য',
        links: [
          { label: 'বৈশিষ্ট্য', href: '#features' },
          { label: 'মডেল', href: '#models' },
          { label: 'এক্সটেনশন', href: '#marketplace' },
          { label: 'ডাউনলোড', href: '/download/install.exe' },
        ],
      },
      {
        title: 'রিসোর্স',
        links: [
          {
            label: 'রিলিজ নোট',
            href: 'https://github.com/AgentXLab/velloc-bootstrap/releases',
            external: true,
          },
          { label: 'GitHub', href: 'https://github.com/AgentXLab/velloc-bootstrap', external: true },
        ],
      },
    ],
    disclaimer:
      'Velloc Code একটি স্বাধীন পণ্য এবং এটি Anthropic, OpenAI, Google বা অন্যান্য মডেল প্রোভাইডারের সাথে অনুমোদিত নয়।',
    copyright: '© 2026 Velloc Code. সর্বস্বত্ব সংরক্ষিত।',
  },
  hi: {
    heading: 'सरलता से शुरू करें। अपने तरीके से बनाएँ।',
    subtitle: 'Velloc का उपयोग ऐसे ही करें, फिर केवल वही कस्टमाइज़ करें जो आपके प्रोजेक्ट को चाहिए।',
    primaryCta: { text: 'Velloc Code डाउनलोड करें', href: '/download/install.exe' },
    columns: [
      {
        title: 'उत्पाद',
        links: [
          { label: 'विशेषताएँ', href: '#features' },
          { label: 'मॉडल', href: '#models' },
          { label: 'एक्सटेंशन', href: '#marketplace' },
          { label: 'डाउनलोड', href: '/download/install.exe' },
        ],
      },
      {
        title: 'संसाधन',
        links: [
          {
            label: 'रिलीज़ नोट्स',
            href: 'https://github.com/AgentXLab/velloc-bootstrap/releases',
            external: true,
          },
          { label: 'GitHub', href: 'https://github.com/AgentXLab/velloc-bootstrap', external: true },
        ],
      },
    ],
    disclaimer:
      'Velloc Code एक स्वतंत्र उत्पाद है और Anthropic, OpenAI, Google या अन्य मॉडल प्रदाताओं से संबद्ध नहीं है।',
    copyright: '© 2026 Velloc Code. सर्वाधिकार सुरक्षित।',
  },
  pt: {
    heading: 'Comece simples. Construa do seu jeito.',
    subtitle: 'Use o Velloc pronto para uso e personalize apenas o que o seu projeto precisa.',
    primaryCta: { text: 'Baixar Velloc Code', href: '/download/install.exe' },
    columns: [
      {
        title: 'Produto',
        links: [
          { label: 'Recursos', href: '#features' },
          { label: 'Modelos', href: '#models' },
          { label: 'Extensões', href: '#marketplace' },
          { label: 'Baixar', href: '/download/install.exe' },
        ],
      },
      {
        title: 'Recursos',
        links: [
          {
            label: 'Notas de versão',
            href: 'https://github.com/AgentXLab/velloc-bootstrap/releases',
            external: true,
          },
          { label: 'GitHub', href: 'https://github.com/AgentXLab/velloc-bootstrap', external: true },
        ],
      },
    ],
    disclaimer:
      'O Velloc Code é um produto independente e não é afiliado à Anthropic, OpenAI, Google ou outros provedores de modelos.',
    copyright: '© 2026 Velloc Code. Todos os direitos reservados.',
  },
  ru: {
    heading: 'Начните с простого. Стройте по-своему.',
    subtitle: 'Используйте Velloc сразу после установки, а затем настраивайте только то, что нужно вашему проекту.',
    primaryCta: { text: 'Скачать Velloc Code', href: '/download/install.exe' },
    columns: [
      {
        title: 'Продукт',
        links: [
          { label: 'Возможности', href: '#features' },
          { label: 'Модели', href: '#models' },
          { label: 'Расширения', href: '#marketplace' },
          { label: 'Скачать', href: '/download/install.exe' },
        ],
      },
      {
        title: 'Ресурсы',
        links: [
          {
            label: 'Примечания к выпуску',
            href: 'https://github.com/AgentXLab/velloc-bootstrap/releases',
            external: true,
          },
          { label: 'GitHub', href: 'https://github.com/AgentXLab/velloc-bootstrap', external: true },
        ],
      },
    ],
    disclaimer:
      'Velloc Code — независимый продукт и не связан с Anthropic, OpenAI, Google или другими поставщиками моделей.',
    copyright: '© 2026 Velloc Code. Все права защищены.',
  },
};

// ============================================================
// Site-wide strings (document title, etc.)
// ============================================================

export interface SiteStrings {
  title: string;
}

export const siteStrings: Record<Lang, SiteStrings> = {
  en: { title: 'Velloc Code — AI Coding Agent for Any Model' },
  zh: { title: 'Velloc Code — 适用于任意模型的 AI 编程 Agent' },
  es: { title: 'Velloc Code — Agente de codificación con IA para cualquier modelo' },
  fr: { title: 'Velloc Code — Agent de codage IA pour n’importe quel modèle' },
  de: { title: 'Velloc Code — KI-Code-Agent für jedes Modell' },
  ja: { title: 'Velloc Code — あらゆるモデルに対応する AI コーディングエージェント' },
  ko: { title: 'Velloc Code — 모든 모델을 위한 AI 코딩 에이전트' },
  bn: { title: 'Velloc Code — যেকোনো মডেলের জন্য AI কোডিং এজেন্ট' },
  hi: { title: 'Velloc Code — किसी भी मॉडल के लिए AI कोडिंग एजेंट' },
  pt: { title: 'Velloc Code — Agente de codificação com IA para qualquer modelo' },
  ru: { title: 'Velloc Code — ИИ-агент для написания кода с любой моделью' },
};
