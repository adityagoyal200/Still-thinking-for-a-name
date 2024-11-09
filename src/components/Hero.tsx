import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const tl = gsap.timeline();

    imageRefs.current.forEach((img) => {
      let xTransform = gsap.utils.random(-100, 100);
      gsap.set(img, {
        transformOrigin: xTransform < 0 ? '0%' : '100%',
      });

      tl.to(img, {
        scale: 0,
        ease: "none",
        scrollTrigger: {
          trigger: img,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });
  }, []);

  const divs = Array.from({ length: 40 }, (_, index) => {
    const randomRow = Math.floor(Math.random() * 20) + 1;
    const randomCol = Math.floor(Math.random() * 10) + 1;

    return (
      <div
        key={index}
        className="col-span-1 row-span-1"
        style={{
          gridRow: randomRow,
          gridColumn: randomCol
        }}
      >
        <img
          ref={(el) => imageRefs.current[index] = el}
          src={`https://picsum.photos/200/300?random=${index}`}
          alt={`Random ${index}`}
          className="hero-img object-cover w-full h-full"
        />
      </div>
    );
  });

  return (
    <>
      <div className="grid grid-cols-10 grid-rows-20 gap-2 relative">
        {divs}
      </div>
      <div className="fixed uppercase w-full h-full top-0 flex flex-col items-center justify-center text-center">
        <div className="text-white font-semibold text-6xl md:text-4xl sm:text-3xl xs:text-2xl">
          <h1>Aditya Goyal</h1>
        </div>
        <div className="text-white uppercase font-semibold text-3xl md:text-2xl sm:text-xl xs:text-lg font-serif">
          <h1>ありがとう</h1>
        </div>
      </div>
    </>
  );
};

export default Hero;
