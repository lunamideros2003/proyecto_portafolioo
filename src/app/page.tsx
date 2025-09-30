"use client";
import Image from "next/image";
import PlaneIntro from "../components/PlaneIntro";
import { useEffect, useState } from "react";

export default function Home() {
  const [introDone, setIntroDone] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setIntroDone(true), 2800);
    return () => clearTimeout(id);
  }, []);
  return (
    <div className="min-h-screen grid place-items-center pt-28 pb-12 px-4">
      <PlaneIntro />
      {introDone && (
      <main className="w-full max-w-4xl grid gap-10 justify-items-center relative">
        <div className="absolute -left-8 top-8 hidden md:block decor-star xs" />
        <div className="absolute -right-6 top-16 hidden md:block decor-star sm" />
        <div className="relative w-44 h-44 rounded-md overflow-hidden border border-black/10 shadow-md">
          <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-xs tracking-wide font-semibold">MI HOJA DE VIDA</span>
          <Image
            src="/yo.webp"
            alt="Foto de Luna Gabriela"
            width={640}
            height={640}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <section className="bubble bubble-purple w-full text-center px-6 py-4" style={{color: '#1a1a1a'}}>
          <p className="leading-relaxed">
            Me llamo Luna Gabriela tengo 22 años soy de colombia naci en pasto en estos momentos me encuentro cursando una carrera de ingeneria en software y me encuentro trabajando tengo muchas ocupaciones como hobbits adelante conoceras un pco msa de mi asi que adelante te invito a pasr
          </p>
        </section>

        {/* Sección: Mi formación académica (mismo documento, aparece al hacer scroll) */}
        <section className="w-full pt-16 relative" aria-labelledby="edu-title">
          <div className="absolute -left-6 top-8 hidden md:block decor-star xs" />
          <div className="absolute left-12 -bottom-4 hidden md:block decor-star sm" />
          <div className="absolute -right-8 top-16 hidden md:block decor-star xs" />
          <h2 id="edu-title" className="text-center font-semibold tracking-wide mb-8 uppercase text-black">MI FORMACION ACADEMICA</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-10">
              <div className="flex items-start gap-4">
                <span className="tag-arrow text-black">PRIMARIA</span>
                <div className="bubble bubble-purple bubble-left px-4 py-3 text-sm max-w-[420px]">
                  la constitucion de colombia esta basada en muchos relatos artistic os como obras de arte y cosas esplendidas del mundo en el cual vamos descubriendo mas cosas nuevas
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="tag-arrow text-black">BACHILLER</span>
                <div className="bubble bubble-purple bubble-left px-4 py-3 text-sm max-w-[420px]">
                  la constitucion de colombia esta basada en muchos relatos artistic os como obras de arte y cosas esplendidas del mundo en el cual vamos descubriendo mas cosas nuevas
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="tag-arrow text-black">UNIVERSIDAD</span>
                <div className="bubble bubble-purple bubble-left px-4 py-3 text-sm max-w-[420px]">
                  la constitucion de colombia esta basada en muchos relatos artistic os como obras de arte y cosas esplendidas del mundo en el cual vamos descubriendo mas cosas nuevas
                </div>
              </div>
            </div>
            <div className="grid place-items-center gap-6">
              <div className="w-28 h-28">
                <Image src="/primer_anime.webp" alt="anime 1" width={300} height={300} className="w-full h-full object-contain" />
              </div>
              <div className="w-28 h-28">
                <Image src="/segundo_anime.webp" alt="anime 2" width={300} height={300} className="w-full h-full object-contain" />
              </div>
              <div className="w-28 h-28">
                <Image src="/tercer_anime.webp" alt="anime 3" width={300} height={300} className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </section>

        {/* Sección: Mi experiencia laboral */}
        <section className="w-full pt-20 relative" aria-labelledby="exp-title">
          <div className="absolute -right-8 top-6 hidden md:block decor-star xs" />
          <div className="absolute right-16 -bottom-6 hidden md:block decor-star sm" />
          <div className="absolute -left-6 top-12 hidden md:block decor-star xs" />
          <h2 id="exp-title" className="text-center font-semibold tracking-wide mb-8 uppercase text-black">MI EXPERIENCIA LABORAL</h2>
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 items-start">
            <div className="w-[180px] h-[180px] mx-auto md:mx-0">
              <Image src="/cuarto_anime.webp" alt="experiencia" width={360} height={360} className="w-full h-full object-contain" />
            </div>
            <div className="bubble bubble-purple bubble-left px-4 py-4 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit laoreet vestibulum. In velit felis, congue at auctor a, bibendum eu ipsum. Nam aliquet fermentum risus vel rutrum. Morbi tincidunt, magna ultricies posuere ornare, purus dolor vehicula nunc, a lacinia enim mi eu nulla. Suspendisse dapibus orci a nisl placerat, et fringilla orci tempor.
            </div>
          </div>
        </section>

        {/* Sección: Mis logros y reconocimientos */}
        <section className="w-full pt-20 relative" aria-labelledby="awards-title">
          <div className="absolute -left-8 top-10 hidden md:block decor-star xs" />
          <div className="absolute -right-6 top-16 hidden md:block decor-star sm" />
          <div className="relative flex items-center justify-center mb-8">
            <h2 id="awards-title" className="text-center font-semibold tracking-wide uppercase text-black">MIS LOGROS Y RECONOCIMIENTOS</h2>
            <div className="absolute right-6 -top-6 hidden md:block w-25 h-25">
              <Image src="/quinto_anime.webp" alt="chica con diploma" width={160} height={160} className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <div className="flex flex-col items-center gap-4">
              <div className="w-36 h-40">
                <Image src="/foto_uno.webp" alt="reconocimiento 1" width={260} height={280} className="w-full h-full object-contain" />
              </div>
              <div className="w-44 h-28">
                <Image src="/foto_segunda.webp" alt="reconocimiento 2" width={300} height={200} className="w-full h-full object-contain" />
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="bubble bubble-purple px-4 py-4 text-sm leading-relaxed">
                <p>la constitucion de colombia esta basada en muchos relatos artisticos como obras de arte y cosas esplendidas del mundo en el cual vamos descubriendo mas cosas nuevas</p>
                <p className="mt-2">la constitucion de colombia esta basada en muchos relatos artisticos como obras de arte y cosas esplendidas del mundo en el cual vamos descubriendo mas cosas nuevas</p>
                <p className="mt-2">la constitucion de colombia esta basada en muchos relatos artisticos como obras de arte y cosas esplendidas del mundo en el cual vamos descubriendo mas cosas nuevas</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección: Mis viajes */}
        <section className="w-full pt-20 relative" aria-labelledby="trips-title">
          <div className="absolute left-6 top-10 hidden md:block decor-star" />
          <div className="absolute -right-8 top-16 hidden md:block decor-star xs" />
          <h2 id="trips-title" className="text-center font-semibold tracking-wide mb-8 uppercase text-black">
            <a href="/viajes" className="inline-block cursor-pointer transition-transform duration-300 hover:text-purple-500 hover:rotate-3 hover:-translate-y-1 hover:scale-110">MIS VIAJES</a>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_260px] gap-8 items-center">
            <ul className="space-y-8 text-black">
              <li className="flex items-center gap-6">
                <span className="text-xl">☆</span>
                <span className="text-base">BRASIL</span>
                <span className="text-2xl">🇧🇷</span>
              </li>
              <li className="flex items-center gap-6">
                <span className="text-xl">☆</span>
                <span className="text-base">PERÚ</span>
              </li>
              <li className="flex items-center gap-6">
                <span className="text-xl">☆</span>
                <span className="text-base">PARAGUAY</span>
              </li>
              <li className="flex items-center gap-6">
                <span className="text-xl">☆</span>
                <span className="text-base">CHIILE</span>
              </li>
              <li className="flex items-center gap-6">
                <span className="text-xl">☆</span>
                <span className="text-base">ECUADOR</span>
              </li>
            </ul>
            <div className="w-[240px] h-[260px] mx-auto md:mx-0">
              <Image src="/sexto_anime.webp" alt="viajes" width={360} height={380} className="w-full h-full object-contain" />
            </div>
          </div>
        </section>

        {/* Sección: Mis pasatiempos */}
        <section className="w-full pt-20 relative" aria-labelledby="hobbies-title">
          <div className="absolute -right-6 top-8 hidden md:block decor-star xs" />
          <div className="absolute right-12 -bottom-4 hidden md:block decor-star sm" />
          <div className="absolute -left-8 top-16 hidden md:block decor-star xs" />
          <h2 id="hobbies-title" className="text-center font-semibold tracking-wide mb-8 uppercase text-black">
            <a href="/pasatiempos" className="inline-block cursor-pointer transition-transform duration-300 hover:text-purple-500 hover:rotate-3 hover:-translate-y-1 hover:scale-110">MIS PASATIEMPOS</a>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_260px] gap-8 items-center">
            <ul className="space-y-8 text-black">
              <li className="flex items-center gap-6">
                <span className="text-xl animate-spin" style={{animationDuration: '3s'}}>☆</span>
                <span className="text-base">LEER</span>
              </li>
              <li className="flex items-center gap-6">
                <span className="text-xl animate-spin" style={{animationDuration: '3s'}}>☆</span>
                <span className="text-base">DEPORTES</span>
              </li>
              <li className="flex items-center gap-6">
                <span className="text-xl animate-spin" style={{animationDuration: '3s'}}>☆</span>
                <span className="text-base">COCINAR</span>
              </li>
            </ul>
            <div className="w-[240px] h-[260px] mx-auto md:mx-0">
              <Image src="/septimo_anime.webp" alt="pasatiempos" width={360} height={380} className="w-full h-full object-contain" />
            </div>
          </div>
        </section>
      </main>
      )}
    </div>
  );
}
