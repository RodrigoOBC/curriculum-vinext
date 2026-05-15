import "server-only"

import { getDb } from "@/lib/db"
import type {
  ArticleCardItem,
  ExperienceDocument,
  EducationDocument,
  Locale,
  RepositoryGithubCardItem,
  ProjectDocument,
  ArticleDocument,
  TimelineItem,
} from "@/lib/portfolio-types"

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
export type { Locale }

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

// ---------------------------------------------------------------------------
// Static content (hero, nav, contact — não muda com frequência)
// ---------------------------------------------------------------------------
const staticContent: Record<Locale, Omit<PortfolioLocaleContent, "experience" | "education" | "repositories" | "articles">> = {
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
      eyebrow: "QA Lead - Playwright - Cypress - API Testing",
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

// ---------------------------------------------------------------------------
// Section labels (bilíngue, mas estrutural — não precisa do banco)
// ---------------------------------------------------------------------------
const sectionLabels: Record<Locale, {
  experience: { eyebrow: string; title: string; currentLabel: string; description: string }
  education: { eyebrow: string; title: string; currentLabel: string }
  repositories: { eyebrow: string; title: string; description: string }
  articles: { eyebrow: string; title: string; description: string }
}> = {
  pt: {
    experience: { eyebrow: "Carreira", title: "Experiência", currentLabel: "Atual", description: "" },
    education: { eyebrow: "Formação", title: "Educação", currentLabel: "Atual" },
    repositories: {
      eyebrow: "GitHub",
      title: "Repositórios",
      description: "Projetos de automação, UI e utilitários de engenharia.",
    },
    articles: {
      eyebrow: "Conteúdo",
      title: "Artigos",
      description: "Publicações com foco em testes automatizados, qualidade e decisões práticas de engenharia.",
    },
  },
  en: {
    experience: { eyebrow: "Career", title: "Experience", currentLabel: "Current", description: "" },
    education: { eyebrow: "Education", title: "Education", currentLabel: "Current" },
    repositories: {
      eyebrow: "GitHub",
      title: "Repositories",
      description: "Automation, UI, and engineering utility projects.",
    },
    articles: {
      eyebrow: "Content",
      title: "Articles",
      description: "Publications focused on test automation, quality, and practical engineering choices.",
    },
  },
}

// ---------------------------------------------------------------------------
// Helpers: map MongoDB documents → component types
// ---------------------------------------------------------------------------
function toTimelineItem(doc: ExperienceDocument | EducationDocument): TimelineItem {
  return {
    title: doc.title,
    organization: doc.organization,
    start: doc.start,
    ...(doc.end ? { end: doc.end } : {}),
    description: doc.description,
  }
}

function toRepositoryItem(doc: ProjectDocument): RepositoryGithubCardItem {
  return {
    title: doc.title,
    subtitle: doc.subtitle,
    description: doc.description,
    technologies: doc.technologies,
    href: doc.href,
  }
}

function toArticleItem(doc: ArticleDocument): ArticleCardItem {
  return {
    title: doc.title,
    summary: doc.summary,
    tags: doc.tags,
    href: doc.href,
  }
}

// ---------------------------------------------------------------------------
// Main fetch function
// ---------------------------------------------------------------------------
export async function getPortfolioContent(): Promise<PortfolioContent> {
  const db = await getDb()

  const colExp = process.env.MONGO_COLLECTION_EXP!
  const colEdu = process.env.MONGO_COLLECTION_EDU!
  const colProjects = process.env.MONGO_COLLECTION_PROJECTS!
  const colArticles = process.env.MONGO_COLLECTION_ARTICLES!

  const [experienceDocs, educationDocs, projectDocs, articleDocs] = await Promise.all([
    db.collection<ExperienceDocument>(colExp).find({}).sort({ order: 1 }).toArray(),
    db.collection<EducationDocument>(colEdu).find({}).sort({ order: 1 }).toArray(),
    db.collection<ProjectDocument>(colProjects).find({}).sort({ order: 1 }).toArray(),
    db.collection<ArticleDocument>(colArticles).find({}).sort({ order: 1 }).toArray(),
  ])

  const locales: Locale[] = ["pt", "en"]

  const result = {} as PortfolioContent

  for (const locale of locales) {
    const labels = sectionLabels[locale]

    result[locale] = {
      ...staticContent[locale],
      experience: {
        eyebrow: labels.experience.eyebrow,
        title: labels.experience.title,
        currentLabel: labels.experience.currentLabel,
        items: experienceDocs
          .filter((d) => d.locale === locale)
          .map(toTimelineItem),
      },
      education: {
        eyebrow: labels.education.eyebrow,
        title: labels.education.title,
        currentLabel: labels.education.currentLabel,
        items: educationDocs
          .filter((d) => d.locale === locale)
          .map(toTimelineItem),
      },
      repositories: {
        eyebrow: labels.repositories.eyebrow,
        title: labels.repositories.title,
        description: labels.repositories.description,
        items: projectDocs
          .filter((d) => d.locale === locale)
          .map(toRepositoryItem),
      },
      articles: {
        eyebrow: labels.articles.eyebrow,
        title: labels.articles.title,
        description: labels.articles.description,
        items: articleDocs
          .filter((d) => d.locale === locale)
          .map(toArticleItem),
      },
    }
  }

  return result
}
