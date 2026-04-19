import { useEffect, useState, useRef, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { heroConfig } from '@/config';


export function Hero() {
  if (!heroConfig.name && heroConfig.roles.length === 0) return null;

  const [isLoaded, setIsLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [boxSize, setBoxSize] = useState(450);
  const sectionRef = useRef<HTMLElement>(null);

  const halfBox = boxSize / 2;

  useEffect(() => {
    const handleResize = () => {
      setBoxSize(window.innerWidth < 768 ? 250 : 450);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const mousePos = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);

  const updatePosition = useCallback(() => {
    if (!sectionRef.current) return;
    sectionRef.current.style.setProperty('--mouse-x', `${mousePos.current.x - halfBox}px`);
    sectionRef.current.style.setProperty('--mouse-y', `${mousePos.current.y - halfBox}px`);
    rafId.current = null;
  }, [halfBox]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mousePos.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
    if (rafId.current === null) {
      rafId.current = requestAnimationFrame(updatePosition);
    }
  }, [updatePosition]);

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    mousePos.current = {
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top
    };
    if (rafId.current === null) {
      rafId.current = requestAnimationFrame(updatePosition);
    }
  }, [updatePosition]);

  useEffect(() => {
    return () => {
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full min-h-[100dvh] overflow-hidden bg-neutral-900 md:cursor-none touch-pan-y"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      style={{ '--mouse-x': 'calc(50vw - 125px)', '--mouse-y': 'calc(40vh - 125px)' } as React.CSSProperties}
    >
      {/* Background Image with Blur */}
      <div
        className={cn(
          'absolute inset-0 transition-opacity duration-[1800ms]',
          isLoaded && imageLoaded ? 'opacity-100' : 'opacity-0'
        )}
      >
        <img
          src={heroConfig.backgroundImage}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'blur(15px) brightness(0.6)' }}
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      {/* Sharp Image Container - uses CSS variables for position */}
      <div
        className={cn(
          'absolute top-0 left-0 overflow-hidden pointer-events-none z-20',
          isLoaded && imageLoaded ? 'opacity-100' : 'opacity-0'
        )}
        style={{
          width: boxSize,
          height: boxSize,
          transform: 'translate3d(var(--mouse-x), var(--mouse-y), 0)',
          willChange: 'transform',
          WebkitBackfaceVisibility: 'hidden',
          backfaceVisibility: 'hidden',
        }}
      >
        {/* Sharp image fills the entire section, offset to align with background */}
        <div
          className="absolute inset-0"
          style={{
            transform: 'translate3d(calc(var(--mouse-x) * -1), calc(var(--mouse-y) * -1), 0)',
            width: '100vw',
            height: '100vh',
            willChange: 'transform',
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden',
          }}
        >
          <img
            src={heroConfig.backgroundImage}
            alt="Hero Sharp"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>

      {/* Square border frame */}
      <div
        className={cn(
          'absolute top-0 left-0 pointer-events-none z-20',
          isLoaded && imageLoaded ? 'opacity-100' : 'opacity-0'
        )}
        style={{
          width: boxSize,
          height: boxSize,
          border: '1px solid rgba(255,255,255,0.4)',
          transform: 'translate3d(var(--mouse-x), var(--mouse-y), 0)',
          willChange: 'transform',
          WebkitBackfaceVisibility: 'hidden',
          backfaceVisibility: 'hidden',
        }}
      >
        {/* Crosshair */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-px bg-white/60" />
          <div className="absolute w-px h-4 bg-white/60" />
        </div>
      </div>

      {/* Role labels - Centered on mobile, side-aligned on desktop */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        {/* Mobile View: Centered row */}
        <div className="md:hidden absolute top-[25vh] left-0 right-0 flex justify-center px-6">
          <div
            className={cn(
              'flex items-center gap-3 transition-all duration-[1200ms] ease-out-quart',
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
            style={{ transitionDelay: '800ms' }}
          >
            {heroConfig.roles[0] && (
              <span className="text-[10px] font-geist-mono uppercase tracking-[0.2em] text-white/50">
                {heroConfig.roles[0]}
              </span>
            )}
            <div className="w-1 h-1 rounded-full bg-white/20" />
            {heroConfig.roles[1] && (
              <span className="text-[10px] font-geist-mono uppercase tracking-[0.2em] text-white/50">
                {heroConfig.roles[1]}
              </span>
            )}
          </div>
        </div>

        {/* Desktop View: Separated on sides */}
        <div className="hidden md:flex absolute inset-0 flex-col justify-center py-24">
          {heroConfig.roles[0] && (
            <div
              className={cn(
                'absolute left-8 lg:left-16 top-1/2 -translate-y-1/2 transition-all duration-[1200ms] ease-out-quart',
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              )}
              style={{ transitionDelay: '800ms' }}
            >
              <span className="text-xs font-geist-mono uppercase tracking-[0.3em] text-white/70">
                {heroConfig.roles[0]}
              </span>
            </div>
          )}
          {heroConfig.roles[1] && (
            <div
              className={cn(
                'absolute right-8 lg:right-16 top-1/2 -translate-y-1/2 transition-all duration-[1200ms] ease-out-quart',
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              )}
              style={{ transitionDelay: '900ms' }}
            >
              <span className="text-xs font-geist-mono uppercase tracking-[0.3em] text-white/70">
                {heroConfig.roles[1]}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-30 flex flex-col items-center justify-center md:justify-end min-h-[100dvh] px-6 lg:px-12 pointer-events-none pb-[15vh]">
        {/* Main Heading - large and impactful */}
        <div
          className={cn(
            'text-center transition-all duration-[1200ms] ease-out-quart',
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
          style={{ transitionDelay: '600ms' }}
        >
          <h1 className="text-[clamp(2.5rem,15vw,12rem)] font-black text-white tracking-[-0.04em] leading-[0.9] uppercase">
            {heroConfig.name}
          </h1>
        </div>
      </div>
    </section>
  );
}
