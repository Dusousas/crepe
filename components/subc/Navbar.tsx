"use client";

import Link from "next/link";

export const navItems = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Cardapio", href: "/#cardapio" },
  { label: "Servicos", href: "/#servicos" },
  { label: "Depoimentos", href: "/#depoimentos" },
  { label: "Contato", href: "/#contato" },
];

type NavbarProps = {
  className?: string;
  itemClassName?: string;
  onNavigate?: () => void;
};

export default function Navbar({
  className = "flex items-center gap-8",
  itemClassName = "nav-link relative inline-flex items-center",
  onNavigate,
}: NavbarProps) {
  return (
    <nav aria-label="Navegacao principal">
      <ul
        className={`${className} font-body text-[#F25394] uppercase font-medium`}
      >
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={itemClassName}
              onClick={onNavigate}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
