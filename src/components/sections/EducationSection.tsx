"use client";
import Image from "next/image";
import { useLanguage } from "../../contexts/LanguageContext";

export default function EducationSection() {
  const { t } = useLanguage();
  return (
    <section className="w-full pt-16 relative" aria-labelledby="edu-title">
      <div className="absolute -left-6 top-8 hidden md:block decor-star xs" />
      <div className="absolute left-12 -bottom-4 hidden md:block decor-star sm" />
      <div className="absolute -right-8 top-16 hidden md:block decor-star xs" />
      <h2 id="edu-title" className="text-center font-semibold tracking-wide mb-8 uppercase text-black text-3xl">{t('education.title')}</h2>
      <div className="space-y-10">
        <div className="flex flex-col md:flex-row items-start gap-4">
          <span className="tag-arrow text-black">{t('education.primary')}</span>
          <div className="bubble bubble-purple bubble-left px-4 py-4 text-base max-w-[450px]">{t('education.primary.description')}</div>
          <div className="w-40 h-40 flex-shrink-0 mx-auto md:mx-0">
            <Image src="/primer_anime.webp" alt="anime 1" width={300} height={300} className="w-full h-full object-contain anime-hover" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start gap-4">
          <span className="tag-arrow text-black">{t('education.secondary')}</span>
          <div className="bubble bubble-purple bubble-left px-4 py-4 text-base max-w-[450px]">{t('education.secondary.description')}</div>
          <div className="w-40 h-40 flex-shrink-0 mx-auto md:mx-0">
            <Image src="/segundo_anime.webp" alt="anime 2" width={300} height={300} className="w-full h-full object-contain anime-hover" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start gap-4">
          <span className="tag-arrow text-black">{t('education.university')}</span>
          <div className="bubble bubble-purple bubble-left px-4 py-4 text-base max-w-[450px]">{t('education.university.description')}</div>
          <div className="w-40 h-40 flex-shrink-0 mx-auto md:mx-0">
            <Image src="/tercer_anime.webp" alt="anime 3" width={300} height={300} className="w-full h-full object-contain anime-hover" />
          </div>
        </div>
      </div>
    </section>
  );
}