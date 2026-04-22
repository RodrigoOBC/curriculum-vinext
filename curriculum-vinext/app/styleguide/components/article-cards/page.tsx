"use client"

import { useState } from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArticleCards, type ArticleCardItem } from "@/components/article-cards"

const importSnippet = String.raw`import { ArticleCards } from "@/components/article-cards"`

const usageSnippet = String.raw`<ArticleCards
  items={[
    {
      title: "Como estruturar um portfólio moderno",
      summary: "Boas práticas para criar uma vitrine clara e objetiva.",
      tags: ["Next.js", "UI", "Portfolio"],
      href: "https://example.com/artigo",
    },
  ]}
/>`

const props = [
  ["ArticleCards", "items", "ArticleCardItem[]", "[]", "List of article cards rendered vertically"],
  ["ArticleCards", "className", "string", "-", "Controls spacing and outer layout"],
  ["ArticleCards", "itemClassName", "string", "-", "Applies additional styling to each item card"],
  ["ArticleCardItem", "title", "string", "required", "Main article title"],
  ["ArticleCardItem", "summary", "string", "required", "Short summary shown under the title"],
  ["ArticleCardItem", "tags", "string[]", "required", "Article tags rendered as badges"],
  ["ArticleCardItem", "href", "string", "required", "External article URL opened in a new tab"],
] as const

const articles: ArticleCardItem[] = [
  {
    title: "Como estruturar um portfólio moderno",
    summary:
      "Boas práticas para montar um portfólio com foco em clareza, escaneabilidade e destaque para projetos e experiências.",
    tags: ["Next.js", "Design", "Portfolio"],
    href: "https://example.com/artigo-1",
  },
  {
    title: "Componentes reutilizáveis em interfaces pessoais",
    summary:
      "Como pensar blocos independentes para acelerar manutenção e deixar a interface pronta para evolução futura.",
    tags: ["React", "UI", "Componentes"],
    href: "https://example.com/artigo-2",
  },
  {
    title: "Acessibilidade prática em cards e listas",
    summary:
      "Pequenos ajustes de semântica, contraste e foco que melhoram muito a experiência de navegação.",
    tags: ["A11y", "UX", "HTML"],
    href: "https://example.com/artigo-3",
  },
]

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm leading-6">
      <code>{children}</code>
    </pre>
  )
}

export default function ArticleCardsPage() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode((value) => !value)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div className="mx-auto max-w-7xl space-y-10 p-8">
      <section className="space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-2">
            <Badge variant="secondary">Articles</Badge>
            <h1 className="text-4xl font-bold tracking-tight">Article Cards</h1>
            <p className="max-w-2xl text-muted-foreground">
              Vertical article cards with title, summary, tags, and a clear CTA that opens the article in a new tab.
            </p>
          </div>

          <Button variant="outline" onClick={toggleDarkMode}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </Button>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <Card>
          <CardHeader>
            <CardTitle>Live demo</CardTitle>
            <CardDescription>Mock data for now, ready to receive backend data later.</CardDescription>
          </CardHeader>
          <CardContent>
            <ArticleCards items={articles} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notes</CardTitle>
            <CardDescription>Structure and interaction.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>The CTA uses <code className="rounded bg-muted px-1.5 py-0.5 text-foreground">target=&quot;_blank&quot;</code> and <code className="rounded bg-muted px-1.5 py-0.5 text-foreground">rel=&quot;noopener noreferrer&quot;</code>.</p>
            <p>Tags are rendered as badges to keep the metadata easy to scan.</p>
            <p>The layout is vertical so longer summaries stay readable on mobile and desktop.</p>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Import</CardTitle>
            <CardDescription>Use the shared component from the root components folder.</CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock>{importSnippet}</CodeBlock>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Basic usage</CardTitle>
            <CardDescription>Minimal mock example.</CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock>{usageSnippet}</CodeBlock>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Props</CardTitle>
            <CardDescription>Documented API for the list and each article item.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-left text-muted-foreground">
                    <th className="py-2 pr-4 font-medium">Component</th>
                    <th className="py-2 pr-4 font-medium">Prop</th>
                    <th className="py-2 pr-4 font-medium">Type</th>
                    <th className="py-2 pr-4 font-medium">Default</th>
                    <th className="py-2 font-medium">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {props.map(([component, prop, type, defaultValue, notes]) => (
                    <tr key={`${component}-${prop}`} className="border-b last:border-0 align-top">
                      <td className="py-3 pr-4 font-medium">{component}</td>
                      <td className="py-3 pr-4">{prop}</td>
                      <td className="py-3 pr-4 font-mono text-xs">{type}</td>
                      <td className="py-3 pr-4 font-mono text-xs">{defaultValue}</td>
                      <td className="py-3">{notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Accessibility</CardTitle>
            <CardDescription>Clear CTA, readable hierarchy, and safe external navigation.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>The button text is explicit, so the action is clear without relying on iconography.</p>
            <p>External links open in a new tab to keep the portfolio page accessible while the reader explores the article.</p>
            <p>Tags are visible as text labels, which helps screen readers and low-vision users understand the context.</p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
