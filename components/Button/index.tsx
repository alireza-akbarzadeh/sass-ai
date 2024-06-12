import { Button as RadixButton, ButtonProps as RadixButtonProps } from "@radix-ui/themes"
import React, { forwardRef } from "react"

export interface ButtonProps extends RadixButtonProps {
  children?: React.ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, ...rest } = props

  return (
    <RadixButton ref={ref} {...rest}>
      {children}
    </RadixButton>
  )
})

Button.displayName = "Button"
