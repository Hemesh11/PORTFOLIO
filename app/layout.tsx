import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { SmoothScroll } from "../components/smooth-scroll"

export const metadata: Metadata = {
  title: "Hemesh Portfolio",
  description: "hemesh's personal portfolio showcasing skills, projects, and achievements.",
  generator: "Hemesh Portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  )
}
