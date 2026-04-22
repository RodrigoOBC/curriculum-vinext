import { NotebookPen, type LucideProps } from "lucide-react"

import { cn } from "@/lib/utils"

export function BlogIcon({ className, ...props }: LucideProps) {
  return <NotebookPen className={cn("shrink-0", className)} {...props} />
}
