import { UserRound, type LucideProps } from "lucide-react"

import { cn } from "@/lib/utils"

export function AbautIcon({ className, ...props }: LucideProps) {
  return <UserRound className={cn("shrink-0", className)} {...props} />
}
