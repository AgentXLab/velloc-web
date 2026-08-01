// ============================================================
// Site Configuration
// ============================================================

export interface SiteConfig {
  language: string;
  brandName: string;
}

export const siteConfig: SiteConfig = {
  language: "en",
  brandName: "Velloc Code",
};

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
}

export const navigationConfig: NavigationConfig = {
  links: [
    { label: "Capabilities", href: "#curriculum" },
    { label: "Architecture", href: "#cinematic" },
    { label: "Research", href: "#alumni" },
    { label: "Contact", href: "#footer" },
  ],
  ctaText: "Download",
};

// ============================================================
// Hero
// ============================================================

export interface HeroConfig {
  title: string;
  subtitleLine1: string;
  subtitleLine2: string;
  ctaText: string;
}

export const heroConfig: HeroConfig = {
  title: "Velloc Code",
  subtitleLine1: "The agentic programming environment that understands your entire codebase",
  subtitleLine2: "and ships software at the speed of thought.",
  ctaText: "Start Building Free",
};

// ============================================================
// Capabilities (Curriculum section)
// ============================================================

export interface CapabilityItem {
  title: string;
  slug: string;
  description: string;
  image: string;
}

export interface CapabilitiesConfig {
  sectionLabel: string;
  items: CapabilityItem[];
}

export const capabilitiesConfig: CapabilitiesConfig = {
  sectionLabel: "CAPABILITIES",
  items: [
    {
      title: "Agentic Editing",
      slug: "agentic-editing",
      description:
        "Describe the change in plain language. Velloc plans the diff, rewrites across files, runs your tests, and iterates until the build is green — a full engineering loop in a single prompt.",
      image: "/images/cap-agentic-editing.png",
    },
    {
      title: "Codebase Intelligence",
      slug: "codebase-intelligence",
      description:
        "A semantic index of every symbol, dependency, and convention in your repository. Velloc retrieves precisely the context that matters, so answers stay accurate at any scale.",
      image: "/images/cap-codebase-intelligence.png",
    },
    {
      title: "Flow Autocomplete",
      slug: "flow-autocomplete",
      description:
        "Next-edit prediction that follows your intent, not just your cursor. Velloc anticipates refactors, renames, and multi-line changes before you type them, keeping you in flow.",
      image: "/images/cap-flow-autocomplete.png",
    },
    {
      title: "Terminal Agent",
      slug: "terminal-agent",
      description:
        "An autonomous operator for your shell. It installs dependencies, runs migrations, reads stack traces, and fixes failing pipelines — with every command visible and reversible.",
      image: "/images/cap-terminal-agent.png",
    },
  ],
};

// ============================================================
// Capability Detail (sub-pages)
// ============================================================

export interface CapabilityDetailData {
  title: string;
  subtitle: string;
  paragraphs: string[];
}

export interface CapabilityDetailConfig {
  sectionLabel: string;
  backLinkText: string;
  prevLabel: string;
  nextLabel: string;
  notFoundText: string;
  capabilities: Record<string, CapabilityDetailData>;
}

export const capabilityDetailConfig: CapabilityDetailConfig = {
  sectionLabel: "CAPABILITY",
  backLinkText: "Back to Overview",
  prevLabel: "Previous",
  nextLabel: "Next",
  notFoundText: "This capability does not exist.",
  capabilities: {
    "agentic-editing": {
      title: "Agentic Editing",
      subtitle: "From intent to a green build, autonomously.",
      paragraphs: [
        "Velloc treats a prompt as an engineering task, not a text completion. When you describe a change — add OAuth to the API, migrate the ORM, extract this component — the agent decomposes it into an explicit plan: which files to touch, which interfaces to preserve, which tests define done. You review the plan before a single line is written, then watch the diff unfold across the workspace in real time.",
        "Execution is a closed loop. After each edit the agent runs your formatter, type checker, and test suite, reads the failures, and revises its own work. It does not stop at plausible-looking code; it stops at code that compiles, passes, and matches the conventions it learned from your repository. Every step is checkpointed, so you can rewind to any point in the trajectory.",
        "Control stays with you. Edits are staged as reviewable changes with inline rationale, and the agent explains why it chose one approach over another — trade-offs, alternatives considered, risks flagged. Teams report that multi-file features that once took days now arrive as a single reviewable pull request in under an hour.",
      ],
    },
    "codebase-intelligence": {
      title: "Codebase Intelligence",
      subtitle: "Total recall for repositories of any size.",
      paragraphs: [
        "Most AI tools see a few open tabs. Velloc sees everything. A continuously updated semantic index maps every symbol, call graph, dependency, and architectural boundary in your codebase — millions of lines across monorepos included. Retrieval is hybrid: embeddings for intent, symbol graphs for precision, and recency signals for what your team is actively changing.",
        "The result is answers grounded in your actual code, not generic training data. Ask how authentication flows through the system and Velloc traces it across services with citations to exact files and lines. Ask it to follow your conventions and it cites the internal patterns it inferred — your error-handling idiom, your naming style, your testing culture.",
        "The index respects boundaries by design. It runs incrementally on your machine or in your VPC, never sending source to shared infrastructure. Permission filters mirror your access controls, so the agent only ever reasons over code you are allowed to see.",
      ],
    },
    "flow-autocomplete": {
      title: "Flow Autocomplete",
      subtitle: "It predicts your next edit, not your next word.",
      paragraphs: [
        "Traditional autocomplete finishes lines. Flow Autocomplete finishes thoughts. Trained on edit sequences rather than raw text, it models what engineers actually do next: propagate a rename through its call sites, add the matching test after the function, update the interface after the implementation. One keystroke accepts a change that spans ten locations.",
        "The predictor runs a speculative decoding stack tuned for latency, landing suggestions in under 80 milliseconds — fast enough to feel like an extension of your hands. It stays quiet when uncertain rather than interrupting with noise, and its acceptance-rate telemetry is visible so you can tune aggressiveness per project.",
        "Because it shares the codebase-wide index with the agent, its suggestions respect your types, your imports, and your internal libraries. It will not invent an API that does not exist in your repository — the most common way AI assistants break flow.",
      ],
    },
    "terminal-agent": {
      title: "Terminal Agent",
      subtitle: "An autonomous operator for your shell.",
      paragraphs: [
        "The Terminal Agent turns your command line into a collaborator. Point it at a failing CI log, a broken migration, or an unfamiliar toolchain and it works the problem the way a senior engineer would: reproduce, hypothesize, inspect, fix, verify. It reads man pages and stack traces so you do not have to.",
        "Safety is structural, not promised. Destructive commands — anything touching state outside the workspace — require explicit approval, shown with a plain-language explanation of what will happen and how to undo it. Every command executes in an observable session with a full audit trail, and sandboxed execution is available for untrusted operations.",
        "It learns your environment over time: your package manager, your deployment targets, your preferred flags. Routine operations compress into single intents — ship this, roll that back, reproduce the staging bug — while the agent handles the ceremony in between.",
      ],
    },
  },
};

// ============================================================
// Architecture (CinematicVision section)
// ============================================================

export interface ArchitectureConfig {
  sectionLabel: string;
  videoPath: string;
  title: string;
  description: string;
}

export const architectureConfig: ArchitectureConfig = {
  sectionLabel: "ARCHITECTURE",
  videoPath: "",
  title: "Local-first, model-agnostic, built for latency.",
  description:
    "Velloc runs a hybrid inference fabric: a fast local model handles autocomplete and retrieval on-device, while frontier models in your VPC power deep reasoning. Routing is automatic, context never leaves your trust boundary, and every component — index, planner, executor — is observable and swappable.",
};

// ============================================================
// Research (AlumniArchives section)
// ============================================================

export interface ResearchProject {
  title: string;
  year: string;
  discipline: string;
  image: string;
}

export interface ResearchConfig {
  sectionLabel: string;
  projects: ResearchProject[];
}

export const researchConfig: ResearchConfig = {
  sectionLabel: "RESEARCH & RELEASES",
  projects: [
    {
      title: "Velloc-1 Reasoning Core",
      year: "2026",
      discipline: "Agent Planning",
      image: "/images/res-reasoning-core.png",
    },
    {
      title: "SWE-bench Verified 78%",
      year: "2026",
      discipline: "Evaluation",
      image: "/images/res-swebench.png",
    },
    {
      title: "Context Engine v2",
      year: "2026",
      discipline: "Retrieval Systems",
      image: "/images/res-context-engine.png",
    },
    {
      title: "Speculative Edit Decoding",
      year: "2025",
      discipline: "Inference",
      image: "/images/res-speculative.png",
    },
    {
      title: "Local-First Inference",
      year: "2025",
      discipline: "On-Device Models",
      image: "/images/res-local-inference.png",
    },
    {
      title: "Multi-File Diff Planning",
      year: "2025",
      discipline: "Code Generation",
      image: "/images/res-diff-planning.png",
    },
    {
      title: "Agent Eval Harness",
      year: "2025",
      discipline: "Benchmarking",
      image: "/images/res-eval-harness.png",
    },
    {
      title: "Secure Sandbox Runtime",
      year: "2024",
      discipline: "Execution Safety",
      image: "/images/res-sandbox.png",
    },
  ],
};

// ============================================================
// Footer
// ============================================================

export interface FooterLinkColumn {
  title: string;
  links: string[];
}

export interface FooterBottomLink {
  label: string;
  href: string;
}

export interface FooterConfig {
  heading: string;
  columns: FooterLinkColumn[];
  copyright: string;
  bottomLinks: FooterBottomLink[];
}

export const footerConfig: FooterConfig = {
  heading: "Code at the speed of thought.",
  columns: [
    {
      title: "Product",
      links: ["Download", "Pricing", "Changelog", "Documentation", "Enterprise"],
    },
    {
      title: "Company",
      links: ["Blog", "Careers", "Security", "Contact"],
    },
  ],
  copyright: "© 2026 Velloc Code, Inc. All rights reserved.",
  bottomLinks: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};
