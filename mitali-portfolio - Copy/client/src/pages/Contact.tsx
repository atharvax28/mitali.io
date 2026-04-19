"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Header, Footer } from "../components/layout";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("https://formspree.io/f/mpwzgjqr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        const data = await response.json();
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch (error) {
      setErrorMessage("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

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
              <Link 
                href="/"
                className="text-sm inline-block mb-6 hover:opacity-60 transition-opacity"
                style={{ color: "#0071e3", fontFamily: "Inter, -apple-system, sans-serif" }}
              >
                ← Back to Home
              </Link>
              
              <h1
                className="text-5xl md:text-6xl font-semibold mb-4"
                style={{
                  fontFamily: "Inter, -apple-system, sans-serif",
                  color: "#1d1d1f",
                  letterSpacing: "-0.02em",
                  lineHeight: "1.1",
                }}
              >
                Contact
              </h1>
              
              <p
                className="text-xl"
                style={{
                  fontFamily: "Inter, -apple-system, sans-serif",
                  fontWeight: 400,
                  color: "#86868b",
                }}
              >
                I'd love to hear from you. Let's connect.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16" style={{ backgroundColor: "#f5f5f7" }}>
          <div className="container mx-auto px-6 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {status === "success" ? (
                <div 
                  className="p-8 rounded-xl text-center"
                  style={{ backgroundColor: "#e8f5e9" }}
                >
                  <h3
                    className="text-2xl font-semibold mb-4"
                    style={{
                      fontFamily: "Inter, -apple-system, sans-serif",
                      color: "#1d1d1f",
                    }}
                  >
                    Thank you!
                  </h3>
                  <p
                    className="text-lg"
                    style={{
                      fontFamily: "Inter, -apple-system, sans-serif",
                      fontWeight: 400,
                      color: "#1d1d1f",
                    }}
                  >
                    Your message has been sent. I'll get back to you soon.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 inline-block px-6 py-3 text-white font-medium rounded-full hover:opacity-90 transition-opacity"
                    style={{
                      backgroundColor: "#0071e3",
                      fontFamily: "Inter, -apple-system, sans-serif",
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <div 
                      className="p-4 rounded-lg"
                      style={{ backgroundColor: "#ffebee", color: "#c62828" }}
                    >
                      {errorMessage}
                    </div>
                  )}
                  
                  <div>
                    <label
                      className="text-sm font-medium mb-2 inline-block"
                      style={{
                        fontFamily: "Inter, -apple-system, sans-serif",
                        color: "#1d1d1f",
                      }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border outline-none transition-colors"
                      style={{
                        fontFamily: "Inter, -apple-system, sans-serif",
                        backgroundColor: "#ffffff",
                        borderColor: "#d2d2d7",
                        color: "#1d1d1f",
                      }}
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      className="text-sm font-medium mb-2 inline-block"
                      style={{
                        fontFamily: "Inter, -apple-system, sans-serif",
                        color: "#1d1d1f",
                      }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border outline-none transition-colors"
                      style={{
                        fontFamily: "Inter, -apple-system, sans-serif",
                        backgroundColor: "#ffffff",
                        borderColor: "#d2d2d7",
                        color: "#1d1d1f",
                      }}
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      className="text-sm font-medium mb-2 inline-block"
                      style={{
                        fontFamily: "Inter, -apple-system, sans-serif",
                        color: "#1d1d1f",
                      }}
                    >
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border outline-none transition-colors"
                      style={{
                        fontFamily: "Inter, -apple-system, sans-serif",
                        backgroundColor: "#ffffff",
                        borderColor: "#d2d2d7",
                        color: "#1d1d1f",
                      }}
                    >
                      <option value="">Select a topic</option>
                      <option value="project">Project Inquiry</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="speaking">Speaking Opportunity</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      className="text-sm font-medium mb-2 inline-block"
                      style={{
                        fontFamily: "Inter, -apple-system, sans-serif",
                        color: "#1d1d1f",
                      }}
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border outline-none transition-colors resize-none"
                      style={{
                        fontFamily: "Inter, -apple-system, sans-serif",
                        backgroundColor: "#ffffff",
                        borderColor: "#d2d2d7",
                        color: "#1d1d1f",
                      }}
                      placeholder="Tell me about your project or just say hi..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full px-8 py-4 text-white font-medium rounded-full hover:opacity-90 transition-opacity disabled:opacity-50"
                    style={{
                      backgroundColor: "#0071e3",
                      fontFamily: "Inter, -apple-system, sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    {status === "loading" ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </section>

        {/* Alternative Contact */}
        <section className="py-16" style={{ backgroundColor: "#ffffff" }}>
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-2xl font-semibold mb-6"
                style={{
                  fontFamily: "Inter, -apple-system, sans-serif",
                  color: "#1d1d1f",
                }}
              >
                Other ways to reach me
              </h2>

              <div className="space-y-4">
                <a
                  href="mailto:mitaliborkar85@gmail.com"
                  className="flex items-center gap-4 hover:opacity-60 transition-opacity"
                >
                  <span 
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#f5f5f7" }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <span style={{ fontFamily: "Inter, -apple-system, sans-serif", color: "#0071e3" }}>
                    mitaliborkar85@gmail.com
                  </span>
                </a>

                <a
                  href="https://www.linkedin.com/in/mitali-borkar-343abaa4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 hover:opacity-60 transition-opacity"
                >
                  <span 
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#f5f5f7" }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.063.925 2.063 2.063 0 1.139-.925 2.065-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </span>
                  <span style={{ fontFamily: "Inter, -apple-system, sans-serif", color: "#0071e3" }}>
                    LinkedIn
                  </span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}