import type React from "react"
import type { Metadata, Viewport } from "next"
import { Outfit } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

// Optimize font loading
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
})

export const metadata: Metadata = {
  title: "UNA-ET AASTU Chapter | United Nations Association of Ethiopia",
  description:
    "The United Nations Association of Ethiopia at AASTU serves as a bridge between the Ethiopian people and the UN to raise awareness about global issues like the Sustainable Development Goals (SDGs).",
  generator: "v0.dev",
  keywords: ["UNA-ET", "AASTU", "United Nations", "Ethiopia", "SDG", "Sustainable Development Goals"],
  authors: [{ name: "UNA-ET AASTU Chapter" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://una-et-aastu.org",
    title: "UNA-ET AASTU Chapter",
    description: "United Nations Association of Ethiopia at AASTU",
    siteName: "UNA-ET AASTU Chapter",
  },
  twitter: {
    card: "summary_large_image",
    title: "UNA-ET AASTU Chapter",
    description: "United Nations Association of Ethiopia at AASTU",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={cn("scroll-smooth", outfit.variable)}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />

        {/* Preload critical assets */}
        <link rel="preload" href="/favicon.ico" as="image" />

        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <ScrollToTop />
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
