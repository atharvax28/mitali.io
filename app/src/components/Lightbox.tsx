import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect } from 'react';
import { cn } from '@/lib/utils';

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
    <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center animate-in fade-in duration-300">
      <button 
        onClick={onClose}
        className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110]"
      >
        <X className="w-8 h-8" />
      </button>

      <div className="absolute top-8 left-1/2 -translate-x-1/2 text-white/50 font-geist-mono text-sm z-[110]">
        {(currentIndex + 1).toString().padStart(2, '0')} / {images.length.toString().padStart(2, '0')}
      </div>

      <button 
        onClick={onPrev}
        className="absolute left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-[110]"
      >
        <ChevronLeft className="w-10 h-10" />
      </button>

      <div className="relative w-full max-w-[90vw] max-h-[85vh] flex items-center justify-center p-4">
        <img 
          src={images[currentIndex]} 
          alt={`Gallery image ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain select-none"
          onClick={(e) => e.stopPropagation()}
        />
      </div>

      <button 
        onClick={onNext}
        className="absolute right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-[110]"
      >
        <ChevronRight className="w-10 h-10" />
      </button>

      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />
    </div>
  );
}
