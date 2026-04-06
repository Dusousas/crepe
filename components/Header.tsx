"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "./subc/Navbar";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <section className="absolute inset-x-0 top-0 z-50 py-6">
        <div className="maxW flex items-center justify-between gap-4">
          <div className="flex flex-1">
            <Link href="/#inicio" className="header-brand inline-flex items-center">
              <img className="w-[160px]" src="/logo.png" alt="Crepearia" />
            </Link>
          </div>

          <div className="hidden flex-1 justify-center md:flex">
            <Navbar />
          </div>

          <div className="hidden flex-1 justify-end md:flex">
            <Link
              href="/#contato"
              className="header-cta rounded-2xl bg-white px-6 py-3 font-body text-sm font-semibold text-[#F25394] uppercase"
            >
              Fazer orcamento
            </Link>
          </div>

          <div className="flex flex-1 justify-end md:hidden">
            <button
              type="button"
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMobileMenuOpen((current) => !current)}
              className="flex h-12 w-12 items-center justify-center rounded-2xl  transition hover:-translate-y-0.5"
            >
              <span className="relative block h-4 w-5">
                <span
                  className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-[#F25394] transition ${
                    isMobileMenuOpen ? "translate-y-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-[#F25394] transition ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-[#F25394] transition ${
                    isMobileMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </section>

      <div
        className={`fixed inset-0 z-40 bg-[#38111f]/30 backdrop-blur-sm transition duration-300 md:hidden ${
          isMobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      <aside
        id="mobile-menu"
        className={`fixed inset-y-0 right-0 z-50 flex w-[min(84vw,22rem)] flex-col bg-[#fff8fa] px-6 pb-8 pt-24 shadow-[-18px_0_40px_rgba(78,21,39,0.12)] transition duration-300 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className=" px-5 py-6">


          <Navbar
            className="flex flex-col items-start gap-5"
            itemClassName="inline-flex items-center font-anton text-[clamp(1.7rem,7vw,2.4rem)] leading-none text-[#b63149] transition hover:text-[#F25394]"
            onNavigate={() => setIsMobileMenuOpen(false)}
          />

          <Link
            href="/#contato"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-8 inline-flex rounded-2xl bg-[#F25394] uppercase px-5 py-3 font-body text-sm font-semibold text-white uppercase shadow-[0_16px_30px_rgba(242,83,148,0.22)] transition hover:-translate-y-0.5"
          >
            Fazer orcamento
          </Link>
        </div>
      </aside>
    </>
  );
}
