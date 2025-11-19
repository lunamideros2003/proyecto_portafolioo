"use client";
import Image from "next/image";
import { useLanguage } from "../../contexts/LanguageContext";

export default function ExperienceSection() {
  const { t } = useLanguage();
  return (
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
        <div className="bubble bubble-purple bubble-left px-4 py-4 text-base leading-relaxed">{t('experience.description')}</div>
      </div>
    </section>
  );
}