'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'

export default function NotFound() {
  const [position, setPosition] = useState({ x: -1000, y: -1000 })
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLAnchorElement>(null)
  const [btnOffset, setBtnOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    setPosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 })

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top
        setPosition({ x: mouseX, y: mouseY })

        // Magnetic button effect
        if (buttonRef.current) {
          const btnRect = buttonRef.current.getBoundingClientRect()
          const btnCenterX = btnRect.left + btnRect.width / 2
          const btnCenterY = btnRect.top + btnRect.height / 2
          
          const distX = e.clientX - btnCenterX
          const distY = e.clientY - btnCenterY
          const distance = Math.sqrt(distX * distX + distY * distY)
          
          // Trigger distance for magnetic pull
          if (distance < 120) {
            setBtnOffset({
              x: distX * 0.2, // strength of pull
              y: distY * 0.2
            })
          } else {
            setBtnOffset({ x: 0, y: 0 })
          }
        }
      }
    }
    
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Calculate parallax offset for background elements
  const parallaxX = windowSize.width ? (position.x - windowSize.width / 2) * -0.03 : 0
  const parallaxY = windowSize.height ? (position.y - windowSize.height / 2) * -0.03 : 0

  return (
    <div 
      ref={containerRef}
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-ink text-canvas font-sans selection:bg-accent selection:text-ink"
    >
      {/* Dynamic Flashlight Gradient */}
      <div 
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 400px at ${position.x}px ${position.y}px, rgba(220, 188, 125, 0.08) 0%, rgba(15, 55, 40, 1) 80%)`, // ink color #0F3728
        }}
      />

      {/* Floating Elements Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div 
          className="absolute text-[20vw] font-display font-normal text-forest opacity-30 select-none"
          style={{ 
            top: '5%', left: '-5%',
            transform: `translate(${parallaxX * 1.5}px, ${parallaxY * 1.5}px)`
          }}
        >
          404
        </div>
        <div 
          className="absolute text-[15vw] font-display font-normal text-forest opacity-20 select-none"
          style={{ 
            bottom: '10%', right: '-5%',
            transform: `translate(${parallaxX * -1}px, ${parallaxY * -1}px)`
          }}
        >
          LOST
        </div>
      </div>

      <div 
        className="z-20 relative flex flex-col items-center text-center space-y-6 max-w-2xl px-6"
        style={{ 
          transform: `translate(${parallaxX}px, ${parallaxY}px)`, 
          transition: 'transform 0.1s ease-out' 
        }}
      >
        <div className="relative group cursor-default">
          <h1 className="font-display text-[120px] md:text-[180px] leading-none font-normal tracking-tighter text-accent mix-blend-screen relative z-10 select-none">
            404
          </h1>
          {/* Glitch text shadow effect */}
          <h1 className="font-display text-[120px] md:text-[180px] leading-none font-normal tracking-tighter text-blush absolute top-0 left-0 -ml-[4px] opacity-70 mix-blend-screen z-0 animate-pulse select-none">
            404
          </h1>
          <h1 className="font-display text-[120px] md:text-[180px] leading-none font-normal tracking-tighter text-mist absolute top-0 left-0 ml-[4px] mt-[2px] opacity-70 mix-blend-screen z-0 animate-pulse select-none" style={{ animationDelay: '0.2s' }}>
            404
          </h1>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-normal text-paper font-display mb-2">
          Page not found
        </h2>
        
        <p className="text-mist max-w-md mx-auto text-lg md:text-xl font-medium">
          You've ventured into the unknown. The page you're looking for has drifted away.
        </p>

        <div className="pt-10 pb-4 relative z-30 flex justify-center">
          <Link 
            ref={buttonRef}
            href="/"
            style={{
              transform: `translate(${btnOffset.x}px, ${btnOffset.y}px)`,
              transition: btnOffset.x === 0 && btnOffset.y === 0 ? 'transform 0.3s ease-out' : 'none'
            }}
            className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full border-2 border-accent bg-ink px-8 py-4 text-accent font-bold transition-colors hover:border-transparent hover:text-ink hover:shadow-[0_0_30px_rgba(220,188,125,0.4)]"
          >
            <span className="relative z-10 tracking-wide transition-colors group-hover:text-ink">Return Home</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-ink"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
            <div className="absolute inset-0 z-0 bg-accent translate-y-full transition-transform duration-300 group-hover:translate-y-0 ease-out" />
          </Link>
        </div>
      </div>
      
      {/* Interactive Background Grid */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(220, 188, 125, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(220, 188, 125, 1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          backgroundPosition: 'center center',
          transform: `translate(${parallaxX * 0.5}px, ${parallaxY * 0.5}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      />
    </div>
  )
}
