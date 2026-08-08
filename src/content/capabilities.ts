import type { Lang } from '../i18n';

// ============================================================
// Capability Detail (/capability/:slug) + mock product UI text
//
// English is the source; other locales translate the English
// value. See src/config.ts header for the per-locale register.
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

export const capabilityDetailConfig: Record<Lang, CapabilityDetailConfig> = {
  en: {
    sectionLabel: 'CAPABILITY',
    backLinkText: 'Back to Overview',
    prevLabel: 'Previous',
    nextLabel: 'Next',
    notFoundText: 'This capability does not exist.',
    capabilities: {
      agents: {
        title: 'Customize every agent',
        subtitle: 'Your team of agents, shaped your way.',
        paragraphs: [
          'Velloc lets you create as many agents as your workflow needs — planners, coders, researchers, reviewers — and give each one a role, a model, instructions, tools, skills, permissions, and memory access.',
          'Agents are first-class configuration. Every agent can run on a different model or provider, and your lead agent can delegate subtasks to specialized agents powered by other models, orchestrating them as one AI coding team.',
        ],
      },
      models: {
        title: 'The right model for every task',
        subtitle: 'One model, many models — you decide.',
        paragraphs: [
          'Use a single model for everything, switch models instantly, or assign different models and providers to different agents and even individual tasks.',
          'Your lead agent can delegate subtasks to specialized agents powered by other models. Do not just switch models — orchestrate them.',
        ],
      },
      memory: {
        title: 'Memory that stays with your project',
        subtitle: 'Context that persists across sessions.',
        paragraphs: [
          'Preserve architecture decisions, coding conventions, project instructions, workflows, and important context across sessions.',
          'Memory is more than chat history — it carries your build and test requirements, known issues, and historical context into every future session, so the workspace remembers how you work.',
        ],
      },
    },
  },
  zh: {
    sectionLabel: '能力',
    backLinkText: '返回概览',
    prevLabel: '上一篇',
    nextLabel: '下一篇',
    notFoundText: '该能力不存在。',
    capabilities: {
      agents: {
        title: '定制每一个 Agent',
        subtitle: '你的 Agent 团队，由你塑造。',
        paragraphs: [
          'Velloc 允许你根据工作流需要创建任意数量的 Agent——规划、编码、研究、审查——并为每个 Agent 指定角色、模型、指令、工具、技能、权限和记忆访问范围。',
          'Agent 是一等配置对象。每个 Agent 都可以运行在不同的模型或服务商上，你的主 Agent 还可以将子任务委托给由其他模型驱动的专业 Agent，将它们编排成一个 AI 编程团队。',
        ],
      },
      models: {
        title: '为每项任务选择合适的模型',
        subtitle: '一个模型还是多个模型，由你决定。',
        paragraphs: [
          '可以用一个模型处理所有工作，也可以随时切换模型，或为不同 Agent 乃至不同任务指定不同的模型和服务商。',
          '你的主 Agent 可以将子任务委托给由其他模型驱动的专业 Agent。不只是切换模型——而是编排它们。',
        ],
      },
      memory: {
        title: '记忆随项目保留',
        subtitle: '跨会话持续存在的上下文。',
        paragraphs: [
          '在会话之间保留架构决策、编码规范、项目指令、工作流和重要上下文。',
          '记忆不只是聊天记录——它会把你的构建和测试要求、已知问题以及历史上下文带入每一次未来会话，让工作区记住你的工作方式。',
        ],
      },
    },
  },
  es: {
    sectionLabel: 'Capacidad',
    backLinkText: 'Volver al resumen',
    prevLabel: 'Anterior',
    nextLabel: 'Siguiente',
    notFoundText: 'Esta capacidad no existe.',
    capabilities: {
      agents: {
        title: 'Personalice cada agente',
        subtitle: 'Su equipo de agentes, a su manera.',
        paragraphs: [
          'Velloc le permite crear tantos agentes como su flujo de trabajo necesite — planificadores, programadores, investigadores, revisores — y asignar a cada uno un rol, un modelo, instrucciones, herramientas, habilidades, permisos y acceso a la memoria.',
          'Los agentes son configuraciones de primera clase. Cada agente puede ejecutarse con un modelo o proveedor diferente, y su agente principal puede delegar subtareas en agentes especializados impulsados por otros modelos, orquestándolos como un único equipo de codificación con IA.',
        ],
      },
      models: {
        title: 'El modelo adecuado para cada tarea',
        subtitle: 'Un modelo o muchos — usted decide.',
        paragraphs: [
          'Use un único modelo para todo, cambie de modelo al instante, o asigne distintos modelos y proveedores a diferentes agentes e incluso a tareas individuales.',
          'Su agente principal puede delegar subtareas en agentes especializados impulsados por otros modelos. No se limite a cambiar de modelo — orqueste los modelos.',
        ],
      },
      memory: {
        title: 'Memoria que permanece con su proyecto',
        subtitle: 'Contexto que perdura entre sesiones.',
        paragraphs: [
          'Conserve decisiones de arquitectura, convenciones de código, instrucciones del proyecto, flujos de trabajo y contexto importante entre sesiones.',
          'La memoria es más que un historial de chat: lleva sus requisitos de compilación y pruebas, problemas conocidos y contexto histórico a cada sesión futura, para que el espacio de trabajo recuerde cómo trabaja usted.',
        ],
      },
    },
  },
  fr: {
    sectionLabel: 'Capacité',
    backLinkText: 'Retour à l’aperçu',
    prevLabel: 'Précédent',
    nextLabel: 'Suivant',
    notFoundText: 'Cette capacité n’existe pas.',
    capabilities: {
      agents: {
        title: 'Personnalisez chaque agent',
        subtitle: 'Votre équipe d’agents, à votre façon.',
        paragraphs: [
          'Velloc vous permet de créer autant d’agents que votre flux de travail l’exige — planificateurs, codeurs, chercheurs, relecteurs — et de donner à chacun un rôle, un modèle, des instructions, des outils, des compétences, des permissions et un accès à la mémoire.',
          'Les agents sont des configurations de premier ordre. Chaque agent peut fonctionner avec un modèle ou un fournisseur différent, et votre agent principal peut déléguer des sous-tâches à des agents spécialisés propulsés par d’autres modèles, en les orchestrant comme une seule équipe de codage IA.',
        ],
      },
      models: {
        title: 'Le bon modèle pour chaque tâche',
        subtitle: 'Un modèle, plusieurs modèles — vous décidez.',
        paragraphs: [
          'Utilisez un seul modèle pour tout, changez de modèle instantanément, ou attribuez différents modèles et fournisseurs à différents agents, voire à des tâches individuelles.',
          'Votre agent principal peut déléguer des sous-tâches à des agents spécialisés propulsés par d’autres modèles. Ne vous contentez pas de changer de modèle — orchestrez-les.',
        ],
      },
      memory: {
        title: 'Une mémoire qui suit votre projet',
        subtitle: 'Un contexte qui persiste entre les sessions.',
        paragraphs: [
          'Préservez les décisions d’architecture, les conventions de code, les instructions du projet, les flux de travail et le contexte important entre les sessions.',
          'La mémoire est bien plus qu’un historique de discussion — elle transmet vos exigences de compilation et de test, les problèmes connus et le contexte historique à chaque session future, afin que l’espace de travail se souvienne de votre façon de travailler.',
        ],
      },
    },
  },
  de: {
    sectionLabel: 'Fähigkeit',
    backLinkText: 'Zurück zur Übersicht',
    prevLabel: 'Zurück',
    nextLabel: 'Weiter',
    notFoundText: 'Diese Fähigkeit existiert nicht.',
    capabilities: {
      agents: {
        title: 'Passe jeden Agent an',
        subtitle: 'Dein Agent-Team, ganz nach deinen Vorstellungen.',
        paragraphs: [
          'Velloc lässt dich so viele Agents erstellen, wie dein Workflow braucht — Planer, Coder, Rechercheure, Reviewer — und jedem eine Rolle, ein Modell, Anweisungen, Tools, Skills, Berechtigungen und Speicherzugriff geben.',
          'Agents sind Konfiguration erster Klasse. Jeder Agent kann mit einem anderen Modell oder Anbieter laufen, und dein Haupt-Agent kann Teilaufgaben an spezialisierte Agents delegieren, die von anderen Modellen betrieben werden — orchestriert als ein KI-Coding-Team.',
        ],
      },
      models: {
        title: 'Das richtige Modell für jede Aufgabe',
        subtitle: 'Ein Modell, viele Modelle — du entscheidest.',
        paragraphs: [
          'Nutze ein einzelnes Modell für alles, wechsle Modelle sofort oder weise verschiedenen Agents und sogar einzelnen Aufgaben unterschiedliche Modelle und Anbieter zu.',
          'Dein Haupt-Agent kann Teilaufgaben an spezialisierte Agents delegieren, die von anderen Modellen betrieben werden. Wechsle nicht nur Modelle — orchestriere sie.',
        ],
      },
      memory: {
        title: 'Speicher, der bei deinem Projekt bleibt',
        subtitle: 'Kontext, der Sitzungen überdauert.',
        paragraphs: [
          'Behalte Architekturentscheidungen, Codierungskonventionen, Projektanweisungen, Workflows und wichtigen Kontext über Sitzungen hinweg.',
          'Speicher ist mehr als Chatverlauf — er bringt deine Build- und Testanforderungen, bekannte Probleme und historischen Kontext in jede zukünftige Sitzung, damit sich der Arbeitsbereich an deine Arbeitsweise erinnert.',
        ],
      },
    },
  },
  ja: {
    sectionLabel: '能力',
    backLinkText: '概要に戻る',
    prevLabel: '前へ',
    nextLabel: '次へ',
    notFoundText: 'この能力は存在しません。',
    capabilities: {
      agents: {
        title: 'すべてのエージェントをカスタマイズ',
        subtitle: 'あなたのエージェントチーム、あなたの思い通りに。',
        paragraphs: [
          'Velloc では、ワークフローに必要なだけのエージェントを作成できます——プランナー、コーダー、リサーチャー、レビュアー——そして各エージェントに役割、モデル、指示、ツール、スキル、権限、メモリへのアクセスを割り当てられます。',
          'エージェントは第一級の設定項目です。各エージェントを異なるモデルやプロバイダーで実行でき、リードエージェントは他のモデルを搭載した専門エージェントにサブタスクを委任し、1 つの AI コーディングチームとしてオーケストレーションできます。',
        ],
      },
      models: {
        title: 'タスクごとに最適なモデル',
        subtitle: '1 つのモデルか、複数のモデルか——あなた次第。',
        paragraphs: [
          'すべてを 1 つのモデルで処理するか、モデルをすぐに切り替えるか、エージェントや個別のタスクごとに異なるモデルとプロバイダーを割り当てるか、選べます。',
          'リードエージェントは、他のモデルを搭載した専門エージェントにサブタスクを委任できます。モデルを切り替えるだけでなく——オーケストレーションしましょう。',
        ],
      },
      memory: {
        title: 'プロジェクトに残るメモリ',
        subtitle: 'セッションをまたいで持続するコンテキスト。',
        paragraphs: [
          'アーキテクチャの決定、コーディング規約、プロジェクトの指示、ワークフロー、重要なコンテキストをセッション間で保持します。',
          'メモリはチャット履歴だけではありません——ビルドやテストの要件、既知の問題、過去のコンテキストを将来のすべてのセッションに引き継ぎ、ワークスペースがあなたの作業方法を覚えています。',
        ],
      },
    },
  },
  ko: {
    sectionLabel: '능력',
    backLinkText: '개요로 돌아가기',
    prevLabel: '이전',
    nextLabel: '다음',
    notFoundText: '이 능력은 존재하지 않습니다.',
    capabilities: {
      agents: {
        title: '모든 에이전트 맞춤 설정',
        subtitle: '원하는 대로 구성하는 에이전트 팀.',
        paragraphs: [
          'Velloc를 사용하면 워크플로에 필요한 만큼 에이전트를 만들 수 있습니다—계획, 코딩, 조사, 검토 담당—각각에 역할, 모델, 지침, 도구, 스킬, 권한, 메모리 접근 권한을 부여할 수 있습니다.',
          '에이전트는 일급 구성 항목입니다. 각 에이전트를 다른 모델이나 공급업체로 실행할 수 있으며, 리드 에이전트는 다른 모델 기반의 전문 에이전트에 하위 작업을 위임하여 하나의 AI 코딩 팀으로 조율할 수 있습니다.',
        ],
      },
      models: {
        title: '모든 작업에 맞는 모델',
        subtitle: '모델 하나, 모델 여러 개—여러분의 선택입니다.',
        paragraphs: [
          '모든 작업에 하나의 모델을 사용하거나, 모델을 즉시 전환하거나, 에이전트와 개별 작업에 서로 다른 모델과 공급업체를 지정할 수 있습니다.',
          '리드 에이전트는 다른 모델 기반의 전문 에이전트에 하위 작업을 위임할 수 있습니다. 단순히 모델을 전환하지 말고—조율하세요.',
        ],
      },
      memory: {
        title: '프로젝트와 함께 남는 메모리',
        subtitle: '세션을 넘어 지속되는 컨텍스트.',
        paragraphs: [
          '아키텍처 결정, 코딩 규칙, 프로젝트 지침, 워크플로, 중요한 컨텍스트를 세션 간에 보존하세요.',
          '메모리는 채팅 기록 그 이상입니다—빌드 및 테스트 요구 사항, 알려진 문제, 과거 컨텍스트를 향후 모든 세션에 전달하여 작업 공간이 여러분의 작업 방식을 기억합니다.',
        ],
      },
    },
  },
  bn: {
    sectionLabel: 'ক্ষমতা',
    backLinkText: 'ওভারভিউতে ফিরুন',
    prevLabel: 'আগের',
    nextLabel: 'পরের',
    notFoundText: 'এই ক্ষমতাটি বিদ্যমান নেই।',
    capabilities: {
      agents: {
        title: 'প্রতিটি এজেন্ট কাস্টমাইজ করুন',
        subtitle: 'আপনার এজেন্ট টিম, আপনার মতো করে।',
        paragraphs: [
          'Velloc আপনাকে আপনার ওয়ার্কফ্লোতে যতগুলো এজেন্ট দরকার ততগুলো তৈরি করতে দেয় — প্ল্যানার, কোডার, রিসার্চার, রিভিউয়ার — এবং প্রত্যেককে একটি ভূমিকা, মডেল, নির্দেশনা, টুল, স্কিল, অনুমতি এবং মেমোরি অ্যাক্সেস দিতে পারে।',
          'এজেন্ট প্রথম-শ্রেণীর কনফিগারেশন। প্রতিটি এজেন্ট আলাদা মডেল বা প্রোভাইডারে চলতে পারে, এবং আপনার লিড এজেন্ট অন্য মডেল চালিত বিশেষায়িত এজেন্টদের কাছে সাবটাস্ক অর্পণ করতে পারে, তাদের একটিমাত্র AI কোডিং টিম হিসেবে পরিচালনা করে।',
        ],
      },
      models: {
        title: 'প্রতিটি কাজের জন্য সঠিক মডেল',
        subtitle: 'একটি মডেল, অনেক মডেল — আপনি সিদ্ধান্ত নিন।',
        paragraphs: [
          'সবকিছুর জন্য একটি মডেল ব্যবহার করুন, তাৎক্ষণিকভাবে মডেল পরিবর্তন করুন, অথবা বিভিন্ন এজেন্ট এমনকি পৃথক কাজের জন্য আলাদা মডেল ও প্রোভাইডার নির্ধারণ করুন।',
          'আপনার লিড এজেন্ট অন্য মডেল চালিত বিশেষায়িত এজেন্টদের কাছে সাবটাস্ক অর্পণ করতে পারে। শুধু মডেল বদলাবেন না — তাদের পরিচালনা করুন।',
        ],
      },
      memory: {
        title: 'আপনার প্রকল্পের সাথে থাকা মেমোরি',
        subtitle: 'সেশন জুড়ে স্থায়ী প্রসঙ্গ।',
        paragraphs: [
          'আর্কিটেকচার সিদ্ধান্ত, কোডিং কনভেনশন, প্রকল্প নির্দেশনা, ওয়ার্কফ্লো এবং গুরুত্বপূর্ণ প্রসঙ্গ সেশন জুড়ে সংরক্ষণ করুন।',
          'মেমোরি শুধু চ্যাট ইতিহাস নয় — এটি আপনার বিল্ড ও টেস্ট প্রয়োজনীয়তা, পরিচিত সমস্যা এবং ঐতিহাসিক প্রসঙ্গ প্রতিটি ভবিষ্যৎ সেশনে বহন করে, যাতে ওয়ার্কস্পেস আপনার কাজের ধরন মনে রাখে।',
        ],
      },
    },
  },
  hi: {
    sectionLabel: 'क्षमता',
    backLinkText: 'अवलोकन पर लौटें',
    prevLabel: 'पिछला',
    nextLabel: 'अगला',
    notFoundText: 'यह क्षमता मौजूद नहीं है।',
    capabilities: {
      agents: {
        title: 'हर एजेंट को कस्टमाइज़ करें',
        subtitle: 'आपके एजेंटों की टीम, आपके तरीके से।',
        paragraphs: [
          'Velloc आपको अपने वर्कफ़्लो के लिए जितने चाहें उतने एजेंट बनाने देता है — प्लानर, कोडर, रिसर्चर, रिव्यूअर — और हर एक को भूमिका, मॉडल, निर्देश, टूल्स, स्किल्स, अनुमतियाँ और मेमोरी एक्सेस दे सकते हैं।',
          'एजेंट प्रथम-श्रेणी के कॉन्फ़िगरेशन हैं। हर एजेंट अलग मॉडल या प्रदाता पर चल सकता है, और आपका मुख्य एजेंट अन्य मॉडलों द्वारा संचालित विशेषज्ञ एजेंटों को उप-कार्य सौंप सकता है, उन्हें एक AI कोडिंग टीम के रूप में संचालित करता है।',
        ],
      },
      models: {
        title: 'हर काम के लिए सही मॉडल',
        subtitle: 'एक मॉडल, कई मॉडल — आप तय करें।',
        paragraphs: [
          'सब कुछ के लिए एक मॉडल उपयोग करें, तुरंत मॉडल बदलें, या विभिन्न एजेंटों और यहाँ तक कि अलग-अलग कार्यों के लिए अलग-अलग मॉडल और प्रदाता निर्धारित करें।',
          'आपका मुख्य एजेंट अन्य मॉडलों द्वारा संचालित विशेषज्ञ एजेंटों को उप-कार्य सौंप सकता है। केवल मॉडल न बदलें — उन्हें संचालित करें।',
        ],
      },
      memory: {
        title: 'मेमोरी जो आपके प्रोजेक्ट के साथ रहती है',
        subtitle: 'संदर्भ जो सत्रों के बीच बना रहता है।',
        paragraphs: [
          'आर्किटेक्चर निर्णय, कोडिंग परंपराएँ, प्रोजेक्ट निर्देश, वर्कफ़्लो और महत्वपूर्ण संदर्भ को सत्रों के बीच संरक्षित रखें।',
          'मेमोरी चैट इतिहास से कहीं अधिक है — यह आपकी बिल्ड और परीक्षण आवश्यकताओं, ज्ञात समस्याओं और ऐतिहासिक संदर्भ को हर भविष्य के सत्र में ले जाती है, ताकि वर्कस्पेस आपके काम करने का तरीका याद रखे।',
        ],
      },
    },
  },
  pt: {
    sectionLabel: 'Capacidade',
    backLinkText: 'Voltar à visão geral',
    prevLabel: 'Anterior',
    nextLabel: 'Próximo',
    notFoundText: 'Esta capacidade não existe.',
    capabilities: {
      agents: {
        title: 'Personalize cada agente',
        subtitle: 'Sua equipe de agentes, do seu jeito.',
        paragraphs: [
          'O Velloc permite criar quantos agentes seu fluxo de trabalho precisar — planejadores, programadores, pesquisadores, revisores — e dar a cada um um papel, um modelo, instruções, ferramentas, skills, permissões e acesso à memória.',
          'Agentes são configuração de primeira classe. Cada agente pode rodar em um modelo ou provedor diferente, e seu agente principal pode delegar subtarefas a agentes especializados alimentados por outros modelos, orquestrando-os como uma única equipe de codificação com IA.',
        ],
      },
      models: {
        title: 'O modelo certo para cada tarefa',
        subtitle: 'Um modelo, vários modelos — você decide.',
        paragraphs: [
          'Use um único modelo para tudo, alterne modelos instantaneamente ou atribua modelos e provedores diferentes a diferentes agentes e até a tarefas individuais.',
          'Seu agente principal pode delegar subtarefas a agentes especializados alimentados por outros modelos. Não apenas alterne modelos — orquestre-os.',
        ],
      },
      memory: {
        title: 'Memória que permanece com seu projeto',
        subtitle: 'Contexto que persiste entre sessões.',
        paragraphs: [
          'Preserve decisões de arquitetura, convenções de codificação, instruções do projeto, fluxos de trabalho e contexto importante entre sessões.',
          'Memória é mais do que histórico de chat — ela carrega seus requisitos de build e teste, problemas conhecidos e contexto histórico para cada sessão futura, para que o espaço de trabalho lembre como você trabalha.',
        ],
      },
    },
  },
  ru: {
    sectionLabel: 'Возможность',
    backLinkText: 'Назад к обзору',
    prevLabel: 'Назад',
    nextLabel: 'Вперёд',
    notFoundText: 'Такой возможности не существует.',
    capabilities: {
      agents: {
        title: 'Настройте каждого агента',
        subtitle: 'Ваша команда агентов — по вашему желанию.',
        paragraphs: [
          'Velloc позволяет создавать столько агентов, сколько требует ваш рабочий процесс — планировщиков, кодеров, исследователей, рецензентов — и давать каждому роль, модель, инструкции, инструменты, навыки, разрешения и доступ к памяти.',
          'Агенты — это конфигурация первого класса. Каждый агент может работать на другой модели или провайдере, а ваш главный агент может делегировать подзадачи специализированным агентам на других моделях, оркеструя их как единую команду ИИ-кодирования.',
        ],
      },
      models: {
        title: 'Правильная модель для каждой задачи',
        subtitle: 'Одна модель, много моделей — решать вам.',
        paragraphs: [
          'Используйте одну модель для всего, переключайте модели мгновенно или назначайте разные модели и провайдеров разным агентам и даже отдельным задачам.',
          'Ваш главный агент может делегировать подзадачи специализированным агентам на других моделях. Не просто переключайте модели — оркеструйте их.',
        ],
      },
      memory: {
        title: 'Память, которая остаётся с вашим проектом',
        subtitle: 'Контекст, сохраняющийся между сессиями.',
        paragraphs: [
          'Сохраняйте архитектурные решения, стиль кода, инструкции проекта, рабочие процессы и важный контекст между сессиями.',
          'Память — это больше, чем история чата: она переносит ваши требования к сборке и тестированию, известные проблемы и исторический контекст в каждую будущую сессию, чтобы рабочее пространство помнило, как вы работаете.',
        ],
      },
    },
  },
};

// ============================================================
// Mock product UI (Curriculum showcase placeholder)
// ============================================================

export interface MockTaskRow {
  task: string;
  model: string;
  pct: number;
}

export interface MockExtensionRow {
  /** Package name — protocol, never translated. */
  name: string;
  /** Category tag — user-visible text. */
  tag: string;
}

export interface MockScreenshotConfig {
  welcomeTitle: string;
  connectPrompt: string;
  saveKeyCta: string;
  modelLabel: string;
  activeBadge: string;
  projectMemoryTitle: string;
  memoryItems: string[];
  modelsByTaskTitle: string;
  taskRows: MockTaskRow[];
  extensionsTitle: string;
  extensions: MockExtensionRow[];
  /** `aria-label` on the showcase screenshot; `{index}` placeholder. */
  showView: string;
  productViewAlt: string;
}

export const mockScreenshotConfig: Record<Lang, MockScreenshotConfig> = {
  en: {
    welcomeTitle: 'Welcome to Velloc',
    connectPrompt: 'Connect a model to begin.',
    saveKeyCta: 'Save key & open project',
    modelLabel: 'Model',
    activeBadge: 'ACTIVE',
    projectMemoryTitle: 'Project Memory',
    memoryItems: [
      'Monorepo layout & package names',
      'Testing convention: vitest + happy-dom',
      'Error handling idiom: typed results',
      'Build requirement: bundle size < 200KB',
    ],
    modelsByTaskTitle: 'Models by task',
    taskRows: [
      { task: 'Planning', model: 'Claude', pct: 45 },
      { task: 'Implementation', model: 'GPT', pct: 60 },
      { task: 'Research', model: 'Gemini', pct: 25 },
      { task: 'Testing', model: 'DeepSeek', pct: 38 },
      { task: 'Review', model: 'Custom', pct: 52 },
    ],
    extensionsTitle: 'Extensions',
    extensions: [
      { name: 'claude-code-compat', tag: 'Workflow' },
      { name: 'terminal-helper', tag: 'Skills' },
      { name: 'custom-provider-sdk', tag: 'Provider' },
      { name: 'postgres-toolkit', tag: 'Plugin' },
    ],
    showView: 'Show view {index}',
    productViewAlt: 'Velloc Code product view',
  },
  zh: {
    welcomeTitle: '欢迎使用 Velloc',
    connectPrompt: '连接模型以开始。',
    saveKeyCta: '保存密钥并打开项目',
    modelLabel: '模型',
    activeBadge: '使用中',
    projectMemoryTitle: '项目记忆',
    memoryItems: [
      'Monorepo 布局与包名',
      '测试约定：vitest + happy-dom',
      '错误处理惯用法：类型化结果',
      '构建要求：包体积 < 200KB',
    ],
    modelsByTaskTitle: '按任务分配模型',
    taskRows: [
      { task: '规划', model: 'Claude', pct: 45 },
      { task: '实现', model: 'GPT', pct: 60 },
      { task: '研究', model: 'Gemini', pct: 25 },
      { task: '测试', model: 'DeepSeek', pct: 38 },
      { task: '审查', model: '自定义', pct: 52 },
    ],
    extensionsTitle: '扩展',
    extensions: [
      { name: 'claude-code-compat', tag: '工作流' },
      { name: 'terminal-helper', tag: '技能' },
      { name: 'custom-provider-sdk', tag: '服务商' },
      { name: 'postgres-toolkit', tag: '插件' },
    ],
    showView: '查看视图 {index}',
    productViewAlt: 'Velloc Code 产品界面',
  },
  es: {
    welcomeTitle: 'Bienvenido a Velloc',
    connectPrompt: 'Conecte un modelo para comenzar.',
    saveKeyCta: 'Guardar clave y abrir proyecto',
    modelLabel: 'Modelo',
    activeBadge: 'ACTIVO',
    projectMemoryTitle: 'Memoria del proyecto',
    memoryItems: [
      'Estructura del monorepo y nombres de paquetes',
      'Convención de pruebas: vitest + happy-dom',
      'Patrón de manejo de errores: resultados tipados',
      'Requisito de compilación: tamaño del paquete < 200KB',
    ],
    modelsByTaskTitle: 'Modelos por tarea',
    taskRows: [
      { task: 'Planificación', model: 'Claude', pct: 45 },
      { task: 'Implementación', model: 'GPT', pct: 60 },
      { task: 'Investigación', model: 'Gemini', pct: 25 },
      { task: 'Pruebas', model: 'DeepSeek', pct: 38 },
      { task: 'Revisión', model: 'Personalizado', pct: 52 },
    ],
    extensionsTitle: 'Extensiones',
    extensions: [
      { name: 'claude-code-compat', tag: 'Flujo de trabajo' },
      { name: 'terminal-helper', tag: 'Habilidades' },
      { name: 'custom-provider-sdk', tag: 'Proveedor' },
      { name: 'postgres-toolkit', tag: 'Plugin' },
    ],
    showView: 'Ver vista {index}',
    productViewAlt: 'Vista del producto Velloc Code',
  },
  fr: {
    welcomeTitle: 'Bienvenue dans Velloc',
    connectPrompt: 'Connectez un modèle pour commencer.',
    saveKeyCta: 'Enregistrer la clé et ouvrir le projet',
    modelLabel: 'Modèle',
    activeBadge: 'ACTIF',
    projectMemoryTitle: 'Mémoire du projet',
    memoryItems: [
      'Structure du monorepo et noms des paquets',
      'Convention de test : vitest + happy-dom',
      'Idiome de gestion d’erreurs : résultats typés',
      'Exigence de build : taille du bundle < 200Ko',
    ],
    modelsByTaskTitle: 'Modèles par tâche',
    taskRows: [
      { task: 'Planification', model: 'Claude', pct: 45 },
      { task: 'Implémentation', model: 'GPT', pct: 60 },
      { task: 'Recherche', model: 'Gemini', pct: 25 },
      { task: 'Tests', model: 'DeepSeek', pct: 38 },
      { task: 'Revue', model: 'Personnalisé', pct: 52 },
    ],
    extensionsTitle: 'Extensions',
    extensions: [
      { name: 'claude-code-compat', tag: 'Flux de travail' },
      { name: 'terminal-helper', tag: 'Compétences' },
      { name: 'custom-provider-sdk', tag: 'Fournisseur' },
      { name: 'postgres-toolkit', tag: 'Plugin' },
    ],
    showView: 'Afficher la vue {index}',
    productViewAlt: 'Aperçu du produit Velloc Code',
  },
  de: {
    welcomeTitle: 'Willkommen bei Velloc',
    connectPrompt: 'Verbinde ein Modell, um zu beginnen.',
    saveKeyCta: 'Schlüssel speichern & Projekt öffnen',
    modelLabel: 'Modell',
    activeBadge: 'AKTIV',
    projectMemoryTitle: 'Projektspeicher',
    memoryItems: [
      'Monorepo-Struktur & Paketnamen',
      'Testkonvention: vitest + happy-dom',
      'Fehlerbehandlungs-Muster: typisierte Ergebnisse',
      'Build-Anforderung: Bundle-Größe < 200KB',
    ],
    modelsByTaskTitle: 'Modelle nach Aufgabe',
    taskRows: [
      { task: 'Planung', model: 'Claude', pct: 45 },
      { task: 'Implementierung', model: 'GPT', pct: 60 },
      { task: 'Recherche', model: 'Gemini', pct: 25 },
      { task: 'Tests', model: 'DeepSeek', pct: 38 },
      { task: 'Review', model: 'Benutzerdefiniert', pct: 52 },
    ],
    extensionsTitle: 'Erweiterungen',
    extensions: [
      { name: 'claude-code-compat', tag: 'Workflow' },
      { name: 'terminal-helper', tag: 'Skills' },
      { name: 'custom-provider-sdk', tag: 'Anbieter' },
      { name: 'postgres-toolkit', tag: 'Plugin' },
    ],
    showView: 'Ansicht {index} anzeigen',
    productViewAlt: 'Velloc Code Produktansicht',
  },
  ja: {
    welcomeTitle: 'Velloc へようこそ',
    connectPrompt: 'モデルを接続して始めましょう。',
    saveKeyCta: 'キーを保存してプロジェクトを開く',
    modelLabel: 'モデル',
    activeBadge: '使用中',
    projectMemoryTitle: 'プロジェクトメモリ',
    memoryItems: [
      'Monorepo の構成とパッケージ名',
      'テスト規約:vitest + happy-dom',
      'エラーハンドリング:型付き結果',
      'ビルド要件:バンドルサイズ 200KB 未満',
    ],
    modelsByTaskTitle: 'タスクごとのモデル',
    taskRows: [
      { task: '計画', model: 'Claude', pct: 45 },
      { task: '実装', model: 'GPT', pct: 60 },
      { task: '調査', model: 'Gemini', pct: 25 },
      { task: 'テスト', model: 'DeepSeek', pct: 38 },
      { task: 'レビュー', model: 'カスタム', pct: 52 },
    ],
    extensionsTitle: '拡張機能',
    extensions: [
      { name: 'claude-code-compat', tag: 'ワークフロー' },
      { name: 'terminal-helper', tag: 'スキル' },
      { name: 'custom-provider-sdk', tag: 'プロバイダー' },
      { name: 'postgres-toolkit', tag: 'プラグイン' },
    ],
    showView: 'ビュー {index} を表示',
    productViewAlt: 'Velloc Code 製品画面',
  },
  ko: {
    welcomeTitle: 'Velloc에 오신 것을 환영합니다',
    connectPrompt: '모델을 연결하여 시작하세요.',
    saveKeyCta: '키 저장 및 프로젝트 열기',
    modelLabel: '모델',
    activeBadge: '사용 중',
    projectMemoryTitle: '프로젝트 메모리',
    memoryItems: [
      'Monorepo 구조 및 패키지 이름',
      '테스트 규칙: vitest + happy-dom',
      '오류 처리 방식: 타입화된 결과',
      '빌드 요구 사항: 번들 크기 < 200KB',
    ],
    modelsByTaskTitle: '작업별 모델',
    taskRows: [
      { task: '계획', model: 'Claude', pct: 45 },
      { task: '구현', model: 'GPT', pct: 60 },
      { task: '조사', model: 'Gemini', pct: 25 },
      { task: '테스트', model: 'DeepSeek', pct: 38 },
      { task: '검토', model: '사용자 지정', pct: 52 },
    ],
    extensionsTitle: '확장 기능',
    extensions: [
      { name: 'claude-code-compat', tag: '워크플로' },
      { name: 'terminal-helper', tag: '스킬' },
      { name: 'custom-provider-sdk', tag: '공급업체' },
      { name: 'postgres-toolkit', tag: '플러그인' },
    ],
    showView: '뷰 {index} 표시',
    productViewAlt: 'Velloc Code 제품 화면',
  },
  bn: {
    welcomeTitle: 'Velloc-এ স্বাগতম',
    connectPrompt: 'শুরু করতে একটি মডেল সংযোগ করুন।',
    saveKeyCta: 'কী সংরক্ষণ করুন ও প্রকল্প খুলুন',
    modelLabel: 'মডেল',
    activeBadge: 'সক্রিয়',
    projectMemoryTitle: 'প্রকল্প মেমোরি',
    memoryItems: [
      'Monorepo বিন্যাস ও প্যাকেজ নাম',
      'টেস্টিং কনভেনশন: vitest + happy-dom',
      'এরর হ্যান্ডলিং: টাইপড রেজাল্ট',
      'বিল্ড প্রয়োজনীয়তা: বান্ডেল সাইজ < 200KB',
    ],
    modelsByTaskTitle: 'কাজ অনুযায়ী মডেল',
    taskRows: [
      { task: 'পরিকল্পনা', model: 'Claude', pct: 45 },
      { task: 'বাস্তবায়ন', model: 'GPT', pct: 60 },
      { task: 'গবেষণা', model: 'Gemini', pct: 25 },
      { task: 'টেস্টিং', model: 'DeepSeek', pct: 38 },
      { task: 'রিভিউ', model: 'কাস্টম', pct: 52 },
    ],
    extensionsTitle: 'এক্সটেনশন',
    extensions: [
      { name: 'claude-code-compat', tag: 'ওয়ার্কফ্লো' },
      { name: 'terminal-helper', tag: 'স্কিল' },
      { name: 'custom-provider-sdk', tag: 'প্রোভাইডার' },
      { name: 'postgres-toolkit', tag: 'প্লাগইন' },
    ],
    showView: 'ভিউ {index} দেখুন',
    productViewAlt: 'Velloc Code পণ্যের ভিউ',
  },
  hi: {
    welcomeTitle: 'Velloc में आपका स्वागत है',
    connectPrompt: 'शुरू करने के लिए एक मॉडल कनेक्ट करें।',
    saveKeyCta: 'कुंजी सहेजें और प्रोजेक्ट खोलें',
    modelLabel: 'मॉडल',
    activeBadge: 'सक्रिय',
    projectMemoryTitle: 'प्रोजेक्ट मेमोरी',
    memoryItems: [
      'Monorepo लेआउट और पैकेज नाम',
      'टेस्टिंग परंपरा: vitest + happy-dom',
      'एरर हैंडलिंग शैली: टाइप किए गए परिणाम',
      'बिल्ड आवश्यकता: बंडल आकार < 200KB',
    ],
    modelsByTaskTitle: 'कार्य के अनुसार मॉडल',
    taskRows: [
      { task: 'योजना', model: 'Claude', pct: 45 },
      { task: 'कार्यान्वयन', model: 'GPT', pct: 60 },
      { task: 'शोध', model: 'Gemini', pct: 25 },
      { task: 'परीक्षण', model: 'DeepSeek', pct: 38 },
      { task: 'समीक्षा', model: 'कस्टम', pct: 52 },
    ],
    extensionsTitle: 'एक्सटेंशन',
    extensions: [
      { name: 'claude-code-compat', tag: 'वर्कफ़्लो' },
      { name: 'terminal-helper', tag: 'स्किल्स' },
      { name: 'custom-provider-sdk', tag: 'प्रदाता' },
      { name: 'postgres-toolkit', tag: 'प्लगइन' },
    ],
    showView: 'दृश्य {index} दिखाएँ',
    productViewAlt: 'Velloc Code उत्पाद दृश्य',
  },
  pt: {
    welcomeTitle: 'Bem-vindo ao Velloc',
    connectPrompt: 'Conecte um modelo para começar.',
    saveKeyCta: 'Salvar chave e abrir projeto',
    modelLabel: 'Modelo',
    activeBadge: 'ATIVO',
    projectMemoryTitle: 'Memória do projeto',
    memoryItems: [
      'Estrutura do monorepo e nomes de pacotes',
      'Convenção de teste: vitest + happy-dom',
      'Padrão de tratamento de erros: resultados tipados',
      'Requisito de build: tamanho do bundle < 200KB',
    ],
    modelsByTaskTitle: 'Modelos por tarefa',
    taskRows: [
      { task: 'Planejamento', model: 'Claude', pct: 45 },
      { task: 'Implementação', model: 'GPT', pct: 60 },
      { task: 'Pesquisa', model: 'Gemini', pct: 25 },
      { task: 'Testes', model: 'DeepSeek', pct: 38 },
      { task: 'Revisão', model: 'Personalizado', pct: 52 },
    ],
    extensionsTitle: 'Extensões',
    extensions: [
      { name: 'claude-code-compat', tag: 'Fluxo de trabalho' },
      { name: 'terminal-helper', tag: 'Skills' },
      { name: 'custom-provider-sdk', tag: 'Provedor' },
      { name: 'postgres-toolkit', tag: 'Plugin' },
    ],
    showView: 'Mostrar visão {index}',
    productViewAlt: 'Visão do produto Velloc Code',
  },
  ru: {
    welcomeTitle: 'Добро пожаловать в Velloc',
    connectPrompt: 'Подключите модель, чтобы начать.',
    saveKeyCta: 'Сохранить ключ и открыть проект',
    modelLabel: 'Модель',
    activeBadge: 'АКТИВНА',
    projectMemoryTitle: 'Память проекта',
    memoryItems: [
      'Структура monorepo и имена пакетов',
      'Стиль тестирования: vitest + happy-dom',
      'Обработка ошибок: типизированные результаты',
      'Требование к сборке: размер бандла < 200 КБ',
    ],
    modelsByTaskTitle: 'Модели по задачам',
    taskRows: [
      { task: 'Планирование', model: 'Claude', pct: 45 },
      { task: 'Реализация', model: 'GPT', pct: 60 },
      { task: 'Исследования', model: 'Gemini', pct: 25 },
      { task: 'Тестирование', model: 'DeepSeek', pct: 38 },
      { task: 'Ревью', model: 'Своя', pct: 52 },
    ],
    extensionsTitle: 'Расширения',
    extensions: [
      { name: 'claude-code-compat', tag: 'Рабочий процесс' },
      { name: 'terminal-helper', tag: 'Навыки' },
      { name: 'custom-provider-sdk', tag: 'Провайдер' },
      { name: 'postgres-toolkit', tag: 'Плагин' },
    ],
    showView: 'Показать вид {index}',
    productViewAlt: 'Вид продукта Velloc Code',
  },
};
