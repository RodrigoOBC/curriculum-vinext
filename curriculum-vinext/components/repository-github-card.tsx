import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export type RepositoryGithubCardItem = {
  title: string
  subtitle: string
  description: string
  technologies: string[]
  href: string
}

export type RepositoryGithubCardProps = {
  items: RepositoryGithubCardItem[]
  className?: string
  itemClassName?: string
  ariaLabelPrefix?: string
}

export function RepositoryGithubCard({
  items,
  className,
  itemClassName,
  ariaLabelPrefix = "Open repository",
}: RepositoryGithubCardProps) {
  return (
    <ul className={cn("space-y-4", className)}>
      {items.map((item) => (
        <li key={`${item.title}-${item.href}`}>
          <RepositoryGithubCardItemCard
            item={item}
            className={itemClassName}
            ariaLabelPrefix={ariaLabelPrefix}
          />
        </li>
      ))}
    </ul>
  )
}

function RepositoryGithubCardItemCard({
  item,
  className,
  ariaLabelPrefix,
}: {
  item: RepositoryGithubCardItem
  className?: string
  ariaLabelPrefix: string
}) {
  return (
    <Link
      href={item.href}
      className="block rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      aria-label={`${ariaLabelPrefix} ${item.title}`}
    >
      <Card size="sm" className={cn("p-0 transition-transform duration-200 hover:-translate-y-0.5", className)}>
        <CardHeader className="gap-1 border-b border-border/60 pb-4">
          <CardTitle className="text-lg font-semibold tracking-tight">
            {item.title}
          </CardTitle>
          <CardDescription className="text-sm font-medium text-muted-foreground">
            {item.subtitle}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4 pt-4">
          <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
        </CardContent>

        <CardFooter className="flex flex-wrap gap-2 border-t border-border/60 bg-muted/20">
          {item.technologies.map((technology) => (
            <Badge key={technology} variant="secondary" className="rounded-full px-2.5 py-0.5">
              {technology}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </Link>
  )
}
