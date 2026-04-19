"use client";

import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";

interface HeaderProps {
  showNav?: boolean;
}

export default function Header({ showNav = true }: HeaderProps) {
  const { scrollY } = useScroll();
  const headerBg = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255,255,255,0)", "rgba(255,255,255,0.95)"]
  );

  const handleNavigate = () => {
    window.scrollTo(0, 0);
  };

  const navItems = [
    { label: "Work", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <motion.header
      style={{ background: headerBg }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
    >
      <div className="container mx-auto px-6 py-5 flex items-center justify-between max-w-6xl">
        <Link href="/" onClick={handleNavigate}>
          <span
            className="text-xl font-semibold cursor-pointer"
            style={{
              fontFamily: "Inter, -apple-system, sans-serif",
              color: "#1d1d1f",
              letterSpacing: "-0.02em",
            }}
          >
            Mitali Borkar
          </span>
        </Link>
        {showNav && (
          <nav className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={handleNavigate}
                className="text-sm tracking-wide font-normal hover:opacity-60 transition-opacity"
                style={{ color: "#1d1d1f" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </motion.header>
  );
}