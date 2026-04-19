"use client";

import { motion } from "framer-motion";
import { Link } from "wouter";

function Header() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      style={{ backgroundColor: "rgba(255,237,232,0.98)" }}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between max-w-6xl">
        <Link href="/">
          <div
            className="text-xl font-semibold tracking-tight cursor-pointer"
            style={{
              fontFamily: "Adobe Caslon Pro, Georgia, serif",
              color: "#22181c",
            }}
          >
            Mitali Borkar
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          {[
            { label: "Home", href: "/" },
            { label: "Work", href: "/case-studies" },
            { label: "About", href: "/#about" },
            { label: "Resume", href: "/resume" },
          ].map(item => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm tracking-wide hover:opacity-60 transition-opacity font-normal"
              style={{ color: "#22181c" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}

function Resume() {
  return (
    <section className="py-32" style={{ backgroundColor: "#ffede8" }}>
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1
            className="text-4xl md:text-5xl font-semibold mb-6"
            style={{
              fontFamily: "Adobe Caslon Pro, Georgia, serif",
              color: "#22181c",
            }}
          >
            Resume
          </h1>
          <p
            className="text-lg"
            style={{
              color: "#22181c",
              fontFamily: "Proxima Nova, Helvetica, Arial, sans-serif",
              fontWeight: 300,
            }}
          >
            Product/User Experience Designer with 5+ years of experience
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2
              className="text-lg font-semibold mb-6 pb-2"
              style={{
                fontFamily: "Adobe Caslon Pro, Georgia, serif",
                color: "#22181c",
                borderBottom: "1px solid rgba(34,24,28,0.1)",
              }}
            >
              Experience
            </h2>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3
                      className="text-base font-semibold"
                      style={{ color: "#22181c" }}
                    >
                      Lead UX Designer
                    </h3>
                    <p
                      className="text-sm"
                      style={{
                        color: "#22181c",
                        fontFamily:
                          "Proxima Nova, Helvetica, Arial, sans-serif",
                        fontWeight: 300,
                      }}
                    >
                      Infosys (Wongdoody)
                    </p>
                  </div>
                  <span
                    className="text-sm"
                    style={{
                      color: "#22181c",
                      fontFamily: "Proxima Nova, Helvetica, Arial, sans-serif",
                      fontWeight: 300,
                    }}
                  >
                    Feb 2021 – Present
                  </span>
                </div>
                <ul
                  className="text-sm space-y-2 mt-3"
                  style={{
                    color: "#22181c",
                    fontFamily: "Proxima Nova, Helvetica, Arial, sans-serif",
                    fontWeight: 300,
                  }}
                >
                  <li>• Led UX design for HSBC and other banking clients</li>
                  <li>
                    • Focused on user research, wireframing, prototyping, and
                    usability testing
                  </li>
                  <li>• Collaborated with cross-functional agile teams</li>
                  <li>
                    • Delivered intuitive solutions aligned with design system
                    and compliance standards
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3
                      className="text-base font-semibold"
                      style={{ color: "#22181c" }}
                    >
                      UX Design Intern
                    </h3>
                    <p
                      className="text-sm"
                      style={{
                        color: "#22181c",
                        fontFamily:
                          "Proxima Nova, Helvetica, Arial, sans-serif",
                        fontWeight: 300,
                      }}
                    >
                      Deloitte India
                    </p>
                  </div>
                  <span
                    className="text-sm"
                    style={{
                      color: "#22181c",
                      fontFamily: "Proxima Nova, Helvetica, Arial, sans-serif",
                      fontWeight: 300,
                    }}
                  >
                    Jan 2020 – May 2020
                  </span>
                </div>
                <p
                  className="text-sm mt-2"
                  style={{
                    color: "#22181c",
                    fontFamily: "Proxima Nova, Helvetica, Arial, sans-serif",
                    fontWeight: 300,
                  }}
                >
                  • Redesigned Deloitte India Innovation website applying design
                  thinking
                </p>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3
                      className="text-base font-semibold"
                      style={{ color: "#22181c" }}
                    >
                      Product & UX Intern
                    </h3>
                    <p
                      className="text-sm"
                      style={{
                        color: "#22181c",
                        fontFamily:
                          "Proxima Nova, Helvetica, Arial, sans-serif",
                        fontWeight: 300,
                      }}
                    >
                      Designer's Charrette
                    </p>
                  </div>
                  <span
                    className="text-sm"
                    style={{
                      color: "#22181c",
                      fontFamily: "Proxima Nova, Helvetica, Arial, sans-serif",
                      fontWeight: 300,
                    }}
                  >
                    Jun 2019 – Aug 2019
                  </span>
                </div>
                <p
                  className="text-sm mt-2"
                  style={{
                    color: "#22181c",
                    fontFamily: "Proxima Nova, Helvetica, Arial, sans-serif",
                    fontWeight: 300,
                  }}
                >
                  • Designed portable insulin cooler
                </p>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2
              className="text-lg font-semibold mb-6 pb-2"
              style={{
                fontFamily: "Adobe Caslon Pro, Georgia, serif",
                color: "#22181c",
                borderBottom: "1px solid rgba(34,24,28,0.1)",
              }}
            >
              Education
            </h2>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3
                      className="text-base font-semibold"
                      style={{ color: "#22181c" }}
                    >
                      Diploma in Product Design
                    </h3>
                    <p
                      className="text-sm"
                      style={{
                        color: "#22181c",
                        fontFamily:
                          "Proxima Nova, Helvetica, Arial, sans-serif",
                        fontWeight: 300,
                      }}
                    >
                      ISDI Parsons, Mumbai
                    </p>
                  </div>
                  <span
                    className="text-sm"
                    style={{
                      color: "#22181c",
                      fontFamily: "Proxima Nova, Helvetica, Arial, sans-serif",
                      fontWeight: 300,
                    }}
                  >
                    2016 – 2020
                  </span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3
                      className="text-base font-semibold"
                      style={{ color: "#22181c" }}
                    >
                      Diploma in Mechanical Engineering
                    </h3>
                    <p
                      className="text-sm"
                      style={{
                        color: "#22181c",
                        fontFamily:
                          "Proxima Nova, Helvetica, Arial, sans-serif",
                        fontWeight: 300,
                      }}
                    >
                      VJTI College of Engineering, Mumbai
                    </p>
                  </div>
                  <span
                    className="text-sm"
                    style={{
                      color: "#22181c",
                      fontFamily: "Proxima Nova, Helvetica, Arial, sans-serif",
                      fontWeight: 300,
                    }}
                  >
                    2013 – 2015
                  </span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3
                      className="text-base font-semibold"
                      style={{ color: "#22181c" }}
                    >
                      BA in Sociology
                    </h3>
                    <p
                      className="text-sm"
                      style={{
                        color: "#22181c",
                        fontFamily:
                          "Proxima Nova, Helvetica, Arial, sans-serif",
                        fontWeight: 300,
                      }}
                    >
                      Mumbai University
                    </p>
                  </div>
                  <span
                    className="text-sm"
                    style={{
                      color: "#22181c",
                      fontFamily: "Proxima Nova, Helvetica, Arial, sans-serif",
                      fontWeight: 300,
                    }}
                  >
                    2016 – 2019
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2
              className="text-lg font-semibold mb-6 pb-2"
              style={{
                fontFamily: "Adobe Caslon Pro, Georgia, serif",
                color: "#22181c",
                borderBottom: "1px solid rgba(34,24,28,0.1)",
              }}
            >
              Skills
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3
                  className="text-sm font-semibold mb-3"
                  style={{ color: "#22181c" }}
                >
                  Design
                </h3>
                <ul
                  className="text-sm space-y-2"
                  style={{
                    color: "#22181c",
                    fontFamily: "Proxima Nova, Helvetica, Arial, sans-serif",
                    fontWeight: 300,
                  }}
                >
                  <li>Design Thinking</li>
                  <li>Problem Solving</li>
                  <li>Interaction Design</li>
                  <li>Design Research</li>
                  <li>Rapid Prototyping</li>
                  <li>Wireframing</li>
                </ul>
              </div>
              <div>
                <h3
                  className="text-sm font-semibold mb-3"
                  style={{ color: "#22181c" }}
                >
                  Tools
                </h3>
                <ul
                  className="text-sm space-y-2"
                  style={{
                    color: "#22181c",
                    fontFamily: "Proxima Nova, Helvetica, Arial, sans-serif",
                    fontWeight: 300,
                  }}
                >
                  <li>Figma</li>
                  <li>Sketch</li>
                  <li>Adobe XD</li>
                  <li>Axure</li>
                  <li>InVision</li>
                  <li>Illustrator</li>
                </ul>
              </div>
              <div>
                <h3
                  className="text-sm font-semibold mb-3"
                  style={{ color: "#22181c" }}
                >
                  Languages
                </h3>
                <ul
                  className="text-sm space-y-2"
                  style={{
                    color: "#22181c",
                    fontFamily: "Proxima Nova, Helvetica, Arial, sans-serif",
                    fontWeight: 300,
                  }}
                >
                  <li>English</li>
                  <li>Hindi</li>
                  <li>Marathi</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2
              className="text-lg font-semibold mb-6 pb-2"
              style={{
                fontFamily: "Adobe Caslon Pro, Georgia, serif",
                color: "#22181c",
                borderBottom: "1px solid rgba(34,24,28,0.1)",
              }}
            >
              Contact
            </h2>

            <div
              className="space-y-3 text-sm"
              style={{
                color: "#22181c",
                fontFamily: "Proxima Nova, Helvetica, Arial, sans-serif",
                fontWeight: 300,
              }}
            >
              <p>Email: mitaliborkar85@gmail.com</p>
              <p>Phone: +91-9920705581</p>
              <p>Location: Mumbai, India</p>
              <p>
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/mitali-borkar-343abaa4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#fe8357" }}
                >
                  linkedin.com/in/mitali-borkar-343abaa4
                </a>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Download CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16"
        >
          <a
            href="/resources/Mitali Borkar 2026 resume.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 px-7 py-3 text-white font-medium hover:opacity-90 transition-opacity"
            style={{
              backgroundColor: "#fe8357",
              fontFamily: "Proxima Nova, Helvetica, Arial, sans-serif",
              fontWeight: 500,
            }}
          >
            Download PDF
            <span>↓</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10" style={{ backgroundColor: "#22181c" }}>
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p
            className="text-sm"
            style={{
              color: "rgba(255,237,232,0.6)",
              fontFamily: "Proxima Nova, Helvetica, Arial, sans-serif",
              fontWeight: 300,
            }}
          >
            © 2024 Mitali Borkar. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a
              href="https://www.linkedin.com/in/mitali-borkar-343abaa4/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:opacity-60 transition-opacity"
              style={{
                color: "rgba(255,237,232,0.6)",
                fontFamily: "Proxima Nova, Helvetica, Arial, sans-serif",
                fontWeight: 300,
              }}
            >
              LinkedIn
            </a>
            <a
              href="mailto:mitaliborkar85@gmail.com"
              className="text-sm hover:opacity-60 transition-opacity"
              style={{
                color: "rgba(255,237,232,0.6)",
                fontFamily: "Proxima Nova, Helvetica, Arial, sans-serif",
                fontWeight: 300,
              }}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function ResumePage() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#ffffff" }}
    >
      <Header />
      <main className="flex-1 pt-20">
        <Resume />
      </main>
      <Footer />
    </div>
  );
}
