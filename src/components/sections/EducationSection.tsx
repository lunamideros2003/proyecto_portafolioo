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
          <span className="relative inline-block px-[22px] py-2 bg-white border-2 border-black/55 rounded-[10px] font-bold text-black dark:bg-[#6B46C1] dark:border-[#7C3AED] dark:text-[#F3F4F6] after:content-[''] after:absolute after:-right-[18px] after:top-1/2 after:-translate-y-1/2 after:w-0 after:h-0 after:border-l-[18px] after:border-l-white after:border-t-[10px] after:border-t-transparent after:border-b-[10px] after:border-b-transparent after:drop-shadow-[1px_0_0_rgba(0,0,0,0.55)]">{t('education.primary')}</span>
          <div className="relative border border-black/12 rounded-[14px] shadow-[0_4px_12px_rgba(0,0,0,0.06)] bg-[#EAD8F6] text-[#1a1a1a] px-4 py-4 text-base max-w-[450px] dark:bg-[#8B5CF6] dark:border-[#7C3AED] dark:text-[#F3F4F6] after:content-[''] after:absolute after:-left-[10px] after:top-[14px] after:w-0 after:h-0 after:border-b-[10px] after:border-b-transparent after:border-t-[10px] after:border-t-transparent after:border-r-[10px] after:border-r-[#EAD8F6] after:border-l-0 after:drop-shadow-[-1px_0_0_rgba(0,0,0,0.12)] dark:after:border-r-[#8B5CF6]">{t('education.primary.description')}</div>
          <div className="w-40 h-40 flex-shrink-0 mx-auto md:mx-0">
            <Image src="/primer_anime.webp" alt="anime 1" width={300} height={300} className="w-full h-full object-contain transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110 hover:saturate-120 dark:hover:brightness-110 dark:hover:contrast-105" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start gap-4">
          <span className="relative inline-block px-[22px] py-2 bg-white border-2 border-black/55 rounded-[10px] font-bold text-black dark:bg-[#6B46C1] dark:border-[#7C3AED] dark:text-[#F3F4F6] after:content-[''] after:absolute after:-right-[18px] after:top-1/2 after:-translate-y-1/2 after:w-0 after:h-0 after:border-l-[18px] after:border-l-white after:border-t-[10px] after:border-t-transparent after:border-b-[10px] after:border-b-transparent after:drop-shadow-[1px_0_0_rgba(0,0,0,0.55)]">{t('education.secondary')}</span>
          <div className="relative border border-black/12 rounded-[14px] shadow-[0_4px_12px_rgba(0,0,0,0.06)] bg-[#EAD8F6] text-[#1a1a1a] px-4 py-4 text-base max-w-[450px] dark:bg-[#8B5CF6] dark:border-[#7C3AED] dark:text-[#F3F4F6] after:content-[''] after:absolute after:-left-[10px] after:top-[14px] after:w-0 after:h-0 after:border-b-[10px] after:border-b-transparent after:border-t-[10px] after:border-t-transparent after:border-r-[10px] after:border-r-[#EAD8F6] after:border-l-0 after:drop-shadow-[-1px_0_0_rgba(0,0,0,0.12)] dark:after:border-r-[#8B5CF6]">{t('education.secondary.description')}</div>
          <div className="w-40 h-40 flex-shrink-0 mx-auto md:mx-0">
            <Image src="/segundo_anime.webp" alt="anime 2" width={300} height={300} className="w-full h-full object-contain transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110 hover:saturate-120 dark:hover:brightness-110 dark:hover:contrast-105" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start gap-4">
          <span className="relative inline-block px-[22px] py-2 bg-white border-2 border-black/55 rounded-[10px] font-bold text-black dark:bg-[#6B46C1] dark:border-[#7C3AED] dark:text-[#F3F4F6] after:content-[''] after:absolute after:-right-[18px] after:top-1/2 after:-translate-y-1/2 after:w-0 after:h-0 after:border-l-[18px] after:border-l-white after:border-t-[10px] after:border-t-transparent after:border-b-[10px] after:border-b-transparent after:drop-shadow-[1px_0_0_rgba(0,0,0,0.55)]">{t('education.university')}</span>
          <div className="relative border border-black/12 rounded-[14px] shadow-[0_4px_12px_rgba(0,0,0,0.06)] bg-[#EAD8F6] text-[#1a1a1a] px-4 py-4 text-base max-w-[450px] dark:bg-[#8B5CF6] dark:border-[#7C3AED] dark:text-[#F3F4F6] after:content-[''] after:absolute after:-left-[10px] after:top-[14px] after:w-0 after:h-0 after:border-b-[10px] after:border-b-transparent after:border-t-[10px] after:border-t-transparent after:border-r-[10px] after:border-r-[#EAD8F6] after:border-l-0 after:drop-shadow-[-1px_0_0_rgba(0,0,0,0.12)] dark:after:border-r-[#8B5CF6]">{t('education.university.description')}</div>
          <div className="w-40 h-40 flex-shrink-0 mx-auto md:mx-0">
            <Image src="/tercer_anime.webp" alt="anime 3" width={300} height={300} className="w-full h-full object-contain transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110 hover:saturate-120 dark:hover:brightness-110 dark:hover:contrast-105" />
          </div>
        </div>
      </div>
    </section>
  );
}