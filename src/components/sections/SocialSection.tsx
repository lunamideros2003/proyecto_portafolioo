"use client";
import Image from "next/image";
import { useLanguage } from "../../contexts/LanguageContext";
import { i18nData } from "../../i18n";

export default function SocialSection() {
  const { t } = useLanguage();
  return (
    <section className="w-full pt-20 relative" aria-labelledby="social-title">
      <div className="absolute -left-6 top-8 hidden md:block decor-star xs" />
      <div className="absolute -right-8 top-12 hidden md:block decor-star sm" />
      <div className="absolute left-8 top-20 hidden md:block decor-star xs" />
      <h2 id="social-title" className="text-center font-semibold tracking-wide mb-8 uppercase text-black text-3xl">{t('menu.social')}</h2>
      <div className="flex justify-center">
        <div className="relative w-[420px] md:w-[520px]" style={{ aspectRatio: '360/380' }}>
          <Image src="/decimo_anime.webp?v=3" alt="redes sociales" width={520} height={550} className="w-full h-full object-contain select-none pointer-events-none" />
          <a href={i18nData.links.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook - Luna Mideros" className="absolute z-20 flex items-center justify-center cursor-pointer rounded-sm text-xs md:text-sm font-semibold text-black select-none bg-white/00 hover:bg-white transition-colors float-side-rot" style={{ top: '7%', left: '40%', width: '35%', height: '6%' }}>
            <span className="social-arrow-move">⇢   ⇠</span>
          </a>
          <a href={i18nData.links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram - Luna Mideros" className="absolute z-20 flex items-center justify-center cursor-pointer rounded-sm text-xs md:text-sm font-semibold text-black select-none bg-white/00 hover:bg-white transition-colors float-side-rot" style={{ top: '22%', left: '40%', width: '35%', height: '6%' }}>
            <span className="social-arrow-move">⇢   ⇠</span>
          </a>
          <a href={i18nData.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub - Luna Mideros" className="absolute z-20 flex items-center justify-center cursor-pointer rounded-sm text-xs md:text-sm font-semibold text-black select-none bg-white/00 hover:bg-white transition-colors float-side-rot" style={{ top: '36%', left: '40%', width: '35%', height: '6%' }}>
            <span className="social-arrow-move">⇢   ⇠</span>
          </a>
        </div>
      </div>
      <div className="absolute left-10 bottom-6 hidden md:block decor-star xs" />
    </section>
  );
}