"use client"

import { useState } from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Timeline, type TimelineItem } from "@/components/timeline"

const importSnippet = String.raw`import { Timeline } from "@/components/timeline"`

const usageSnippet = String.raw`<Timeline
  title="Jobs"
  items={[
    {
      title: "Tester Jr",
      organization: "Itau",
      start: "02-2015",
      end: undefined,
      description: "Texto livre com resumo da função, responsabilidades e contexto do cargo.",
    },
  ]}
/>`

const props = [
  ["Timeline", "eyebrow", "string", '"Experiência"', "Small label above the title"],
  ["Timeline", "title", "string", '"Timeline"', "Section title"],
  ["Timeline", "items", "TimelineItem[]", "required", "Timeline entries rendered vertically"],
  ["Timeline", "currentLabel", "string", '"Atual"', "Label shown when no end date exists"],
  ["TimelineItem", "title", "string", "required", "Role name"],
  ["TimelineItem", "organization", "string", "required", "Employer or school name"],
  ["TimelineItem", "start", "string", "required", "Start date in mm-aaaa"],
  ["TimelineItem", "end", "string", "optional", "End date in mm-aaaa; omit for current"],
  ["TimelineItem", "description", "string", "required", "Free text summary"],
] as const

const items: TimelineItem[] = [
  {
    title: "Tester Jr",
    organization: "Itau",
    start: "02-2015",
    end: undefined,
    description:
      "Atuação em testes de regressão, validação funcional e apoio ao time na rotina de entrega, com foco em qualidade e rastreabilidade.",
  },
  {
    title: "Web Developer",
    organization: "Mutation Media",
    start: "09-2015",
    end: "11-2015",
    description:
      "Desenvolvimento de páginas e componentes para campanhas e produtos digitais, cuidando de consistência visual e implementação responsiva.",
  },
]

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm leading-6">
      <code>{children}</code>
    </pre>
  )
}

export default function TimelinePage() {
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
            <Badge variant="secondary">Timeline</Badge>
            <h1 className="text-4xl font-bold tracking-tight">Timeline</h1>
            <p className="max-w-2xl text-muted-foreground">
              Timeline vertical para experiência profissional, estudos ou qualquer sequência cronológica com título, organização, período e descrição.
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
            <CardDescription>Baseado na estrutura da imagem, com linha vertical e pontos de evento.</CardDescription>
          </CardHeader>
          <CardContent>
            <Timeline eyebrow="Expertise" title="Timeline" items={items} currentLabel="Current" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notas</CardTitle>
            <CardDescription>Composição e leitura visual.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>O título é renderizado como <code className="rounded bg-muted px-1.5 py-0.5 text-foreground">Título - Organização</code>.</p>
            <p>O período mostra <code className="rounded bg-muted px-1.5 py-0.5 text-foreground">mm-aaaa - mm-aaaa</code> e, sem final, exibe o badge de atual.</p>
            <p>O desenho usa a vertical timeline, o ponto de destaque e o bloco de conteúdo para manter a leitura rápida.</p>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Import</CardTitle>
            <CardDescription>Uso básico do componente.</CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock>{importSnippet}</CodeBlock>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Basic usage</CardTitle>
            <CardDescription>Exemplo com um item atual e outro finalizado.</CardDescription>
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
            <CardDescription>API documentada para a timeline.</CardDescription>
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
            <CardTitle>Acessibilidade</CardTitle>
            <CardDescription>Leitura clara em texto e estado visual.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>Os eventos da timeline usam texto explícito para período, então a informação não depende só da cor.</p>
            <p>O ponto e a linha vertical ajudam a escanear a sequência de eventos sem perder contexto.</p>
            <p>O badge de <code className="rounded bg-muted px-1.5 py-0.5 text-foreground">Atual</code> deixa o estado atual fácil de identificar.</p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
