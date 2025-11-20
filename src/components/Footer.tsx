"use client";

export default function Footer() {
  return (
    <footer role="contentinfo" className="mt-16 mb-8 text-center px-4 select-none">
      <div className="h-px w-11/12 max-w-4xl mx-auto border-t border-black dark:border-white opacity-70" />
      <p className="mt-6 font-semibold text-black dark:text-white">© {new Date().getFullYear()} Luna Mideros. Todos los derechos reservados.</p>
      <p className="mt-3 text-black dark:text-white">Mi pequeño rincón creativo en internet♡</p>
    </footer>
  );
}