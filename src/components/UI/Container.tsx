import { type ComponentPropsWithoutRef, type ElementType, type ReactNode } from "react"

//extends泛型限制 T 只能是 ElementType
type ContainerProps<T extends ElementType> = {
  as?: T
  children: ReactNode
} & ComponentPropsWithoutRef<T>

export default function Container<C extends ElementType> ({as, children, ...props}: ContainerProps<C>) {
  const Component = as || 'div'
  return <Component {...props}>{children}</Component>
}