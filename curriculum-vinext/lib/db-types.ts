import type { WithId } from "mongodb"

// ---------------------------------------------------------------------------
// Locale
// ---------------------------------------------------------------------------
export type Locale = "pt" | "en"

// ---------------------------------------------------------------------------
// Experience
// Coleção: MONGO_COLLECTION_EXP
//
// Análise de campos:
//  - title       ✅ necessário (cargo)
//  - organization ✅ necessário (empresa/local)
//  - start       ✅ necessário (ano de início)
//  - end         ✅ opcional (ausente = atual)
//  - description ✅ necessário (resumo bilíngue → campo por idioma)
//  - locale      ✅ necessário para filtrar por idioma
//  - order       ✅ necessário para garantir ordenação consistente
//
// Campos ausentes no modelo atual que seriam úteis no futuro:
//  - technologies?: string[]  (stack usada no cargo)
//  - url?: string             (link empresa ou projeto)
// ---------------------------------------------------------------------------
export interface ExperienceDocument {
  locale: Locale
  title: string
  organization: string
  start: string
  end?: string
  description: string
  order: number
}

export type ExperienceRecord = WithId<ExperienceDocument>

// ---------------------------------------------------------------------------
// Education
// Coleção: MONGO_COLLECTION_EDU
//
// Análise de campos:
//  - title        ✅ necessário (nome do curso/certificação)
//  - organization ✅ necessário (instituição)
//  - start        ✅ necessário
//  - end          ✅ opcional (ausente = em andamento)
//  - description  ✅ necessário
//  - locale       ✅ necessário
//  - order        ✅ necessário
//
// Campos ausentes no modelo atual que seriam úteis:
//  - credential_url?: string  (link certificado)
//  - type?: "degree" | "certification" | "course"  (categorização)
// ---------------------------------------------------------------------------
export interface EducationDocument {
  locale: Locale
  title: string
  organization: string
  start: string
  end?: string
  description: string
  order: number
}

export type EducationRecord = WithId<EducationDocument>

// ---------------------------------------------------------------------------
// Projects (Repositories)
// Coleção: MONGO_COLLECTION_PROJECTS
//
// Análise de campos:
//  - title        ✅ necessário
//  - subtitle     ✅ necessário (tagline curta)
//  - description  ✅ necessário
//  - technologies ✅ necessário (array de strings)
//  - href         ✅ necessário (link do repositório)
//  - locale       ✅ necessário
//  - order        ✅ necessário
//
// Campos do modelo atual que são desnecessários no banco:
//  - Nenhum campo inútil identificado; o modelo atual é enxuto.
//
// Campos ausentes que seriam úteis:
//  - stars?: number     (destaque por popularidade — pode vir da GitHub API)
//  - featured?: boolean (marcar projetos em destaque)
// ---------------------------------------------------------------------------
export interface ProjectDocument {
  locale: Locale
  title: string
  subtitle: string
  description: string
  technologies: string[]
  href: string
  order: number
}

export type ProjectRecord = WithId<ProjectDocument>

// ---------------------------------------------------------------------------
// Articles
// Coleção: MONGO_COLLECTION_ARTICLES
//
// Análise de campos:
//  - title    ✅ necessário
//  - summary  ✅ necessário
//  - tags     ✅ necessário
//  - href     ✅ necessário (link para o artigo externo)
//  - locale   ✅ necessário
//  - order    ✅ necessário
//
// Campos desnecessários no banco:
//  - Nenhum; o modelo atual já é mínimo.
//
// Campos ausentes que seriam úteis:
//  - publishedAt?: string  (data de publicação para ordenação temporal)
//  - platform?: string     (Medium, Dev.to, LinkedIn, etc.)
// ---------------------------------------------------------------------------
export interface ArticleDocument {
  locale: Locale
  title: string
  summary: string
  tags: string[]
  href: string
  order: number
}

export type ArticleRecord = WithId<ArticleDocument>
