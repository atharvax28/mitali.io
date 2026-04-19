// Site configuration
// Mitali Borkar – UX Designer Portfolio
// Content merged from old portfolio site into Exvia template

export interface SiteConfig {
  language: string;
  title: string;
  description: string;
}

export const siteConfig: SiteConfig = {
  language: "en",
  title: "Mitali Borkar",
  description: "UX Designer with 5+ years of experience designing intuitive digital experiences for banking, healthcare, and enterprise products.",
};

// Navigation configuration
export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  logo: string;
  links: NavLink[];
  contactLabel: string;
  contactHref: string;
}

export const navigationConfig: NavigationConfig = {
  logo: "Mitali Borkar",
  links: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
  ],
  contactLabel: "Get in Touch",
  contactHref: "#contact",
};

// Hero section configuration
export interface HeroConfig {
  name: string;
  roles: string[];
  backgroundImage: string;
}

export const heroConfig: HeroConfig = {
  name: "MITALI\nBORKAR",
  roles: ["UX Designer", "Product Designer", "Design Researcher", "Interaction Designer", "Systems Thinker", "Wireframing"],
  backgroundImage: "/images/hero-bg.jpg",
};

// About section configuration
export interface AboutStat {
  value: string;
  label: string;
}

export interface AboutImage {
  src: string;
  alt: string;
}

export interface AboutConfig {
  label: string;
  description: string;
  experienceValue: string;
  experienceLabel: string;
  stats: AboutStat[];
  images: AboutImage[];
}

export const aboutConfig: AboutConfig = {
  label: "About",
  description: "I'm a UX Designer with 5+ years of experience at Infosys (Wongdoody). I specialize in designing intuitive digital experiences for banking, healthcare, and enterprise products. My background in Mechanical Engineering from VJTI gives me a strong foundation in systems thinking, which I combine with my Product Design degree from ISDI Parsons to create user-centered solutions. Based in Mumbai, I'm passionate about creating products that make a real impact. I believe great design is invisible — it just works.",
  experienceValue: "5+",
  experienceLabel: "Years of\nExperience",
  stats: [
    { value: "3", label: "Case Studies" },
    { value: "HSBC", label: "Key Client" },
    { value: "Mumbai", label: "Based In" },
  ],
  images: [
    { src: "/images/about-1.jpg", alt: "Mitali Borkar – UX Designer" },
    { src: "/images/about-2.jpg", alt: "Design process" },
    { src: "/images/about-3.jpg", alt: "Wireframing and prototyping" },
    { src: "/images/about-4.jpg", alt: "User research" },
  ],
};

// Services section configuration
export interface ServiceItem {
  iconName: string;
  title: string;
  description: string;
  image: string;
}

export interface ServicesConfig {
  label: string;
  heading: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  label: "Services",
  heading: "What I Do",
  services: [
    {
      iconName: "PenTool",
      title: "UX/UI Design",
      description: "User-centered design for enterprise banking, healthcare, and e-commerce products. From wireframes to high-fidelity prototypes, I create intuitive digital experiences that delight users and drive engagement.",
      image: "/images/case-studies/banking/High Fidelity Screen.png",
    },
    {
      iconName: "Search",
      title: "User Research",
      description: "Conducting user interviews, competitive analysis, and usability testing to uncover insights that inform design decisions. I use research-driven methods to solve real user problems.",
      image: "/images/case-studies/banking/User Research.png",
    },
    {
      iconName: "Layout",
      title: "Information Architecture",
      description: "Structuring content hierarchies and navigation systems based on user mental models. I design scalable information architectures that improve content discoverability and user flows.",
      image: "/images/case-studies/portfolio-d3/experience map.png",
    },
    {
      iconName: "Layers",
      title: "Design Systems",
      description: "Building comprehensive design systems with reusable components, typography, color palettes, and interaction patterns. I create visual guidelines that ensure consistency at scale.",
      image: "/images/case-studies/innovation/D11.png",
    },
  ],
};

// Portfolio section configuration
export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  featured?: boolean;
}

export interface PortfolioCTA {
  label: string;
  heading: string;
  linkText: string;
  linkHref: string;
}

export interface PortfolioConfig {
  label: string;
  heading: string;
  description: string;
  projects: ProjectItem[];
  cta: PortfolioCTA;
  viewAllLabel: string;
}

export const portfolioConfig: PortfolioConfig = {
  label: "Portfolio",
  heading: "Selected Works",
  description: "A curated collection of UX design projects spanning enterprise banking, research portals, and innovation platforms.",
  projects: [
    {
      id: "b2b-banking",
      title: "B2B Digital Banking",
      category: "Enterprise UX",
      year: "2021–2024",
      image: "/images/case-studies/banking/cover-page.png",
      featured: true,
    },
    {
      id: "digital-innovation",
      title: "Digital Innovation",
      category: "Design System & Research",
      year: "2020",
      image: "/images/case-studies/innovation/d1.png",
    },
    {
      id: "product-design-portfolio",
      title: "Product Design Portfolio",
      category: "Industrial & Interaction Design",
      year: "2022–2024",
      image: "/images/misc/mitali-portfolio-01.jpg",
    },
  ],
  cta: {
    label: "Have a project in mind?",
    heading: "Let's Create Something Great Together",
    linkText: "Get in Touch",
    linkHref: "#contact",
  },
  viewAllLabel: "",
};

// Testimonials section configuration
// Old site has no testimonials — leaving empty so section auto-hides
export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  rating: number;
}

export interface TestimonialsConfig {
  label: string;
  heading: string;
  testimonials: TestimonialItem[];
}

export const testimonialsConfig: TestimonialsConfig = {
  label: "",
  heading: "",
  testimonials: [],
};

// CTA section configuration
export interface CTAConfig {
  tags: string[];
  heading: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  email: string;
  backgroundImage: string;
}

export const ctaConfig: CTAConfig = {
  tags: ["UX Designer", "Product Designer", "Design Researcher", "Interaction Designer"],
  heading: "Let's Work Together",
  description: "I'm always open to discussing new projects and opportunities. Whether you need a UX designer for enterprise products, user research, or design systems — let's connect.",
  buttonText: "Get In Touch",
  buttonHref: "mailto:mitaliborkar85@gmail.com",
  email: "mitaliborkar85@gmail.com",
  backgroundImage: "/images/cta-bg.jpg",
};

// Footer configuration
export interface FooterLinkColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface SocialLink {
  iconName: string;
  href: string;
  label: string;
}

export interface FooterConfig {
  logo: string;
  description: string;
  columns: FooterLinkColumn[];
  socialLinks: SocialLink[];
  newsletterHeading: string;
  newsletterDescription: string;
  newsletterButtonText: string;
  newsletterPlaceholder: string;
  copyright: string;
  credit: string;
}

export const footerConfig: FooterConfig = {
  logo: "Mitali Borkar",
  description: "UX Designer with 5+ years of experience designing intuitive digital experiences for banking, healthcare, and enterprise products. Based in Mumbai, India.",
  columns: [
    {
      title: "Navigation",
      links: [
        { label: "About", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Experience",
      links: [
        { label: "Infosys (Wongdoody)", href: "#about" },
        { label: "Deloitte India", href: "#about" },
        { label: "ISDI Parsons", href: "#about" },
        { label: "VJTI Mumbai", href: "#about" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "Email", href: "mailto:mitaliborkar85@gmail.com" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/mitali-borkar-343abaa4/" },
        { label: "Resume", href: "#about" },
      ],
    },
  ],
  socialLinks: [
    { iconName: "Linkedin", href: "https://www.linkedin.com/in/mitali-borkar-343abaa4/", label: "LinkedIn" },
    { iconName: "Mail", href: "mailto:mitaliborkar85@gmail.com", label: "Email" },
  ],
  newsletterHeading: "",
  newsletterDescription: "",
  newsletterButtonText: "",
  newsletterPlaceholder: "",
  copyright: `© ${new Date().getFullYear()} Mitali Borkar. All rights reserved.`,
  credit: "UX Designer — Mumbai, India",
};
