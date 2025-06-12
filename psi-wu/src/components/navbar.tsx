"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/sobre", label: "Sobre" },
    { href: "/psicoterapia-online", label: "Psicoterapia Online" },
    { href: "/depoimentos", label: "Depoimentos" },
    { href: "/faq", label: "FAQ" },
  ];

  return (
    <header className="bg-primary text-[#FAFAFA] shadow-md sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-lg font-semibold tracking-wide">
          Yuri Wu • Psicólogo
        </Link>

        <div className="flex items-center gap-4">
          {/* Desktop links */}
          <ul className="hidden sm:flex gap-6 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* WhatsApp Icon */}
          <a
            href="https://wa.me/+5581995749052"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contato via WhatsApp"
            className="ml-4 hover:text-green-400 transition-colors"
          >
            <FaWhatsapp size={22} />
          </a>

          {/* Mobile toggle button */}
          <button
            className="sm:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden bg-primary px-6 pb-4">
          <ul className="flex flex-col gap-3 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block hover:underline"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://wa.me/+5581995749052"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:underline"
              >
                <FaWhatsapp size={18} /> WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
