"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const products = [
  { id: 1, name: "Crepe Classico", image: "/crepe1.png" },
  { id: 2, name: "Crepe Frango", image: "/crepe2.png" },
  { id: 3, name: "Crepe Calabresa", image: "/crepe1.png" },
  { id: 4, name: "Crepe Quatro Queijos", image: "/crepe2.png" },
  { id: 5, name: "Crepe Chocolate", image: "/crepe1.png" },
  { id: 6, name: "Crepe Especial", image: "/crepe2.png" },
];

function getVisibleCards(width: number) {
  if (width >= 1024) return 3;
  if (width >= 768) return 2;
  return 1;
}

export default function Cardapio() {
  const [visibleCards, setVisibleCards] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const updateVisibleCards = () => {
      setVisibleCards(getVisibleCards(window.innerWidth));
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);

    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const maxIndex = Math.max(products.length - visibleCards, 0);
  const safeCurrentIndex = Math.min(currentIndex, maxIndex);

  const totalPages = Math.max(maxIndex + 1, 1);
  const progressLabel = `${String(safeCurrentIndex + 1).padStart(2, "0")} / ${String(
    totalPages
  ).padStart(2, "0")}`;

  return (
    <section id="cardapio" className="scroll-mt-28 bg-white py-20">
      <div className="maxW">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-anton text-4xl uppercase text-[#2b2b2b]">
              O Que Levamos para Sua Festa
            </h2>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto">
            <span className="font-anton text-xl uppercase text-[#B63149]">
              {progressLabel}
            </span>

            <button
              type="button"
              onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
              disabled={safeCurrentIndex === 0}
              className="flex h-12 w-12 items-center cursor-pointer justify-center rounded-full border border-dashed border-[#D95C71] text-[#B63149] transition disabled:cursor-not-allowed disabled:opacity-35"
              aria-label="Ver produtos anteriores"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <button
              type="button"
              onClick={() =>
                setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
              }
              disabled={safeCurrentIndex === maxIndex}
              className="flex h-12 w-12 items-center cursor-pointer justify-center rounded-full border border-dashed border-[#D95C71] text-[#B63149] transition disabled:cursor-not-allowed disabled:opacity-35"
              aria-label="Ver mais produtos"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-10 overflow-hidden border border-dashed border-[#D95C71]">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${safeCurrentIndex * (100 / visibleCards)}%)`,
            }}
          >
            {products.map((product) => (
              <article
                key={product.id}
                className="group flex shrink-0 flex-col border-r border-dashed border-[#D95C71] px-5 py-8 last:border-r-0 md:px-8 md:py-10"
                style={{ width: `${100 / visibleCards}%` }}
              >
                <div className="relative flex justify-center items-center h-[300px]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={430}
                    height={430}
                    className="h-auto w-full max-w-[200px] object-contain transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>

                <div className="flex min-h-[4.5rem] flex-col justify-end">
                  <h3 className="font-anton text-[clamp(1.8rem,3vw,2.8rem)] text-center uppercase leading-none text-[#131313]">
                    {product.name}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
