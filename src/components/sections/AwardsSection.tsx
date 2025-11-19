"use client";
import Image from "next/image";
import { useLanguage } from "../../contexts/LanguageContext";

export default function AwardsSection() {
  const { t } = useLanguage();
  return (
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
  );
}