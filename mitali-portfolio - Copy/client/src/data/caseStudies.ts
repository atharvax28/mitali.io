export interface CaseStudySection {
  title: string;
  content?: string;
  image?: string;
  imageCaption?: string;
  items?: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  duration: string;
  role: string;
  tools: string;
  thumbnail: string;
  heroImage?: string;
  sections: CaseStudySection[];
}

export const caseStudies: Record<string, CaseStudy> = {
  "b2b-banking": {
    id: "b2b-banking",
    title: "B2B Digital Banking",
    subtitle: "A unified onboarding solution for global business banking",
    category: "Enterprise UX",
    duration: "2.5 Years",
    role: "UX Designer & Researcher",
    tools: "Sketch, InVision, Figma, Maze",
    thumbnail: "/case-study-images/b2b-banking/page-001.png",
    heroImage: "/case-study-images/b2b-banking/page-001.png",
    sections: [
      {
        title: "Overview",
        content: "A digital platform designed to streamline enterprise banking workflows by enabling clients to manage onboarding, documentation, and account-related processes in a centralized system. This 2.5-year project involved end-to-end UX process from user research to high-fidelity prototyping for a global banking institution.",
      },
      {
        title: "The Challenge",
        content: "Enterprise onboarding in banking is inherently complex due to regulatory requirements, multiple stakeholders, and fragmented systems. The challenge was to create a seamless onboarding experience across diverse global markets while ensuring compliance.",
        image: "/case-study-images/b2b-banking/page-002.png",
      },
      {
        title: "Research",
        content: "Through user interviews and competitive analysis, I discovered key pain points in the existing workflow. Users struggled with disconnected systems, unclear progress visibility, and complex documentation requirements.",
        image: "/case-study-images/b2b-banking/page-003.png",
      },
      {
        title: "Objectives",
        items: [
          "Simplify complex financial data collection",
          "Reduce friction in document handling",
          "Improve visibility across client workflows",
          "Adapt to global regulatory requirements",
          "Reduce onboarding time and increase completion rates",
        ],
      },
      {
        title: "Key Insights",
        content: "62% of users found forms too long and confusing, while 75% faced document re-submission issues. The lack of visibility was identified as the biggest pain point.",
        image: "/case-study-images/b2b-banking/page-005.png",
      },
      {
        title: "Design Solutions",
        items: [
          "Break onboarding into step-based, progressive flows to reduce cognitive load",
          "Standardize review workflows and implement a centralized queue for clear cross-team visibility",
          "Create a consolidated dashboard for tracking and clear status indicators to reduce support calls",
          "Auto-fill document suggestions based on historical data",
          "Real-time validation with clear error messaging",
        ],
        image: "/case-study-images/b2b-banking/page-008.png",
      },
      {
        title: "Final Design",
        content: "The high-fidelity design incorporated a clean, professional aesthetic suitable for enterprise banking while maintaining usability across devices.",
        image: "/case-study-images/b2b-banking/page-012.png",
      },
    ],
  },
  "return-management": {
    id: "return-management",
    title: "Return Management",
    subtitle: "Designing solutions for e-commerce return experiences",
    category: "UX Research & Design",
    duration: "6 Months",
    role: "UX Designer & Researcher",
    tools: "Figma, Maze, Optimal Workshop, Miro",
    thumbnail: "/case-study-images/return-management/return-management-page-1.png",
    heroImage: "/case-study-images/return-management/return-management-page-1.png",
    sections: [
      {
        title: "Overview",
        content: "Designed a solution for Topshop (Ajio) e-commerce platform to address the challenges of product returns in e-commerce.",
      },
      {
        title: "The Challenge",
        content: "High return rates, fraudulent return management, 3rd party service dependency, inefficiency in last mile operations, and increased ecological impact of returns.",
        image: "/case-study-images/return-management/return-management-page-5.png",
      },
      {
        title: "Research",
        content: "Conducted user interviews and analyzed return data to understand the root causes of high return rates and customer dissatisfaction.",
        image: "/case-study-images/return-management/return-management-page-10.png",
      },
      {
        title: "Key Insights",
        items: [
          "93.6% of customers have returned a product",
          "71% of customers are dissatisfied with the product they receive",
          "74.4% of return customers are women (age 21-30)",
          "61.4% are from Indian Metropolitan cities",
        ],
        image: "/case-study-images/return-management/return-management-page-20.png",
      },
      {
        title: "Design Solutions",
        items: [
          "Simplified return policy with visual guides",
          "Instant refund options for premium customers",
          "AI-powered size recommendation to reduce returns",
          "Eco-friendly return options with carbon offset",
          "Improved product visualization with 360° views",
        ],
        image: "/case-study-images/return-management/return-management-page-40.png",
      },
      {
        title: "Final Design",
        content: "The final design focused on reducing friction in the return process while incentivizing environmentally responsible behavior.",
        image: "/case-study-images/return-management/return-management-page-38.png",
      },
    ],
  },
  "innovation-portal": {
    id: "innovation-portal",
    title: "Innovation Portal",
    subtitle: "Information architecture and visual guidelines for Deloitte India",
    category: "Design System",
    duration: "9 Months",
    role: "UX Designer",
    tools: "Figma, Sketch, Confluence",
    thumbnail: "/case-study-images/innovation-portal/innovation-portal-page-1.png",
    heroImage: "/case-study-images/innovation-portal/innovation-portal-page-1.png",
    sections: [
      {
        title: "Overview",
        content: "Redesigned Deloitte India's internal innovation portal (India xInnovation) to improve employee engagement and content discoverability.",
      },
      {
        title: "The Challenge",
        content: "Low awareness of the innovation department among employees. Poor navigation, inconsistent layout, and limited user engagement.",
        image: "/case-study-images/innovation-portal/innovation-portal-page-5.png",
      },
      {
        title: "Discovery",
        content: "Conducted stakeholder interviews and analyzed existing content structure to understand the information architecture problems.",
        image: "/case-study-images/innovation-portal/innovation-portal-page-10.png",
      },
      {
        title: "Objectives",
        items: [
          "Create intuitive navigation structure based on user workflows",
          "Establish consistent visual guidelines following Deloitte brand",
          "Improve information discoverability and search functionality",
          "Enable scalable content management",
          "Increase employee engagement with innovation initiatives",
        ],
      },
      {
        title: "Information Architecture",
        content: "Restructured the content hierarchy to align with user mental models and business objectives.",
        image: "/case-study-images/innovation-portal/innovation-portal-page-15.png",
      },
      {
        title: "Design System",
        content: "Created a comprehensive design system with reusable components, typography, color palette, and interaction patterns.",
        image: "/case-study-images/innovation-portal/innovation-portal-page-25.png",
      },
      {
        title: "Final Results",
        content: "The redesigned portal showed significant improvements in user engagement metrics and content discoverability.",
        image: "/case-study-images/innovation-portal/innovation-portal-page-40.png",
      },
    ],
  },
};

export const getAllCaseStudies = () => Object.values(caseStudies);

export const getCaseStudy = (id: string) => caseStudies[id];