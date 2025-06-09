import Link from "next/link";

export function Navbar() {
  return (
    <header className="bg-primary shadow-md sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-lg font-semibold tracking-wide">
          Yuri Wu • Psicólogo
        </Link>
        <ul className="hidden sm:flex gap-6 text-sm">
          <li>
            <Link href="/sobre" className="hover:underline">
              Sobre
            </Link>
          </li>
          <li>
            <Link href="/psicoterapia-online" className="hover:underline">
              Psicoterapia Online
            </Link>
          </li>
          <li>
            <Link href="/depoimentos" className="hover:underline">
              Depoimentos
            </Link>
          </li>
          <li>
            <Link href="/faq" className="hover:underline">
              FAQ
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
