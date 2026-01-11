import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Inter, Ponnala, Ramabhadra, Yatra_One, Tiro_Tamil } from "next/font/google"
import { LanguageProvider } from "@/lib/language-context"
// import LayoutWrapper from "@/components/layout-wrapper" // Removed import as LayoutWrapper is no longer used
import { Suspense } from "react"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
  variable: "--font-montserrat",
})
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const ponnala = Ponnala({
  subsets: ["telugu"],
  weight: ["400"],
  variable: "--font-ponnala",
  display: "swap",
})

const ramabhadra = Ramabhadra({
  subsets: ["telugu"],
  weight: ["400"],
  variable: "--font-ramabhadra",
  display: "swap",
})

const yatraOne = Yatra_One({
  subsets: ["devanagari", "latin"],
  weight: ["400"],
  variable: "--font-yatra-one",
  display: "swap",
})

const tiroTamil = Tiro_Tamil({
  subsets: ["latin"], // Tiro Tamil might verify subsets, 'latin' is safe, 'tamil' if available. Actually Tiro usually has 'latin' and specific script.
  weight: ["400"],
  variable: "--font-tiro-tamil",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Sri Siddheswari Peetham - Mouna Swamy Mutt, Courtallam",
  description:
    "Sri Siddheswari Peetham, established in 1916 at Courtallam, Tamil Nadu, is a spiritual center dedicated to Goddess Raja Rajeshwari Devi, following the traditions of Sri Adi Shankaracharya.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${montserrat.variable} ${inter.variable} ${ponnala.variable} ${ramabhadra.variable} ${yatraOne.variable} ${tiroTamil.variable} antialiased`}
    >
      <body className={`font-sans bg-white text-neutral-900`}>
        <LanguageProvider>
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </LanguageProvider>
      </body>
    </html>
  )
}
