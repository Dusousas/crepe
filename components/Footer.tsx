import Image from "next/image";
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
    <footer className="border-t border-[#f3dce5] bg-[#fff8fa] text-[#6f4e59] py-4">
      <div className="maxW">
        <div className="flex justify-between">
          <div className="flex max-w-[22rem] flex-col gap-8">
            <Link href="/" className="inline-flex items-center">
              <Image
                className="h-auto w-[210px]"
                src="/logo.png"
                alt="Crepearia"
                width={978}
                height={526}
              />
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
