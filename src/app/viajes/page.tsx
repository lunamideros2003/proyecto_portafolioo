"use client";

import BackButton from "../../components/BackButton";

export default function ViajesPage() {
  return (
    <>
      <BackButton />
      <div className="min-h-screen grid place-items-center p-8 pt-20">
        <main className="w-full max-w-4xl grid gap-8">
          <h1 className="text-center font-semibold tracking-wide uppercase text-black text-3xl">MIS VIAJES</h1>
          <p className="text-center text-sm opacity-70">Aquí podrás ampliar la información de tus viajes próximamente.</p>
        </main>
      </div>
    </>
  );
}


