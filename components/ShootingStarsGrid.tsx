'use client';
import React, { useEffect, useState, useRef } from 'react';

type Direction = 'lr' | 'rl' | 'tb' | 'bt';

type Star = {
  id: number;
  dir: Direction;
  pos: number;
  duration: number;
};

export default function ShootingStarsGrid() {
  const [stars, setStars] = useState<Star[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isVisible = true;
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(container);

    // Generate new stars rapidly when visible
    const interval = setInterval(() => {
      if (!isVisible || !containerRef.current) return;
      const height = containerRef.current.offsetHeight;
      const width = containerRef.current.offsetWidth;
      const gridSpacing = 40; // match the grid pattern size
      
      const dirs: Direction[] = ['lr', 'rl', 'tb', 'bt'];
      const dir = dirs[Math.floor(Math.random() * dirs.length)];
      
      // Snap to grid lines
      let pos = 0;
      if (dir === 'lr' || dir === 'rl') {
        pos = Math.floor((Math.random() * height) / gridSpacing) * gridSpacing;
      } else {
        pos = Math.floor((Math.random() * width) / gridSpacing) * gridSpacing;
      }

      // Random speed between 1.2s and 2.2s for fast, dynamic movement
      const duration = 1.2 + Math.random() * 1;
      
      const newStar: Star = {
        id: Date.now() + Math.random(),
        dir,
        pos,
        duration,
      };
      
      setStars(prev => [...prev.slice(-14), newStar]); // Keep at most last 15 stars in DOM
    }, 350); // Spawn a star very frequently

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Faint Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #F5F1EC 1px, transparent 1px),
            linear-gradient(to bottom, #F5F1EC 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Top and Bottom Fade to blend with other sections */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink" />

      {/* Shooting Stars */}
      {stars.map((star) => {
        let style: React.CSSProperties = {
          animationDuration: `${star.duration}s`,
        };
        let wrapperClass = '';
        let gradientStyle = '';
        let tipClass = '';

        if (star.dir === 'lr') {
          wrapperClass = 'absolute h-[1px] w-[150px] animate-shooting-star-lr';
          style.top = star.pos;
          style.left = '-150px';
          gradientStyle = 'linear-gradient(to right, transparent, #DCBC7D)';
          tipClass = 'absolute right-0 top-1/2 -translate-y-1/2 w-[2px] h-[2px] bg-white rounded-full shadow-[0_0_8px_2px_#DCBC7D]';
        } else if (star.dir === 'rl') {
          wrapperClass = 'absolute h-[1px] w-[150px] animate-shooting-star-rl';
          style.top = star.pos;
          style.right = '-150px';
          gradientStyle = 'linear-gradient(to left, transparent, #DCBC7D)';
          tipClass = 'absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-[2px] bg-white rounded-full shadow-[0_0_8px_2px_#DCBC7D]';
        } else if (star.dir === 'tb') {
          wrapperClass = 'absolute w-[1px] h-[150px] animate-shooting-star-tb';
          style.left = star.pos;
          style.top = '-150px';
          gradientStyle = 'linear-gradient(to bottom, transparent, #DCBC7D)';
          tipClass = 'absolute bottom-0 left-1/2 -translate-x-1/2 w-[2px] h-[2px] bg-white rounded-full shadow-[0_0_8px_2px_#DCBC7D]';
        } else if (star.dir === 'bt') {
          wrapperClass = 'absolute w-[1px] h-[150px] animate-shooting-star-bt';
          style.left = star.pos;
          style.bottom = '-150px';
          gradientStyle = 'linear-gradient(to top, transparent, #DCBC7D)';
          tipClass = 'absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-[2px] bg-white rounded-full shadow-[0_0_8px_2px_#DCBC7D]';
        }

        style.background = gradientStyle;

        return (
          <div key={star.id} className={wrapperClass} style={style}>
            {/* Extremely crisp, sharp tip */}
            <div className={tipClass} />
          </div>
        );
      })}
    </div>
  );
}
