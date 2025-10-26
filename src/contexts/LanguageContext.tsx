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
    'cv.description': 'Mi nombre es Luna. Nací en el año 2003, de fecha 7 de mayo. Siempre he sentido curiosidad por entender el porqué de las cosas y expresar mi creatividad, ya sea a través del arte o la tecnología. Creo que cada experiencia deja una huella y este portafolio es una forma de compartir parte de mi camino, crecimiento y refleja mi forma de ver el mundo. Así que adelante, te invito a pasar.',
    'education.title': 'MI FORMACION ACADEMICA',
    'education.primary': 'PRIMARIA',
    'education.secondary': 'BACHILLER',
    'education.university': 'UNIVERSIDAD',
    'education.primary.description': 'Mis primeros pasos en la educación los di en la Escuela Itzim. Luego tuve la oportunidad de estudiar en una escuela de Peru en la ciudad de Lima, donde conocí nuevas formas de aprender y compartir. Más adelante continué mis estudios en el INEM donde acabe quinto de primaria.',
    'education.secondary.description': 'En mi etapa de bachillerato recorrí diferentes colegios de Pasto. Cursé sexto grado en el colegio Marco Fidel Suárez, de séptimo a décimo en el INEM, y finalicé once en el José Mutis. Cada lugar dejó una huella importante en mi crecimiento, enseñándome a adaptarme.',
    'education.university.description': 'Actualmente estudio en la Universidad Cooperativa de Colombia, sede Pasto, donde curso el quinto semestre. Esta etapa ha significado para mí una experiencia de crecimiento personal y profesional, en la que cada proyecto y reto me impulsa a seguir formándome con pasión y compromiso hacia mi futuro.',
    'experience.title': 'MI EXPERIENCIA LABORAL',
    'experience.description': 'A lo largo de mi experiencia laboral he tenido la oportunidad de crecer en distintos ámbitos dentro del sector gastronómico. Trabajé durante dos años como mesera, seis meses como cajera y administradora, y posteriormente me desempeñé dos años como auxiliar y jefa de cocina. La mayoría de mis experiencias fueron en restaurantes de comida rápida, aunque también trabajé en pizzerías y lugares especializados en comida de mar. Cada trabajo me permitió conocer diferentes realidades, fortalecer mi independencia y aprender a valorar más los pequeños momentos, las personas y el esfuerzo que hay detrás de cada logro.',
    'awards.title': 'MIS LOGROS Y RECONOCIMIENTOS',
    'awards.description': 'Desde mi etapa como bachiller he sentido una gran pasión por el deporte, especialmente por el microfútbol, donde he obtenido numerosas medallas y diplomas de reconocimiento. Cada partido y competencia me enseñó disciplina, trabajo en equipo y perseverancia. Paralelamente, en el ámbito académico también he destacado, acumulando banderas de honor, diplomas y medallas por mi dedicación y rendimiento. Todo ese esfuerzo y compromiso me llevaron a obtener una media beca de estudios en Corea del Sur, un logro que representa no solo mi desempeño académico sino también a donde me llevo todo el esfuerzo.',
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
    'header.menu': 'MENÚ',
    'testimonials.title': 'TESTIMONIOS',
    'testimonials.description': 'la constitucion de colombia esta basada en muchos relatos artisticos como obras de arte y cosas esplendidas del mundo en el cual vamos descubriendo mas cosas nuevas'
  },
  en: {
    'cv.title': 'MY RESUME',
    'cv.description': 'My name is Luna. I was born in 2003, on May 7th. I have always felt curious about understanding the why of things and expressing my creativity, whether through art or technology. I believe that every experience leaves a mark and this portfolio is a way to share part of my journey, growth and reflects my way of seeing the world. So go ahead, I invite you to pass.',
    'education.title': 'MY ACADEMIC FORMATION',
    'education.primary': 'PRIMARY',
    'education.secondary': 'HIGH SCHOOL',
    'education.university': 'UNIVERSITY',
    'education.primary.description': 'My first steps in education were taken at Itzim School. Then I had the opportunity to study at a school in Peru in the city of Lima, where I learned new ways of learning and sharing. Later I continued my studies at INEM where I finished fifth grade.',
    'education.secondary.description': 'During my high school stage I went through different schools in Pasto. I studied sixth grade at Marco Fidel Suárez school, from seventh to tenth at INEM, and finished eleventh at José Mutis. Each place left an important mark on my growth, teaching me to adapt.',
    'education.university.description': 'I currently study at the Universidad Cooperativa de Colombia, Pasto campus, where I am in the fifth semester. This stage has meant for me an experience of personal and professional growth, in which each project and challenge drives me to continue training with passion and commitment towards my future.',
    'experience.title': 'MY WORK EXPERIENCE',
    'experience.description': 'Throughout my work experience I have had the opportunity to grow in different areas within the gastronomic sector. I worked for two years as a waitress, six months as a cashier and administrator, and later I worked for two years as an assistant and head chef. Most of my experiences were in fast food restaurants, although I also worked in pizzerias and places specialized in seafood. Each job allowed me to know different realities, strengthen my independence and learn to value more the small moments, people and the effort behind each achievement.',
    'awards.title': 'MY ACHIEVEMENTS AND RECOGNITIONS',
    'awards.description': 'Since my high school stage I have felt a great passion for sports, especially futsal, where I have obtained numerous medals and recognition diplomas. Each game and competition taught me discipline, teamwork and perseverance. In parallel, in the academic field I have also stood out, accumulating honor flags, diplomas and medals for my dedication and performance. All that effort and commitment led me to obtain a half scholarship to study in South Korea, an achievement that represents not only my academic performance but also where all the effort takes me.',
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
    'header.menu': 'MENU',
    'testimonials.title': 'TESTIMONIALS',
    'testimonials.description': 'The constitution of Colombia is based on many artistic stories such as works of art and splendid things in the world in which we are discovering new things'
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
