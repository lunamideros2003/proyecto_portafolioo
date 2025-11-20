"use client";
import Image from "next/image";
import { useLanguage } from "../../contexts/LanguageContext";

export default function CvSection() {
  const { t } = useLanguage();
  return (
    <section className="w-full relative">
      <div className="absolute -left-8 top-8 hidden md:block decor-star xs" />
      <div className="absolute -right-6 top-16 hidden md:block decor-star sm" />
      <div className="absolute left-12 -bottom-4 hidden md:block decor-star xs" />
      <h2 className="text-center font-semibold tracking-wide mb-8 uppercase text-black text-3xl">{t('cv.title')}</h2>
      <div className="relative w-62 h-54 rounded-md border border-black/10 shadow-[0_0_55px_20px_rgba(183,123,255,0.55)]">
        <Image src="/yo.webp?v=2" alt="Foto de Luna Gabriela" width={640} height={640} className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110 hover:saturate-120 dark:hover:brightness-110 dark:hover:contrast-105 rounded-md" priority />
      </div>
      <div className="relative border border-black/12 rounded-[14px] shadow-[0_4px_12px_rgba(0,0,0,0.06)] bg-[#EAD8F6] text-[#1a1a1a] w-full text-center px-6 py-4 mt-6 dark:bg-[#8B5CF6] dark:border-[#7C3AED] dark:text-[#F3F4F6] after:content-[''] after:absolute after:left-6 after:-top-2 after:w-0 after:h-0 after:border-l-[10px] after:border-l-transparent after:border-r-[10px] after:border-r-transparent after:border-b-[10px] after:border-b-[#EAD8F6] after:drop-shadow-[0_-1px_0_rgba(0,0,0,0.12)] dark:after:border-b-[#8B5CF6]">
        <p className="leading-relaxed text-black dark:text-[#F3F4F6]">{t('cv.description')}</p>
      </div>
    </section>
  );
}