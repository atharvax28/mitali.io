import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect } from 'react';


interface LightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function Lightbox({ images, currentIndex, isOpen, onClose, onPrev, onNext }: LightboxProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onPrev, onNext, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-md flex flex-col items-center justify-center animate-in fade-in duration-300">
      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 h-20 flex items-center justify-between px-6 z-[110]">
        <div className="text-white/70 font-geist-mono text-sm tracking-widest">
          {(currentIndex + 1).toString().padStart(2, '0')} <span className="text-white/20 mx-2">/</span> {images.length.toString().padStart(2, '0')}
        </div>
        <button 
          onClick={onClose}
          className="w-10 h-10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Container */}
      <div className="relative w-full h-full flex items-center justify-center px-4 md:px-24">
        {/* Desktop Navigation Arrows (hidden on mobile) */}
        <button 
          onClick={onPrev}
          className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 items-center justify-center text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all z-[110]"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        <div className="relative w-full h-full flex items-center justify-center">
          <img 
            src={images[currentIndex]} 
            alt={`Gallery image ${currentIndex + 1}`}
            className="max-w-[95vw] md:max-w-full max-h-[70vh] md:max-h-[85vh] object-contain select-none shadow-2xl transition-all duration-500"
            onClick={(e) => e.stopPropagation()}
          />
        </div>

        <button 
          onClick={onNext}
          className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 items-center justify-center text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all z-[110]"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>

      {/* Mobile Navigation Bar (visible only on mobile) */}
      <div className="md:hidden absolute bottom-12 left-0 right-0 flex items-center justify-center gap-12 z-[110]">
        <button 
          onClick={onPrev}
          className="w-16 h-16 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full text-white border border-white/10 active:scale-90 transition-all"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button 
          onClick={onNext}
          className="w-16 h-16 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full text-white border border-white/10 active:scale-90 transition-all"
          aria-label="Next image"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>

      {/* Backdrop click to close */}
      <div className="absolute inset-0 z-0" onClick={onClose} />
    </div>
  );
}
