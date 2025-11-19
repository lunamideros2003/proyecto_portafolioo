"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import BackButton from "../../components/BackButton";
import CursorPencilEffect from "../../components/CursorPencilEffect";
import { useLanguage } from "../../contexts/LanguageContext";

export default function ViajesPage() {
  const { language, t } = useLanguage();
  // 🖼️ Lista de 10 imágenes en el orden especificado
  const images = [
    "/viajes/ecuador.webp",
    "/viajes/ecuador_dos.webp",
    "/viajes/peru.webp",
    "/viajes/peru_dos.webp",
    "/viajes/chile.webp",
    "/viajes/chile_dos.webp",
    "/viajes/paraguay.webp",
    "/viajes/paraguay_dos.webp",
    "/viajes/brasil.webp",
    "/viajes/brasil_dos.webp",
  ];

  const textsEs = [
    { title: "Ecuador", description: "Este fue el primer país al que viajé con mis papás a los 6 años. Estuvimos meses recorriendo ciudades y volví a los 21 para vivir dos meses en Quito." },
    { title: "Perú", description: "El país donde vivimos más tiempo, cerca de un año. Estudié primero de primaria en Lima y también vivimos en Tacna y Puno." },
    { title: "Chile", description: "Tercer país. Estuvimos pocas semanas viviendo en Arica, visitando sus hermosas playas." },
    { title: "Paraguay", description: "Cuarto país. Vivimos alrededor de 10 meses en Ciudad del Este. Empecé segundo grado allí. Clima muy caluroso y paisajes y cultura increíbles." },
    { title: "Brasil", description: "El último país por ahora. Vivimos en São Paulo 8 meses y luego regresé a los 19 viviendo en São Paulo y Brasília. Aprendí idioma, cultura y disfruté sus playas; quiero volver pronto." },
  ];
  const textsEn = [
    { title: "Ecuador", description: "The first country I traveled to with my parents when I was about 6. We spent months touring cities, and I returned at 21 to live two months in Quito." },
    { title: "Peru", description: "The country where we lived the longest, about a year. I studied first grade in Lima and we also lived in Tacna and Puno." },
    { title: "Chile", description: "Third country. We stayed only a few weeks in Arica, visiting its beautiful beaches." },
    { title: "Paraguay", description: "Fourth country. We lived around 10 months in Ciudad del Este. I started second grade there. Very hot climate, amazing landscapes and culture." },
    { title: "Brazil", description: "The last country so far. We lived in São Paulo for 8 months; I returned at 19 and lived in São Paulo and Brasília. Learned language and culture; incredible beaches. I wish to go back soon." },
  ];
  const texts = language === 'en' ? textsEn : textsEs;

  // Estado del índice actual
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Cambia automáticamente la imagen
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const overlay = document.querySelector('[data-route-loader]');
    if (overlay) overlay.remove();
  }, []);

  // 🔹 Texto que cambia cada 2 fotos
  const currentText = texts[Math.floor(currentImageIndex / 2) % texts.length];

  // Botones manuales
  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <CursorPencilEffect />
      <BackButton />
      <section className="py-20 relative overflow-hidden min-h-screen">
        {/* Estrellas decorativas esparcidas por toda la página */}
        <div className="absolute left-[5%] top-[8%] hidden md:block decor-star xs" />
        <div className="absolute right-[8%] top-[15%] hidden md:block decor-star sm" />
        <div className="absolute left-[15%] top-[35%] hidden md:block decor-star xs" />
        <div className="absolute right-[12%] top-[45%] hidden md:block decor-star xs" />
        <div className="absolute left-[8%] top-[60%] hidden md:block decor-star sm" />
        <div className="absolute right-[15%] top-[70%] hidden md:block decor-star xs" />
        <div className="absolute left-[20%] bottom-[15%] hidden md:block decor-star xs" />
        
        <div className="container mx-auto px-6 pt-20">
          <h1 className="text-center font-semibold tracking-wide uppercase text-black text-3xl mb-12">
            {t('trips.title')}
          </h1>
          
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
            {/* 🎠 Carrusel */}
            <div className="lg:w-1/2 relative flex flex-col items-center justify-center">
              <div className="absolute inset-0 bg-[#E6D3F9] rounded-full blur-3xl opacity-40 transform scale-110 pointer-events-none" />

              <div className="relative w-full max-w-xs mx-auto h-[340px]">
                {images.map((img, index) => {
                  const offset =
                    (index - currentImageIndex + images.length) % images.length;
                  let transform = "";
                  let zIndex = 0;
                  let opacity = 0;

                  if (offset === 0) {
                    transform = "translateX(0) translateY(0) scale(1)";
                    zIndex = 30;
                    opacity = 1;
                  } else if (offset === 1) {
                    transform = "translateX(50%) translateY(-8%) scale(0.88)";
                    zIndex = 20;
                    opacity = 0.6;
                  } else if (offset === images.length - 1) {
                    transform = "translateX(-50%) translateY(-8%) scale(0.88)";
                    zIndex = 10;
                    opacity = 0.6;
                  } else {
                    transform = "translateX(0) translateY(0) scale(0.5)";
                    zIndex = 0;
                    opacity = 0;
                  }

                  return (
                    <div
                      key={index}
                      className="absolute inset-0 transition-all duration-700 ease-in-out"
                      style={{
                        transform,
                        zIndex,
                        opacity,
                      }}
                    >
                      <div className="w-full h-full rounded-[20px] overflow-hidden shadow-2xl relative">
                        <Image
                          src={img}
                          alt={language === 'en' ? `Trip photo ${index + 1}` : `Foto de viaje ${index + 1}`}
                          fill
                          className="object-contain"
                          priority={offset === 0}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Botones */}
              <div className="flex items-center justify-center gap-8 mt-6">
                <button
                  onClick={handlePrev}
                  className="bg-[#D4B9F5] hover:bg-[#C8A6F0] text-white text-xl font-semibold px-5 py-2 rounded-full shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
                  aria-label={language === 'en' ? 'Previous image' : 'Imagen anterior'}
                >
                  ←
                </button>
                <button
                  onClick={handleNext}
                  className="bg-[#D4B9F5] hover:bg-[#C8A6F0] text-white text-xl font-semibold px-5 py-2 rounded-full shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
                  aria-label={language === 'en' ? 'Next image' : 'Imagen siguiente'}
                >
                  →
                </button>
              </div>
            </div>

            {/* 📖 Texto que cambia */}
            <div className="lg:w-1/2 text-center lg:text-left space-y-6 transition-all duration-700 ease-in-out">
              <h2 className="text-4xl font-bold text-gray-800">
                {currentText.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {currentText.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


