"use client";

import { motion } from "framer-motion";
import { Link } from "wouter";
import { Header, Footer } from "../components/layout";

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#ffffff" }}>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16" style={{ backgroundColor: "#ffffff" }}>
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1
                className="text-5xl md:text-6xl font-semibold mb-8"
                style={{
                  fontFamily: "Inter, -apple-system, sans-serif",
                  color: "#1d1d1f",
                  letterSpacing: "-0.02em",
                  lineHeight: "1.1",
                }}
              >
                About
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="py-16" style={{ backgroundColor: "#f5f5f7" }}>
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-12 items-start"
            >
              <div className="w-full md:w-1/3 flex-shrink-0">
                <div className="aspect-square rounded-2xl overflow-hidden" style={{ backgroundColor: "#d2d2d7" }}>
                  <img 
                    src="/mitali-profile.jpg" 
                    alt="Mitali Borkar"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="flex-1">
                <h2
                  className="text-2xl font-semibold mb-6"
                  style={{
                    fontFamily: "Inter, -apple-system, sans-serif",
                    color: "#1d1d1f",
                  }}
                >
                  UX Designer based in Mumbai
                </h2>
                
                <div className="space-y-6">
                  <p
                    className="text-lg leading-relaxed"
                    style={{
                      fontFamily: "Inter, -apple-system, sans-serif",
                      fontWeight: 400,
                      color: "#1d1d1f",
                    }}
                  >
                    I'm a UX Designer with 5+ years of experience at Infosys (Wongdoody). 
                    I specialize in designing intuitive digital experiences for banking, 
                    healthcare, and enterprise products.
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
                  </p>

                  <p
                    className="text-lg leading-relaxed"
                    style={{
                      fontFamily: "Inter, -apple-system, sans-serif",
                      fontWeight: 400,
                      color: "#1d1d1f",
                    }}
                  >
                    Based in Mumbai, I'm passionate about creating products that make a 
                    real impact. I believe great design is invisible—it just works.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16" style={{ backgroundColor: "#ffffff" }}>
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-3xl font-semibold mb-8"
                style={{
                  fontFamily: "Inter, -apple-system, sans-serif",
                  color: "#1d1d1f",
                  letterSpacing: "-0.02em",
                }}
              >
                Experience
              </h2>

              <div className="space-y-8">
                <div className="flex gap-8">
                  <div className="w-32 flex-shrink-0" style={{ color: "#86868b", fontFamily: "Inter, -apple-system, sans-serif" }}>
                    2019 - Present
                  </div>
                  <div>
                    <h3
                      className="text-xl font-semibold mb-2"
                      style={{
                        fontFamily: "Inter, -apple-system, sans-serif",
                        color: "#1d1d1f",
                      }}
                    >
                      UX Designer
                    </h3>
                    <p
                      className="text-lg mb-2"
                      style={{
                        fontFamily: "Inter, -apple-system, sans-serif",
                        fontWeight: 400,
                        color: "#86868b",
                      }}
                    >
                      Infosys (Wongdoody)
                    </p>
                    <p
                      className="text-base"
                      style={{
                        fontFamily: "Inter, -apple-system, sans-serif",
                        fontWeight: 400,
                        color: "#1d1d1f",
                      }}
                    >
                      Leading UX design for enterprise banking and healthcare products. 
                      Conducting user research, creating wireframes, and high-fidelity prototypes.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-16" style={{ backgroundColor: "#f5f5f7" }}>
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-3xl font-semibold mb-8"
                style={{
                  fontFamily: "Inter, -apple-system, sans-serif",
                  color: "#1d1d1f",
                  letterSpacing: "-0.02em",
                }}
              >
                Education
              </h2>

              <div className="space-y-8">
                <div className="flex gap-8">
                  <div className="w-32 flex-shrink-0" style={{ color: "#86868b", fontFamily: "Inter, -apple-system, sans-serif" }}>
                    2017 - 2019
                  </div>
                  <div>
                    <h3
                      className="text-xl font-semibold mb-2"
                      style={{
                        fontFamily: "Inter, -apple-system, sans-serif",
                        color: "#1d1d1f",
                      }}
                    >
                      Master in Product Design
                    </h3>
                    <p
                      className="text-lg mb-2"
                      style={{
                        fontFamily: "Inter, -apple-system, sans-serif",
                        fontWeight: 400,
                        color: "#86868b",
                      }}
                    >
                      ISDI Parsons
                    </p>
                  </div>
                </div>

                <div className="flex gap-8">
                  <div className="w-32 flex-shrink-0" style={{ color: "#86868b", fontFamily: "Inter, -apple-system, sans-serif" }}>
                    2013 - 2017
                  </div>
                  <div>
                    <h3
                      className="text-xl font-semibold mb-2"
                      style={{
                        fontFamily: "Inter, -apple-system, sans-serif",
                        color: "#1d1d1f",
                      }}
                    >
                      B.Tech in Mechanical Engineering
                    </h3>
                    <p
                      className="text-lg mb-2"
                      style={{
                        fontFamily: "Inter, -apple-system, sans-serif",
                        fontWeight: 400,
                        color: "#86868b",
                      }}
                    >
                      VJTI Mumbai
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16" style={{ backgroundColor: "#ffffff" }}>
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2
                className="text-3xl font-semibold mb-4"
                style={{
                  fontFamily: "Inter, -apple-system, sans-serif",
                  color: "#1d1d1f",
                }}
              >
                Let's work together
              </h2>
              <p
                className="text-lg mb-8"
                style={{
                  fontFamily: "Inter, -apple-system, sans-serif",
                  fontWeight: 400,
                  color: "#86868b",
                }}
              >
                I'm always open to discussing new projects and opportunities.
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 text-white font-medium rounded-full hover:opacity-90 transition-opacity"
                style={{
                  backgroundColor: "#0071e3",
                  fontFamily: "Inter, -apple-system, sans-serif",
                  fontWeight: 500,
                }}
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}