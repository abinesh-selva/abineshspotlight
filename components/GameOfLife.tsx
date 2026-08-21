'use client';

import React, { useEffect, useRef } from 'react';

export default function GameOfLife() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let isVisible = true;
    let width = container.offsetWidth;
    let height = container.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    const cellSize = 20;
    let cols = Math.floor(width / cellSize);
    let rows = Math.floor(height / cellSize);

    let grid = new Array(cols).fill(null).map(() => new Array(rows).fill(0).map(() => Math.random() > 0.85 ? 1 : 0));

    // Observe visibility so it ONLY animates when this section is on screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(container);

    const handleResize = () => {
      if (!container) return;
      width = container.offsetWidth;
      height = container.offsetHeight;
      canvas.width = width;
      canvas.height = height;
      cols = Math.floor(width / cellSize);
      rows = Math.floor(height / cellSize);
      grid = new Array(cols).fill(null).map(() => new Array(rows).fill(0).map(() => Math.random() > 0.85 ? 1 : 0));
    };
    window.addEventListener('resize', handleResize);

    // Mouse interaction: wake up cells in this section
    const handleMouseMove = (e: MouseEvent) => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const cx = Math.floor(mouseX / cellSize);
      const cy = Math.floor(mouseY / cellSize);
      for(let i = -1; i <= 1; i++) {
        for(let j = -1; j <= 1; j++) {
          if (cx+i >= 0 && cx+i < cols && cy+j >= 0 && cy+j < rows) {
            grid[cx+i][cy+j] = 1;
          }
        }
      }
    };
    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;
    let lastTime = 0;

    const updateGrid = () => {
      let next = new Array(cols).fill(null).map(() => new Array(rows).fill(0));
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          let state = grid[i][j];
          let neighbors = 0;
          for (let x = -1; x <= 1; x++) {
            for (let y = -1; y <= 1; y++) {
              if (x === 0 && y === 0) continue;
              let col = (i + x + cols) % cols;
              let row = (j + y + rows) % rows;
              neighbors += grid[col][row];
            }
          }
          if (state === 0 && neighbors === 3) {
            next[i][j] = 1;
          } else if (state === 1 && (neighbors < 2 || neighbors > 3)) {
            next[i][j] = 0;
          } else {
            next[i][j] = state;
          }
        }
      }
      grid = next;
    };

    const render = (time: number) => {
      if (isVisible) {
        if (time - lastTime > 150) {
          updateGrid();
          lastTime = time;
        }

        ctx.clearRect(0, 0, width, height);

        ctx.fillStyle = 'rgba(15, 55, 40, 0.08)'; // Very faint ink
        for (let i = 0; i < cols; i++) {
          for (let j = 0; j < rows; j++) {
            if (grid[i][j] === 1) {
              ctx.fillRect(i * cellSize, j * cellSize, cellSize - 1, cellSize - 1);
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };
    requestAnimationFrame(render);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
