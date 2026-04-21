import { useState, useEffect, type MouseEvent } from 'react';
import { useLocation, Link } from 'react-router';
import { cn } from '@/lib/utils';
import { AnimatedButton } from './AnimatedButton';
import { navigationConfig } from '@/config';
import * as LucideIcons from 'lucide-react';

export function Navigation() {
  if (!navigationConfig.logo && navigationConfig.links.length === 0) return null;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();


  const isHomePage = location.pathname === '/';
  const links = navigationConfig.links;

  useEffect(() => {
    // Fade in navbar after page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#') && isHomePage) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    } else if (href.startsWith('#') && !isHomePage) {
      // If on details page, navigate home then scroll (browser handles hash usually, but we help)
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out-circ',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4',
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
        )}
      >
        <div className="w-full px-6 lg:px-12 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            {navigationConfig.logo && (
              <Link to="/" className="flex items-center">
                <span className={cn(
                  "text-2xl font-semibold tracking-tight transition-colors duration-500",
                  (isScrolled || !isHomePage) ? "text-exvia-black" : "text-white"
                )}>
                  {navigationConfig.logo}
                </span>
              </Link>
            )}

            {/* Desktop Navigation */}
            {navigationConfig.links.length > 0 && (
              <div className="hidden lg:flex items-center gap-10">
                {navigationConfig.links.map((link) => (
                  <Link
                    key={link.label}
                    to={isHomePage ? link.href : `/${link.href}`}
                    onClick={(e) => handleNavClick(e as any, link.href)}
                    className={cn(
                      "text-base transition-colors duration-500 relative group",
                      (isScrolled || !isHomePage) ? "text-exvia-black/80 hover:text-exvia-black" : "text-white/90 hover:text-white"
                    )}
                  >
                    {link.label}
                    <span className={cn(
                      "absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full",
                      (isScrolled || !isHomePage) ? "bg-exvia-black" : "bg-white"
                    )} />
                  </Link>
                ))}
              </div>
            )}

            {/* Contact Button */}
            {navigationConfig.contactLabel && (
              <div className="hidden lg:block">
                <AnimatedButton
                  href={isHomePage ? navigationConfig.contactHref : `/${navigationConfig.contactHref}`}
                  variant={(isScrolled || !isHomePage) ? "primary" : "outline-white"}
                  size="md"
                >
                  {navigationConfig.contactLabel}
                </AnimatedButton>
              </div>
            )}

            {/* Mobile Menu Button (Hamburger - PRO ANIMATED) */}
            {navigationConfig.links.length > 0 && (
              <button
                onClick={() => setIsMenuOpen(true)}
                className={cn(
                  "lg:hidden relative flex items-center justify-center w-12 h-12 -mr-3 focus:outline-none transition-all duration-300",
                  isScrolled ? "bg-exvia-black text-white rounded-full" : "text-white bg-black/20 backdrop-blur-md rounded-full"
                )}
                aria-label="Open menu"
                aria-expanded={isMenuOpen}
                aria-controls="mobileDrawer"
              >
                <div className="relative w-6 h-5 overflow-hidden flex flex-col justify-between group">
                  <span
                    className={cn(
                      'w-full h-[2px] transition-all duration-500 ease-out-quart transform-gpu',
                      'bg-white'
                    )}
                  />
                  <span
                    className={cn(
                      'w-full h-[2px] transition-all duration-500 ease-out-quart transform-gpu',
                      'bg-white'
                    )}
                  />
                  <span
                    className={cn(
                      'w-[60%] ml-auto h-[2px] transition-all duration-500 ease-out-quart transform-gpu',
                      'bg-white'
                    )}
                  />
                </div>
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Scrim */}
      <div
        className={cn(
          'fixed inset-0 z-[60] bg-exvia-black/40 backdrop-blur-[4px] transition-opacity duration-500 lg:hidden',
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu Overlay (Full-screen as per reference) */}
      <nav
        id="mobileDrawer"
        className={cn(
          'fixed inset-0 z-[100] bg-exvia-black/95 backdrop-blur-[20px] transition-all duration-700 ease-out-quart lg:hidden flex flex-col',
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        aria-hidden={!isMenuOpen}
        aria-label="Mobile navigation"
      >
        {/* Top Header - Close (Reference style) */}
        <div className="flex items-center justify-end p-8 relative z-[110]">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen(false);
            }}
            className="flex items-center justify-center w-14 h-14 bg-white rounded-xl text-exvia-black shadow-2xl cursor-pointer hover:scale-95 transition-transform active:scale-90"
            aria-label="Close menu"
          >
            <LucideIcons.X className="w-8 h-8 pointer-events-none" />
          </button>
        </div>

        {/* Centered Navigation Links (Reference style) */}
        <div className="flex-1 flex flex-col items-center justify-center -mt-20 relative z-[105]">
          <div className="flex flex-col items-center gap-6 md:gap-10">
            {links.map((link, index) => (
              <Link
                key={link.label}
                to={isHomePage ? link.href : `/${link.href}`}
                onClick={(e) => handleNavClick(e as any, link.href)}
                className={cn(
                  'text-4xl md:text-6xl font-black text-white uppercase tracking-tighter hover:text-white/70 transition-all duration-700 ease-out-quart cursor-pointer',
                  isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                )}
                style={{ transitionDelay: isMenuOpen ? `${index * 80 + 100}ms` : '0ms' }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Decorative Image at bottom (Reference style) */}
        <div 
          className={cn(
            'absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-sm px-6 transition-all duration-1000 ease-out-quart delay-500 pointer-events-none z-[102]',
            isMenuOpen ? 'opacity-50 translate-y-0' : 'opacity-0 translate-y-20'
          )}
        >
          <div className="aspect-[3/4] overflow-hidden rounded-t-3xl border-x border-t border-white/10 shadow-2xl">
            <img 
              src="/images/about-1.jpg" 
              alt="Decorative background" 
              className="w-full h-full object-cover grayscale brightness-75"
            />
          </div>
        </div>
      </nav>
    </>
  );
}
