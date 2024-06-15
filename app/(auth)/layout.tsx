import { Flex } from "@radix-ui/themes"
import React from "react"

type AuthLayoutProps = {
  children: React.ReactNode
}

function AuthLayout(props: AuthLayoutProps) {
  const { children } = props
  return (
    <Flex justify="center" align="center" height="100vh">
      {children}
    </Flex>
  )
}

export default AuthLayout
