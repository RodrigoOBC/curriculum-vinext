import { BriefcaseBusiness, type LucideProps } from "lucide-react"

import { cn } from "@/lib/utils"

export function PortifolioIcon({ className, ...props }: LucideProps) {
  return <BriefcaseBusiness className={cn("shrink-0", className)} {...props} />
}
