import React from "react";
import Link from "next/link";
import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Yuri Wu - Psicólogo</title>
        <meta name="description" content="Site profissional do psicólogo Yuri Wu" />
      </head>
      <body className="flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <nav
          className="text-white py-5 px-6 shadow-md"
          style={{ backgroundColor: "var(--color-navbar)" }}
        >
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-serif font-semibold tracking-wide text-[var(--color-foreground)] no-underline">
              Yuri Wu
            </Link>
            <div className="space-x-6 text-sm font-medium">
              <Link href="/sobre" className="text-[var(--color-foreground)] no-underline hover:text-[var(--color-highlight)] transition-colors">Sobre</Link>
              <Link href="/psicoterapia-online" className="text-[var(--color-foreground)] no-underline hover:text-[var(--color-highlight)] transition-colors">Psicoterapia Online</Link>
              <Link href="/depoimentos" className="text-[var(--color-foreground)] no-underline hover:text-[var(--color-highlight)] transition-colors">Depoimentos</Link>
              <Link href="/faq" className="text-[var(--color-foreground)] no-underline hover:text-[var(--color-highlight)] transition-colors">FAQ</Link>
            </div>
          </div>
        </nav>


        <main className="flex-grow max-w-4xl mx-auto px-6 py-10">
          {children}
        </main>

        <footer
          className="text-center text-sm py-6"
          style={{ backgroundColor: "#e4dccc", color: "#444" }}
        >
          © 2024 Yuri Wu - Todos os direitos reservados
        </footer>
      </body>
    </html>
  );
}
