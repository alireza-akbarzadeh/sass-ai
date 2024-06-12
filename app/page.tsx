import { Container, Grid } from "@radix-ui/themes"
import { Metadata } from "next"
import { Button } from "../components/Button"

export const metadata: Metadata = {
  title: "Sass Ai Application",
  description: "an assistant sass for daily wok and its saves you time",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://next-enterprise.vercel.app/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/.github/assets/project-logo.png",
      },
    ],
  },
}

export default function Web() {
  return (
    <>
      <section>
        <Container size="3">
          <Grid columns="3" gap="3" rows="repeat(2, 64px)" width="auto">
            <Button />
            <Button />
            <Button />
            <Button />
            <Button />
            <Button />
          </Grid>
        </Container>
      </section>
    </>
  )
}
