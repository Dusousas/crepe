"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Hero() {
  return (
    <section id="inicio" className="scroll-mt-28 bg-[#FDEDF0]">
      {/* ALTERAÇÃO AQUI ↓ */}
      <div className="maxW relative min-h-screen overflow-hidden">
        
        <article
          className="
            relative flex min-h-screen flex-col items-center justify-between pt-20 pb-20 px-4 lg:pb-0
            lg:h-full lg:items-center lg:justify-center lg:px-0 lg:pt-0
          "
        >
          {/* TEXTO */}
          <div
            className="
              relative text-center mt-30 font-anton uppercase leading-[1] tracking-[-0.05em] lg:mt-0
              lg:absolute lg:inset-x-0 lg:top-40
            "
          >
            <h1 className="text-[clamp(3.8rem,14vw,13rem)] text-[#F25394]/30 lg:text-[clamp(4rem,14vw,13rem)]">
              Sabor que vai
            </h1>

            <h1 className="relative -mt-[0.02em] text-[clamp(4.2rem,14vw,13rem)] text-[#F25394] lg:text-[clamp(4rem,14vw,13rem)]">
              até você!
            </h1>

            <h1
              className="hidden lg:block absolute bottom-0 z-20 mx-auto w-full text-[clamp(4.2rem,14vw,13rem)] text-transparent lg:text-[clamp(4rem,14vw,13rem)]"
              style={{ WebkitTextStroke: "2px #F25394" }}
            >
              até você!
            </h1>
          </div>

          {/* IMAGEM */}
          <div
            className="
              relative flex w-full justify-center
              lg:absolute lg:left-1/2 lg:top-[70%] lg:mt-0 lg:w-[min(84vw,48rem)] lg:-translate-x-1/2 lg:-translate-y-1/2
            "
          >
            <div className="relative max-w-[900px] lg:max-w-none">
              <Image
                src="/hero-1.png"
                alt="Lanche em destaque da crepearia"
                width={960}
                height={960}
                priority
                className="w-[500px] lg:w-full h-auto"
              />

              <Image
                src="/avtar.png"
                alt="Avatar ilustrado da marca"
                width={960}
                height={960}
                priority
                className="
                  absolute bottom-0 left-1/2 w-[70px] -translate-x-1/2
                  lg:left-0 lg:translate-x-0 lg:w-[200px] lg:-left-10
                "
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}