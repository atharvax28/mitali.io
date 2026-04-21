import { useEffect, useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { projectsData } from '@/data/projects';
import { Footer } from '@/sections/Footer';
import { Navigation } from '@/components/Navigation';
import { Lightbox } from '@/components/Lightbox';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = id ? projectsData[id] : null;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const allImages = useMemo(() => {
    if (!project) return [];
    const images: string[] = [];
    images.push(project.coverImage);
    project.process.forEach(step => {
      if ((step as any).image) images.push((step as any).image);
    });
    project.sections.forEach(section => {
      if (section.image) images.push(section.image);
      if (section.items) {
        section.items.forEach((item: any) => {
          if (item.image) images.push(item.image);
        });
      }
    });
    return images;
  }, [project]);

  const openLightbox = (url: string) => {
    const idx = allImages.indexOf(url);
    if (idx !== -1) setLightboxIndex(idx);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!project) {
      navigate('/');
    }
  }, [project, navigate]);

  if (!project) return null;

  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: challengeRef, isVisible: challengeVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div className="min-h-screen bg-white font-geist">
      <Navigation />
      
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden">
        <div className="container-large px-6 lg:px-12">
          <Link to="/#portfolio" className="inline-flex items-center gap-2 text-exvia-black/50 hover:text-exvia-black transition-colors mb-12 group">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm font-geist-mono uppercase tracking-widest">Back to Portfolio</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-end">
            <div className={cn(
              "transition-all duration-1000 ease-out-quart",
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            )}>
              <span className="text-sm font-geist-mono uppercase tracking-widest text-exvia-black/50 block mb-4">
                {project.category} · {project.year}
              </span>
              <h1 className="text-h1 font-semibold text-exvia-black leading-tight tracking-tight mb-8">
                {project.title.split(' ').map((word, i) => (
                  <span key={i} className="block">{word}</span>
                ))}
              </h1>
              <p className="text-xl text-exvia-black/60 leading-relaxed max-w-xl">
                {project.description}
              </p>
            </div>

            <div className={cn(
              "grid grid-cols-2 gap-8 border-t border-exvia-black/10 pt-8 transition-all duration-1000 delay-300 ease-out-quart",
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            )}>
              <div>
                <span className="text-xs font-geist-mono uppercase tracking-widest text-exvia-black/30 block mb-2">Role</span>
                <span className="text-base font-medium text-exvia-black">{project.role}</span>
              </div>
              <div>
                <span className="text-xs font-geist-mono uppercase tracking-widest text-exvia-black/30 block mb-2">Duration</span>
                <span className="text-base font-medium text-exvia-black">{project.duration}</span>
              </div>
              <div className="col-span-2">
                <span className="text-xs font-geist-mono uppercase tracking-widest text-exvia-black/30 block mb-2">Tools</span>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-exvia-subtle text-xs font-medium text-exvia-black rounded-full border border-exvia-black/5">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Cover Image */}
      <section className="px-6 lg:px-12 py-12">
        <div className="container-large">
          <div className="relative aspect-[16/9] overflow-hidden bg-exvia-subtle cursor-zoom-in" onClick={() => openLightbox(project.coverImage)}>
            <img 
              src={project.coverImage} 
              alt={project.title} 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section ref={challengeRef} className="py-24 lg:py-32">
        <div className="container-large px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
            <div className={cn(
              "transition-all duration-1000 ease-out-quart",
              challengeVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            )}>
              <h2 className="text-3xl font-semibold text-exvia-black mb-6">The Challenge</h2>
              <p className="text-lg text-exvia-black/60 leading-relaxed">
                {project.challenge}
              </p>
            </div>
            <div className={cn(
              "transition-all duration-1000 delay-200 ease-out-quart",
              challengeVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            )}>
              <h2 className="text-3xl font-semibold text-exvia-black mb-6">The Solution</h2>
              <p className="text-lg text-exvia-black/60 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-24 lg:py-32 bg-exvia-subtle/50">
        <div className="container-large px-6 lg:px-12">
          <div className="max-w-3xl mb-16">
            <span className="text-sm font-geist-mono uppercase tracking-widest text-exvia-black/50 block mb-4">Workflow</span>
            <h2 className="text-4xl font-semibold text-exvia-black">Design Process</h2>
          </div>
          
          <div className={cn(
            "grid gap-8 justify-center items-stretch",
            project.process.length === 1 && "grid-cols-1 max-w-sm mx-auto",
            project.process.length === 2 && "grid-cols-1 md:grid-cols-2 max-w-2xl mx-auto",
            project.process.length === 3 && "grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto",
            project.process.length === 4 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto",
            project.process.length >= 5 && "grid-cols-1 md:grid-cols-3 lg:grid-cols-5"
          )}>
            {project.process.map((step, idx) => (
              <div key={idx} className="p-8 bg-white border border-exvia-black/5 rounded-xl space-y-6 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-start w-full group">
                <div className="flex items-center justify-between w-full">
                  <div className="w-10 h-10 bg-exvia-black text-white rounded-full flex items-center justify-center font-geist-mono text-sm leading-none shrink-0 transition-transform duration-500 group-hover:scale-110">
                    0{idx + 1}
                  </div>
                </div>
                
                {(step as any).image && (
                  <div className="w-full aspect-video overflow-hidden rounded-lg bg-exvia-subtle cursor-zoom-in" onClick={() => openLightbox((step as any).image)}>
                    <img src={(step as any).image} alt={step.title} className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700" />
                  </div>
                )}
                
                <div className="space-y-4 flex-1">
                  <h3 className="text-xl font-semibold text-exvia-black">{step.title}</h3>
                  <ul className="space-y-2">
                    {step.substeps.map((sub) => (
                      <li key={sub} className="text-sm text-exvia-black/50 flex items-center gap-2">
                        <div className="w-1 h-1 bg-exvia-black/20 rounded-full shrink-0" />
                        {sub}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {project.sections.map((section, idx) => {
        if (section.type === 'text-image') {
          return (
            <section key={idx} className="py-24 lg:py-32">
              <div className="container-large px-6 lg:px-12">
                <div className={cn(
                  "grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center",
                  idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                )}>
                  <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                    <h2 className="text-4xl font-semibold text-exvia-black mb-6">{section.title}</h2>
                    <p className="text-xl text-exvia-black/60 leading-relaxed">{section.content}</p>
                  </div>
                  <div className={cn(
                    "bg-exvia-subtle overflow-hidden shadow-lg cursor-zoom-in",
                    idx % 2 === 1 ? "lg:order-1" : ""
                  )} onClick={() => section.image && openLightbox(section.image)}>
                    <img src={section.image} alt={section.title} className="w-full h-auto" />
                  </div>
                </div>
              </div>
            </section>
          )
        }

        if (section.type === 'pain-points') {
          return (
            <section key={idx} className="py-24 lg:py-32">
              <div className="container-large px-6 lg:px-12">
                <h2 className="text-4xl font-semibold text-exvia-black mb-16 text-center">{section.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {section.items?.map((item, i) => (
                    <div key={i} className="p-10 bg-exvia-subtle border border-exvia-black/5">
                      <h3 className="text-2xl font-semibold text-exvia-black mb-6 flex items-center gap-3">
                        <span className="text-exvia-black/30">{i + 1}.</span>
                        {item.title}
                      </h3>
                      <ul className="space-y-4">
                        {item.points.map((p: string) => (
                          <li key={p} className="flex items-start gap-3 text-exvia-black/60">
                            <CheckCircle2 className="w-5 h-5 text-exvia-black mt-0.5 shrink-0" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        }

        if (section.type === 'persona') {
          return (
            <section key={idx} className="py-24 lg:py-32 bg-exvia-black">
              <div className="container-large px-6 lg:px-12">
                <h2 className="text-4xl font-semibold text-white mb-16">{section.title}</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {section.items?.map((persona, i) => (
                    <div key={i} className="p-10 bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors">
                      <h3 className="text-2xl font-semibold mb-1">{persona.name}</h3>
                      <p className="text-sm font-geist-mono text-white/40 mb-8 uppercase tracking-wider">{persona.role}</p>
                      
                      <div className="space-y-8">
                        <div>
                          <span className="text-xs font-geist-mono text-white/20 uppercase block mb-2 tracking-widest">Goal</span>
                          <p className="text-white/80">{persona.goal}</p>
                        </div>
                        <div>
                          <span className="text-xs font-geist-mono text-white/20 uppercase block mb-2 tracking-widest">Traits</span>
                          <ul className="space-y-2">
                            {persona.traits.map((t: string) => (
                              <li key={t} className="text-white/60 text-sm flex items-center gap-2">
                                <div className="w-1 h-1 bg-white/40 rounded-full" />
                                {t}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        }

        if (section.type === 'full-width-image') {
          return (
            <section key={idx} className="py-24 lg:py-32">
              <div className="container-large px-6 lg:px-12">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-4xl font-semibold text-exvia-black mb-4">{section.title}</h2>
                    {section.content && <p className="text-lg text-exvia-black/60 max-w-3xl">{section.content}</p>}
                  </div>
                  <div className="bg-exvia-subtle overflow-hidden relative shadow-xl cursor-zoom-in" onClick={() => section.image && openLightbox(section.image)}>
                    <img src={section.image} alt={section.title} className="w-full h-auto" />
                  </div>
                </div>
              </div>
            </section>
          );
        }

        if (section.type === 'grid') {
            return (
              <section key={idx} className="py-24 lg:py-32">
                <div className="container-large px-6 lg:px-12">
                  <h2 className="text-4xl font-semibold text-exvia-black mb-16">{section.title}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {section.items?.map((item, i) => (
                      <div key={i} className="space-y-4 group">
                        <div className="aspect-[4/5] overflow-hidden bg-exvia-subtle cursor-zoom-in" onClick={() => item.image && openLightbox(item.image)}>
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700"
                          />
                        </div>
                        <h3 className="text-xl font-medium text-exvia-black">{item.title}</h3>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );
          }

        if (section.type === 'metrics') {
          return (
            <section key={idx} className="py-24 lg:py-32 bg-exvia-black text-white">
              <div className="container-large px-6 lg:px-12 text-center">
                <h2 className="text-4xl font-semibold mb-16">{section.title}</h2>
                <div className={cn(
                  "grid gap-8 lg:gap-12 justify-center mx-auto",
                  section.items?.length === 1 && "grid-cols-1 max-w-xs",
                  section.items?.length === 2 && "grid-cols-2 max-w-2xl",
                  section.items?.length === 3 && "grid-cols-1 md:grid-cols-3 max-w-4xl",
                  section.items?.length === 4 && "grid-cols-2 lg:grid-cols-4 max-w-5xl",
                  (!section.items || section.items.length >= 5) && "grid-cols-2 lg:grid-cols-5"
                )}>
                  {section.items?.map((item, i) => (
                    <div key={i} className="space-y-4">
                      <div className="text-5xl lg:text-6xl font-black text-white tracking-tighter">
                        {item.value}
                      </div>
                      <div className="text-sm font-geist-mono uppercase tracking-widest text-white/40">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        }

        return null;
      })}

      {/* Next Up CTA */}
      <section className="py-32 bg-exvia-subtle/30 border-t border-exvia-black/5">
        <div className="container-large px-6 lg:px-12 text-center">
          <span className="text-sm font-geist-mono uppercase tracking-widest text-exvia-black/50 block mb-6">Need a designer?</span>
          <h2 className="text-5xl lg:text-7xl font-semibold text-exvia-black tracking-tighter mb-12">Let's create something<br/>impactful together</h2>
          <Link to="/#contact" className="inline-flex items-center gap-3 px-10 py-5 bg-exvia-black text-white rounded-full text-lg font-medium hover:bg-exvia-black/90 transition-all group">
            Get in touch
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </section>

      <Footer />

      <Lightbox 
        images={allImages}
        currentIndex={lightboxIndex ?? 0}
        isOpen={lightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
        onPrev={() => setLightboxIndex(prev => prev !== null ? (prev - 1 + allImages.length) % allImages.length : null)}
        onNext={() => setLightboxIndex(prev => prev !== null ? (prev + 1) % allImages.length : null)}
      />
    </div>
  );
}
