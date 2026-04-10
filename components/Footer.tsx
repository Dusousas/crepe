import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const navigationLinks = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Produtos", href: "/#cardapio" },
  { label: "Servicos", href: "/#servicos" },
  { label: "Galeria", href: "/#galeria" },
  { label: "Contato", href: "/#contato" },
];

const socialLinks = [
  { label: "WhatsApp", href: "#", icon: FaWhatsapp },
  { label: "Instagram", href: "#", icon: FaInstagram },
  { label: "Facebook", href: "#", icon: FaFacebookF },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#f2d7de] bg-[#fff8fa] pt-4">
      <div className="maxW">
        <div className="flex flex-col gap-10 rounded-[1.8rem] border border-[#f2d7de] bg-white px-6 py-8 shadow-[0_20px_60px_rgba(182,49,73,0.06)] lg:flex-row lg:items-start lg:justify-between lg:px-10">
          <div className="max-w-[28rem]">
            <Link href="/" className="inline-flex items-center">
              <Image
                className="h-auto w-[210px]"
                src="/logo.png"
                alt="Crepearia das Meninas"
                width={978}
                height={526}
              />
            </Link>

            <p className="mt-5 max-w-[34ch] font-body text-[0.98rem] leading-7 text-[#6f555e]">
              Sabor, carinho e atendimento especial para tornar seu evento ainda
              mais memoravel.
            </p>
          </div>

          <div className="lg:text-right">
            <p className="font-anton text-sm uppercase tracking-[0.18em] text-[#b63149]">
              Navegacao
            </p>

            <nav className="mt-4 flex flex-col gap-3">
              {navigationLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-body text-[1rem] font-medium text-[#4b363d] transition hover:text-[#b63149]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="max-w-[22rem]">
            <p className="font-anton text-sm uppercase tracking-[0.18em] text-[#b63149]">
              Endereco
            </p>
            <p className="mt-4 font-body text-[1rem] leading-7 text-[#4b363d]">
              Rua Senador Lacerda Franco, 482
              <br />
              Torrinha - SP
            </p>

            <div className="mt-6">
              <p className="font-anton text-sm uppercase tracking-[0.18em] text-[#b63149]">
                Redes sociais
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#f0d4dc] bg-[#fff8fa] text-[#b63149] transition hover:-translate-y-1 hover:border-[#d95c71] hover:bg-white"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 pb-4 flex flex-col gap-3 border-t border-[#edd6dc] pt-6 text-sm text-[#7a6068] md:flex-row md:items-center md:justify-between">
          <p className="font-body">
            &copy; {currentYear} Crepearia das Meninas. Todos os direitos reservados.
          </p>
          <p className="font-body">
            Desenvolvido por <a href="https://agenciayouon.com/" target="_blank" className="font-semibold text-[#b63149]">youon</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
