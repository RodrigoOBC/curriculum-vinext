"use client"

import * as React from "react"

import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

type ProfileImageSize = "sm" | "default" | "lg" | "xl"
type ProfileImageStatus = "online" | "away" | "busy" | "offline"

export interface ProfileImageProps extends Omit<React.ComponentProps<typeof Avatar>, "size"> {
  name: string
  src?: string
  alt?: string
  size?: ProfileImageSize
  status?: ProfileImageStatus
  fallback?: string
  imageClassName?: string
  badgeClassName?: string
}

const sizeClasses: Record<ProfileImageSize, string> = {
  sm: "size-8 text-xs",
  default: "size-10 text-sm",
  lg: "size-12 text-sm",
  xl: "size-16 text-base",
}

const statusClasses: Record<Exclude<ProfileImageStatus, "offline">, string> = {
  online: "bg-emerald-500",
  away: "bg-amber-500",
  busy: "bg-rose-500",
}

function getInitials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("")
}

export function ProfileImage({
  name,
  src,
  alt,
  size = "default",
  status = "offline",
  fallback,
  className,
  imageClassName,
  badgeClassName,
  ...props
}: ProfileImageProps) {
  const initials = fallback ?? getInitials(name)

  return (
    <Avatar
      size={size === "xl" ? "lg" : size === "sm" ? "sm" : "default"}
      className={cn("relative overflow-visible rounded-full", sizeClasses[size], className)}
      {...props}
    >
      {src ? <AvatarImage src={src} alt={alt ?? name} className={imageClassName} /> : null}
      <AvatarFallback className="rounded-full bg-muted font-medium text-muted-foreground">
        {initials}
      </AvatarFallback>
      {status !== "offline" ? (
        <AvatarBadge
          className={cn(
            "right-0.5 bottom-0.5 border-border ring-2 ring-background",
            statusClasses[status],
            badgeClassName
          )}
          aria-label={`${name} is ${status}`}
        />
      ) : null}
    </Avatar>
  )
}
