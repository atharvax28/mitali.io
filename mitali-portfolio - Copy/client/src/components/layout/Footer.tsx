"use client";

export default function Footer() {
  const year = new Date().getFullYear();
  
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
          © {year} Mitali Borkar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}