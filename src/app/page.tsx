"use client";
import Image from "next/image";
import PlaneIntro from "../components/PlaneIntro";
import { useEffect, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
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
        <div className="absolute left-12 -bottom-4 hidden md:block decor-star xs" />
        <div className="relative w-62 h-54 rounded-md overflow-hidden border border-black/10 shadow-md">
          <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-xs tracking-wide font-semibold">{t('cv.title')}</span>
        <Image
            src="/yo.webp"
            alt="Foto de Luna Gabriela"
            width={640}
            height={640}
            className="w-full h-full object-cover anime-hover"
          priority
        />
        </div>
        <section className="bubble bubble-purple w-full text-center px-6 py-4" style={{color: '#1a1a1a'}}>
          <p className="leading-relaxed text-base">
            {t('cv.description')}
          </p>
        </section>

        

        {/* Sección: Mi formación académica (mismo documento, aparece al hacer scroll) */}
        <section className="w-full pt-16 relative" aria-labelledby="edu-title">
          <div className="absolute -left-6 top-8 hidden md:block decor-star xs" />
          <div className="absolute left-12 -bottom-4 hidden md:block decor-star sm" />
          <div className="absolute -right-8 top-16 hidden md:block decor-star xs" />
          <h2 id="edu-title" className="text-center font-semibold tracking-wide mb-8 uppercase text-black text-3xl">{t('education.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-10">
              <div className="flex items-start gap-4">
                <span className="tag-arrow text-black">{t('education.primary')}</span>
                <div className="bubble bubble-purple bubble-left px-4 py-3 text-base max-w-[420px]">
                  {t('education.primary.description')}
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="tag-arrow text-black">{t('education.secondary')}</span>
                <div className="bubble bubble-purple bubble-left px-4 py-3 text-base max-w-[420px]">
                  {t('education.secondary.description')}
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="tag-arrow text-black">{t('education.university')}</span>
                <div className="bubble bubble-purple bubble-left px-4 py-3 text-base max-w-[420px]">
                  {t('education.university.description')}
                </div>
              </div>
            </div>
            <div className="grid place-items-center gap-6">
              <div className="w-28 h-28">
                <Image src="/primer_anime.webp" alt="anime 1" width={300} height={300} className="w-full h-full object-contain anime-hover" />
              </div>
              <div className="w-28 h-28">
                <Image src="/segundo_anime.webp" alt="anime 2" width={300} height={300} className="w-full h-full object-contain anime-hover" />
              </div>
              <div className="w-28 h-28">
                <Image src="/tercer_anime.webp" alt="anime 3" width={300} height={300} className="w-full h-full object-contain anime-hover" />
              </div>
            </div>
          </div>
        </section>

        {/* Sección: Mi experiencia laboral */}
        <section className="w-full pt-20 relative" aria-labelledby="exp-title">
          <div className="absolute -right-8 top-6 hidden md:block decor-star xs" />
          <div className="absolute right-16 -bottom-6 hidden md:block decor-star sm" />
          <div className="absolute -left-6 top-12 hidden md:block decor-star xs" />
          <div className="absolute left-8 top-20 hidden md:block decor-star xs" />
          <h2 id="exp-title" className="text-center font-semibold tracking-wide mb-8 uppercase text-black text-3xl">{t('experience.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 items-start">
            <div className="w-[180px] h-[180px] mx-auto md:mx-0">
              <Image src="/cuarto_anime.webp" alt="experiencia" width={360} height={360} className="w-full h-full object-contain anime-hover" />
            </div>
            <div className="bubble bubble-purple bubble-left px-4 py-4 text-base leading-relaxed">
              {t('experience.description')}
            </div>
          </div>
        </section>

        {/* Sección: Mis logros y reconocimientos */}
        <section className="w-full pt-20 relative" aria-labelledby="awards-title">
          <div className="absolute -left-8 top-10 hidden md:block decor-star xs" />
          <div className="absolute -right-6 top-16 hidden md:block decor-star sm" />
          <div className="absolute right-12 -bottom-4 hidden md:block decor-star xs" />
          <div className="relative flex items-center justify-center mb-8">
            <h2 id="awards-title" className="text-center font-semibold tracking-wide uppercase text-black text-3xl">{t('awards.title')}</h2>
            <div className="absolute right-6 -top-6 hidden md:block w-25 h-25">
              <Image src="/quinto_anime.webp" alt="chica con diploma" width={160} height={160} className="w-full h-full object-contain anime-hover" />
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
              <div className="bubble bubble-purple px-4 py-4 text-base leading-relaxed">
                <p>{t('awards.description')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección: Mis viajes */}
        <section className="w-full pt-20 relative" aria-labelledby="trips-title">
          <div className="absolute left-6 top-10 hidden md:block decor-star" />
          <div className="absolute -right-8 top-16 hidden md:block decor-star xs" />
          <div className="absolute -left-6 top-20 hidden md:block decor-star sm" />
          <h2 id="trips-title" className="text-center font-semibold tracking-wide mb-8 uppercase text-black text-3xl">
            <a href="/viajes" className="inline-block cursor-pointer transition-transform duration-300 hover:text-purple-500 hover:rotate-3 hover:-translate-y-1 hover:scale-110">{t('trips.title')}</a>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_260px] gap-8 items-center">
            <ul className="space-y-8 text-black">
              <li className="flex items-center gap-6">
                <span className="text-xl">☆</span>
                <span className="text-base">{t('trips.brasil')}</span>
                <span className="text-2xl">🇧🇷</span>
              </li>
              <li className="flex items-center gap-6">
                <span className="text-xl">☆</span>
                <span className="text-base">{t('trips.peru')}</span>
                <span className="text-2xl">🇵🇪</span>
              </li>
              <li className="flex items-center gap-6">
                <span className="text-xl">☆</span>
                <span className="text-base">{t('trips.paraguay')}</span>
                <span className="text-2xl">🇵🇾</span>
              </li>
            </ul>
            <div className="w-[240px] h-[260px] mx-auto md:mx-0">
              <Image src="/sexto_anime.webp" alt="viajes" width={360} height={380} className="w-full h-full object-contain anime-hover" />
            </div>
          </div>
        </section>

        {/* Sección: Mis pasatiempos */}
        <section className="w-full pt-20 relative" aria-labelledby="hobbies-title">
          <div className="absolute -right-6 top-8 hidden md:block decor-star xs" />
          <div className="absolute right-12 -bottom-4 hidden md:block decor-star sm" />
          <div className="absolute -left-8 top-16 hidden md:block decor-star xs" />
          <div className="absolute left-8 top-24 hidden md:block decor-star xs" />
          <h2 id="hobbies-title" className="text-center font-semibold tracking-wide mb-8 uppercase text-black text-3xl">
            <a href="/pasatiempos" className="inline-block cursor-pointer transition-transform duration-300 hover:text-purple-500 hover:rotate-3 hover:-translate-y-1 hover:scale-110">{t('hobbies.title')}</a>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_260px] gap-8 items-center">
            <ul className="space-y-8 text-black">
              <li className="flex items-center gap-6">
                <span className="text-xl animate-spin" style={{animationDuration: '3s'}}>☆</span>
                <span className="text-base">{t('hobbies.read')}</span>
              </li>
              <li className="flex items-center gap-6">
                <span className="text-xl animate-spin" style={{animationDuration: '3s'}}>☆</span>
                <span className="text-base">{t('hobbies.sports')}</span>
          </li>
              <li className="flex items-center gap-6">
                <span className="text-xl animate-spin" style={{animationDuration: '3s'}}>☆</span>
                <span className="text-base">{t('hobbies.cook')}</span>
          </li>
            </ul>
            <div className="w-[240px] h-[260px] mx-auto md:mx-0">
              <Image src="/septimo_anime.webp" alt="pasatiempos" width={360} height={380} className="w-full h-full object-contain anime-hover" />
            </div>
          </div>
        </section>

        {/* Sección: Mis proyectos */}
        <section className="w-full pt-20 relative" aria-labelledby="projects-title">
          <div className="absolute -left-6 top-8 hidden md:block decor-star xs" />
          <div className="absolute -right-8 top-16 hidden md:block decor-star sm" />
          <div className="absolute left-12 -bottom-4 hidden md:block decor-star xs" />
          <div className="absolute right-8 top-24 hidden md:block decor-star xs" />
          <h2 id="projects-title" className="text-center font-semibold tracking-wide mb-8 uppercase text-black text-3xl">{t('projects.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_260px] gap-8 items-start">
            <div className="space-y-8">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-black mb-4">GitHub</h3>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-xl text-blue-400">☆</span>
                <span className="text-base text-black">{t('projects.messaging')}</span>
                <div className="w-24 h-16 bg-purple-200 border-2 border-purple-300 flex items-center justify-center">
                  <span className="text-purple-600 font-bold">X</span>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-xl text-blue-400">☆</span>
                <span className="text-base text-black">{t('projects.calculator')}</span>
                <div className="w-24 h-16 bg-purple-200 border-2 border-purple-300 flex items-center justify-center">
                  <span className="text-purple-600 font-bold">X</span>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-xl text-blue-400">☆</span>
                <span className="text-base text-black">{t('projects.other')}</span>
                <div className="w-24 h-16 bg-purple-200 border-2 border-purple-300 flex items-center justify-center">
                  <span className="text-purple-600 font-bold">X</span>
                </div>
              </div>
            </div>
            <div className="w-[240px] h-[260px] mx-auto md:mx-0">
              <Image src="/octavo_anime.webp" alt="proyectos" width={360} height={380} className="w-full h-full object-contain anime-hover" />
            </div>
          </div>
        </section>

        {/* Sección: Testimonios */}
        <section className="w-full pt-20 relative" aria-labelledby="testimonials-title">
          <div className="absolute -left-6 top-8 hidden md:block decor-star xs" />
          <div className="absolute -right-8 top-16 hidden md:block decor-star sm" />
          <div className="absolute left-12 -bottom-4 hidden md:block decor-star xs" />
          <div className="absolute right-8 top-24 hidden md:block decor-star xs" />
          
          {/* Título con imagen de anime pequeña */}
          <div className="flex items-center justify-center mb-8">
            <h2 id="testimonials-title" className="font-semibold tracking-wide uppercase text-black text-3xl">
              {t('testimonials.title')}
            </h2>
            <Image
              src="/noveno_anime.webp" 
              alt="testimonios" 
              width={100} 
              height={100} 
              className="ml-4 anime-hover" 
            />
          </div>

          {/* Contenido: cada imagen al lado de su texto */}
          <div className="space-y-6">
            {/* Fila 1: Imagen + Texto */}
            <div className="flex items-center gap-6">
              <div className="w-32 h-20 bg-gray-200 border-2 border-gray-300 flex items-center justify-center flex-shrink-0">
                <div className="w-8 h-8 border-2 border-gray-400 transform rotate-45"></div>
              </div>
              <div className="bubble bubble-purple px-4 py-3 text-sm flex-1">
                <p>{t('testimonials.description')}</p>
              </div>
            </div>

            {/* Fila 2: Texto + Imagen */}
            <div className="flex items-center gap-6">
              <div className="bubble bubble-purple px-4 py-3 text-sm flex-1">
                <p>{t('testimonials.description')}</p>
              </div>
              <div className="w-32 h-20 bg-gray-200 border-2 border-gray-300 flex items-center justify-center flex-shrink-0">
                <div className="w-8 h-8 border-2 border-gray-400 transform rotate-45"></div>
              </div>
            </div>

            {/* Fila 3: Imagen + Texto */}
            <div className="flex items-center gap-6">
              <div className="w-32 h-20 bg-gray-200 border-2 border-gray-300 flex items-center justify-center flex-shrink-0">
                <div className="w-8 h-8 border-2 border-gray-400 transform rotate-45"></div>
              </div>
              <div className="bubble bubble-purple px-4 py-3 text-sm flex-1">
                <p>{t('testimonials.description')}</p>
              </div>
            </div>
        </div>
        </section>

        {/* Sección: Mis redes sociales (última) */}
        <section className="w-full pt-20 relative" aria-labelledby="social-title">
          <div className="absolute -left-6 top-8 hidden md:block decor-star xs" />
          <div className="absolute -right-8 top-12 hidden md:block decor-star sm" />
          <div className="absolute left-8 top-20 hidden md:block decor-star xs" />
          <h2 id="social-title" className="text-center font-semibold tracking-wide mb-8 uppercase text-black text-3xl">{t('menu.social')}</h2>

          <div className="flex justify-center">
            <div className="relative w-[320px] md:w-[360px]" style={{ aspectRatio: '360/380' }}>
              <Image src="/decimo_anime.webp" alt="redes sociales" width={360} height={380} className="w-full h-full object-contain select-none pointer-events-none" />

              {/* Hotspots visibles al hover (sobrepuestos) */}
              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/19gVBgsuYY/"
          target="_blank"
          rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook - Luna Mideros"
                className="absolute z-20 flex items-center justify-center cursor-pointer rounded-sm text-sm md:text-base font-semibold text-black select-none"
                style={{ top: '44.5%', left: '33%', width: '30%', height: '8%' }}
              >
                Luna Mideros
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/luna.42_?igsh=MTQ1d2w3NWw5ejhrMQ=="
          target="_blank"
          rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram - Luna Mideros"
                className="absolute z-20 flex items-center justify-center cursor-pointer rounded-sm text-sm md:text-base font-semibold text-black select-none"
                style={{ top: '57.5%', left: '33%', width: '30%', height: '8%' }}
              >
                Luna Mideros
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/lunamideros2003"
          target="_blank"
          rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub - Luna Mideros"
                className="absolute z-20 flex items-center justify-center cursor-pointer rounded-sm text-sm md:text-base font-semibold text-black select-none"
                style={{ top: '70.5%', left: '33%', width: '30%', height: '8%' }}
              >
                Luna Mideros
              </a>
            </div>
          </div>

          <div className="absolute left-10 bottom-6 hidden md:block decor-star xs" />
        </section>
      </main>
      )}
    </div>
  );
}
