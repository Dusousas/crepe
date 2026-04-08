"use client";

import Image from "next/image";

const galleryItems = [
  {
    id: 1,
    src: "/galeria.jpg",
    alt: "Clientes aproveitando a experiência gastronômica",
    width: "w-[12rem] md:w-[14rem]",
    position: "object-[18%_center]",
  },
  {
    id: 2,
    src: "/img1.jpg",
    alt: "Atendimento ao vivo em evento especial",
    width: "w-[18rem] md:w-[20rem]",
    position: "object-[42%_center]",
  },
  {
    id: 3,
    src: "/galeria.jpg",
    alt: "Momento descontraído com comida servida na hora",
    width: "w-[15rem] md:w-[17rem]",
    position: "object-[72%_center]",
  },
  {
    id: 4,
    src: "/1.png",
    alt: "Produto em destaque do cardápio",
    width: "w-[18rem] md:w-[20rem]",
    product: true,
  },
  {
    id: 5,
    src: "/img1.jpg",
    alt: "Equipe servindo em evento",
    width: "w-[15rem] md:w-[17rem]",
    position: "object-[60%_center]",
  },
  {
    id: 6,
    src: "/galeria.jpg",
    alt: "Convidados curtindo a experiência",
    width: "w-[18rem] md:w-[20rem]",
    position: "object-[34%_center]",
  },
];

const repeatedGallery = [...galleryItems, ...galleryItems];

export default function Galeria() {
  return (
    <section id="galeria" className="scroll-mt-28 overflow-hidden bg-white">
      <div className="mt-12 overflow-hidden pb-20">
        <div className="gallery-marquee flex items-center gap-4 md:gap-5">
          {repeatedGallery.map((item, index) => (
            <article
              key={`${item.id}-${index}`}
              className={`${item.width} group relative h-[13.5rem] shrink-0 overflow-hidden rounded-[1.25rem] border border-[#EFE5E7] bg-[#FDEDF0] shadow-[0_10px_30px_rgba(17,17,17,0.05)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(17,17,17,0.08)] md:h-[15rem]`}
            >
              {item.product ? (
                <div className="relative flex h-full items-center justify-center bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.95),rgba(253,237,240,1)_60%)] p-6">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={430}
                    height={430}
                    className="h-auto w-full max-w-[11rem] object-contain transition duration-500 group-hover:scale-110"
                  />
                </div>
              ) : (
                <>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 20rem"
                    className={`object-cover ${item.position ?? "object-center"} transition duration-700 group-hover:scale-105`}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.18))]" />
                </>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
