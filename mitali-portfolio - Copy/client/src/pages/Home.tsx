"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";

function Header() {
  const { scrollY } = useScroll();
  const headerBg = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255,255,255,0)", "rgba(255,255,255,0.95)"]
  );

  const handleNavigate = () => {
    window.scrollTo(0, 0);
  };

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
        <nav className="flex items-center gap-8">
          {[
            { label: "Work", href: "/" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ].map(item => (
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
      </div>
    </motion.header>
  );
}

function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center pt-20"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl order-2 lg:order-1"
          >
            <h1
              className="text-5xl md:text-6xl font-semibold leading-tight mb-6"
              style={{
                fontFamily: "Inter, -apple-system, sans-serif",
                color: "#1d1d1f",
                lineHeight: "1.1",
                letterSpacing: "-0.02em",
              }}
            >
              Hi there. I'm Mitali, a UX Designer.
            </h1>

            <p
              className="text-xl leading-relaxed mb-10"
              style={{
                fontFamily: "Inter, -apple-system, sans-serif",
                fontWeight: 400,
                color: "#1d1d1f",
              }}
            >
              I design thoughtful digital experiences that are clean,
              intuitive, and user-centered.
            </p>

            <Link
              href="/#contact"
              className="inline-block px-8 py-4 font-medium hover:opacity-90 transition-opacity rounded-full"
              style={{
                backgroundColor: "#1d1d1f",
                color: "#ffffff",
                fontFamily: "Inter, -apple-system, sans-serif",
                fontWeight: 500,
              }}
            >
              Get in Touch
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <img
              src="/hero-illustration-cutout.png"
              alt="Portrait illustration of Mitali Borkar"
              className="w-full max-w-sm lg:max-w-md h-auto object-contain"
              decoding="async"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Work() {
  const projects = [
    {
      id: "b2b-banking",
      title: "B2B Digital Banking",
      subtitle: "A unified onboarding solution for global business banking",
      category: "Enterprise UX",
      link: "/case-studies/b2b-banking",
      image: "/case-study-images/b2b-banking/page-001.png",
    },
    {
      id: "return-management",
      title: "Return Management",
      subtitle: "Designing solutions for e-commerce return experiences",
      category: "UX Research & Design",
      link: "/case-studies/return-management",
      image: "/case-study-images/return-management/return-management-page-1.png",
    },
    {
      id: "innovation-portal",
      title: "Innovation Portal",
      subtitle: "Information architecture and visual guidelines for Deloitte India",
      category: "Design System",
      link: "/case-studies/innovation-portal",
      image: "/case-study-images/innovation-portal/innovation-portal-page-40.png",
    },
  ];

  return (
    <section id="work" className="pb-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-4xl font-semibold"
              style={{
                fontFamily: "Inter, -apple-system, sans-serif",
                letterSpacing: "-0.02em",
              }}
            >
              Work
            </h2>
          </motion.div>
        </div>

        <div className="grid gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <Link href={project.link}>
                <div className="aspect-[16/10] mb-4 overflow-hidden rounded-lg flex items-center justify-center" style={{ backgroundColor: "#f5f5f7" }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p
                  className="text-sm uppercase tracking-wider mb-2"
                  style={{
                    fontFamily: "Inter, -apple-system, sans-serif",
                    color: "#0071e3",
                  }}
                >
                  {project.category}
                </p>
                <h3
                  className="text-2xl font-semibold mb-1"
                  style={{
                    fontFamily: "Inter, -apple-system, sans-serif",
                    color: "#1d1d1f",
                    fontWeight: 600,
                  }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-base"
                  style={{
                    fontFamily: "Inter, -apple-system, sans-serif",
                    fontWeight: 400,
                    color: "#1d1d1f",
                  }}
                >
                  {project.subtitle}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      id="about"
      className="pt-3"
      style={{ backgroundColor: "#f5f5f7" }}
    >
      <div className="container mx-auto px-6 max-w-6xl py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <h2
            className="text-4xl font-semibold mb-8"
            style={{
              fontFamily: "Inter, -apple-system, sans-serif",
              color: "#1d1d1f",
              letterSpacing: "-0.02em",
            }}
          >
            About
          </h2>

          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="w-64 flex-shrink-0">
              <div className="aspect-square rounded-lg overflow-hidden" style={{ backgroundColor: "#d2d2d7" }}>
                <img 
                  src="/mitali-profile.jpg" 
                  alt="Mitali Borkar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1">
              <p
                className="text-lg leading-relaxed mb-6"
                style={{
                  fontFamily: "Inter, -apple-system, sans-serif",
                  fontWeight: 400,
                  color: "#1d1d1f",
                }}
              >
                I'm a UX Designer with 5+ years of experience at Infosys
                (Wongdoody). I specialize in designing intuitive digital experiences
                for banking, healthcare, and enterprise products.
              </p>

              <p
                className="text-lg leading-relaxed"
                style={{
                  fontFamily: "Inter, -apple-system, sans-serif",
                  fontWeight: 400,
                  color: "#1d1d1f",
                }}
              >
                My background in Mechanical Engineering from VJTI gives me a strong
                foundation in systems thinking, which I combine with my Product
                Design degree from ISDI Parsons to create user-centered solutions.
                Based in Mumbai, I'm passionate about creating products that make a
                real impact.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="container mx-auto px-6 max-w-6xl py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <h2
            className="text-4xl font-semibold mb-8"
            style={{
              fontFamily: "Inter, -apple-system, sans-serif",
              color: "#1d1d1f",
              letterSpacing: "-0.02em",
            }}
          >
            Contact
          </h2>

          <p
            className="text-lg mb-8"
            style={{
              fontFamily: "Inter, -apple-system, sans-serif",
              fontWeight: 400,
              color: "#1d1d1f",
            }}
          >
            I'd love to hear from you. Get in touch!
          </p>

          <div className="flex flex-col gap-4 mb-12">
            <a
              href="mailto:mitaliborkar85@gmail.com"
              className="text-lg"
              style={{
                fontFamily: "Inter, -apple-system, sans-serif",
                fontWeight: 400,
                color: "#0071e3",
              }}
            >
              mitaliborkar85@gmail.com
            </a>
          </div>

          <div className="flex gap-8">
            <a
              href="https://www.linkedin.com/in/mitali-borkar-343abaa4/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:opacity-60 transition-opacity"
              style={{
                fontFamily: "Inter, -apple-system, sans-serif",
                fontWeight: 400,
                color: "#0071e3",
              }}
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8" style={{ backgroundColor: "#1d1d1f" }}>
      <div className="container mx-auto px-6 max-w-6xl">
        <p
          className="text-sm"
          style={{
            color: "rgba(255,255,255,0.6)",
            fontFamily: "Inter, -apple-system, sans-serif",
            fontWeight: 400,
          }}
        >
          © {new Date().getFullYear()} Mitali Borkar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#ffffff" }}>
      <Header />
      <main>
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}