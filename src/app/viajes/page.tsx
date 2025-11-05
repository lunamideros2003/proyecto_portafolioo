"use client";

import React, { useState, useEffect } from "react";
import BackButton from "../../components/BackButton";
import CursorPencilEffect from "../../components/CursorPencilEffect";

export default function ViajesPage() {
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

  // ✨ Textos que cambiarán cada 2 fotos (5 textos iguales por ahora)
  const texts = [
    {
      title: "Ecuador",
      description: "Este fue el primer pais al que viaje junto a mis papas fue a la edad aproximadamente de 6 años, estuvimos unos meses recorriendo varias ciudades hasta llegar a la proxima frontera, y despues volvi a viajar para alla a la edad de 21 años y me quede dos meses estuve viviendo en la ciudad de Quito.",
    },
    {
      title: "Peru",
      description: "Este fue el siguiente pais en el que vivimos, este pais fue en el que mas tiempo vivimos con mi familia, aqui vivimos 1 año aproximadamente y en este estudie primero de primaria en la ciudad de Lima, despues seguimos recorriendo mas ciudades como Tacna y Puno que fueron otras en las que vivimos bastante tiempo.",
    },
    {
      title: "Chile",
      description: "Había una vez una niña muy dulce y amable que vivía en un pequeño pueblo. Su abuela le había hecho una capita roja con capucha, y como la usaba todo el tiempo, todos la llamaban Caperucita Roja. Un día, su mamá le dijo: —Caperucita, tu abuela está enferma. Llévale esta cesta con pan, miel y frutas, pero no te detengas en el camino.",
    },
    {
      title: "Paraguay",
      description: "Había una vez una niña muy dulce y amable que vivía en un pequeño pueblo. Su abuela le había hecho una capita roja con capucha, y como la usaba todo el tiempo, todos la llamaban Caperucita Roja. Un día, su mamá le dijo: —Caperucita, tu abuela está enferma. Llévale esta cesta con pan, miel y frutas, pero no te detengas en el camino.",
    },
    {
      title: "Brasil",
      description: "Había una vez una niña muy dulce y amable que vivía en un pequeño pueblo. Su abuela le había hecho una capita roja con capucha, y como la usaba todo el tiempo, todos la llamaban Caperucita Roja. Un día, su mamá le dijo: —Caperucita, tu abuela está enferma. Llévale esta cesta con pan, miel y frutas, pero no te detengas en el camino.",
    },
  ];

  // Estado del índice actual
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Cambia automáticamente la imagen
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [images.length]);

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
            MIS VIAJES
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
                          alt={`Foto de viaje ${index + 1}`}
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


