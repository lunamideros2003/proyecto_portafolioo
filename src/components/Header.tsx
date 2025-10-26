"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const storedTheme = (localStorage.getItem("theme") as "light" | "dark") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(storedTheme);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    // Mostrar el header después de que termine la animación del avión (2.8 segundos)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2800);
    
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  if (!isVisible) {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex items-start justify-between p-6">
      {/* Selector de idioma */}
      <div className="relative">
        <button
          aria-haspopup="menu"
          aria-expanded={isLangOpen}
          onClick={() => setIsLangOpen((o) => !o)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setIsLangOpen((o) => !o);
            }
          }}
          className="px-4 py-2 text-base rounded-md bg-[#e9d5ff] text-[#1a1a1a] shadow-sm border border-black/10 focus:outline-none focus:ring-2 focus:ring-black/20"
        >
          {t('header.language')}
        </button>
          {isLangOpen && (
          <div
            role="menu"
            className="absolute mt-2 w-48 bubble bubble-purple overflow-hidden"
          >
            <button
              role="menuitem"
              className="w-full text-left px-3 py-2 hover:bg-black/10"
              onClick={() => {
                setLanguage("es");
                setIsLangOpen(false);
              }}
            >
              Español
            </button>
            <button
              role="menuitem"
              className="w-full text-left px-3 py-2 hover:bg-black/10"
              onClick={() => {
                setLanguage("en");
                setIsLangOpen(false);
              }}
            >
              English
            </button>
          </div>
        )}
        {/* Botón de menú debajo del de idioma */}
        <div className="mt-4">
          <button
            aria-haspopup="menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((o) => !o)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setIsMenuOpen((o) => !o);
              }
            }}
          className="px-4 py-2 text-base rounded-md bg-[#e9d5ff] text-[#1a1a1a] shadow-sm border border-black/10 focus:outline-none focus:ring-2 focus:ring-black/20"
        >
          {t('header.menu')}
        </button>
          {isMenuOpen && (
            <nav
              aria-label="main"
              className="mt-3 w-80 bubble bubble-purple p-3 space-y-1 text-[15px]"
            >
              {[
                { key: "menu.education", href: "#edu-title" },
                { key: "menu.experience", href: "#exp-title" },
                { key: "menu.awards", href: "#awards-title" },
                { key: "menu.trips", href: "#trips-title" },
                { key: "menu.hobbies", href: "#hobbies-title" },
                { key: "menu.projects", href: "#projects-title" },
                { key: "menu.testimonials", href: "#testimonials-title" },
                { key: "menu.social", href: "#social-title" },
              ].map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="block px-3 py-2 rounded hover:bg-black/5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ☆ {t(item.key)}
                </a>
              ))}
            </nav>
          )}
        </div>
      </div>

      {/* Botón de tema (luna) */}
      <div className="relative">
        <button
          aria-label="Cambiar tema"
          onClick={toggleTheme}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              toggleTheme();
            }
          }}
          className="h-16 w-16 grid place-items-center text-[#1a1a1a] dark:text-[#F3F4F6]"
          title={theme === "dark" ? "Modo claro" : "Modo oscuro"}
        >
          <svg viewBox="0 0 100 100" className="h-14 w-14">
            {theme === "dark" ? (
              // Icono de sol más bonito para modo oscuro
              <g>
                <defs>
                  <radialGradient id="sunGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FCD34D" />
                    <stop offset="70%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#D97706" />
                  </radialGradient>
                </defs>
                <circle
                  cx="50"
                  cy="50"
                  r="30"
                  fill="url(#sunGradient)"
                  stroke="#1a1a1a"
                  strokeWidth="2"
                />
                {/* Rayos del sol */}
                <g stroke="#FCD34D" strokeWidth="3" strokeLinecap="round">
                  <line x1="50" y1="10" x2="50" y2="5" />
                  <line x1="70" y1="20" x2="75" y2="15" />
                  <line x1="80" y1="40" x2="85" y2="35" />
                  <line x1="80" y1="60" x2="85" y2="65" />
                  <line x1="70" y1="80" x2="75" y2="85" />
                  <line x1="50" y1="90" x2="50" y2="95" />
                  <line x1="30" y1="80" x2="25" y2="85" />
                  <line x1="20" y1="60" x2="15" y2="65" />
                  <line x1="20" y1="40" x2="15" y2="35" />
                  <line x1="30" y1="20" x2="25" y2="15" />
                </g>
              </g>
            ) : (
              // Icono de luna creciente más bonito para modo claro
              <g>
                <defs>
                  <radialGradient id="moonGradient" cx="70%" cy="30%" r="70%">
                    <stop offset="0%" stopColor="#F8FAFC" />
                    <stop offset="40%" stopColor="#E2E8F0" />
                    <stop offset="80%" stopColor="#CBD5E1" />
                    <stop offset="100%" stopColor="#94A3B8" />
                  </radialGradient>
                  <filter id="moonGlow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <path
                  d="M50 10 C30 10, 15 25, 15 45 C15 65, 30 80, 50 80 C70 80, 85 65, 85 45 C85 25, 70 10, 50 10 Z M50 15 C65 15, 80 30, 80 45 C80 60, 65 75, 50 75 C35 75, 20 60, 20 45 C20 30, 35 15, 50 15 Z"
                  fill="url(#moonGradient)"
                  stroke="#1a1a1a"
                  strokeWidth="2"
                  filter="url(#moonGlow)"
                />
                {/* Estrellas pequeñas alrededor de la luna */}
                <g fill="#CBD5E1" opacity="0.8">
                  <circle cx="25" cy="25" r="1.5" />
                  <circle cx="75" cy="20" r="1" />
                  <circle cx="20" cy="70" r="1.2" />
                  <circle cx="80" cy="75" r="1" />
                </g>
              </g>
            )}
          </svg>
        </button>
      </div>
    </header>
  );
}


