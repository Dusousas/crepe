import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { RiThreadsLine } from "react-icons/ri";

const socialLinks = [
  { label: "Instagram", href: "#", icon: FaInstagram, size: 18 },
  { label: "Facebook", href: "#", icon: FaFacebookF, size: 16 },
  { label: "TikTok", href: "#", icon: FaTiktok, size: 16 },
  { label: "Threads", href: "#", icon: RiThreadsLine, size: 18 },
];

const primaryLinks = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Cardapio", href: "/#cardapio" },
  { label: "Servicos", href: "/#servicos" },
];

const secondaryLinks = [
  { label: "Eventos", href: "/#eventos" },
  { label: "Galeria", href: "/#galeria" },
  { label: "Contato", href: "/#contato" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#f3dce5] bg-[#fff8fa] text-[#6f4e59]">
      <div className="maxW py-14 md:py-16">
        <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-[1.25fr_0.8fr_0.8fr_1fr] xl:gap-10">
          <div className="flex max-w-[22rem] flex-col gap-8">
            <Link href="/" className="inline-flex items-center">
              <img className="w-[210px]" src="/logo.png" alt="" />
            </Link>

            <div className="flex flex-wrap items-center gap-5 text-[#8b6b75]">
              {socialLinks.map(({ label, href, icon: Icon, size }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="transition hover:text-[#b63149]"
                >
                  <Icon size={size} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 font-anton text-[clamp(1.6rem,2vw,2rem)] uppercase leading-none text-[#2f1c24]">
              Navegacao
            </h3>

            <nav className="flex flex-col gap-4 text-[17px]">
              {primaryLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-[#b63149]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="mb-5 font-anton text-[clamp(1.6rem,2vw,2rem)] uppercase leading-none text-[#2f1c24]">
              Explore
            </h3>

            <nav className="flex flex-col gap-4 text-[17px]">
              {secondaryLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-[#b63149]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <p className="mb-3 text-sm text-[#7b5f68]">
                have a question or feedback? Reach out below
              </p>
              <a
                href="mailto:streetbite@mail.com"
                className="font-anton text-[clamp(1.9rem,2.5vw,3rem)] uppercase leading-none text-[#b63149]"
              >
                streetbite@mail.com
              </a>
            </div>

            <div>
              <p className="mb-3 text-sm text-[#7b5f68]">Give us a call</p>
              <a
                href="tel:+1234567890"
                className="font-anton text-[clamp(1.8rem,2.2vw,2.6rem)] leading-none text-[#b63149]"
              >
                +1 234 567 890
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
