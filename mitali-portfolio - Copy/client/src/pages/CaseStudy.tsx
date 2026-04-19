"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { Header, Footer } from "../components/layout";
import Lightbox from "../components/Lightbox";
import { caseStudies } from "../data/caseStudies";

export default function CaseStudyPage() {
  const params = useParams();
  const projectId = params.id || "";
  const project = caseStudies[projectId];
  
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState("");

  const openLightbox = (src: string) => {
    setLightboxSrc(src);
    setLightboxOpen(true);
  };

  if (!project) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: "#ffffff" }}>
        <Header />
        <div className="pt-32 container mx-auto px-6 max-w-6xl">
          <p>Project not found</p>
          <Link href="/" className="text-sm" style={{ color: "#0071e3" }}>← Back to Work</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const allCaseStudyIds = Object.keys(caseStudies);
  const currentIndex = allCaseStudyIds.indexOf(projectId);
  const prevProject = currentIndex > 0 ? allCaseStudyIds[currentIndex - 1] : null;
  const nextProject = currentIndex < allCaseStudyIds.length - 1 ? allCaseStudyIds[currentIndex + 1] : null;

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#ffffff" }}>
      <Header />
      
      <main>
        {/* Project Header */}
        <section className="pt-32 pb-16" style={{ backgroundColor: "#ffffff" }}>
          <div className="container mx-auto px-6 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link 
                href="/#work"
                className="text-sm inline-block mb-6 hover:opacity-60 transition-opacity"
                style={{ color: "#0071e3", fontFamily: "Inter, -apple-system, sans-serif" }}
              >
                ← Back to Work
              </Link>
              
              <p
                className="text-sm uppercase tracking-wider mb-4"
                style={{ color: "#0071e3", fontFamily: "Inter, -apple-system, sans-serif" }}
              >
                {project.category}
              </p>
              
              <h1
                className="text-5xl md:text-6xl font-semibold mb-6"
                style={{
                  fontFamily: "Inter, -apple-system, sans-serif",
                  color: "#1d1d1f",
                  lineHeight: "1.1",
                  letterSpacing: "-0.02em",
                }}
              >
                {project.title}
              </h1>
              
              <p
                className="text-xl leading-relaxed mb-10"
                style={{
                  fontFamily: "Inter, -apple-system, sans-serif",
                  fontWeight: 400,
                  color: "#1d1d1f",
                }}
              >
                {project.subtitle}
              </p>

              {/* View Full PDF Button - Apple style */}
              <a
                href={`/project-${project.id}.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 text-white font-medium hover:opacity-90 transition-opacity mb-8 rounded-full"
                style={{
                  backgroundColor: "#0071e3",
                  fontFamily: "Inter, -apple-system, sans-serif",
                  fontWeight: 500,
                }}
              >
                View Full PDF
              </a>

              {/* Metadata - Apple style */}
              <div className="flex flex-wrap gap-12 py-8" style={{ borderTop: "1px solid #d2d2d7" }}>
                <div>
                  <p className="text-sm uppercase tracking-wider mb-2" style={{ color: "#1d1d1f", opacity: 0.6 }}>Duration</p>
                  <p style={{ fontFamily: "Inter, -apple-system, sans-serif", fontWeight: 400, color: "#1d1d1f" }}>
                    {project.duration}
                  </p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider mb-2" style={{ color: "#1d1d1f", opacity: 0.6 }}>Role</p>
                  <p style={{ fontFamily: "Inter, -apple-system, sans-serif", fontWeight: 400, color: "#1d1d1f" }}>
                    {project.role}
                  </p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider mb-2" style={{ color: "#1d1d1f", opacity: 0.6 }}>Tools</p>
                  <p style={{ fontFamily: "Inter, -apple-system, sans-serif", fontWeight: 400, color: "#1d1d1f" }}>
                    {project.tools}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Sections - Jamie Style */}
        {project.sections.map((section, sectionIdx) => (
          <motion.section
            key={sectionIdx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: sectionIdx * 0.1 }}
            className="py-16"
            style={{ backgroundColor: "#ffffff" }}
          >
            <div className="container mx-auto px-6 max-w-6xl">
              {/* Section Title - Apple style: clean sans-serif */}
              <h2
                className="text-3xl md:text-4xl font-semibold mb-8"
                style={{
                  fontFamily: "Inter, -apple-system, sans-serif",
                  color: "#1d1d1f",
                  letterSpacing: "-0.02em",
                }}
              >
                {section.title}
              </h2>

              {/* Section Content */}
              {section.content && (
                <p
                  className="text-lg leading-relaxed mb-8"
                  style={{
                    fontFamily: "Inter, -apple-system, sans-serif",
                    fontWeight: 400,
                    color: "#1d1d1f",
                    maxWidth: "800px",
                  }}
                >
                  {section.content}
                </p>
              )}

              {/* Section Items - Apple style grid */}
              {section.items && section.items.length > 0 && (
                section.items.length <= 4 ? (
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8" style={{ maxWidth: "900px" }}>
                    {section.items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="text-lg p-4"
                        style={{
                          fontFamily: "Inter, -apple-system, sans-serif",
                          fontWeight: 400,
                          color: "#1d1d1f",
                          backgroundColor: "#f5f5f7",
                          borderRadius: "8px",
                        }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul className="space-y-4 mb-8" style={{ maxWidth: "800px" }}>
                    {section.items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="text-lg flex items-start gap-4"
                        style={{
                          fontFamily: "Inter, -apple-system, sans-serif",
                          fontWeight: 400,
                          color: "#1d1d1f",
                        }}
                      >
                        <span style={{ color: "#0071e3" }}>•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )
              )}

              {/* Section Image - Fullwidth with View fullsize */}
              {section.image && (
                <div className="mb-6">
                  <div 
                    className="relative cursor-pointer group overflow-hidden rounded-sm flex justify-center"
                    onClick={() => openLightbox(section.image!)}
                  >
                    <img
                      src={section.image}
                      alt={`${project.title} - ${section.title}`}
                      className="w-full max-w-[1200px] h-auto rounded-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span 
                        className="text-white px-6 py-3"
                        style={{ 
                          fontFamily: "Inter, -apple-system, sans-serif", 
                          backgroundColor: "rgba(0,0,0,0.7)",
                          borderRadius: "8px",
                          fontSize: "14px",
                          letterSpacing: "0.5px"
                        }}
                      >
                        View fullsize
                      </span>
                    </div>
                  </div>
                  <p 
                    className="text-center mt-3 text-sm"
                    style={{ 
                      fontFamily: "Inter, -apple-system, sans-serif", 
                      color: "#1d1d1f",
                      opacity: 0.5 
                    }}
                  >
                    Click image to view fullsize
                  </p>
                </div>
              )}
            </div>
          </motion.section>
        ))}

        {/* Reflection / Next Steps Section - Apple style */}
        <section className="py-16" style={{ backgroundColor: "#f5f5f7" }}>
          <div className="container mx-auto px-6 max-w-6xl">
            <h2
              className="text-3xl font-semibold mb-8"
              style={{
                fontFamily: "Inter, -apple-system, sans-serif",
                color: "#1d1d1f",
                letterSpacing: "-0.02em",
              }}
            >
              Reflection & Next Steps
            </h2>
            <p
              className="text-lg leading-relaxed"
              style={{
                fontFamily: "Inter, -apple-system, sans-serif",
                fontWeight: 400,
                color: "#1d1d1f",
                maxWidth: "800px",
              }}
            >
              This project was a great opportunity to apply UX design principles to solve real user problems. 
              Future iterations would include additional user testing, accessibility improvements, and 
              expanding the design system for scale.
            </p>
          </div>
        </section>

        {/* Navigation to next/previous project */}
        <section className="py-16" style={{ backgroundColor: "#ffffff" }}>
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="flex justify-between gap-8">
              {prevProject ? (
                <Link 
                  href={`/case-studies/${prevProject}`}
                  className="group"
                >
                  <span className="text-sm" style={{ color: "#1d1d1f", opacity: 0.6 }}>Previous</span>
                  <p className="text-xl group-hover:opacity-70 transition-opacity" style={{ fontFamily: "Inter, -apple-system, sans-serif", color: "#1d1d1f", fontWeight: 600 }}>
                    {caseStudies[prevProject].title}
                  </p>
                </Link>
              ) : <div />}
              
              {nextProject ? (
                <Link 
                  href={`/case-studies/${nextProject}`}
                  className="group text-right ml-auto"
                >
                  <span className="text-sm" style={{ color: "#1d1d1f", opacity: 0.6 }}>Next</span>
                  <p className="text-xl group-hover:opacity-70 transition-opacity" style={{ fontFamily: "Inter, -apple-system, sans-serif", color: "#1d1d1f", fontWeight: 600 }}>
                    {caseStudies[nextProject].title}
                  </p>
                </Link>
              ) : <div />}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Lightbox */}
      <Lightbox 
        isOpen={lightboxOpen} 
        onClose={() => setLightboxOpen(false)} 
        src={lightboxSrc}
      />
    </div>
  );
}