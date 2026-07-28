'use client'

import React, { useState, useEffect, useCallback } from 'react'

const ChevronLeft = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
)

const ChevronRight = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
)

interface CarouselProps {
  children: React.ReactNode;
  autoSlide?: boolean;
  autoSlideInterval?: number;
  seamlessLoop?: boolean;
  slidesToShow?: number;
}

const Carousel = ({ 
    children: slides, 
    autoSlide = true, 
    autoSlideInterval = 5000, 
    seamlessLoop = true,
    slidesToShow = 1
}: CarouselProps) => {
    const slidesArray = React.Children.toArray(slides)
    const totalSlides = slidesArray.length

    const clonedCount = seamlessLoop ? slidesToShow : 0
    const [currentSlideIndex, setCurrentSlideIndex] = useState(clonedCount)
    const [isTransitioning, setIsTransitioning] = useState(true)
    const [dragStart, setDragStart] = useState<number | null>(null)
    const [dragEnd, setDragEnd] = useState<number | null>(null)

    // Append and prepend clones to create the seamless illusion
    const extendedSlides = seamlessLoop 
        ? [
            ...slidesArray.slice(-clonedCount), 
            ...slidesArray, 
            ...slidesArray.slice(0, clonedCount)
          ]
        : slidesArray

    const goToPreviousSlide = useCallback(() => {
        if (seamlessLoop) {
            if (currentSlideIndex <= 0) return
            setIsTransitioning(true)
            setCurrentSlideIndex(prev => prev - 1)
        } else {
            setCurrentSlideIndex(index => (index === 0 ? totalSlides - slidesToShow : index - 1))
        }
    }, [currentSlideIndex, seamlessLoop, totalSlides, slidesToShow])

    const goToNextSlide = useCallback(() => {
        if (seamlessLoop) {
            if (currentSlideIndex >= totalSlides + clonedCount) return
            setIsTransitioning(true)
            setCurrentSlideIndex(prev => prev + 1)
        } else {
            setCurrentSlideIndex(index => (index >= totalSlides - slidesToShow ? 0 : index + 1))
        }
    }, [currentSlideIndex, seamlessLoop, totalSlides, clonedCount, slidesToShow])

    // Drag / Swipe handlers
    const handleDragStart = (e: React.TouchEvent | React.MouseEvent) => {
        setDragEnd(null)
        if ('targetTouches' in e) {
            setDragStart(e.targetTouches[0].clientX)
        } else {
            setDragStart((e as React.MouseEvent).clientX)
        }
    }

    const handleDragMove = (e: React.TouchEvent | React.MouseEvent) => {
        if (dragStart === null) return
        if ('targetTouches' in e) {
            setDragEnd(e.targetTouches[0].clientX)
        } else {
            setDragEnd((e as React.MouseEvent).clientX)
        }
    }

    const handleDragEnd = () => {
        if (dragStart === null || dragEnd === null) {
            setDragStart(null)
            setDragEnd(null)
            return
        }
        
        const distance = dragStart - dragEnd
        const minSwipeDistance = 50

        if (distance > minSwipeDistance) {
            goToNextSlide()
        } else if (distance < -minSwipeDistance) {
            goToPreviousSlide()
        }
        
        setDragStart(null)
        setDragEnd(null)
    }

    // Handle seamless jumping when reaching clones
    useEffect(() => {
        if (!seamlessLoop) return
        
        // If we slid past the last real slide into the cloned area
        if (currentSlideIndex === totalSlides + clonedCount) {
            const timeout = setTimeout(() => {
                setIsTransitioning(false)
                setCurrentSlideIndex(clonedCount)
            }, 700)
            return () => clearTimeout(timeout)
        }
        // If we slid backwards past the first real slide into the cloned area
        if (currentSlideIndex === 0) {
            const timeout = setTimeout(() => {
                setIsTransitioning(false)
                setCurrentSlideIndex(totalSlides)
            }, 700)
            return () => clearTimeout(timeout)
        }
    }, [currentSlideIndex, totalSlides, seamlessLoop, clonedCount])

    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(goToNextSlide, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [autoSlide, autoSlideInterval, goToNextSlide])

    return (
        <div className='relative w-full h-full overflow-hidden rounded-3xl group/carousel'>
            {/* Main Carousel Track */}
            <div 
                className={`flex w-full h-full cursor-grab active:cursor-grabbing touch-pan-y ${isTransitioning ? 'transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)]' : ''}`} 
                style={{ transform: `translateX(-${(currentSlideIndex * 100) / slidesToShow}%)` }}
                onTouchStart={handleDragStart}
                onTouchMove={handleDragMove}
                onTouchEnd={handleDragEnd}
                onMouseDown={handleDragStart}
                onMouseMove={handleDragMove}
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
                onDragStart={(e) => e.preventDefault()} // Prevent default HTML5 drag on links
            >
                {extendedSlides.map((slide, idx) => (
                    <div 
                        key={idx} 
                        className="h-full flex-shrink-0 relative"
                        style={{ width: `${100 / slidesToShow}%` }}
                    >
                        <div className="w-full h-full p-2 md:p-3 pointer-events-none">
                           <div className="w-full h-full pointer-events-auto">
                             {slide}
                           </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons (Visible on Hover) */}
            <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 pointer-events-none">
                <button 
                    onClick={goToPreviousSlide} 
                    aria-label="Previous slide"
                    className='pointer-events-auto p-2 rounded-full backdrop-blur-md bg-ink/40 text-mist shadow-lg border border-accent/30 hover:bg-accent/80 hover:text-white hover:scale-110 transition-all duration-300'
                >
                    <ChevronLeft size={24} />
                </button>
                <button 
                    onClick={goToNextSlide} 
                    aria-label="Next slide"
                    className='pointer-events-auto p-2 rounded-full backdrop-blur-md bg-ink/40 text-mist shadow-lg border border-accent/30 hover:bg-accent/80 hover:text-white hover:scale-110 transition-all duration-300'
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* Custom Modern Indicators */}
            <div className='absolute bottom-6 right-0 left-0 pointer-events-none'>
                <div className='flex items-center justify-center gap-3 pointer-events-auto'>
                    {slidesArray.map((_, slideIndex) => {
                        let activeIndex = currentSlideIndex;
                        
                        if (seamlessLoop) {
                            if (currentSlideIndex < clonedCount) {
                                activeIndex = totalSlides - clonedCount + currentSlideIndex;
                            } else if (currentSlideIndex >= totalSlides + clonedCount) {
                                activeIndex = currentSlideIndex - totalSlides - clonedCount;
                            } else {
                                activeIndex = currentSlideIndex - clonedCount;
                            }
                        }

                        return (
                            <button 
                                key={slideIndex} 
                                aria-label={`Go to slide ${slideIndex + 1}`}
                                onClick={() => {
                                    setIsTransitioning(true)
                                    setCurrentSlideIndex(seamlessLoop ? slideIndex + clonedCount : slideIndex)
                                }}
                                className={`cursor-pointer transition-all duration-500 rounded-full ${
                                    activeIndex === slideIndex 
                                    ? "w-8 h-2 bg-accent shadow-[0_0_10px_rgba(var(--accent),0.8)]" 
                                    : "w-2 h-2 bg-mist opacity-50 hover:opacity-100"
                                }`} 
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Carousel
