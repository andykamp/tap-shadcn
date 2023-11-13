import { ComponentProps } from "react"
import { cn } from "@/lib/utils";

export function TypographyHero(props: ComponentProps<"h1">) {
  const { children, className, ...divProps } = props
  return (
    <h1 className={cn("text-center scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-7xl", className)} {...divProps}>
      {children}
    </h1>
  )
}
export function TypographyH1(props: ComponentProps<"h1">) {
  const { children, className, ...divProps } = props
  return (
    <h1 className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", className)} {...divProps}>
      {children}
    </h1>
  )
}

export function TypographyH2(props: ComponentProps<"h2">) {
  const { children, className, ...divProps } = props
  return (
    <h2 className={cn("scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0", className)} {...divProps} >
      {children}
    </h2>
  )
}

export function TypographySmall(props: ComponentProps<"div">) {
  const { children, className, ...divProps } = props
  return (
    <small className={cn("text-sm font-medium leading-none", className)} {...divProps}>
      {children}
    </small>
  )
}

export function TypographyMuted(props: ComponentProps<"div">) {
  const { children, className, ...divProps } = props
  return (
    <p className={cn("text-sm text-muted-foreground", className)} {...divProps}>
      {children}
    </p>
  )
}

