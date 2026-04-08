"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function Branding() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".branding-line-1 span", {
        y: 120,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.12,
      });

      gsap.from(".branding-line-2 span", {
        y: 120,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.12,
        delay: 0.15,
      });

      gsap.from(".floating-word", {
        opacity: 0,
        scale: 0.92,
        y: 40,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.08,
        delay: 0.35,
      });

      gsap.to(".floating-1", {
        y: -18,
        x: 10,
        repeat: -1,
        yoyo: true,
        duration: 3.5,
        ease: "sine.inOut",
      });

      gsap.to(".floating-2", {
        y: 14,
        x: -8,
        repeat: -1,
        yoyo: true,
        duration: 4,
        ease: "sine.inOut",
      });

      gsap.to(".floating-3", {
        y: -12,
        x: 12,
        repeat: -1,
        yoyo: true,
        duration: 3.2,
        ease: "sine.inOut",
      });

      gsap.to(".floating-4", {
        y: 10,
        x: 6,
        repeat: -1,
        yoyo: true,
        duration: 4.2,
        ease: "sine.inOut",
      });

      gsap.to(".floating-5", {
        y: -14,
        x: -12,
        repeat: -1,
        yoyo: true,
        duration: 3.8,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="eventos"
      className="relative scroll-mt-28 overflow-hidden bg-[#FCE8EC] py-16 md:pt-10 md:pb-20"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <article className="relative min-h-[50vh]">
          <div className="relative z-10">
            <div className="branding-line-1 flex flex-wrap items-start gap-y-2 font-anton justify-center text-3xl gap-1 text-center uppercase leading-[0.84] lg:justify-start lg:text-8xl tracking-[-0.05em] lg:gap-x-4">
              <span className="text-[#F25394]">Levamos</span>
              <span className="text-[#97263C]">NOSSAS BARRAQUINHAS</span>
            </div>

            <div className="branding-line-2 flex flex-wrap items-start justify-center md:justify-center gap-x-4 gap-y-2 mt-2 md:mt-4 font-anton uppercase leading-[0.84] tracking-[-0.05em] text-[clamp(3rem,12vw,9rem)]">
              <span className="text-[#F25394]">para o seu</span>
              <span className="text-[#97263C]">evento!</span>
            </div>
          </div>

          <div className="flex absolute justify-center mt-10 z-10">
            <img
              className="w-[320px] drop-shadow-[0_25px_50px_rgba(151,38,60,0.25)]"
              src="1-2.png"
              alt=""
            />
            <img
              className="w-[320px] drop-shadow-[0_25px_50px_rgba(151,38,60,0.25)]"
              src="1-3.png"
              alt=""
            />
            <img
              className="w-[320px] drop-shadow-[0_25px_50px_rgba(151,38,60,0.25)]"
              src="1-1.png"
              alt=""
            />
            <img
              className="w-[320px] drop-shadow-[0_25px_50px_rgba(151,38,60,0.25)]"
              src="1-4.png"
              alt=""
            />
            <img
              className="w-[320px] drop-shadow-[0_25px_50px_rgba(151,38,60,0.25)]"
              src="1-5.png"
              alt=""
            />
          </div>

          <div className="pointer-events-none absolute inset-0 z-0">
            <span className="floating-word floating-1 absolute left-[2%] tracking-wider rotate-6  top-[68%] font-anton uppercase leading-none tracking-[-0.05em] text-[clamp(3rem,10vw,8rem)] text-[#F25394]/15">
              crepes
            </span>

            <span className="floating-word floating-2 rotate-12 absolute right-[25%] tracking-wider top-[1%] font-anton uppercase leading-none tracking-[-0.05em] text-[clamp(2.2rem,6vw,5rem)] text-[#97263C]/5">
              salgados
            </span>

            <span className="floating-word floating-2 rotate-12 absolute -right-[5%] tracking-wider top-[10%] font-anton uppercase leading-none tracking-[-0.05em] text-[clamp(2.2rem,6vw,5rem)] text-[#97263C]/10">
              hot dog
            </span>

            <span className="floating-word rotate-3 floating-3 absolute -left-[10%] tracking-wider  top-[30%] font-anton uppercase leading-none tracking-[-0.05em] text-[clamp(2.4rem,6vw,5.5rem)] text-[#F25394]/10">
              batatas
            </span>

            <span className="floating-word floating-4 -rotate-12 absolute tracking-wider -right-[4%] bottom-[10%] font-anton uppercase leading-none tracking-[-0.05em] text-[clamp(2.6rem,7vw,6rem)] text-[#F25394]/5">
              churros
            </span>

            <span className="floating-word floating-5 tracking-wider  absolute left-[48%] top-[62%] font-anton uppercase leading-none tracking-[-0.05em] text-[clamp(2rem,5vw,5rem)] text-[#97263C]/18">
              doces
            </span>
          </div>
        </article>
      </div>
    </section>
  );
}
