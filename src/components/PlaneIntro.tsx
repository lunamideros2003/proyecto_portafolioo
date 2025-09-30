"use client";

import { useEffect, useMemo, useState } from "react";

export default function PlaneIntro() {
  const [visible, setVisible] = useState(true);

  const confetti = useMemo(() => {
    const items = Array.from({ length: 18 }).map((_, i) => {
      const leftStart = -10 + i * (100 / 16);
      const top = 25 + (Math.sin(i * 0.7) * 8);
      const delay = 0.2 + i * 0.06;
      const width = 18 + (i % 3) * 6;
      return { id: i, leftStart, top, delay, width };
    });
    return items;
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => setVisible(false), 2700);
    return () => clearTimeout(timeoutId);
  }, []);

  if (!visible) return null;

  return (
    <div className="plane-overlay">
      <div className="paper-container" aria-hidden>
        {confetti.map((c) => (
          <div
            key={c.id}
            className="paper"
            style={{
              left: `${c.leftStart}vw`,
              top: `${c.top}vh`,
              width: `${c.width}px`,
              animationDelay: `${c.delay}s`,
            }}
          />
        ))}
      </div>
      <svg className="plane-path" viewBox="0 0 100 20" preserveAspectRatio="none">
        <path className="is-shadow" d="M2 16 C20 12, 40 18, 60 8 S 90 8, 98 12" />
        <path d="M2 16 C20 12, 40 18, 60 8 S 90 8, 98 12" />
      </svg>
      <div className="plane-track" aria-hidden>
        <svg
          className="plane-svg"
          viewBox="0 0 120 60"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" stroke="#111" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M60 30 L110 10 L70 35 Z" fill="none" />
            <path d="M60 30 L110 10 L85 45 Z" fill="#ffffff" />
            <path d="M60 30 L70 35" />
            <path d="M85 45 L70 35" />
            <path d="M95 18 L85 45" />
          </g>
        </svg>
      </div>
    </div>
  );
}


