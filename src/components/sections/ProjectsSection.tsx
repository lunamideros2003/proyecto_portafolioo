"use client";
import Image from "next/image";
import { useLanguage } from "../../contexts/LanguageContext";
import { i18nData } from "../../i18n";

export default function ProjectsSection() {
  const { t } = useLanguage();
  return (
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
            <a href={i18nData.links.project_calculator} target="_blank" rel="noopener noreferrer" className="relative z-10 w-32 h-20 bg-purple-200 border-2 border-purple-300 flex items-center justify-center flex-shrink-0 hover:opacity-80 transition-opacity cursor-pointer overflow-hidden rounded">
              <Image src="/proyectos/proyecto_uno.webp" alt="Calculadora" width={128} height={80} className="w-full h-full object-cover" />
            </a>
            <div className="relative w-16 h-20">
              <span className="social-arrow-move absolute left-0 top-1/2 -translate-y-1/2">←</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-xl text-blue-400">☆</span>
            <span className="text-base text-black">{t('projects.calculator')}</span>
            <a href={i18nData.links.project_maps} target="_blank" rel="noopener noreferrer" className="w-32 h-20 bg-purple-200 border-2 border-purple-300 flex items-center justify-center flex-shrink-0 hover:opacity-80 transition-opacity cursor-pointer overflow-hidden rounded">
              <Image src="/proyectos/proyecto_dos.webp" alt="Plantilla Mapas" width={128} height={80} className="w-full h-full object-cover" />
            </a>
            <div className="relative w-16 h-20">
              <span className="social-arrow-move absolute left-0 top-1/2 -translate-y-1/2">←</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-xl text-blue-400">☆</span>
            <span className="text-base text-black">{t('projects.other')}</span>
            <a href={i18nData.links.project_movies} target="_blank" rel="noopener noreferrer" className="w-32 h-20 bg-purple-200 border-2 border-purple-300 flex items-center justify-center flex-shrink-0 hover:opacity-80 transition-opacity cursor-pointer overflow-hidden rounded">
              <Image src="/proyectos/proyecto_tres.webp" alt="Plantilla Películas" width={128} height={80} className="w-full h-full object-cover" />
            </a>
            <div className="relative w-16 h-20">
              <span className="social-arrow-move absolute left-0 top-1/2 -translate-y-1/2">←</span>
            </div>
          </div>
        </div>
        <div className="w-[240px] h-[260px] mx-auto md:mx-0">
          <Image src="/octavo_anime.webp" alt="proyectos" width={360} height={380} className="w-full h-full object-contain transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110 hover:saturate-120 dark:hover:brightness-110 dark:hover:contrast-105" />
        </div>
      </div>
    </section>
  );
}