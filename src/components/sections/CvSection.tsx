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
        <Image src="/yo.webp?v=2" alt="Foto de Luna Gabriela" width={640} height={640} className="w-full h-full object-cover anime-hover rounded-md" priority />
      </div>
      <div className="bubble bubble-purple w-full text-center px-6 py-4 mt-6">
        <p className="leading-relaxed text-black">{t('cv.description')}</p>
      </div>
    </section>
  );
}