import { Mail, type LucideProps } from "lucide-react"

import { cn } from "@/lib/utils"

export function ContactIcon({ className, ...props }: LucideProps) {
  return <Mail className={cn("shrink-0", className)} {...props} />
}
