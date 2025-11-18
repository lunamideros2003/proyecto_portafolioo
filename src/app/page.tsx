"use client";
import Image from "next/image";
import PlaneIntro from "../components/PlaneIntro";
import CursorPencilEffect from "../components/CursorPencilEffect";
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
      <CursorPencilEffect />
      <PlaneIntro />
      {introDone && (
      <main className="w-full max-w-4xl grid gap-10 justify-items-center relative">
        <div className="absolute -left-8 top-8 hidden md:block decor-star xs" />
        <div className="absolute -right-6 top-16 hidden md:block decor-star sm" />
        <div className="absolute left-12 -bottom-4 hidden md:block decor-star xs" />
        <h2 className="text-center font-semibold tracking-wide mb-8 uppercase text-black text-3xl">{t('cv.title')}</h2>
        <div className="relative w-62 h-54 rounded-md border border-black/10 shadow-[0_0_55px_20px_rgba(183,123,255,0.55)]">
            <Image
             src="/yo.webp"
             alt="Foto de Luna Gabriela"
             width={640}
             height={640}
             className="w-full h-full object-cover anime-hover rounded-md"
             priority
             />
            </div>
        <section className="bubble bubble-purple w-full text-center px-6 py-4">
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
          <div className="space-y-10">
            <div className="flex flex-col md:flex-row items-start gap-4">
              <span className="tag-arrow text-black">{t('education.primary')}</span>
              <div className="bubble bubble-purple bubble-left px-4 py-4 text-base max-w-[450px]">
                {t('education.primary.description')}
              </div>
              <div className="w-40 h-40 flex-shrink-0 mx-auto md:mx-0">
                <Image src="/primer_anime.webp" alt="anime 1" width={300} height={300} className="w-full h-full object-contain anime-hover" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-4">
              <span className="tag-arrow text-black">{t('education.secondary')}</span>
              <div className="bubble bubble-purple bubble-left px-4 py-4 text-base max-w-[450px]">
                {t('education.secondary.description')}
              </div>
              <div className="w-40 h-40 flex-shrink-0 mx-auto md:mx-0">
                <Image src="/segundo_anime.webp" alt="anime 2" width={300} height={300} className="w-full h-full object-contain anime-hover" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-4">
              <span className="tag-arrow text-black">{t('education.university')}</span>
              <div className="bubble bubble-purple bubble-left px-4 py-4 text-base max-w-[450px]">
                {t('education.university.description')}
              </div>
              <div className="w-40 h-40 flex-shrink-0 mx-auto md:mx-0">
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
  <a
  href="/viajes"
  className="inline-block cursor-pointer transition-transform duration-300 float-side-rot title-arrow hover:text-purple-500 hover:-translate-y-1 hover:scale-110"
>
  {t('trips.title')}
</a>


  </h2>

  <div className="grid grid-cols-1 md:grid-cols-[1fr_260px] gap-8 items-center">
    <ul className="space-y-8 text-black">
      <li className="flex items-center gap-6">
        <span className="text-xl">☆</span>
        <span className="text-base">{t('trips.ecuador')}</span>
      </li>
      <li className="flex items-center gap-6">
        <span className="text-xl">☆</span>
        <span className="text-base">{t('trips.peru')}</span>
      </li>
      <li className="flex items-center gap-6">
        <span className="text-xl">☆</span>
        <span className="text-base">{t('trips.chile')}</span>
      </li>
      <li className="flex items-center gap-6">
        <span className="text-xl">☆</span>
        <span className="text-base">{t('trips.paraguay')}</span>
      </li>
      <li className="flex items-center gap-6">
        <span className="text-xl">☆</span>
        <span className="text-base">{t('trips.brasil')}</span>
      </li>
    </ul>

    <div className="w-[240px] h-[260px] mx-auto md:mx-0">
      <Image
        src="/sexto_anime.webp"
        alt="viajes"
        width={360}
        height={380}
        className="w-full h-full object-contain anime-hover"
      />
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
          <a
             href="/pasatiempos"
              className="inline-block cursor-pointer transition-transform duration-300 float-side-rot title-arrow hover:text-purple-500 hover:-translate-y-1 hover:scale-110"
            >
               {t('hobbies.title')}
           </a>
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
                <a
                  href="https://calculator-pro5000.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 w-32 h-20 bg-purple-200 border-2 border-purple-300 flex items-center justify-center flex-shrink-0 hover:opacity-80 transition-opacity cursor-pointer overflow-hidden rounded"
                >
                  <Image
                    src="/proyectos/proyecto_uno.webp"
                    alt="Calculadora"
                    width={128}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </a>
                <div className="relative w-16 h-20">
                  <span className="social-arrow-move absolute left-0 top-1/2 -translate-y-1/2">←</span>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-xl text-blue-400">☆</span>
                <span className="text-base text-black">{t('projects.calculator')}</span>
                <a
                  href="https://mapsss-ackl.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-32 h-20 bg-purple-200 border-2 border-purple-300 flex items-center justify-center flex-shrink-0 hover:opacity-80 transition-opacity cursor-pointer overflow-hidden rounded"
                >
                  <Image
                    src="/proyectos/proyecto_dos.webp"
                    alt="Plantilla Mapas"
                    width={128}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </a>
                <div className="relative w-16 h-20">
                  <span className="social-arrow-move absolute left-0 top-1/2 -translate-y-1/2">←</span>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-xl text-blue-400">☆</span>
                <span className="text-base text-black">{t('projects.other')}</span>
                <a
                  href="https://responsive-design-lime-alpha.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-32 h-20 bg-purple-200 border-2 border-purple-300 flex items-center justify-center flex-shrink-0 hover:opacity-80 transition-opacity cursor-pointer overflow-hidden rounded"
                >
                  <Image
                    src="/proyectos/proyecto_tres.webp"
                    alt="Plantilla Películas"
                    width={128}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </a>
                <div className="relative w-16 h-20">
                  <span className="social-arrow-move absolute left-0 top-1/2 -translate-y-1/2">←</span>
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
              <div className="w-48 h-32 relative flex-shrink-0 overflow-hidden rounded-lg border-2 border-gray-300">
                <Image
                  src="/testimonios/testimonio_uno.webp"
                  alt="Testimonio 1"
                  fill
                  className="object-cover"
                />
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
              <div className="w-48 h-32 relative flex-shrink-0 overflow-hidden rounded-lg border-2 border-gray-300">
                <Image
                  src="/testimonios/testimonio_dos.webp"
                  alt="Testimonio 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Fila 3: Imagen + Texto */}
            <div className="flex items-center gap-6">
              <div className="w-48 h-32 relative flex-shrink-0 overflow-hidden rounded-lg border-2 border-gray-300">
                <Image
                  src="/testimonios/testimonio_tres.webp"
                  alt="Testimonio 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bubble bubble-purple px-4 py-3 text-sm flex-1">
                <p>
                  Luna es una estudiante inquieta en cuanto al conocimiento, siempre está atenta a todo lo que puede aprender en clase y por su cuenta propia. Tiene la habilidad de compaginarse y comunicarse fácilmente con sus compañeros, lo que le permite además seguir aprendiendo, debatiendo y obteniendo así nuevas experiencias y también algo muy importante como la práctica.
                </p>
                <p className="mt-2">
                  Finalmente comentar que pronto tendré a Luna nuevamente en el aula de clases y seguramente encontraré una persona cada vez más madura, profesional y con ganas de seguir adelante con este importante proyecto de convertirse en una gran ingeniera.
                </p>
                <span className="mt-2 block font-semibold">Ingeniero Oscar Andrés Osorio</span>
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
            <div className="relative w-[420px] md:w-[520px]" style={{ aspectRatio: '360/380' }}>
              <Image src="/decimo_anime.webp?v=3" alt="redes sociales" width={520} height={550} className="w-full h-full object-contain select-none pointer-events-none" />

              {/* Hotspots visibles al hover (sobrepuestos) */}
              {/* Facebook */}
              

<a
  href="https://www.facebook.com/share/19gVBgsuYY/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Facebook"
  title="Facebook - Luna Mideros"
  // Aplicamos 'float-side-rot' para el movimiento del Hotspot (el <a>)
  className="absolute z-20 flex items-center justify-center cursor-pointer rounded-sm text-xs md:text-sm font-semibold text-black select-none bg-white/00 hover:bg-white transition-colors float-side-rot"
  style={{ top: '7%', left: '40%', width: '35%', height: '6%' }}
>
  {/* Aplicamos 'social-arrow-move' DENTRO del Hotspot (al ⇢ ⇠) */}
  <span className="social-arrow-move">
    ⇢   ⇠
  </span>
</a>
              {/* Instagram */}
              <a
  href="https://www.instagram.com/luna.42_?igsh=MTQ1d2w3NWw5ejhrMQ=="
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Instagram"
  title="Instagram - Luna Mideros"
  // Agregamos float-side-rot para el movimiento sutil del hotspot
  className="absolute z-20 flex items-center justify-center cursor-pointer rounded-sm text-xs md:text-sm font-semibold text-black select-none bg-white/00 hover:bg-white transition-colors float-side-rot"
  style={{ top: '22%', left: '40%', width: '35%', height: '6%' }}
>
  {/* Envolvemos las flechas en un span con la clase para el tamaño, color y animación */}
  <span className="social-arrow-move">
    ⇢   ⇠
  </span>
</a>

              {/* GitHub */}
              <a
  href="https://github.com/lunamideros2003"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="GitHub"
  title="GitHub - Luna Mideros"
  // 1. Agregamos float-side-rot para el movimiento sutil del hotspot
  className="absolute z-20 flex items-center justify-center cursor-pointer rounded-sm text-xs md:text-sm font-semibold text-black select-none bg-white/00 hover:bg-white transition-colors float-side-rot"
  style={{ top: '36%', left: '40%', width: '35%', height: '6%' }}
>
  {/* 2. Envolvemos las flechas en un span con la clase para el tamaño, color y animación */}
  <span className="social-arrow-move">
    ⇢   ⇠
  </span>
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
