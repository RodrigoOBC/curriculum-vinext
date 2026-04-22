import type { ArticleCardItem } from "@/components/article-cards"
import type { RepositoryGithubCardItem } from "@/components/repository-github-card"
import type { TimelineItem } from "@/components/timeline"

export type Locale = "pt" | "en"

export type PortfolioLocaleContent = {
  nav: Array<{ label: string; href: string }>
  hero: {
    eyebrow: string
    title: string
    accent: string
    description: string
    skillsTitle: string
    skills: string[]
    resumeLabel: string
    contactLabel: string
    introLabel: string
  }
  experience: {
    eyebrow: string
    title: string
    currentLabel: string
    items: TimelineItem[]
  }
  education: {
    eyebrow: string
    title: string
    currentLabel: string
    items: TimelineItem[]
  }
  repositories: {
    eyebrow: string
    title: string
    description: string
    items: RepositoryGithubCardItem[]
  }
  articles: {
    eyebrow: string
    title: string
    description: string
    items: ArticleCardItem[]
  }
  contact: {
    eyebrow: string
    title: string
    description: string
    socialsTitle: string
    socialsDescription: string
    emailLabel: string
    note: string
  }
}

export type PortfolioContent = Record<Locale, PortfolioLocaleContent>

export const portfolioContent: PortfolioContent = {
  pt: {
    nav: [
      { label: "Início", href: "#hero" },
      { label: "Experiência", href: "#experience" },
      { label: "Educação", href: "#education" },
      { label: "Repositórios", href: "#repositories" },
      { label: "Artigos", href: "#articles" },
      { label: "Contato", href: "#contact" },
    ],
    hero: {
      eyebrow: "Portfólio Bilíngue",
      title: "Olá, sou Rodrigo Cabral",
      accent: "especialista em Testes Automatizados",
      description:
        "Eu desenho estratégias de qualidade, automatizo fluxos críticos e ajudo times a lançar com mais confiança, menos regressão e feedback mais rápido.",
      skillsTitle: "Soft skills em foco",
      skills: [
        "Comunico riscos e decisões de qualidade com clareza para times técnicos e não técnicos.",
        "Transformo problemas ambíguos em planos de teste simples, executáveis e rastreáveis.",
        "Colaboro cedo no ciclo para reduzir retrabalho e aumentar a confiança no release.",
      ],
      resumeLabel: "Baixar Currículo",
      contactLabel: "Falar por e-mail",
      introLabel: "Vamos construir qualidade previsível.",
    },
    experience: {
      eyebrow: "Carreira",
      title: "Experiência",
      currentLabel: "Atual",
      items: [
        {
          title: "Senior QA Automation Engineer",
          organization: "Produto SaaS B2B",
          start: "2024",
          description:
            "Liderança da automação end-to-end em Playwright e API testing, com foco em regressão confiável, pipelines rápidos e redução de bugs em produção.",
        },
        {
          title: "QA Engineer",
          organization: "Plataforma Digital",
          start: "2022",
          end: "2024",
          description:
            "Estruturei suítes de teste, apoiei refinamentos com critérios de aceite e aumentei a cobertura funcional em jornadas críticas de usuário.",
        },
        {
          title: "Test Automation Analyst",
          organization: "Consultoria de Engenharia",
          start: "2020",
          end: "2022",
          description:
            "Criação de cenários de automação, documentação de estratégias de teste e suporte a entregas contínuas em times multidisciplinares.",
        },
      ],
    },
    education: {
      eyebrow: "Formação",
      title: "Educação",
      currentLabel: "Atual",
      items: [
        {
          title: "Pós-graduação em Qualidade de Software",
          organization: "Instituição de Ensino",
          start: "2023",
          end: "2024",
          description:
            "Estudo focado em arquitetura de testes, automação, métricas de qualidade e melhoria contínua em produto digital.",
        },
        {
          title: "Análise e Desenvolvimento de Sistemas",
          organization: "Universidade",
          start: "2017",
          end: "2020",
          description:
            "Base em engenharia de software, banco de dados, web, lógica e práticas de desenvolvimento colaborativo.",
        },
        {
          title: "Certificações técnicas",
          organization: "Cursos e trilhas online",
          start: "2020",
          description:
            "Trilhas contínuas em Playwright, Cypress, testes de API, CI/CD e qualidade aplicada em times ágeis.",
        },
      ],
    },
    repositories: {
      eyebrow: "GitHub",
      title: "Repositórios",
      description:
        "Mock inicial com estrutura pronta para futura API, destacando projetos de automação, UI e utilitários de engenharia.",
      items: [
        {
          title: "playwright-quality-lab",
          subtitle: "Automação confiável para fluxos críticos",
          description:
            "Base de testes end-to-end com foco em estabilidade, dados isolados, relatórios claros e manutenção simples.",
          technologies: ["Playwright", "TypeScript", "CI/CD"],
          href: "https://github.com/username/playwright-quality-lab",
        },
        {
          title: "api-test-kit",
          subtitle: "Kit para validação de APIs",
          description:
            "Coleção de exemplos para contratos, regressão de endpoints e organização de testes de integração.",
          technologies: ["API", "Vitest", "REST"],
          href: "https://github.com/username/api-test-kit",
        },
        {
          title: "portfolio-design-system",
          subtitle: "Blocos reutilizáveis para portfólio",
          description:
            "Componentes e padrões visuais para cards, timelines e seções com identidade consistente.",
          technologies: ["Next.js", "shadcn/ui", "Tailwind"],
          href: "https://github.com/username/portfolio-design-system",
        },
      ],
    },
    articles: {
      eyebrow: "Conteúdo",
      title: "Artigos",
      description:
        "Publicações mockadas para uma futura API, com foco em testes automatizados, qualidade e decisões práticas de engenharia.",
      items: [
        {
          title: "Como estabilizar uma suíte de testes E2E",
          summary:
            "Estratégias para reduzir flakiness, melhorar sinais de falha e manter testes úteis ao longo do tempo.",
          tags: ["Playwright", "A11y", "E2E"],
          href: "https://example.com/artigo-1",
        },
        {
          title: "Qualidade como parte do fluxo de entrega",
          summary:
            "Como integrar qualidade desde a descoberta até o release sem criar gargalos artificiais.",
          tags: ["QA", "Processo", "Delivery"],
          href: "https://example.com/artigo-2",
        },
        {
          title: "API testing com feedback rápido",
          summary:
            "Boas práticas para testar contratos e endpoints sem travar a evolução do produto.",
          tags: ["API", "Testes", "CI/CD"],
          href: "https://example.com/artigo-3",
        },
      ],
    },
    contact: {
      eyebrow: "Contato",
      title: "Contate-me",
      description:
        "Se quiser discutir qualidade, automação ou uma vaga, me chame por e-mail.",
      socialsTitle: "Redes e conteúdo",
      socialsDescription: "Links diretos para acompanhar meu trabalho e publicações.",
      emailLabel: "Enviar e-mail",
      note: "Contato público apenas por e-mail.",
    },
  },
  en: {
    nav: [
      { label: "Home", href: "#hero" },
      { label: "Experience", href: "#experience" },
      { label: "Education", href: "#education" },
      { label: "Repositories", href: "#repositories" },
      { label: "Articles", href: "#articles" },
      { label: "Contact", href: "#contact" },
    ],
    hero: {
      eyebrow: "Bilingual Portfolio",
      title: "Hi, I'm Rodrigo Cabral",
      accent: "a Test Automation Specialist",
      description:
        "I design quality strategies, automate critical flows, and help teams ship with more confidence, less regression, and faster feedback.",
      skillsTitle: "Soft skills in focus",
      skills: [
        "I communicate quality risks and decisions clearly to both technical and non-technical teams.",
        "I turn ambiguous problems into simple, executable, and traceable test plans.",
        "I collaborate early in the cycle to reduce rework and increase release confidence.",
      ],
      resumeLabel: "Download Resume",
      contactLabel: "Email me",
      introLabel: "Let's build predictable quality.",
    },
    experience: {
      eyebrow: "Career",
      title: "Experience",
      currentLabel: "Current",
      items: [
        {
          title: "Senior QA Automation Engineer",
          organization: "B2B SaaS Product",
          start: "2024",
          description:
            "Leading end-to-end automation with Playwright and API testing, focused on reliable regression, fast pipelines, and fewer production bugs.",
        },
        {
          title: "QA Engineer",
          organization: "Digital Platform",
          start: "2022",
          end: "2024",
          description:
            "Built test suites, supported refinement with acceptance criteria, and increased functional coverage on critical user journeys.",
        },
        {
          title: "Test Automation Analyst",
          organization: "Engineering Consultancy",
          start: "2020",
          end: "2022",
          description:
            "Created automation scenarios, documented test strategies, and supported continuous delivery across multidisciplinary teams.",
        },
      ],
    },
    education: {
      eyebrow: "Education",
      title: "Education",
      currentLabel: "Current",
      items: [
        {
          title: "Postgraduate Degree in Software Quality",
          organization: "Education Institution",
          start: "2023",
          end: "2024",
          description:
            "Focused on test architecture, automation, quality metrics, and continuous improvement in digital products.",
        },
        {
          title: "Systems Analysis and Development",
          organization: "University",
          start: "2017",
          end: "2020",
          description:
            "Built foundations in software engineering, databases, web development, logic, and collaborative development practices.",
        },
        {
          title: "Technical certifications",
          organization: "Online courses and tracks",
          start: "2020",
          description:
            "Ongoing tracks in Playwright, Cypress, API testing, CI/CD, and quality practices in agile teams.",
        },
      ],
    },
    repositories: {
      eyebrow: "GitHub",
      title: "Repositories",
      description:
        "Initial mock structure ready for a future API, highlighting automation, UI, and engineering utility projects.",
      items: [
        {
          title: "playwright-quality-lab",
          subtitle: "Reliable automation for critical flows",
          description:
            "An end-to-end testing base focused on stability, isolated data, clear reports, and easy maintenance.",
          technologies: ["Playwright", "TypeScript", "CI/CD"],
          href: "https://github.com/username/playwright-quality-lab",
        },
        {
          title: "api-test-kit",
          subtitle: "API validation toolkit",
          description:
            "Examples for contracts, endpoint regression, and integration test organization.",
          technologies: ["API", "Vitest", "REST"],
          href: "https://github.com/username/api-test-kit",
        },
        {
          title: "portfolio-design-system",
          subtitle: "Reusable blocks for the portfolio",
          description:
            "Components and visual patterns for cards, timelines, and sections with a consistent identity.",
          technologies: ["Next.js", "shadcn/ui", "Tailwind"],
          href: "https://github.com/username/portfolio-design-system",
        },
      ],
    },
    articles: {
      eyebrow: "Content",
      title: "Articles",
      description:
        "Mock publications for a future API, focused on test automation, quality, and practical engineering choices.",
      items: [
        {
          title: "How to stabilize an E2E test suite",
          summary:
            "Strategies to reduce flakiness, improve failure signals, and keep tests useful over time.",
          tags: ["Playwright", "A11y", "E2E"],
          href: "https://example.com/article-1",
        },
        {
          title: "Quality as part of delivery flow",
          summary:
            "How to integrate quality from discovery to release without creating artificial bottlenecks.",
          tags: ["QA", "Process", "Delivery"],
          href: "https://example.com/article-2",
        },
        {
          title: "API testing with fast feedback",
          summary:
            "Best practices for testing contracts and endpoints without slowing down product evolution.",
          tags: ["API", "Testing", "CI/CD"],
          href: "https://example.com/article-3",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Contact me",
      description:
        "If you want to talk about quality, automation, or a job opportunity, email me.",
      socialsTitle: "Socials and content",
      socialsDescription: "Direct links to follow my work and publications.",
      emailLabel: "Send email",
      note: "Public contact via email only.",
    },
  },
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function getPortfolioContent() {
  await delay(80)

  return portfolioContent
}
