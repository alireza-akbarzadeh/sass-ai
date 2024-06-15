import "@radix-ui/themes/styles.css"
import { ClerkProvider } from "@clerk/nextjs"
import { Theme, ThemePanel } from "@radix-ui/themes"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Theme>
            {children}
            <ThemePanel />
          </Theme>
        </body>
      </html>
    </ClerkProvider>
  )
}
