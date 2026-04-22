"use client"

import { useState } from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BlogIcon, ContactIcon, PortifolioIcon, ResumeIcon, AbautIcon } from "@/components/icons"

const iconDocs = [
  {
    name: "ResumeIcon",
    component: "ResumeIcon",
    description: "File-based icon for resume and CV sections.",
    usage: "<ResumeIcon className=\"text-primary\" />",
  },
  {
    name: "AbautIcon",
    component: "AbautIcon",
    description: "Profile icon for about or bio sections.",
    usage: "<AbautIcon className=\"text-primary\" />",
  },
  {
    name: "PortifolioIcon",
    component: "PortifolioIcon",
    description: "Briefcase icon for work and portfolio links.",
    usage: "<PortifolioIcon className=\"text-primary\" />",
  },
  {
    name: "BlogIcon",
    component: "BlogIcon",
    description: "Notebook icon for posts, articles, and notes.",
    usage: "<BlogIcon className=\"text-primary\" />",
  },
  {
    name: "ContactIcon",
    component: "ContactIcon",
    description: "Mail icon for contact actions and links.",
    usage: "<ContactIcon className=\"text-primary\" />",
  },
] as const

const icons = [
  { name: "Resume", Icon: ResumeIcon },
  { name: "Abaut", Icon: AbautIcon },
  { name: "Portifolio", Icon: PortifolioIcon },
  { name: "Blog", Icon: BlogIcon },
  { name: "Contact", Icon: ContactIcon },
] as const

const sizeMap = {
  sm: 20,
  md: 28,
  lg: 36,
} as const

const importUsage = String.raw`import {
  ResumeIcon,
  AbautIcon,
  PortifolioIcon,
  BlogIcon,
  ContactIcon,
} from "@/components/icons"`

const exampleUsage = String.raw`<div className="flex items-center gap-3">
  <ResumeIcon className="text-primary" />
  <AbautIcon className="text-primary" />
  <PortifolioIcon className="text-primary" />
  <BlogIcon className="text-primary" />
  <ContactIcon className="text-primary" />
</div>`

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm leading-6">
      <code>{children}</code>
    </pre>
  )
}

export default function IconSetPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [size, setSize] = useState<keyof typeof sizeMap>("md")

  const toggleDarkMode = () => {
    setDarkMode((value) => !value)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div className="mx-auto max-w-7xl space-y-10 p-8">
      <section className="space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-2">
            <Badge variant="secondary">Icons</Badge>
            <h1 className="text-4xl font-bold tracking-tight">Resume, About, Portfolio, Blog, Contact Icons</h1>
            <p className="max-w-2xl text-muted-foreground">
              Custom lucide-based icons wrapped for consistent use across the CV and portfolio experience.
            </p>
          </div>
          <Button variant="outline" onClick={toggleDarkMode}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </Button>
        </div>

        <div className="flex flex-wrap gap-2">
          {Object.keys(sizeMap).map((key) => (
            <Button
              key={key}
              variant={size === key ? "default" : "outline"}
              onClick={() => setSize(key as keyof typeof sizeMap)}
            >
              {key.toUpperCase()}
            </Button>
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
        {icons.map(({ name, Icon }) => (
          <Card key={name}>
            <CardHeader>
              <CardTitle className="text-base">{name}</CardTitle>
              <CardDescription>{iconDocs.find((item) => item.name === `${name}Icon`)?.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center pb-6">
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl border bg-muted/40 text-primary">
                <Icon size={sizeMap[size]} strokeWidth={1.8} aria-hidden="true" />
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Import</CardTitle>
            <CardDescription>Single entry point for all project icons.</CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock>{importUsage}</CodeBlock>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Basic usage</CardTitle>
            <CardDescription>Render the icons inline with text or actions.</CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock>{exampleUsage}</CodeBlock>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <CardHeader>
            <CardTitle>Props</CardTitle>
            <CardDescription>These icons inherit lucide-react props.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-left text-muted-foreground">
                    <th className="py-2 pr-4 font-medium">Prop</th>
                    <th className="py-2 pr-4 font-medium">Type</th>
                    <th className="py-2 pr-4 font-medium">Default</th>
                    <th className="py-2 font-medium">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b align-top">
                    <td className="py-3 pr-4 font-medium">size</td>
                    <td className="py-3 pr-4 font-mono text-xs">number</td>
                    <td className="py-3 pr-4 font-mono text-xs">24</td>
                    <td className="py-3">Controls the rendered icon size in pixels.</td>
                  </tr>
                  <tr className="border-b align-top">
                    <td className="py-3 pr-4 font-medium">strokeWidth</td>
                    <td className="py-3 pr-4 font-mono text-xs">number</td>
                    <td className="py-3 pr-4 font-mono text-xs">2</td>
                    <td className="py-3">Use a thinner stroke for denser UIs.</td>
                  </tr>
                  <tr className="border-b align-top">
                    <td className="py-3 pr-4 font-medium">className</td>
                    <td className="py-3 pr-4 font-mono text-xs">string</td>
                    <td className="py-3 pr-4 font-mono text-xs">-</td>
                    <td className="py-3">Set color, spacing, and layout utilities.</td>
                  </tr>
                  <tr className="align-top">
                    <td className="py-3 pr-4 font-medium">aria-hidden</td>
                    <td className="py-3 pr-4 font-mono text-xs">boolean</td>
                    <td className="py-3 pr-4 font-mono text-xs">true when decorative</td>
                    <td className="py-3">Add an accessible label when the icon is the only content.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Accessibility</CardTitle>
            <CardDescription>Keep icons clear for assistive tech.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>Use these icons as decorative marks when text already explains the action.</p>
            <p>When the icon is the only visible control, give the parent button or link an accessible name.</p>
            <p>Match icon color to surrounding text or tokens so contrast stays consistent in both themes.</p>
            <div className="h-px bg-border" />
            <p className="text-foreground">Example: <code className="rounded bg-muted px-1.5 py-0.5">aria-label=&quot;Open contact form&quot;</code></p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
