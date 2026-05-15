export type Locale = "pt" | "en"

export type TimelineItem = {
  title: string
  organization: string
  start: string
  end?: string
  description: string
}

export type RepositoryGithubCardItem = {
  title: string
  subtitle: string
  description: string
  technologies: string[]
  href: string
}

export type ArticleCardItem = {
  title: string
  summary: string
  tags: string[]
  href: string
}

export interface ExperienceDocument {
  locale: Locale
  title: string
  organization: string
  start: string
  end?: string
  description: string
  order: number
}

export interface EducationDocument {
  locale: Locale
  title: string
  organization: string
  start: string
  end?: string
  description: string
  order: number
}

export interface ProjectDocument {
  locale: Locale
  title: string
  subtitle: string
  description: string
  technologies: string[]
  href: string
  order: number
}

export interface ArticleDocument {
  locale: Locale
  title: string
  summary: string
  tags: string[]
  href: string
  order: number
}

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
