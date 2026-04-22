"use client"

import type { ReactNode } from "react"
import { useState } from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TagsSkills, type TagsSkillsProps } from "@/components/tags-skills"

const importSnippet = String.raw`import { TagsSkills } from "@/components/tags-skills"`

const usageSnippet = String.raw`<TagsSkills
  title="Tags and skills"
  tags={[
    { label: "Next.js", variant: "default" },
    { label: "Tailwind", variant: "outline" },
  ]}
  skills={[
    { label: "UI systems", level: 92, note: "Design tokens and reusable components" },
    { label: "Accessibility", level: 86, note: "Keyboard and screen reader friendly" },
  ]}
/>`

const props = [
  ["TagsSkills", "eyebrow", "string", '"Profile"', "Small label above the title"],
  ["TagsSkills", "title", "string", '"Tags and skills"', "Main heading for the card"],
  ["TagsSkills", "description", "string", "optional", "Supporting copy under the title"],
  ["TagsSkills", "tags", "Tag[]", "[]", "Tag chips rendered as shadcn buttons"],
  ["TagsSkills", "skills", "Skill[]", "[]", "Skill rows with progress indicators"],
  ["TagsSkills", "activeTags", "string[]", "[]", "Selected tags receive the primary style"],
  ["TagsSkills", "compact", "boolean", "false", "Tightens the layout into two even columns"],
  ["TagsSkills", "loading", "boolean", "false", "Shows skeleton placeholders"],
  ["TagsSkills", "onTagSelect", "(label: string) => void", "optional", "Handles tag button clicks"],
] as const

const defaultTags = [
  { label: "Next.js", variant: "default" as const },
  { label: "React", variant: "secondary" as const },
  { label: "TypeScript", variant: "outline" as const },
  { label: "Tailwind", variant: "ghost" as const },
  { label: "Accessibility", variant: "outline" as const },
  { label: "Design Systems", variant: "secondary" as const },
]

const defaultSkills = [
  { label: "UI systems", level: 96, note: "Composable components and design tokens" },
  { label: "Frontend architecture", level: 89, note: "App Router, data flow, and composition" },
  { label: "Accessibility", level: 91, note: "Keyboard support and semantic markup" },
]

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm leading-6">
      <code>{children}</code>
    </pre>
  )
}

function DemoFrame({ children }: { children: ReactNode }) {
  return <div className="rounded-xl border bg-background p-3">{children}</div>
}

export default function TagsSkillsPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [compact, setCompact] = useState(false)
  const [loading, setLoading] = useState(false)
  const [activeTags, setActiveTags] = useState<string[]>(["Next.js", "Accessibility"])

  const toggleDarkMode = () => {
    setDarkMode((value) => !value)
    document.documentElement.classList.toggle("dark")
  }

  const handleTagSelect = (label: string) => {
    setActiveTags((current) =>
      current.includes(label) ? current.filter((item) => item !== label) : [...current, label]
    )
  }

  const demoProps: TagsSkillsProps = {
    title: "Frontend profile",
    description: "Use this block to group the technologies, disciplines, and strengths that matter most.",
    tags: defaultTags,
    skills: defaultSkills,
    activeTags,
    compact,
    loading,
    onTagSelect: handleTagSelect,
  }

  return (
    <div className="mx-auto max-w-7xl space-y-10 p-8">
      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-2">
            <Badge variant="secondary">Profile</Badge>
            <h1 className="text-4xl font-bold tracking-tight">Tags and skills</h1>
            <p className="max-w-2xl text-muted-foreground">
              A compact shadcn-based profile block for showing topic tags and skill depth in the same card.
            </p>
          </div>

          <Button variant="outline" onClick={toggleDarkMode}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </Button>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button variant={compact ? "default" : "outline"} onClick={() => setCompact(true)}>
            Compact layout
          </Button>
          <Button variant={!compact ? "default" : "outline"} onClick={() => setCompact(false)}>
            Spacious layout
          </Button>
          <Button variant={loading ? "default" : "outline"} onClick={() => setLoading((value) => !value)}>
            {loading ? "Hide loading" : "Show loading"}
          </Button>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <CardHeader>
            <CardTitle>Live demo</CardTitle>
            <CardDescription>Use the controls above to change the same component in real time.</CardDescription>
          </CardHeader>
          <CardContent>
            <TagsSkills {...demoProps} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notes</CardTitle>
            <CardDescription>Behavior and accessibility details.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p>Tag chips are built from shadcn buttons, so they inherit hover, focus, disabled, and pressed styles.</p>
            <p>Skills use the shadcn progress primitive and a percentage label so the value is visible even without color.</p>
            <p>The layout works as a profile summary, portfolio sidebar block, or a resume section inside a larger card.</p>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Default</CardTitle>
            <CardDescription>Balanced spacing with both sections fully expanded.</CardDescription>
          </CardHeader>
          <CardContent>
            <DemoFrame>
              <TagsSkills {...demoProps} compact={false} loading={false} />
            </DemoFrame>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Compact</CardTitle>
            <CardDescription>Tighter two-column layout for dense sidebars.</CardDescription>
          </CardHeader>
          <CardContent>
            <DemoFrame>
              <TagsSkills {...demoProps} compact loading={false} />
            </DemoFrame>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Loading</CardTitle>
            <CardDescription>Skeleton placeholders for async profile data.</CardDescription>
          </CardHeader>
          <CardContent>
            <DemoFrame>
              <TagsSkills {...demoProps} loading compact={false} />
            </DemoFrame>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Import</CardTitle>
            <CardDescription>Use the wrapper from the shared components folder.</CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock>{importSnippet}</CodeBlock>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Basic usage</CardTitle>
            <CardDescription>Minimal setup with tags and skills.</CardDescription>
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
            <CardDescription>Documented controls used in this project.</CardDescription>
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
            <CardDescription>Keyboard-friendly controls and visible progress values.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>Tag actions use shadcn buttons, so focus rings are consistent and keyboard activation is built in.</p>
            <p>The active tag state uses <code className="rounded bg-muted px-1.5 py-0.5 text-foreground">aria-pressed</code> semantics.</p>
            <p>Skill rows include text labels and percentage badges, so progress is readable without color alone.</p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
