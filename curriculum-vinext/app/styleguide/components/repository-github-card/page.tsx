"use client"

import { useState } from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RepositoryGithubCard, type RepositoryGithubCardItem } from "@/components/repository-github-card"

const importSnippet = String.raw`import { RepositoryGithubCard } from "@/components/repository-github-card"`

const usageSnippet = String.raw`<RepositoryGithubCard
  items={[
    {
      title: "curriculum-vinext",
      subtitle: "Frontend architecture",
      description: "Portfolio and curriculum built with Next.js.",
      technologies: ["Next.js", "TypeScript", "Tailwind"],
      href: "https://github.com/username/curriculum-vinext",
    },
  ]}
/>`

const props = [
  ["RepositoryGithubCard", "items", "RepositoryGithubCardItem[]", "[]", "List of repository cards rendered vertically"],
  ["RepositoryGithubCard", "className", "string", "-", "Controls the spacing and outer layout of the list"],
  ["RepositoryGithubCard", "itemClassName", "string", "-", "Applies additional styling to each card"],
  ["RepositoryGithubCardItem", "title", "string", "required", "Primary repository title"],
  ["RepositoryGithubCardItem", "subtitle", "string", "required", "Short supporting line under the title"],
  ["RepositoryGithubCardItem", "description", "string", "required", "Longer summary text shown in the body"],
  ["RepositoryGithubCardItem", "technologies", "string[]", "required", "Technology tags displayed as badges"],
  ["RepositoryGithubCardItem", "href", "string", "required", "Destination URL for the repository"],
] as const

const repositories: RepositoryGithubCardItem[] = [
  {
    title: "curriculum-vinext",
    subtitle: "Frontend architecture",
    description:
      "Portfolio and curriculum system built with Next.js, focused on reusable blocks, strong typography, and a clean content structure.",
    technologies: ["Next.js", "React", "Tailwind", "TypeScript"],
    href: "https://github.com/username/curriculum-vinext",
  },
  {
    title: "design-system-cv",
    subtitle: "Reusable UI foundation",
    description:
      "A shared component layer for portfolio pages, cards, timelines, and profile sections with a consistent visual language.",
    technologies: ["shadcn/ui", "Radix", "CSS Variables"],
    href: "https://github.com/username/design-system-cv",
  },
  {
    title: "api-gateway-portfolio",
    subtitle: "Backend adapter layer",
    description:
      "Mocked gateway example showing how GitHub repository data can be normalized before reaching the UI layer.",
    technologies: ["API Route", "Cache", "GitHub"],
    href: "https://github.com/username/api-gateway-portfolio",
  },
]

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm leading-6">
      <code>{children}</code>
    </pre>
  )
}

export default function RepositoryGithubCardPage() {
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
            <Badge variant="secondary">GitHub</Badge>
            <h1 className="text-4xl font-bold tracking-tight">Repository GitHub Card</h1>
            <p className="max-w-2xl text-muted-foreground">
              Vertical repository cards for portfolio pages, ready to receive a list from your backend route later.
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
            <CardDescription>Each card is clickable and redirects to the repository URL.</CardDescription>
          </CardHeader>
          <CardContent>
            <RepositoryGithubCard items={repositories} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notes</CardTitle>
            <CardDescription>Structure and backend readiness.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>The component renders a vertical list by default, which keeps titles, descriptions, and tags readable.</p>
            <p>Later, your backend can map API results into <code className="rounded bg-muted px-1.5 py-0.5 text-foreground">RepositoryGithubCardItem[]</code>.</p>
            <p>The whole card is clickable, so the interaction remains obvious even on touch devices.</p>
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
            <CardDescription>Minimal list with one repository item.</CardDescription>
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
            <CardDescription>Documented API for the card list and each item.</CardDescription>
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
            <CardDescription>Clear targets and readable text hierarchy.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>Each repository card uses a single clickable surface, making the intent clear for mouse and touch users.</p>
            <p>Technologies are rendered as badges, so the stack is readable without relying on color alone.</p>
            <p>The layout keeps enough spacing between cards to avoid accidental taps on mobile.</p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
