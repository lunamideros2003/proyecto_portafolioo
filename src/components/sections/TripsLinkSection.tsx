"use client";
import Image from "next/image";
import { useLanguage } from "../../contexts/LanguageContext";

export default function TripsLinkSection() {
  const { t } = useLanguage();
  return (
    <section className="w-full pt-20 relative" aria-labelledby="trips-title">
      <div className="absolute left-6 top-10 hidden md:block decor-star" />
      <div className="absolute -right-8 top-16 hidden md:block decor-star xs" />
      <div className="absolute -left-6 top-20 hidden md:block decor-star sm" />
      <h2 id="trips-title" className="text-center font-semibold tracking-wide mb-8 uppercase text-black text-3xl">
        <a
          href="/viajes"
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
          {t('trips.title')}
        </a>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_260px] gap-8 items-center">
        <ul className="space-y-8 text-black">
          <li className="flex items-center gap-6"><span className="text-xl">☆</span><span className="text-base">{t('trips.ecuador')}</span></li>
          <li className="flex items-center gap-6"><span className="text-xl">☆</span><span className="text-base">{t('trips.peru')}</span></li>
          <li className="flex items-center gap-6"><span className="text-xl">☆</span><span className="text-base">{t('trips.chile')}</span></li>
          <li className="flex items-center gap-6"><span className="text-xl">☆</span><span className="text-base">{t('trips.paraguay')}</span></li>
          <li className="flex items-center gap-6"><span className="text-xl">☆</span><span className="text-base">{t('trips.brasil')}</span></li>
        </ul>
        <div className="w-[240px] h-[260px] mx-auto md:mx-0">
          <Image src="/sexto_anime.webp" alt="viajes" width={360} height={380} className="w-full h-full object-contain transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110 hover:saturate-120 dark:hover:brightness-110 dark:hover:contrast-105" />
        </div>
      </div>
    </section>
  );
}