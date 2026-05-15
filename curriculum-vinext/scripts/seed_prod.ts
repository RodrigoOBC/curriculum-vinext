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
// Dados reais migrados do banco legado.
// Mapeamento: position→title, company→organization, startDate→start (ano),
// endDate→end (ano; Presente/Present omitido), descriptions[]→description,
// lang pt/Br→locale pt, lang en/Us→locale en. Campo "state" descartado.
// ---------------------------------------------------------------------------
const experience: ExperienceDocument[] = [
  // --- pt/Br ---
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
// Dados reais migrados do banco legado.
// Mapeamento: course→title, institution→organization, startDate→start,
// endDate→end, description→description, lang pt→locale pt, lang en→locale en.
// Campos "state" e "type" descartados (type já está na description).
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
// Dados reais migrados do banco legado.
// Mapeamento: title→title, subtitle→subtitle, description→description,
// link→href, tags→technologies, pt.github[]→locale pt, en.github[]→locale en.
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
  // --- pt ---
  {
    locale: "pt",
    title: "Docker para QAs: Padronizando seus Testes com Playwright",
    summary:
      "No mundo dinâmico do QA, a agilidade e a confiabilidade dos testes são cruciais. O Docker surge como um aliado poderoso, oferecendo um ambiente padronizado e replicável para automatizar seus testes com o Playwright. Neste artigo, embarcaremos em uma jornada para otimizar seus testes com Docker, desde a instalação até a execução.",
    tags: ["Playwright", "Docker", "E2E"],
    href: "https://medium.com/@rodrigo.oliveiracabral/docker-para-qas-padronizando-seus-testes-com-playwright-8a0d1babd90d",
    order: 1,
  },
  {
    locale: "pt",
    title: "Playwright Básico — Introdução à Automação de Testes Web",
    summary:
      "Aprenda os fundamentos da automação de testes web com Playwright: desde a configuração inicial até a navegação e interação com elementos da página. Utilizando JavaScript.",
    tags: ["Playwright", "JavaScript", "E2E"],
    href: "https://medium.com/p/e90428b176d2",
    order: 2,
  },
  {
    locale: "pt",
    title: "Automatizando testes com Playwright e PageObject: uma abordagem prática",
    summary:
      "Neste artigo, exploraremos como o “pageobject” combinado com a poderosa biblioteca Playwright pode revolucionar a maneira como automatizamos testes, tornando-os mais práticos e eficientes. Prepare-se para descobrir uma abordagem que pode acelerar seu fluxo de trabalho e trazer resultados consistentes em suas automações de testes web.",
    tags: ["Playwright", "PageObject", "E2E"],
    href: "https://medium.com/p/e0f7aa39e36f",
    order: 3,
  },
  {
    locale: "pt",
    title: "Playwright vs. Cypress — Uma Análise Detalhada",
    summary:
      "Um pequeno artigo comparativo entre as duas ferramentas mais populares de teste de interface ou teste E2E. Quem levará a melhor nessa disputa? Playwright ou Cypress?",
    tags: ["Playwright", "Cypress", "E2E"],
    href: "https://medium.com/p/e7ae66198c95",
    order: 4,
  },
  {
    locale: "pt",
    title: "Docker para QAs: Ambiente de desenvolvimento Cypress com Docker",
    summary:
      "Descubra o segredo que as maiores empresas de tecnologia estão usando para revolucionar seus processos de qualidade! Se você já ouviu falar sobre Cypress e Docker, mas nunca soube exatamente como integrá-los para alcançar testes automatizados eficientes, este artigo é para você.",
    tags: ["Cypress", "Docker", "E2E"],
    href: "https://medium.com/@rodrigo.oliveiracabral/docker-para-qas-ambiente-de-desenvolvimento-cypress-com-docker-545daa77824a",
    order: 5,
  },
  {
    locale: "pt",
    title: "Teste de Integração com k6",
    summary:
      "Ao ler este artigo, você aprenderá a utilizar a ferramenta k6 para realizar testes de integração em suas APIs RESTful. O k6 é uma ferramenta gratuita com uma curva de aprendizado acessível. Embora seja conhecido por seus recursos de teste de “stress” e carga, o k6 também é uma excelente opção para testes de integração, como veremos a seguir.",
    tags: ["k6", "API", "Integration"],
    href: "https://medium.com/@rodrigo.oliveiracabral/teste-de-integra%C3%A7%C3%A3o-com-k6-10a5f3912e75",
    order: 6,
  },
  {
    locale: "pt",
    title: "De QA para QA: Criando seu primeiro Portifólio WebSite",
    summary:
      "Esse artigo será dividido em 2 partes e nele apresentarei o meu “Site Curriculum” e os desafios que enfrentei para criá-lo. Compartilharei no fim do artigo o código-fonte para que vocês possam usá-lo como “template”.",
    tags: ["Portfolio", "WebSite", "QA"],
    href: "https://medium.com/@rodrigo.oliveiracabral/de-qa-para-qa-criando-seu-primeiro-portif%C3%B3lio-website-68179bc1bffc",
    order: 7,
  },
  // --- en ---
  {
    locale: "en",
    title: "Docker for QAs: Playwright Tests On Docker",
    summary:
      "In the dynamic world of QA, agility and reliability in testing are crucial. Docker emerges as a powerful ally, offering a standardized and replicable environment to automate your tests with Playwright. In this article, we will embark on a journey to optimize your tests with Docker, from installation to execution.",
    tags: ["Playwright", "Docker", "E2E"],
    href: "https://dev.to/rodrigoobc/docker-for-qas-playwright-tests-on-docker-46cj",
    order: 1,
  },
  {
    locale: "en",
    title: "Getting Started with Playwright — Introduction to Web Testing Automation",
    summary:
      "Learn the basics of web testing automation with Playwright: from initial setup to navigating and interacting with page elements. Using JavaScript.",
    tags: ["Playwright", "JavaScript", "E2E"],
    href: "https://dev.to/rodrigoobc/getting-started-with-playwright-introduction-to-web-testing-automation-1fdh",
    order: 2,
  },
  {
    locale: "en",
    title: "Automating Tests with Playwright and PageObject: A Practical Approach",
    summary:
      "Discover the synergy between Playwright and PageObject, unraveling a powerhouse combination that not only streamlines operational processes but also empowers the creation of resilient and easily maintainable tests.",
    tags: ["Playwright", "PageObject", "E2E"],
    href: "https://dev.to/rodrigoobc/automating-tests-with-playwright-and-pageobject-a-practical-approach-5c12",
    order: 3,
  },
  {
    locale: "en",
    title: "Playwright vs. Cypress — A Detailed Analysis",
    summary:
      "A brief comparative article between the two most popular tools for interface testing or end-to-end (E2E) testing. Who will come out on top in this showdown? Playwright or Cypress?",
    tags: ["Playwright", "Cypress", "E2E"],
    href: "https://medium.com/@rodrigo.oliveiracabral/playwright-vs-cypress-a-detailed-analysis-0d59d6b3eddd",
    order: 4,
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
