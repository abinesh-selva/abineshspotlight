'use client';

import React, { useEffect, useRef } from 'react';

export default function AsciiDecryption() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = container.offsetWidth;
    let height = container.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+{}|<>?';
    const fontSize = 14;
    let cols = Math.floor(width / fontSize);
    let rows = Math.floor(height / fontSize);

    let cells = new Array(cols).fill(null).map(() => 
      new Array(rows).fill(null).map(() => ({
        char: '.',
        intensity: 0
      }))
    );

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      width = container.offsetWidth;
      height = container.offsetHeight;
      canvas.width = width;
      canvas.height = height;
      cols = Math.floor(width / fontSize);
      rows = Math.floor(height / fontSize);
      cells = new Array(cols).fill(null).map(() => 
        new Array(rows).fill(null).map(() => ({ char: '.', intensity: 0 }))
      );
    };
    window.addEventListener('resize', handleResize);

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          if (i >= cells.length || j >= cells[i].length) continue;
          
          const x = i * fontSize + fontSize/2;
          const y = j * fontSize + fontSize/2;
          
          const dx = mouseX - x;
          const dy = mouseY - y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          
          const cell = cells[i][j];

          // Wake up cells near mouse
          if (dist < 100) {
            cell.intensity = 1.0;
          }

          // Fade intensity
          if (cell.intensity > 0) {
            cell.intensity -= 0.02;
            if (cell.intensity < 0) cell.intensity = 0;
          }

          // Scramble char if active
          if (cell.intensity > 0.1 && Math.random() < 0.3) {
            cell.char = chars[Math.floor(Math.random() * chars.length)];
          } else if (cell.intensity === 0 && Math.random() < 0.01) {
            cell.char = Math.random() > 0.5 ? '.' : ' ';
          }

          if (cell.intensity > 0) {
            // Accent color (gold) fading out
            ctx.fillStyle = `rgba(220, 188, 125, ${cell.intensity})`; // accent
            ctx.fillText(cell.char, x, y);
          } else if (cell.char === '.') {
            // Very faint dots for ink background
            ctx.fillStyle = 'rgba(245, 241, 236, 0.05)'; // canvas color faintly
            ctx.fillText(cell.char, x, y);
          }
        }
      }
      animationFrameId = requestAnimationFrame(render);
    };
    requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
