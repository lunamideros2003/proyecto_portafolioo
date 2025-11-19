"use client";
import Image from "next/image";
import PlaneIntro from "../components/PlaneIntro";
import CursorPencilEffect from "../components/CursorPencilEffect";
import { useEffect, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import CvSection from "../components/sections/CvSection";
import EducationSection from "../components/sections/EducationSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import AwardsSection from "../components/sections/AwardsSection";
import TripsLinkSection from "../components/sections/TripsLinkSection";
import HobbiesLinkSection from "../components/sections/HobbiesLinkSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import SocialSection from "../components/sections/SocialSection";
import Footer from "../components/Footer";

export default function Home() {
  const { t } = useLanguage();
  const [introDone, setIntroDone] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setIntroDone(true), 2800);
    return () => clearTimeout(id);
  }, []);
  return (
    <div className="min-h-screen grid place-items-center pt-28 pb-12 px-4">
      <CursorPencilEffect />
      <PlaneIntro />
      {introDone && (
      <main className="w-full max-w-4xl grid gap-10 justify-items-center relative">
        <CvSection />

        

        <EducationSection />

        <ExperienceSection />

        <AwardsSection />

        <TripsLinkSection />


        <HobbiesLinkSection />

        <ProjectsSection />
        <TestimonialsSection />



        <SocialSection />

        <Footer />
      </main>
      )}
    </div>
  );
}
