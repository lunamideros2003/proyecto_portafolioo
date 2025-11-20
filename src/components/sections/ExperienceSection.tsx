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
          <Image src="/cuarto_anime.webp" alt="experiencia" width={360} height={360} className="w-full h-full object-contain transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110 hover:saturate-120 dark:hover:brightness-110 dark:hover:contrast-105" />
        </div>
        <div className="relative border border-black/12 rounded-[14px] shadow-[0_4px_12px_rgba(0,0,0,0.06)] bg-[#EAD8F6] text-[#1a1a1a] px-4 py-4 text-base leading-relaxed dark:bg-[#8B5CF6] dark:border-[#7C3AED] dark:text-[#F3F4F6] after:content-[''] after:absolute after:-left-[10px] after:top-[14px] after:w-0 after:h-0 after:border-b-[10px] after:border-b-transparent after:border-t-[10px] after:border-t-transparent after:border-r-[10px] after:border-r-[#EAD8F6] after:border-l-0 after:drop-shadow-[-1px_0_0_rgba(0,0,0,0.12)] dark:after:border-r-[#8B5CF6]">{t('experience.description')}</div>
      </div>
    </section>
  );
}