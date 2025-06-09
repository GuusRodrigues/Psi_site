import { ReactNode } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import "./globals.css"

export const metadata = {
  title: "Yuri Wu - Psicólogo",
  description: "Site institucional de Yuri Wu, psicólogo clínico.",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-background text-neutral font-sans flex flex-col min-h-screen">
        <Navbar />
        <main className="min-h-screen p-4">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
