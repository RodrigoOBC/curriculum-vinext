/**
 * Seed script: popula o MongoDB com o conteúdo inicial do portfólio.
 * Uso: npx tsx scripts/seed.ts
 *
 * - Limpa as coleções antes de inserir para evitar duplicatas.
 * - Requer as variáveis de ambiente definidas em .env
 */

import "dotenv/config"
import { MongoClient } from "mongodb"
import type {
  ArticleDocument,
  EducationDocument,
  ExperienceDocument,
  ProjectDocument,
} from "../lib/portfolio-types"

const uri = process.env.MONGO_URI!
const dbName = process.env.MONGO_DB_NAME!
const colExp = process.env.MONGO_COLLECTION_EXP!
const colEdu = process.env.MONGO_COLLECTION_EDU!
const colProjects = process.env.MONGO_COLLECTION_PROJECTS!
const colArticles = process.env.MONGO_COLLECTION_ARTICLES!

// ---------------------------------------------------------------------------
// Experience
// ---------------------------------------------------------------------------
const experience: ExperienceDocument[] = [
 {
    locale: "pt",
    title: "Tech Lead QA",
    organization: "Radix Engenharia e Software",
    start: "2023",
    description:
      "Gerenciar a equipe de garantia de qualidade e garantir a produtividade da equipe e a qualidade dos resultados entregues; " +
      "Estabelecer e implementar estratégias de automação de testes para garantir a eficiência e a precisão dos testes realizados; " +
      "Coordenar a execução de testes de software para identificar defeitos e garantir a conformidade com os requisitos do produto; " +
      "Comunicar-se com outros líderes de equipe e partes interessadas para garantir o alinhamento das prioridades de teste e o progresso do projeto; " +
      "Automatizar casos de teste baseados na web usando Cypress, Protractor e Puppeteer para melhorar a cobertura e a confiabilidade dos testes.",
    order: 1,
  },
  {
    locale: "pt",
    title: "Analista de Teste Sr.",
    organization: "Radix Engenharia e Software",
    start: "2022",
    end: "2023",
    description:
      "Fornecendo liderança para a equipe de QA e garantindo os padrões de produtividade e qualidade da equipe; " +
      "Automatizando casos de teste de API multilíngue usando frameworks como K6 para melhorar a eficiência e a precisão; " +
      "Automatizando casos de teste baseados na web usando Selenium e linguagens de programação como Python ou NodeJS para garantir compatibilidade entre diferentes navegadores e plataformas; " +
      "Automatizando casos de teste baseados na web usando Playwright e linguagens de programação como Python ou NodeJS para melhorar a eficiência dos testes; " +
      "Automatizando casos de teste baseados na web usando Cypress, Protractor e Puppeteer para melhorar a cobertura e a confiabilidade dos testes.",
    order: 2,
  },
  {
    locale: "pt",
    title: "Analista de Teste Pl.",
    organization: "Radix Engenharia e Software",
    start: "2022",
    end: "2022",
    description:
      "Automatizando casos de teste de API multilíngue usando frameworks como K6 para melhorar a eficiência e a precisão; " +
      "Automatizando casos de teste baseados na web usando Selenium e linguagens de programação como Python ou NodeJS para garantir compatibilidade entre diferentes navegadores e plataformas; " +
      "Automatizando casos de teste baseados na web usando Playwright e linguagens de programação como Python ou NodeJS para melhorar a eficiência dos testes; " +
      "Automatizando casos de teste baseados na web usando Cypress, Protractor e Puppeteer para melhorar a cobertura e a confiabilidade dos testes.",
    order: 3,
  },
  {
    locale: "pt",
    title: "Analista de Teste Jr.",
    organization: "Radix Engenharia e Software",
    start: "2020",
    end: "2022",
    description:
      "Automatizando casos de teste de API multilíngue usando frameworks como K6 para melhorar a eficiência e a precisão; " +
      "Automatizando casos de teste baseados na web usando Selenium e linguagens de programação como Python ou NodeJS para garantir compatibilidade entre diferentes navegadores e plataformas; " +
      "Automatizando casos de teste baseados na web usando Playwright e linguagens de programação como Python ou NodeJS para melhorar a eficiência dos testes; " +
      "Automatizando casos de teste baseados na web usando Cypress, Protractor e Puppeteer para melhorar a cobertura e a confiabilidade dos testes.",
    order: 4,
  },
  // --- en/Us ---
  {
    locale: "en",
    title: "Tech Lead QA",
    organization: "Radix Engineering and Software",
    start: "2023",
    description:
      "Manage the quality assurance team and ensure team productivity and the quality of delivered results; " +
      "Establish and implement test automation strategies to ensure efficiency and accuracy of tests; " +
      "Coordinate the execution of software tests to identify defects and ensure compliance with product requirements; " +
      "Communicate with other team leaders and stakeholders to ensure alignment of testing priorities and project progress; " +
      "Automate web-based test cases using Cypress, Protractor, and Puppeteer to improve test coverage and reliability.",
    order: 1,
  },
  {
    locale: "en",
    title: "Senior Test Analyst",
    organization: "Radix Engineering and Software",
    start: "2022",
    end: "2023",
    description:
      "Providing leadership to the QA team and ensuring productivity and quality standards; " +
      "Automating multilingual API test cases using frameworks such as K6 to improve efficiency and accuracy; " +
      "Automating web-based test cases using Selenium and programming languages such as Python or NodeJS to ensure compatibility across different browsers and platforms; " +
      "Automating web-based test cases using Playwright and programming languages such as Python or NodeJS to improve test efficiency; " +
      "Automating web-based test cases using Cypress, Protractor, and Puppeteer to improve test coverage and reliability.",
    order: 2,
  },
  {
    locale: "en",
    title: "Test Analyst Pl.",
    organization: "Radix Engineering and Software",
    start: "2022",
    end: "2022",
    description:
      "Automating multilingual API test cases using frameworks such as K6 to improve efficiency and accuracy; " +
      "Automating web-based test cases using Selenium and programming languages such as Python or NodeJS to ensure compatibility across different browsers and platforms; " +
      "Automating web-based test cases using Playwright and programming languages such as Python or NodeJS to improve test efficiency; " +
      "Automating web-based test cases using Cypress, Protractor, and Puppeteer to improve test coverage and reliability.",
    order: 3,
  },
  {
    locale: "en",
    title: "Junior Test Analyst",
    organization: "Radix Engineering and Software",
    start: "2020",
    end: "2022",
    description:
      "Automating multilingual API test cases using frameworks such as K6 to improve efficiency and accuracy; " +
      "Automating web-based test cases using Selenium and programming languages such as Python or NodeJS to ensure compatibility across different browsers and platforms; " +
      "Automating web-based test cases using Playwright and programming languages such as Python or NodeJS to improve test efficiency; " +
      "Automating web-based test cases using Cypress, Protractor, and Puppeteer to improve test coverage and reliability.",
    order: 4,
  },
]

// ---------------------------------------------------------------------------
// Education
// ---------------------------------------------------------------------------
const education: EducationDocument[] = [
  // --- pt ---
  {
    locale: "pt",
    title: "MBA em Gestão Estratégica de TI",
    organization: "Puc Minas",
    start: "2025",
    end: "2027",
    description: "MBA em Gestão Estratégica de TI.",
    order: 1,
  },
  {
    locale: "pt",
    title: "Ciência de dados e Big Data",
    organization: "Puc Minas",
    start: "2020",
    end: "2022",
    description: "Pós Graduação em Ciência de dados e Big Data.",
    order: 2,
  },
  {
    locale: "pt",
    title: "Ciência da Computação",
    organization: "Unicarioca",
    start: "2015",
    end: "2019",
    description: "Graduação em Ciência da Computação.",
    order: 3,
  },
  // --- en ---
  {
    locale: "en",
    title: "MBA in Strategic IT Management",
    organization: "Puc Minas",
    start: "2025",
    end: "2027",
    description: "MBA in Strategic IT Management.",
    order: 1,
  },
  {
    locale: "en",
    title: "Data Science and Big Data",
    organization: "Puc Minas",
    start: "2020",
    end: "2022",
    description: "Postgraduate in Data Science and Big Data.",
    order: 2,
  },
  {
    locale: "en",
    title: "Computer Science",
    organization: "Unicarioca",
    start: "2015",
    end: "2019",
    description: "Bachelor's Degree in Computer Science.",
    order: 3,
  },
]


// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------
const projects: ProjectDocument[] = [
  // --- pt ---
  {
    locale: "pt",
    title: "Cypress DevContainer",
    subtitle: "Framework para testes de interface com Cypress e Docker",
    description: "Framework para testes de interface com Cypress e Docker",
    technologies: ["Cypress", "Docker", "NodeJs"],
    href: "https://github.com/RodrigoOBC/Cypress_devContainer",
    order: 1,
  },
  {
    locale: "pt",
    title: "Playwright DevContainer",
    subtitle: "Framework para testes de interface com Playwright e Docker",
    description: "Framework para testes de interface com Playwright e Docker",
    technologies: ["Playwright", "Docker", "NodeJs"],
    href: "https://github.com/RodrigoOBC/playwright_page_object",
    order: 2,
  },
  {
    locale: "pt",
    title: "Framework Selenium com Python-BDD",
    subtitle: "Framework para testes de interface com Cypress e Docker",
    description: "Framework para testes de interface com Selenium e Cucumber",
    technologies: ["Selenium", "Python", "Cucumber"],
    href: "https://github.com/RodrigoOBC/FrameWorkSeleniumPythonBDD",
    order: 3,
  },
  {
    locale: "pt",
    title: "Framework Puppeteer com Cucumber",
    subtitle: "Framework para testes de interface com Puppeteer e Cucumber",
    description: "Framework para testes de interface com Puppeteer e Cucumber",
    technologies: ["Puppeteer", "NodeJs", "Cucumber"],
    href: "https://github.com/RodrigoOBC/PuppeteerFrameWork",
    order: 4,
  },
  {
    locale: "pt",
    title: "TCC Ciencia de Dados",
    subtitle: "Projeto de conclusão de curso - Pós Graduação em Ciencia de Dados",
    description: "Projeto de conclusão de curso - Pós Graduação em Ciencia de Dados",
    technologies: ["Python", "Tensorflow", "Pandas"],
    href: "https://github.com/RodrigoOBC/TCC-CienciaDados",
    order: 5,
  },
  {
    locale: "pt",
    title: "Notebooks com Redes Neurais",
    subtitle: "Alguns exemplos de Redes Neurais",
    description: "Alguns exemplos de Redes Neurais",
    technologies: ["Python", "Tensorflow", "Pandas"],
    href: "https://github.com/RodrigoOBC/Notebooks_RedesNeurais",
    order: 6,
  },
  {
    locale: "pt",
    title: "Meu Portfólio",
    subtitle: "Template de portfólio com Flask",
    description: "Template de portfólio com Flask",
    technologies: ["Python", "Html", "Flask"],
    href: "https://github.com/RodrigoOBC/my_curriculum",
    order: 7,
  },
  {
    locale: "pt",
    title: "Framework Playwright com NodeJs",
    subtitle: "Framework Playwright com NodeJs + Docker",
    description: "Template de teste de interface com Playwright e NodeJs.",
    technologies: ["Playwright", "Docker", "NodeJs"],
    href: "https://github.com/RodrigoOBC/PlaywrightFrameworkNodejs",
    order: 8,
  },
  {
    locale: "pt",
    title: "Framework de Teste de API com Playwright",
    subtitle: "Framework de Teste de API com Playwright + Docker + NodeJs",
    description: "Framework de Teste de API com Playwright + Docker + NodeJs.",
    technologies: ["Playwright", "Docker", "NodeJs"],
    href: "https://github.com/RodrigoOBC/playwrightApiTest",
    order: 9,
  },
  // --- en ---
  {
    locale: "en",
    title: "Cypress DevContainer",
    subtitle: "Framework for interface testing with Cypress and Docker",
    description: "Framework for interface testing with Cypress and Docker",
    technologies: ["Cypress", "Docker", "NodeJs"],
    href: "https://github.com/RodrigoOBC/Cypress_devContainer",
    order: 1,
  },
  {
    locale: "en",
    title: "Playwright DevContainer",
    subtitle: "Framework for interface testing with Playwright and Docker",
    description: "Framework for interface testing with Playwright and Docker",
    technologies: ["Playwright", "Docker", "NodeJs"],
    href: "https://github.com/RodrigoOBC/playwright_page_object",
    order: 2,
  },
  {
    locale: "en",
    title: "Selenium Framework with Python-BDD",
    subtitle: "Framework for interface testing with Selenium and Cucumber",
    description: "Framework for interface testing with Selenium and Cucumber",
    technologies: ["Selenium", "Python", "Cucumber"],
    href: "https://github.com/RodrigoOBC/FrameWorkSeleniumPythonBDD",
    order: 3,
  },
  {
    locale: "en",
    title: "Puppeteer Framework with Cucumber",
    subtitle: "Framework for interface testing with Puppeteer and Cucumber",
    description: "Framework for interface testing with Puppeteer and Cucumber",
    technologies: ["Puppeteer", "NodeJs", "Cucumber"],
    href: "https://github.com/RodrigoOBC/PuppeteerFrameWork",
    order: 4,
  },
  {
    locale: "en",
    title: "Final Project - Data Science",
    subtitle: "Final project for the Postgraduate course in Data Science",
    description: "Final project for the Postgraduate course in Data Science",
    technologies: ["Python", "Tensorflow", "Pandas"],
    href: "https://github.com/RodrigoOBC/TCC-CienciaDados",
    order: 5,
  },
  {
    locale: "en",
    title: "Notebook with Neural Networks",
    subtitle: "Some examples of Neural Networks",
    description: "Some examples of Neural Networks",
    technologies: ["Python", "Tensorflow", "Pandas"],
    href: "https://github.com/RodrigoOBC/Notebooks_RedesNeurais",
    order: 6,
  },
  {
    locale: "en",
    title: "My Portfolio",
    subtitle: "Portfolio template with Flask",
    description: "Portfolio template with Flask",
    technologies: ["Python", "Html", "Flask"],
    href: "https://github.com/RodrigoOBC/my_curriculum",
    order: 7,
  },
  {
    locale: "en",
    title: "Playwright Framework with NodeJs",
    subtitle: "Playwright framework with NodeJs + Docker",
    description: "Interface test template with Playwright and NodeJs. The test is performed in a Docker container",
    technologies: ["Playwright", "Docker", "NodeJs"],
    href: "https://github.com/RodrigoOBC/PlaywrightFrameworkNodejs",
    order: 8,
  },
  {
    locale: "en",
    title: "API Test with Playwright",
    subtitle: "API Test Framework with Playwright + Docker + NodeJs",
    description: "API Test Framework with Playwright + Docker + NodeJs. The test is performed in a Docker container",
    technologies: ["Playwright", "Docker", "NodeJs"],
    href: "https://github.com/RodrigoOBC/playwrightApiTest",
    order: 9,
  },
]

// ---------------------------------------------------------------------------
// Articles
// ---------------------------------------------------------------------------
const articles: ArticleDocument[] = [
  {
    locale: "pt",
    title: "Como estabilizar uma suíte de testes E2E",
    summary:
      "Estratégias para reduzir flakiness, melhorar sinais de falha e manter testes úteis ao longo do tempo.",
    tags: ["Playwright", "A11y", "E2E"],
    href: "https://example.com/artigo-1",
    order: 1,
  },
  {
    locale: "pt",
    title: "Qualidade como parte do fluxo de entrega",
    summary:
      "Como integrar qualidade desde a descoberta até o release sem criar gargalos artificiais.",
    tags: ["QA", "Processo", "Delivery"],
    href: "https://example.com/artigo-2",
    order: 2,
  },
  {
    locale: "pt",
    title: "API testing com feedback rápido",
    summary:
      "Boas práticas para testar contratos e endpoints sem travar a evolução do produto.",
    tags: ["API", "Testes", "CI/CD"],
    href: "https://example.com/artigo-3",
    order: 3,
  },
  {
    locale: "en",
    title: "How to stabilize an E2E test suite",
    summary:
      "Strategies to reduce flakiness, improve failure signals, and keep tests useful over time.",
    tags: ["Playwright", "A11y", "E2E"],
    href: "https://example.com/article-1",
    order: 1,
  },
  {
    locale: "en",
    title: "Quality as part of delivery flow",
    summary:
      "How to integrate quality from discovery to release without creating artificial bottlenecks.",
    tags: ["QA", "Process", "Delivery"],
    href: "https://example.com/article-2",
    order: 2,
  },
  {
    locale: "en",
    title: "API testing with fast feedback",
    summary:
      "Best practices for testing contracts and endpoints without slowing down product evolution.",
    tags: ["API", "Testing", "CI/CD"],
    href: "https://example.com/article-3",
    order: 3,
  },
]

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function seed() {
  const client = new MongoClient(uri)

  try {
    await client.connect()
    const db = client.db(dbName)

    console.log(`Connected to database: ${dbName}`)

    const collections = [
      { name: colExp, data: experience },
      { name: colEdu, data: education },
      { name: colProjects, data: projects },
      { name: colArticles, data: articles },
    ] as const

    for (const col of collections) {
      const collection = db.collection(col.name)
      const existing = await collection.countDocuments()

      if (existing > 0) {
        console.log(`⚠ Coleção "${col.name}" já tem ${existing} documentos. Limpando antes de inserir...`)
        await collection.deleteMany({})
      }

      const result = await collection.insertMany(col.data as never[])
      console.log(`✓ "${col.name}": ${result.insertedCount} documentos inseridos`)
    }

    console.log("\nSeed concluído com sucesso.")
  } finally {
    await client.close()
  }
}

seed().catch((err) => {
  console.error("Erro no seed:", err)
  process.exit(1)
})
