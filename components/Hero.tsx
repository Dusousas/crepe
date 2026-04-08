"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const deckImages = [
  { src: "/crepe1.png", alt: "Crepe artesanal em destaque" },
  { src: "/crepe2.png", alt: "Crepe artesanal servido na hora" },
  { src: "/crepe1.png", alt: "Crepe artesanal em destaque" },
  { src: "/crepe2.png", alt: "Crepe artesanal servido na hora" },
];

const deckPositions = [
  { x: 0, y: 0, rotate: -11, scale: 1, opacity: 1, zIndex: 40 },
  { x: 24, y: 18, rotate: -4, scale: 0.95, opacity: 0.82, zIndex: 30 },
  { x: 46, y: 36, rotate: 5, scale: 0.9, opacity: 0.64, zIndex: 20 },
  { x: 66, y: 54, rotate: 11, scale: 0.86, opacity: 0.44, zIndex: 10 },
];

export default function Hero() {
  const deckRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  useLayoutEffect(() => {
    if (!deckRef.current) return;

    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!cards.length) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ctx = gsap.context(() => {
      let order = cards.map((_, index) => index);
      let cycleTween: gsap.core.Timeline | null = null;

      const placeCards = (duration = 0) => {
        order.forEach((cardIndex, stackIndex) => {
          const card = cards[cardIndex];
          const position = deckPositions[stackIndex];
          const animation = {
            x: position.x,
            y: position.y,
            rotate: position.rotate,
            scale: position.scale,
            opacity: position.opacity,
            zIndex: position.zIndex,
            duration,
            ease: "power3.out",
          };

          if (duration === 0) {
            gsap.set(card, animation);
          } else {
            gsap.to(card, animation);
          }
        });
      };

      const cycleCards = () => {
        const frontIndex = order[0];
        const frontCard = cards[frontIndex];
        const secondCard = cards[order[1]];
        const backPosition = deckPositions[deckPositions.length - 1];

        cycleTween = gsap.timeline({
          delay: 1.7,
          onComplete: () => {
            order = [...order.slice(1), frontIndex];

            gsap.set(frontCard, {
              x: backPosition.x + 28,
              y: backPosition.y + 16,
              rotate: backPosition.rotate + 8,
              scale: backPosition.scale - 0.02,
              opacity: 0,
              zIndex: 0,
            });

            placeCards(0.75);
            cycleCards();
          },
        });

        cycleTween.to(
          secondCard,
          {
            y: deckPositions[1].y - 8,
            duration: 0.35,
            ease: "power1.inOut",
            yoyo: true,
            repeat: 1,
          },
          0.18,
        );

        cycleTween.to(frontCard, {
          x: -30,
          y: -18,
          rotate: -18,
          scale: 1.03,
          duration: 0.45,
          ease: "power2.out",
        });

        cycleTween.to(frontCard, {
          x: 148,
          y: -6,
          rotate: 18,
          opacity: 0,
          duration: 0.6,
          ease: "power3.in",
        });
      };

      placeCards();

      if (!prefersReducedMotion) {
        cycleCards();
      }

      return () => {
        cycleTween?.kill();
      };
    }, deckRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section id="inicio" className="scroll-mt-28 bg-[#FDEDF0]">
      <div className="maxW relative h-screen overflow-hidden">
        <div className="pointer-events-none absolute left-[1%] bottom-[8%] z-20 hidden lg:block">
          <div className="absolute left-[18%] top-[14%] h-[12rem] w-[12rem] rounded-full bg-[#F5C3D3]/40 blur-3xl" />

          {/* <div
            ref={deckRef}
            className="relative h-[22rem] w-[17rem] lg:h-[26rem] lg:w-[19rem]"
          >
            {deckImages.map((item, index) => (
              <div
                key={`${item.src}-${index}`}
                ref={(node) => {
                  cardRefs.current[index] = node;
                }}
                className="absolute inset-0 p-2"
              >
                <div className="relative flex h-full items-center justify-center overflow-visible">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1024px) 17rem, 19rem"
                    className="object-contain"
                    priority={index < 2}
                  />
                </div>
              </div>
            ))}
          </div> */}
        </div>

        <article className="relative flex h-full items-center justify-center">
          <div className="absolute inset-x-0 top-40 text-center font-anton uppercase leading-[1] tracking-[-0.05em]">
            <h1 className="text-[clamp(5rem,14vw,13rem)] text-[#F25394]/30">
              Sabor que vai
            </h1>

            <h1 className="relative -mt-[0.02em] text-[clamp(5rem,14vw,13rem)] text-[#F25394]">
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

          <div className="absolute left-1/2 top-[70%] w-[min(84vw,48rem)] -translate-x-1/2 -translate-y-1/2 md:left-[58%]">
            <div className="relative">
              <Image
                src="/hero-1.png"
                alt="Lanche em destaque da crepearia"
                width={960}
                height={960}
                priority
                className="relative h-auto"
              />

              <Image
                src="/avtar.png"
                alt="Avatar ilustrado da marca"
                width={960}
                height={960}
                priority
                className="absolute bottom-0 -left-10 h-auto w-[200px]"
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
