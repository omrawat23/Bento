import { cn } from "@/lib/utils"

interface MaxWidthWrapperProps {
  className?: string
  children: React.ReactNode
}

export default function MaxWidthWrapper({
  className,
  children
}: MaxWidthWrapperProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
        className
      )}
    >
      {children}
    </div>
  )
}