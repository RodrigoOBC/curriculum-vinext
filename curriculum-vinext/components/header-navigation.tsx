import Link from "next/link"
import type { ComponentType } from "react"
import type { LucideProps } from "lucide-react"

import { ProfileImage } from "@/components/profile-image"
import { cn } from "@/lib/utils"

export type HeaderNavigationItem = {
  label: string
  href: string
  icon?: ComponentType<LucideProps>
  active?: boolean
}

export type HeaderNavigationProps = {
  items: HeaderNavigationItem[]
  profileImageSrc?: string
  profileImageAlt?: string
  profileFallback?: string
  profileIndex?: number
  className?: string
  itemClassName?: string
  avatarClassName?: string
}

export function HeaderNavigation({
  items,
  profileImageSrc,
  profileImageAlt = "Profile photo",
  profileFallback = "You",
  profileIndex,
  className,
  itemClassName,
  avatarClassName,
}: HeaderNavigationProps) {
  const splitIndex = Math.min(
    Math.max(profileIndex ?? Math.ceil(items.length / 2), 0),
    items.length
  )

  const leftItems = items.slice(0, splitIndex)
  const rightItems = items.slice(splitIndex)

  return (
    <nav
      aria-label="Primary navigation"
      className={cn(
        "flex w-full items-center justify-center gap-3 overflow-x-auto rounded-full border border-border bg-background/80 px-4 py-3 shadow-sm backdrop-blur",
        className
      )}
    >
      <div className="flex shrink-0 items-center justify-end gap-2">
        {leftItems.map((item) => (
          <HeaderNavigationLink
            key={item.href}
            item={item}
            className={itemClassName}
          />
        ))}
      </div>

      <ProfileImage
        name={profileImageAlt}
        src={profileImageSrc}
        alt={profileImageAlt}
        fallback={profileFallback}
        size="xl"
        className={cn(
          "border-4 border-background bg-muted text-sm font-semibold text-muted-foreground shadow-md ring-1 ring-border",
          avatarClassName
        )}
      />

      <div className="flex shrink-0 items-center justify-start gap-2">
        {rightItems.map((item) => (
          <HeaderNavigationLink
            key={item.href}
            item={item}
            className={itemClassName}
          />
        ))}
      </div>
    </nav>
  )
}

function HeaderNavigationLink({
  item,
  className,
}: {
  item: HeaderNavigationItem
  className?: string
}) {
  const Icon = item.icon

  return (
    <Link
      href={item.href}
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        item.active && "bg-muted text-foreground",
        className
      )}
    >
      {Icon ? <Icon className="size-4" aria-hidden="true" /> : null}
      <span>{item.label}</span>
    </Link>
  )
}
