"use client";

import { useEffect, useRef } from "react";

export default function CursorPencilEffect() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const trail = useRef<{ x: number; y: number }[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const randomBetween = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY + 10;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      if (!ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      trail.current.push({ x: mouse.current.x, y: mouse.current.y });
      
      if (trail.current.length > 25) {
        trail.current.shift();
      }
      
      if (trail.current.length > 1) {
        for (let i = 0; i < trail.current.length - 1; i++) {
          const p1 = trail.current[i];
          const p2 = trail.current[i + 1];

          const alpha = (i + 1) / trail.current.length;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(40, 40, 40, ${alpha * 0.7})`;
          ctx.lineWidth = randomBetween(1.3, 2.2);
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';

          const jitterX = randomBetween(-0.4, 0.4);
          const jitterY = randomBetween(-0.4, 0.4);

          ctx.moveTo(p1.x + jitterX, p1.y + jitterY);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]"
      style={{ backgroundColor: 'transparent' }}
    />
  );
}
