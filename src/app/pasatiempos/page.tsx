"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import BackButton from "../../components/BackButton";
import CursorPencilEffect from "../../components/CursorPencilEffect";
import { useLanguage } from "../../contexts/LanguageContext";

export default function PasatiemposPage() {
  const { language, t } = useLanguage();
  // 🖼️ Lista de 6 imágenes en el orden especificado
  const images = [
    "/pasatiempos/futbol.webp",
    "/pasatiempos/baloncesto.webp",
    "/pasatiempos/natacion.webp",
    "/pasatiempos/atletismo.webp",
    "/pasatiempos/patinaje.webp",
    "/pasatiempos/voley.webp",
    "/pasatiempos/leer.webp",
    "/pasatiempos/cocinar.webp",
  ];

  const textsEs = [
    { title: "Fútbol ⚽", description: "Mi deporte favorito. Lo practiqué por dos años, tanto microfútbol como fútbol, en escuelas, colegio y clubes." },
    { title: "Baloncesto 🏀", description: "Empecé por mi hermana; lo entrené durante unos 8 meses." },
    { title: "Natación 🤿", description: "El que menos tiempo practiqué: 4 meses en una escuela, compitiendo en carreras." },
    { title: "Atletismo 👟", description: "Lo practiqué en mi colegio durante un año, participando en carreras intercolegiales." },
    { title: "Patinaje 🛼", description: "El que más he practicado desde los 8 años, en escuelas y por mi cuenta para perfeccionar habilidades." },
    { title: "Vóley 🏐", description: "Desde el colegio hasta mi adolescencia, también en el club del barrio y en torneos." },
    { title: "Lectura 📚", description: "Autores favoritos: Gabriel García Márquez — Memoria de mis putas tristes; Antoine de Saint‑Exupéry — El Principito; Gilraen Eärfalas — Desfibrilador." },
    { title: "Cocina 🍳", description: "Peruana: Lomo Saltado, Ceviche, Tallarines Verdes, Ají de gallina. Brasilera: Feijoada, Coxinha, Brigadeiro, Churrasco." },
  ];
  const textsEn = [
    { title: "Soccer ⚽", description: "My favorite sport. I practiced for two years, futsal and soccer, in schools, high school and clubs." },
    { title: "Basketball 🏀", description: "I started because of my sister; I trained for about 8 months." },
    { title: "Swimming 🤿", description: "Practiced for 4 months in a school, competing in races." },
    { title: "Athletics 👟", description: "Practiced at my school for a year, joining interschool races." },
    { title: "Skating 🛼", description: "The one I’ve practiced the most since I was 8, in schools and on my own to improve." },
    { title: "Volleyball 🏐", description: "From school to my neighborhood club, also in tournaments." },
    { title: "Reading 📚", description: "Favorite authors: Gabriel García Márquez — Memories of My Melancholy Whores; Antoine de Saint‑Exupéry — The Little Prince; Gilraen Eärfalas — Defibrillator." },
    { title: "Cooking 🍳", description: "Peruvian: Lomo Saltado, Ceviche, Tallarines Verdes, Ají de gallina. Brazilian: Feijoada, Coxinha, Brigadeiro, Churrasco." },
  ];
  const texts = language === 'en' ? textsEn : textsEs;

  // Estado del índice actual
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Cambio automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [images.length]);

  // ✅ Texto correspondiente a la imagen actual (cambia con cada imagen)
  const currentText = texts[currentImageIndex % texts.length];

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const overlay = document.querySelector('.route-loader-overlay');
    if (overlay) overlay.remove();
  }, []);

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
            {t('hobbies.title')}
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
                          alt={language === 'en' ? `Hobby photo ${index + 1}` : `Foto de pasatiempo ${index + 1}`}
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

            {/* 📖 Texto (sincronizado con la imagen actual) */}
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
