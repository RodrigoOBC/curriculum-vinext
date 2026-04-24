"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, Download, Languages, Mail } from "lucide-react"

import { ArticleCards } from "@/components/article-cards"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ProfileImage } from "@/components/profile-image"
import { RepositoryGithubCard } from "@/components/repository-github-card"
import { Timeline } from "@/components/timeline"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { Locale, PortfolioContent } from "@/lib/portfolio-content"

type PortfolioPageProps = {
  content: PortfolioContent
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <div className="max-w-3xl space-y-3">
      <Badge variant="secondary" className="rounded-full px-3 py-1 text-[0.7rem] uppercase tracking-[0.24em]">
        {eyebrow}
      </Badge>
      <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{title}</h2>
      <p className="text-base leading-7 text-muted-foreground sm:text-lg">{description}</p>
    </div>
  )
}

function BrandIcon({ name, className }: { name: "linkedin" | "github" | "medium" | "devto"; className?: string }) {
  const common = { className: className ?? "size-5", fill: "currentColor", "aria-hidden": true as const }

  if (name === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" {...common}>
        <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm-9 15H7V9h3v9ZM8.5 7.8A1.7 1.7 0 1 1 8.5 4.4a1.7 1.7 0 0 1 0 3.4ZM18 18h-3v-4.6c0-1.1 0-2.5-1.5-2.5S12 12.2 12 13.3V18H9V9h2.9v1.2h.1A3.2 3.2 0 0 1 15 8.8c3 0 3 2 3 4.2V18Z" />
      </svg>
    )
  }

  if (name === "github") {
    return (
      <svg viewBox="0 0 24 24" {...common}>
        <path d="M12 2C6.5 2 2 6.5 2 12.2c0 4.5 2.9 8.3 6.9 9.7.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.4-1-.9-1.3-.9-1.3-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.4.7.1-.6.3-1 .6-1.3-2.2-.3-4.5-1.1-4.5-5 0-1.1.4-2 1.1-2.7-.1-.3-.5-1.3.1-2.7 0 0 .9-.3 2.8 1a9.2 9.2 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .6 1.4.2 2.4.1 2.7.7.7 1.1 1.6 1.1 2.7 0 3.9-2.3 4.7-4.5 5 .3.3.6.9.6 1.8v2.6c0 .3.2.6.7.5A10.2 10.2 0 0 0 22 12.2C22 6.5 17.5 2 12 2Z" />
      </svg>
    )
  }

  if (name === "medium") {
    return (
      <svg viewBox="0 0 24 24" {...common}>
        <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4H17.5A2.5 2.5 0 0 1 20 6.5v11A2.5 2.5 0 0 1 17.5 20H6.5A2.5 2.5 0 0 1 4 17.5v-11Zm3.1 2.2c.1-.1.2-.2.2-.4 0-.1-.1-.3-.2-.3l-1.4-1.7h2.2l2.3 5 2-5h2l-1.1 1.2c-.1.1-.2.2-.2.4v5.2c0 .2.1.3.2.4l1.1 1.2h-3.2l1.1-1.2c.1-.1.2-.2.2-.4v-4l-2.4 6.1h-.3l-2.8-6.1v4.1c0 .2 0 .3.2.4l1.2 1.2H6.1l1.2-1.2c.1-.1.1-.2.1-.4V8.7Z" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" {...common}>
      <path d="M19.5 4.2H16L10.7 10.3 6.2 4.2H4.5l5.4 7.6L4 19.8h3.6l5.2-6 4.2 6h3.7l-5.9-8.3 5-5.8ZM8 6.1l8.1 11.3h1.4L9.4 6.1H8Z" />
    </svg>
  )
}

const socialBrandStyles = {
  linkedin: "hover:border-sky-500/40 hover:bg-sky-500/10 hover:text-sky-600",
  github: "hover:border-foreground/20 hover:bg-foreground/5 hover:text-foreground",
  medium: "hover:border-foreground/20 hover:bg-foreground/5 hover:text-foreground",
  devto: "hover:border-foreground/20 hover:bg-foreground/5 hover:text-foreground",
} as const

const socialIconAccent = {
  linkedin: "text-sky-600 dark:text-sky-400",
  github: "text-foreground",
  medium: "text-foreground",
  devto: "text-foreground",
} as const

function SocialLinkCard({
  href,
  name,
  icon,
}: {
  href: string
  name: string
  icon: "linkedin" | "github" | "medium" | "devto"
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
      title={name}
      className={cn(
        "group inline-flex flex-col items-center gap-2 rounded-2xl border border-border/70 bg-muted/20 p-4 text-muted-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        socialBrandStyles[icon]
      )}
    >
      <span
        className={cn(
          "inline-flex size-12 items-center justify-center rounded-full border border-border/70 bg-background transition-transform group-hover:-translate-y-0.5",
          socialIconAccent[icon]
        )}
      >
        <BrandIcon name={icon} className="size-5" />
      </span>
      <span className="text-xs font-medium tracking-wide">{name}</span>
    </a>
  )
}

export function PortfolioPage({ content }: PortfolioPageProps) {
  const [locale, setLocale] = useState<Locale>("pt")

  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en"
  }, [locale])

  const current = content[locale]
  const resumeUrl = process.env.NEXT_PUBLIC_RESUME_URL ?? "#"
  const email = process.env.NEXT_PUBLIC_EMAIL ?? "rodrigo@example.com"
  const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "#"
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL ?? "#"
  const mediumUrl = process.env.NEXT_PUBLIC_MEDIUM_URL ?? "#"
  const devtoUrl = process.env.NEXT_PUBLIC_DEVTO_URL ?? "#"
  const mailto = `mailto:${email}`
  const socialLinks = [
    { name: "LinkedIn", href: linkedinUrl, icon: "linkedin" as const },
    { name: "GitHub", href: githubUrl, icon: "github" as const },
    { name: "Medium", href: mediumUrl, icon: "medium" as const },
    { name: "Dev.to", href: devtoUrl, icon: "devto" as const },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-4">
          <Link href="#hero" className="font-semibold tracking-tight text-foreground">
            Rodrigo Cabral
          </Link>

          <nav className="hidden items-center gap-2 lg:flex" aria-label="Primary">
            {current.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setLocale((value) => (value === "pt" ? "en" : "pt"))}
              className="gap-2"
            >
              <Languages className="size-4" aria-hidden="true" />
              {locale === "pt" ? "PT / EN" : "EN / PT"}
            </Button>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "default", size: "sm" }), "gap-2")}
            >
              <Download className="size-4" aria-hidden="true" />
              {current.hero.resumeLabel}
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-24 px-6 py-10 sm:py-16">
        <section id="hero" className="scroll-mt-24 grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
          <div className="space-y-6">
            <div className="space-y-3">
              <Badge variant="secondary" className="rounded-full px-3 py-1 text-[0.7rem] uppercase tracking-[0.24em]">
                {current.hero.eyebrow}
              </Badge>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {current.hero.title} <span className="text-primary">{current.hero.accent}</span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                {current.hero.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "default" }), "gap-2")}
              >
                <Download className="size-4" aria-hidden="true" />
                {current.hero.resumeLabel}
              </a>
              <a
                href={mailto}
                className={cn(buttonVariants({ variant: "outline" }), "gap-2")}
              >
                <Mail className="size-4" aria-hidden="true" />
                {current.hero.contactLabel}
              </a>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "Playwright",
                "Cypress",
                "CI/CD",
                "API Testing",
                "Perfomance Testing",
              ].map((tag) => (
                <Badge key={tag} variant="outline" className="rounded-full px-3 py-1">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "QA Lead",
                "Gerenciamento de Pessoas",
                "Liderança Técnica",
                "Estratégia de Testes",
                "Automação de Testes",
              ].map((tag) => (
                <Badge key={tag} variant="outline" className="rounded-full px-3 py-1">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          

          <Card className="border-border/70 bg-card/95 shadow-sm">
            <CardContent className="space-y-6 p-6">
              <div className="flex items-center gap-4">
                <ProfileImage
                  name="Rodrigo Cabral"
                  src="https://github.com/shadcn.png"
                  alt="Rodrigo Cabral"
                  status="online"
                  size="xl"
                />
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">{current.hero.introLabel}</p>
                  <p className="text-lg font-semibold tracking-tight">Rodrigo Cabral</p>
                  <p className="text-sm text-muted-foreground">{current.hero.accent}</p>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  {current.hero.skillsTitle}
                </p>
                <div className="space-y-3">
                  {current.hero.skills.map((skill) => (
                    <div key={skill} className="rounded-xl border border-border/70 bg-muted/20 p-4 text-sm leading-6 text-foreground">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "default" }), "w-full gap-2")}
              >
                <ArrowRight className="size-4" aria-hidden="true" />
                {current.hero.resumeLabel}
              </a>
            </CardContent>
          </Card>
        </section>

        <section id="experience" className="scroll-mt-24 space-y-6">
          <SectionHeading
            eyebrow={current.experience.eyebrow}
            title={current.experience.title}
            description={locale === "pt" ? "Linha do tempo com foco em impacto, automação e colaboração com times de produto." : "Timeline focused on impact, automation, and collaboration with product teams."}
          />
          <Timeline
            eyebrow={current.experience.eyebrow}
            title={current.experience.title}
            items={current.experience.items}
            currentLabel={current.experience.currentLabel}
          />
        </section>

        <section id="education" className="scroll-mt-24 space-y-6">
          <SectionHeading
            eyebrow={current.education.eyebrow}
            title={current.education.title}
            description={locale === "pt" ? "Formação acadêmica e técnica que sustenta a prática em qualidade e automação." : "Academic and technical background that supports quality and automation practice."}
          />
          <Timeline
            eyebrow={current.education.eyebrow}
            title={current.education.title}
            items={current.education.items}
            currentLabel={current.education.currentLabel}
          />
        </section>

        <section id="repositories" className="scroll-mt-24 space-y-6">
          <SectionHeading
            eyebrow={current.repositories.eyebrow}
            title={current.repositories.title}
            description={current.repositories.description}
          />
          <RepositoryGithubCard
            items={current.repositories.items}
            ariaLabelPrefix={locale === "pt" ? "Abrir repositório" : "Open repository"}
          />
        </section>

        <section id="articles" className="scroll-mt-24 space-y-6">
          <SectionHeading
            eyebrow={current.articles.eyebrow}
            title={current.articles.title}
            description={current.articles.description}
          />
          <ArticleCards
            items={current.articles.items}
            ctaLabel={locale === "pt" ? "Ler mais" : "Read more"}
            ariaLabelPrefix={locale === "pt" ? "Ler mais sobre" : "Read more about"}
          />
        </section>

        <section id="contact" className="scroll-mt-24 pb-8">
          <Card className="border-border/70">
            <CardHeader>
              <CardTitle>{current.contact.title}</CardTitle>
              <CardDescription>{current.contact.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
                <div className="space-y-2">
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    {current.contact.socialsTitle}
                  </p>
                  <p className="text-sm text-muted-foreground">{current.contact.socialsDescription}</p>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {socialLinks.map((social) => (
                    <SocialLinkCard key={social.name} {...social} />
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4 border-t border-border/70 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">{current.contact.note}</p>
                  <p className="font-mono text-sm text-foreground">{email}</p>
                </div>
                <a href={mailto} className={cn(buttonVariants({ variant: "default" }), "gap-2")}>
                  <Mail className="size-4" aria-hidden="true" />
                  {current.contact.emailLabel}
                </a>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}
