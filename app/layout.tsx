import "@radix-ui/themes/styles.css"
import { Theme, ThemePanel } from "@radix-ui/themes"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Theme>
          {children}
          <ThemePanel />
        </Theme>
      </body>
    </html>
  )
}
