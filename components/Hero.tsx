"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section id="inicio" className="scroll-mt-28 bg-[#FDEDF0]">
      <div className="maxW relative h-screen">
        <article className="relative flex h-full items-center justify-center">
          {/* TEXTO */}
          <div className="absolute inset-x-0 top-40 text-center font-anton uppercase leading-[1] tracking-[-0.05em]">
            <h1 className="text-[clamp(5rem,14vw,13rem)] text-[#F25394]/30">
              Sabor que vai
            </h1>

            <h1 className="-mt-[0.02em] relative text-[clamp(5rem,14vw,13rem)] text-[#F25394]">
              até você!
            </h1>

            <h1
              className="absolute bottom-0 z-20 mx-auto w-full text-[clamp(5rem,14vw,13rem)] text-transparent"
              style={{
                WebkitTextStroke: "2px #F25394",
              }}
            >
              até você!
            </h1>
          </div>

          {/* IMAGEM */}
          <div className="absolute left-1/2 top-[70%] w-[min(84vw,48rem)] -translate-x-1/2 -translate-y-1/2 md:left-[58%]">
            <Image
              src="/hero-1.png"
              alt="Lanche em destaque da crepearia"
              width={960}
              height={960}
              priority
              className="relative h-auto w-full"
            />
          </div>
          <Image
            src="/avtar.png"
            alt="Avatar ilustrado da marca"
            width={200}
            height={200}
            className="absolute bottom-10 left-80 w-[200px] h-auto"
          />
        </article>
      </div>
    </section>
  );
}
