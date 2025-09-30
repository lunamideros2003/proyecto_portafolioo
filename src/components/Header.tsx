"use client";

import { useEffect, useState } from "react";

type Language = "es" | "en";

export default function Header() {
  const [language, setLanguage] = useState<Language>("es");
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const storedLang = (localStorage.getItem("lang") as Language) || "es";
    const storedTheme = (localStorage.getItem("theme") as "light" | "dark") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setLanguage(storedLang);
    setTheme(storedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  useEffect(() => {
    const html = document.documentElement;
    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

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
          {language === "es" ? "IDIOMA" : "LANGUAGE"}
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
            {language === "es" ? "MENÚ" : "MENU"}
          </button>
          {isMenuOpen && (
            <nav
              aria-label="main"
              className="mt-3 w-80 bubble bubble-purple p-3 space-y-1 text-[15px]"
            >
              {[
                { label: "Mi formación académica", href: "#edu-title" },
                { label: "Mi experiencia laboral", href: "#exp-title" },
                { label: "Mis logros y reconocimientos", href: "#awards-title" },
                { label: "Mis viajes", href: "#trips-title" },
                { label: "Mis pasatiempos", href: "#hobbies-title" },
                { label: "Mis proyectos", href: "#projects-title" },
                { label: "Testimonios", href: "#testimonials-title" },
                { label: "Mis redes sociales", href: "#social-title" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 rounded hover:bg-black/5"
                >
                  ☆ {item.label}
                </a>
              ))}
            </nav>
          )}
        </div>
      </div>

      {/* Botón de tema (estrella) */}
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
          className="h-16 w-16 grid place-items-center text-[#1a1a1a]"
          title={theme === "dark" ? "Modo claro" : "Modo oscuro"}
        >
          <svg viewBox="0 0 100 100" className="h-14 w-14">
            <polygon
              points="50,5 60,38 95,38 66,58 77,90 50,70 23,90 34,58 5,38 40,38"
              fill="#e9d5ff"
              stroke="#1a1a1a"
              strokeWidth="2"
            />
            <text x="50" y="60" textAnchor="middle" fontSize="14" fill="#1a1a1a">{theme === "dark" ? "light" : "mood"}</text>
          </svg>
        </button>
      </div>
    </header>
  );
}


