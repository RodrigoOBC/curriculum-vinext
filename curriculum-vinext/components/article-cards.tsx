import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export type ArticleCardItem = {
  title: string
  summary: string
  tags: string[]
  href: string
}

export type ArticleCardsProps = {
  items: ArticleCardItem[]
  className?: string
  itemClassName?: string
  ctaLabel?: string
  ariaLabelPrefix?: string
}

export function ArticleCards({
  items,
  className,
  itemClassName,
  ctaLabel = "Ler mais",
  ariaLabelPrefix = "Ler mais sobre",
}: ArticleCardsProps) {
  return (
    <ul className={cn("space-y-4", className)}>
      {items.map((item) => (
        <li key={`${item.title}-${item.href}`}>
          <ArticleCard
            item={item}
            className={itemClassName}
            ctaLabel={ctaLabel}
            ariaLabelPrefix={ariaLabelPrefix}
          />
        </li>
      ))}
    </ul>
  )
}

function ArticleCard({
  item,
  className,
  ctaLabel,
  ariaLabelPrefix,
}: {
  item: ArticleCardItem
  className?: string
  ctaLabel: string
  ariaLabelPrefix: string
}) {
  return (
    <Card size="sm" className={cn("p-0", className)}>
      <CardHeader className="gap-1 border-b border-border/60 pb-4">
        <CardTitle className="text-lg font-semibold tracking-tight">{item.title}</CardTitle>
        <CardDescription className="text-sm leading-6 text-muted-foreground">
          {item.summary}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-4">
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="rounded-full px-2.5 py-0.5">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="justify-end border-t border-border/60 bg-muted/20">
        <Link
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "default" }), "rounded-full")}
          aria-label={`${ariaLabelPrefix} ${item.title}`}
        >
          {ctaLabel}
        </Link>
      </CardFooter>
    </Card>
  )
}
