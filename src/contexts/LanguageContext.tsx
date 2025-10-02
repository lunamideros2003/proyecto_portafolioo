"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  es: {
    'cv.title': 'MI HOJA DE VIDA',
    'cv.description': 'Me llamo Luna Gabriela tengo 22 años soy de colombia naci en pasto en estos momentos me encuentro cursando una carrera de ingeneria en software y me encuentro trabajando tengo muchas ocupaciones como hobbits adelante conoceras un pco msa de mi asi que adelante te invito a pasr',
    'education.title': 'MI FORMACION ACADEMICA',
    'education.primary': 'PRIMARIA',
    'education.secondary': 'BACHILLER',
    'education.university': 'UNIVERSIDAD',
    'education.description': 'la constitucion de colombia esta basada en muchos relatos artistic os como obras de arte y cosas esplendidas del mundo en el cual vamos descubriendo mas cosas nuevas',
    'experience.title': 'MI EXPERIENCIA LABORAL',
    'experience.description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit laoreet vestibulum. In velit felis, congue at auctor a, bibendum eu ipsum. Nam aliquet fermentum risus vel rutrum. Morbi tincidunt, magna ultricies posuere ornare, purus dolor vehicula nunc, a lacinia enim mi eu nulla. Suspendisse dapibus orci a nisl placerat, et fringilla orci tempor.',
    'awards.title': 'MIS LOGROS Y RECONOCIMIENTOS',
    'awards.description': 'la constitucion de colombia esta basada en muchos relatos artisticos como obras de arte y cosas esplendidas del mundo en el cual vamos descubriendo mas cosas nuevas',
    'trips.title': 'MIS VIAJES',
    'trips.brasil': 'BRASIL',
    'trips.peru': 'PERÚ',
    'trips.paraguay': 'PARAGUAY',
    'hobbies.title': 'MIS PASATIEMPOS',
    'hobbies.read': 'LEER',
    'hobbies.sports': 'DEPORTES',
    'hobbies.cook': 'COCINAR',
    'projects.title': 'MIS PROYECTOS',
    'projects.github': 'GitHub',
    'projects.messaging': 'Mensajeria',
    'projects.calculator': 'Calculadora',
    'projects.other': 'kkkk',
    'menu.education': 'Mi formación académica',
    'menu.experience': 'Mi experiencia laboral',
    'menu.awards': 'Mis logros y reconocimientos',
    'menu.trips': 'Mis viajes',
    'menu.hobbies': 'Mis pasatiempos',
    'menu.projects': 'Mis proyectos',
    'menu.testimonials': 'Testimonios',
    'menu.social': 'Mis redes sociales',
    'header.language': 'IDIOMA',
    'header.menu': 'MENÚ'
  },
  en: {
    'cv.title': 'MY RESUME',
    'cv.description': 'My name is Luna Gabriela, I am 22 years old, I am from Colombia, I was born in Pasto. At the moment I am studying a software engineering career and I am working. I have many occupations as hobbies, ahead you will know a little more about me, so go ahead, I invite you to pass',
    'education.title': 'MY ACADEMIC FORMATION',
    'education.primary': 'PRIMARY',
    'education.secondary': 'HIGH SCHOOL',
    'education.university': 'UNIVERSITY',
    'education.description': 'The constitution of Colombia is based on many artistic stories such as works of art and splendid things in the world in which we are discovering new things',
    'experience.title': 'MY WORK EXPERIENCE',
    'experience.description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit laoreet vestibulum. In velit felis, congue at auctor a, bibendum eu ipsum. Nam aliquet fermentum risus vel rutrum. Morbi tincidunt, magna ultricies posuere ornare, purus dolor vehicula nunc, a lacinia enim mi eu nulla. Suspendisse dapibus orci a nisl placerat, et fringilla orci tempor.',
    'awards.title': 'MY ACHIEVEMENTS AND RECOGNITIONS',
    'awards.description': 'The constitution of Colombia is based on many artistic stories such as works of art and splendid things in the world in which we are discovering new things',
    'trips.title': 'MY TRIPS',
    'trips.brasil': 'BRAZIL',
    'trips.peru': 'PERU',
    'trips.paraguay': 'PARAGUAY',
    'hobbies.title': 'MY HOBBIES',
    'hobbies.read': 'READING',
    'hobbies.sports': 'SPORTS',
    'hobbies.cook': 'COOKING',
    'projects.title': 'MY PROJECTS',
    'projects.github': 'GitHub',
    'projects.messaging': 'Messaging',
    'projects.calculator': 'Calculator',
    'projects.other': 'kkkk',
    'menu.education': 'My academic formation',
    'menu.experience': 'My work experience',
    'menu.awards': 'My achievements and recognitions',
    'menu.trips': 'My trips',
    'menu.hobbies': 'My hobbies',
    'menu.projects': 'My projects',
    'menu.testimonials': 'Testimonials',
    'menu.social': 'My social networks',
    'header.language': 'LANGUAGE',
    'header.menu': 'MENU'
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');

  useEffect(() => {
    const stored = localStorage.getItem('language') as Language;
    if (stored && (stored === 'es' || stored === 'en')) {
      setLanguage(stored);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
