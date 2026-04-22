import { FileText, type LucideProps } from "lucide-react"

import { cn } from "@/lib/utils"

export function ResumeIcon({ className, ...props }: LucideProps) {
  return <FileText className={cn("shrink-0", className)} {...props} />
}
