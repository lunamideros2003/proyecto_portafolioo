"use client";

import Link from "next/link";

export default function BackButton() {
  return (
    <header className="fixed top-0 left-0 z-40 p-3 md:p-6">
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-3 py-2 text-sm md:text-base rounded-md bg-[#e9d5ff] text-[#1a1a1a] shadow-sm border border-black/10 focus:outline-none focus:ring-2 focus:ring-black/20 hover:bg-[#d4b4f0] transition-colors"
        aria-label="Volver al portafolio principal"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 md:w-5 md:h-5"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        <span>MENÚ</span>
      </Link>
    </header>
  );
}
