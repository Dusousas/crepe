"use client";

import Image from "next/image";

const galleryItems = [
  {
    id: 1,
    src: "/galeria/1.jpg",
    alt: "Foto da galeria 1",
    position: "object-center",
  },
  {
    id: 2,
    src: "/galeria/2.jpg",
    alt: "Foto da galeria 2",
    position: "object-center",
  },
  {
    id: 3,
    src: "/galeria/3.jpg",
    alt: "Foto da galeria 3",
    position: "object-center",
  },
  {
    id: 4,
    src: "/galeria/4.jpg",
    alt: "Foto da galeria 4",
    position: "object-center",
  },
  {
    id: 5,
    src: "/galeria/5.jpg",
    alt: "Foto da galeria 5",
    position: "object-center",
  },
  {
    id: 6,
    src: "/galeria/6.jpg",
    alt: "Foto da galeria 6",
    position: "object-center",
  },
  {
    id: 7,
    src: "/galeria/7.jpeg",
    alt: "Foto da galeria 7",
    position: "object-center",
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
              className="group relative h-[13.5rem] w-[16rem] shrink-0 overflow-hidden rounded-[1.25rem] border border-[#EFE5E7] bg-[#FDEDF0] shadow-[0_10px_30px_rgba(17,17,17,0.05)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(17,17,17,0.08)] md:h-[15rem] md:w-[18rem]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, 20rem"
                className={`object-cover ${item.position} transition duration-700 group-hover:scale-105`}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.18))]" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
