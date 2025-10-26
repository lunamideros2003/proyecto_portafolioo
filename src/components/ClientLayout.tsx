"use client";

import { useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage();

  useEffect(() => {
    // Actualizar el atributo lang del HTML
    document.documentElement.lang = language;
  }, [language]);

  return <>{children}</>;
}
