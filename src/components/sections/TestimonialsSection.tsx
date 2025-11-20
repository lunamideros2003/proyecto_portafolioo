"use client";
import Image from "next/image";
import { useLanguage } from "../../contexts/LanguageContext";

export default function TestimonialsSection() {
  const { t } = useLanguage();
  return (
    <section className="w-full pt-20 relative" aria-labelledby="testimonials-title">
      <div className="absolute -left-6 top-8 hidden md:block decor-star xs" />
      <div className="absolute -right-8 top-16 hidden md:block decor-star sm" />
      <div className="absolute left-12 -bottom-4 hidden md:block decor-star xs" />
      <div className="absolute right-8 top-24 hidden md:block decor-star xs" />
      <div className="flex items-center justify-center mb-8">
        <h2 id="testimonials-title" className="font-semibold tracking-wide uppercase text-black text-3xl">{t('testimonials.title')}</h2>
        <Image src="/noveno_anime.webp" alt="testimonios" width={100} height={100} className="ml-4 transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110 hover:saturate-120 dark:hover:brightness-110 dark:hover:contrast-105" />
      </div>
      <div className="space-y-6">
        <div className="flex items-center gap-6">
          <div className="w-48 h-32 relative flex-shrink-0 overflow-hidden rounded-lg border-2 border-gray-300">
            <Image src="/testimonios/testimonio_uno.webp" alt="Testimonio 1" fill className="object-cover" />
          </div>
          <div className="relative border border-black/12 rounded-[14px] shadow-[0_4px_12px_rgba(0,0,0,0.06)] bg-[#EAD8F6] text-[#1a1a1a] px-4 py-3 text-sm flex-1 dark:bg-[#8B5CF6] dark:border-[#7C3AED] dark:text-[#F3F4F6] after:content-[''] after:absolute after:left-6 after:-top-2 after:w-0 after:h-0 after:border-l-[10px] after:border-l-transparent after:border-r-[10px] after:border-r-transparent after:border-b-[10px] after:border-b-[#EAD8F6] after:drop-shadow-[0_-1px_0_rgba(0,0,0,0.12)] dark:after:border-b-[#8B5CF6]">
            <p className="dark:text-[#F3F4F6]">{t('testimonials.one.p1')}</p>
            <p className="mt-2 dark:text-[#F3F4F6]">{t('testimonials.one.p2')}</p>
            <p className="mt-2 dark:text-[#F3F4F6]">{t('testimonials.one.author')}</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative border border-black/12 rounded-[14px] shadow-[0_4px_12px_rgba(0,0,0,0.06)] bg-[#EAD8F6] text-[#1a1a1a] px-4 py-3 text-sm flex-1 dark:bg-[#8B5CF6] dark:border-[#7C3AED] dark:text-[#F3F4F6] after:content-[''] after:absolute after:left-6 after:-top-2 after:w-0 after:h-0 after:border-l-[10px] after:border-l-transparent after:border-r-[10px] after:border-r-transparent after:border-b-[10px] after:border-b-[#EAD8F6] after:drop-shadow-[0_-1px_0_rgba(0,0,0,0.12)] dark:after:border-b-[#8B5CF6]">
            <p className="dark:text-[#F3F4F6]">{t('testimonials.two.p1')}</p>
            <p className="mt-2 dark:text-[#F3F4F6]">{t('testimonials.two.p2')}</p>
            <p className="mt-2 dark:text-[#F3F4F6]">{t('testimonials.two.author')}</p>
          </div>
          <div className="w-48 h-32 relative flex-shrink-0 overflow-hidden rounded-lg border-2 border-gray-300">
            <Image src="/testimonios/testimonio_dos.webp" alt="Testimonio 2" fill className="object-cover" />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="w-48 h-32 relative flex-shrink-0 overflow-hidden rounded-lg border-2 border-gray-300">
            <Image src="/testimonios/testimonio_tres.webp" alt="Testimonio 3" fill className="object-cover" />
          </div>
          <div className="relative border border-black/12 rounded-[14px] shadow-[0_4px_12px_rgba(0,0,0,0.06)] bg-[#EAD8F6] text-[#1a1a1a] px-4 py-3 text-sm flex-1 dark:bg-[#8B5CF6] dark:border-[#7C3AED] dark:text-[#F3F4F6] after:content-[''] after:absolute after:left-6 after:-top-2 after:w-0 after:h-0 after:border-l-[10px] after:border-l-transparent after:border-r-[10px] after:border-r-transparent after:border-b-[10px] after:border-b-[#EAD8F6] after:drop-shadow-[0_-1px_0_rgba(0,0,0,0.12)] dark:after:border-b-[#8B5CF6]">
            <p className="dark:text-[#F3F4F6]">{t('testimonials.third.p1')}</p>
            <p className="mt-2 dark:text-[#F3F4F6]">{t('testimonials.third.p2')}</p>
            <span className="mt-2 block font-semibold dark:text-[#F3F4F6]">{t('testimonials.third.author')}</span>
          </div>
        </div>
      </div>
    </section>
  );
}