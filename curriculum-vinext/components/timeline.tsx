"use client"

import * as React from "react"

import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export interface TimelineItem {
  title: string
  organization: string
  start: string
  end?: string
  description: string
}

export interface TimelineProps extends React.ComponentProps<"section"> {
  eyebrow?: string
  title?: string
  items: TimelineItem[]
  currentLabel?: string
}

function Period({ start, end, currentLabel = "Atual" }: { start: string; end?: string; currentLabel?: string }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
      <span className="font-medium italic">{start}</span>
      <span aria-hidden="true">-</span>
      {end ? (
        <span className="font-medium italic">{end}</span>
      ) : (
        <Badge className="h-5 rounded-full px-2 text-[0.7rem]" variant="secondary">
          {currentLabel}
        </Badge>
      )}
    </div>
  )
}

export function Timeline({
  className,
  eyebrow = "Experiência",
  title = "Timeline",
  items,
  currentLabel = "Atual",
  ...props
}: TimelineProps) {
  return (
    <section
      data-slot="timeline"
      className={cn("rounded-xl border bg-card text-card-foreground shadow-sm", className)}
      {...props}
    >
      <div className="border-l-4 border-l-primary/70 px-5 py-5 sm:px-6">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-primary">{eyebrow}</p>
            <h3 className="text-2xl font-medium tracking-tight text-foreground">{title}</h3>
          </div>
          <div className="rounded-lg border bg-muted/30 p-3 text-muted-foreground">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6">
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.7"
                d="M10 6V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1m-5 0h6m-6 0H6a2 2 0 0 0-2 2v2m8-4v2m0 0h8a2 2 0 0 1 2 2v2M4 10v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M4 10h16"
              />
            </svg>
          </div>
        </div>

        <div className="mt-6 space-y-8">
          {items.map((item, index) => {
            const isLast = index === items.length - 1

            return (
              <article key={`${item.title}-${item.organization}-${item.start}`} className="relative pl-7 sm:pl-8">
                <span
                  aria-hidden="true"
                  className="absolute left-1.5 top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-primary/15"
                />
                {!isLast ? (
                  <span
                    aria-hidden="true"
                    className="absolute left-[0.7rem] top-4 h-full w-px bg-border"
                  />
                ) : null}

                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <h4 className="text-base font-semibold leading-tight text-foreground">
                      {item.title} - {item.organization}
                    </h4>
                  </div>

                  <Period start={item.start} end={item.end} currentLabel={currentLabel} />

                  <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
