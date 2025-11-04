"use client";

import React, { useState, useEffect } from "react";
import BackButton from "../../components/BackButton";
import CursorPencilEffect from "../../components/CursorPencilEffect";

export default function PasatiemposPage() {
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

  // 📝 Texto que cambia con cada imagen (usando los primeros 6 textos del código proporcionado)
  const texts = [
    {
      title: "Futbol ⚽",
      description: "Este es el deporte que mas me encanta, lo he practicado por dos años tanto micro futbol como futbol, lo he entrenado en escuelas, colegios y clubs de entrenamiento.",
    },
    {
      title: "Baloncesto 🏀",
      description: "Este deporte lo empece a practicar por mi hermana ya que le gustaba mucho y yo la acompañaba a jugar, hasta que le cogi el gusto y lo entrene por 8 meses.",
    },
    {
      title: "Natacion 🤿",
      description: "Este deporte fue el que menos tiempo practique, lo practique por 4 meses en una escuela donde concursaba en carreras .",
    },
    {
      title: "Atletismo 👟",
      description: "Este deporte lo practique en mi colegio fue por un año donde participe en carreras intercolegiales.",
    },
    {
      title: "Patinaje 🛼",
      description: "Este deporte es el que mas he practicado, lo he practicado desde que tengo 8 años en escuelas de patinaje y lo practique por muchos años sola para perfeccionar mis habilidades en este.",
    },
    {
      title: "Voley 🏐",
      description: "Este deporte lo practique desde el colegio hasta mi adolescencia en el club deportivo de mi barrio donde tambien entre a torneos en el colegio como en el club.",
    },
    {
      title: "Lectura 📚",
      description: "Autores que mas me gustan: Gabriel Garcia Marquez, Obra memoria de mis putas tristezas. Antoine de Saint-Exupéry, Obra el principito. Gilraen Eärfalas, Obra desfibrilador",
    },
    {
      title: "Cocina 🍳",
      description: "Comida peruana:Lomo Saltado, Ceviche, Tallarines verdes, Aji de gallina. Comida Brasilera: Feijoada, Coxinha, Brigadeiro, Churrasco.",
    },
  ];

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
            MIS PASATIEMPOS
          </h1>
          
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
            {/* 🎠 Carrusel */}
            <div className="lg:w-1/2 relative flex flex-col items-center justify-center">
              <div className="absolute inset-0 bg-[#E6D3F9] rounded-full blur-3xl opacity-40 transform scale-110" />

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
                      <div className="w-full h-full rounded-[20px] overflow-hidden shadow-2xl">
                        <img
                          src={img}
                          alt={`Foto de pasatiempo ${index + 1}`}
                          className="w-full h-full object-contain"
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
                  aria-label="Imagen anterior"
                >
                  ←
                </button>
                <button
                  onClick={handleNext}
                  className="bg-[#D4B9F5] hover:bg-[#C8A6F0] text-white text-xl font-semibold px-5 py-2 rounded-full shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
                  aria-label="Imagen siguiente"
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
