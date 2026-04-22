"use client"

import * as React from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

export interface TagsSkillsTag {
  label: string
  variant?: "default" | "secondary" | "outline" | "ghost"
  disabled?: boolean
}

export interface TagsSkillsSkill {
  label: string
  level: number
  note?: string
  disabled?: boolean
}

export interface TagsSkillsProps extends React.ComponentProps<"div"> {
  eyebrow?: string
  title?: string
  description?: string
  tags?: TagsSkillsTag[]
  skills?: TagsSkillsSkill[]
  activeTags?: string[]
  compact?: boolean
  loading?: boolean
  onTagSelect?: (label: string) => void
}

function LoadingPill() {
  return <div className="h-7 w-20 animate-pulse rounded-full bg-muted" />
}

function LoadingRow() {
  return (
    <div className="space-y-2 rounded-lg border bg-background/60 p-3">
      <div className="flex items-center justify-between gap-3">
        <div className="h-4 w-24 animate-pulse rounded bg-muted" />
        <div className="h-5 w-12 animate-pulse rounded-full bg-muted" />
      </div>
      <div className="h-1.5 w-full animate-pulse rounded-full bg-muted" />
      <div className="h-3 w-40 animate-pulse rounded bg-muted" />
    </div>
  )
}

export function TagsSkills({
  className,
  eyebrow = "Profile",
  title = "Tags and skills",
  description = "A compact way to show the subjects, tools, and strengths that define a profile or role.",
  tags = [],
  skills = [],
  activeTags = [],
  compact = false,
  loading = false,
  onTagSelect,
  ...props
}: TagsSkillsProps) {
  return (
    <div
      data-slot="tags-skills"
      className={cn(
        "rounded-xl border bg-card text-card-foreground shadow-sm",
        className
      )}
      {...props}
    >
      <div className="flex flex-wrap items-start justify-between gap-3 border-b px-5 py-4">
        <div className="space-y-1">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
            {eyebrow}
          </p>
          <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
          <p className="max-w-2xl text-sm text-muted-foreground">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">{tags.length} tags</Badge>
          <Badge variant="outline">{skills.length} skills</Badge>
        </div>
      </div>

      <div
        className={cn(
          "grid gap-4 p-5",
          compact ? "md:grid-cols-2" : "lg:grid-cols-[1fr_1.15fr]"
        )}
      >
        <section className="rounded-lg border bg-muted/20 p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h4 className="text-sm font-medium">Tags</h4>
              <p className="text-xs text-muted-foreground">Filter by focus area.</p>
            </div>
            <Badge variant="ghost">{activeTags.length} active</Badge>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {loading ? (
              Array.from({ length: 6 }).map((_, index) => <LoadingPill key={index} />)
            ) : (
              tags.map((tag) => {
                const selected = activeTags.includes(tag.label)

                return (
                  <Button
                    key={tag.label}
                    type="button"
                    size="xs"
                    variant={selected ? "default" : tag.variant ?? "outline"}
                    disabled={tag.disabled}
                    aria-pressed={selected}
                    onClick={() => onTagSelect?.(tag.label)}
                    className="rounded-full"
                  >
                    {tag.label}
                  </Button>
                )
              })
            )}
          </div>
        </section>

        <section className="rounded-lg border bg-muted/20 p-4">
          <div>
            <h4 className="text-sm font-medium">Skills</h4>
            <p className="text-xs text-muted-foreground">Relative strength at a glance.</p>
          </div>

          <div className="mt-4 space-y-3">
            {loading ? (
              Array.from({ length: 3 }).map((_, index) => <LoadingRow key={index} />)
            ) : (
              skills.map((skill) => (
                <div key={skill.label} className="space-y-2 rounded-lg border bg-background/60 p-3">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-medium">{skill.label}</p>
                      {skill.note ? (
                        <p className="text-xs text-muted-foreground">{skill.note}</p>
                      ) : null}
                    </div>
                    <Badge variant={skill.disabled ? "ghost" : "outline"}>
                      {Math.round(skill.level)}%
                    </Badge>
                  </div>

                  <Progress value={skill.level} className="flex-col gap-2" />
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  )
}
