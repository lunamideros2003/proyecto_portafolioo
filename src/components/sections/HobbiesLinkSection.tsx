"use client";
import Image from "next/image";
import { useLanguage } from "../../contexts/LanguageContext";

export default function HobbiesLinkSection() {
  const { t } = useLanguage();
  return (
    <section className="w-full pt-20 relative" aria-labelledby="hobbies-title">
      <div className="absolute -right-6 top-8 hidden md:block decor-star xs" />
      <div className="absolute right-12 -bottom-4 hidden md:block decor-star sm" />
      <div className="absolute -left-8 top-16 hidden md:block decor-star xs" />
      <div className="absolute left-8 top-24 hidden md:block decor-star xs" />
      <h2 id="hobbies-title" className="text-center font-semibold tracking-wide mb-8 uppercase text-black text-3xl">
        <a
          href="/pasatiempos"
          className="inline-block cursor-pointer transition-transform duration-300 float-side-rot title-arrow hover:text-purple-500 hover:-translate-y-1 hover:scale-110"
          onClick={() => {
            const overlay=document.createElement('div');
            overlay.setAttribute('data-route-loader','true');
            overlay.className='fixed inset-0 z-[99999] grid place-items-center bg-transparent';
            const spinner=document.createElement('div');
            spinner.className='w-14 h-14 rounded-full border-4 border-black border-t-transparent animate-spin';
            overlay.appendChild(spinner);
            document.body.appendChild(overlay);
          }}
        >
          {t('hobbies.title')}
        </a>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_260px] gap-8 items-center">
        <ul className="space-y-8 text-black">
          <li className="flex items-center gap-6"><span className="text-xl animate-spin" style={{animationDuration: '3s'}}>☆</span><span className="text-base">{t('hobbies.read')}</span></li>
          <li className="flex items-center gap-6"><span className="text-xl animate-spin" style={{animationDuration: '3s'}}>☆</span><span className="text-base">{t('hobbies.sports')}</span></li>
          <li className="flex items-center gap-6"><span className="text-xl animate-spin" style={{animationDuration: '3s'}}>☆</span><span className="text-base">{t('hobbies.cook')}</span></li>
        </ul>
        <div className="w-[240px] h-[260px] mx-auto md:mx-0">
          <Image src="/septimo_anime.webp" alt="pasatiempos" width={360} height={380} className="w-full h-full object-contain anime-hover" />
        </div>
      </div>
    </section>
  );
}