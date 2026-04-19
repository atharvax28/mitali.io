export interface ProjectDetail {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  coverImage: string;
  challenge: string;
  solution: string;
  role: string;
  duration: string;
  tools: string[];
  process: {
    title: string;
    substeps: string[];
    image?: string;
  }[];
  sections: {
    type: 'text-image' | 'grid' | 'full-width-image' | 'pain-points' | 'persona' | 'metrics';
    title?: string;
    content?: string;
    image?: string;
    items?: any[];
  }[];
}

export const projectsData: Record<string, ProjectDetail> = {
  'b2b-banking': {
    id: 'b2b-banking',
    title: 'B2B Digital Banking',
    category: 'Enterprise UX',
    year: '2021–2024',
    description: 'Unified Onboarding for Global Business Banking. Streamlining complex multi-country onboarding processes.',
    coverImage: '/images/case-studies/banking/cover-page.png',
    challenge: 'Enterprise onboarding in banking is inherently complex due to regulatory requirements, multiple stakeholders, and fragmented systems. Users were struggling with 12+ fragmented forms and ambiguous document requirements across different countries.',
    solution: 'Created a seamless onboarding experience that simplifies complex financial data collection, reduces friction in document handling, and improves visibility across client workflows while adapting to global regulatory requirements.',
    role: 'UX Designer',
    duration: '2.5 Years',
    tools: ['Figma', 'Sketch', 'Invision', 'Miro'],
    process: [
      { title: 'User Research', substeps: ['Cognitive Overload Analysis', 'System Fragmentation Study', 'Manual Dependency Audit'], image: '/images/case-studies/banking/user-research.png' },
      { title: 'Defining the User', substeps: ['User Persona Mapping', 'Target Audience Segmentation', 'Pain Point Prioritization'], image: '/images/case-studies/banking/user-persona.png' },
      { title: 'Information Architecture', substeps: ['Workflow Optimization', 'Document Hierarchy', 'Global Compliance Mapping'], image: '/images/case-studies/banking/design-process.png' },
      { title: 'Prototyping', substeps: ['High-Fidelity Wireframes', 'Interactive Workflows', 'Stakeholder Review'], image: '/images/case-studies/banking/group-1.png' }
    ],
    sections: [
      {
        type: 'text-image',
        title: 'Target Audience',
        content: 'Our users range from Corporate Treasurers to Relationship Managers, each with unique needs for visibility, speed, and accuracy across regional boundaries.',
        image: '/images/case-studies/banking/target-audience.png'
      },
      {
        type: 'text-image',
        title: 'Research & Observations',
        content: 'Our quantitative research revealed that 75% of users found forms too long and confusing, while 68% were unclear about next steps. We synthesized these findings into four key pillars: Cognitive Overload, Lack of Visibility, System Fragmentation, and Manual Dependency.',
        image: '/images/case-studies/banking/quantitative-research.png'
      },
      {
        type: 'pain-points',
        title: 'Identifying Friction',
        items: [
          { 
            title: 'Onboarding Complexity', 
            points: ['12+ fragmented forms', 'Ambiguous document requirements', 'Multiple platforms involved', 'Frequent back-and-forth'] 
          },
          { 
            title: 'Global Challenges', 
            points: ['Different KYC per country', 'Regulatory complexity', 'Inconsistent user journeys'] 
          }
        ]
      },
      {
        type: 'full-width-image',
        title: 'User Journey Mapping',
        image: '/images/case-studies/banking/empathy-map.png'
      },
      {
        type: 'text-image',
        title: 'Problem & Vision',
        content: 'Defining the core friction: Corporate clients were lost in a sea of 12+ fragmented forms. Our vision was to create a unified, transparent onboarding portal that bridges legacy systems with modern expectations.',
        image: '/images/case-studies/banking/problem-statement.png'
      },
      {
        type: 'full-width-image',
        title: 'Product Overview',
        content: 'The resulting platform provides a centralized dashboard for document management and real-time application tracking.',
        image: '/images/case-studies/banking/product-overview.png'
      },
      {
        type: 'metrics',
        title: 'Impact & Results',
        items: [
          { value: '45%', label: 'Faster Onboarding' },
          { value: '-60%', label: 'Document Errors' },
          { value: 'Reduced', label: 'Drop off rate' },
          { value: '-30%', label: 'RM Workload' },
          { value: '82', label: 'SUS Score (+30)' }
        ]
      },
      {
        type: 'grid',
        title: 'Iterations & Dashboard',
        items: [
          { title: 'Form Structure', image: '/images/case-studies/banking/group-2.png' },
          { title: 'Global Dashboard', image: '/images/case-studies/banking/high-fidelity-screen.png' },
          { title: 'Pain Point Mapping', image: '/images/case-studies/banking/pain-points.png' }
        ]
      },
      {
        type: 'grid',
        title: 'Process Refinement',
        items: [
          { title: 'Early Iterations', image: '/images/case-studies/banking/group-34147.png' },
          { title: 'Requirement Mapping', image: '/images/case-studies/banking/group-34148.png' },
          { title: 'Information Desktop', image: '/images/case-studies/banking/group-34146.png' }
        ]
      },
      {
        type: 'full-width-image',
        title: 'Final High-Fidelity Prototype',
        image: '/images/case-studies/banking/high-fidelity-screen-1.png'
      }
    ]
  },
  'digital-innovation': {
    id: 'digital-innovation',
    title: 'India X Innovation Portal',
    category: 'Product Design & Strategy',
    year: '2020',
    description: 'Centralizing corporate innovation for Deloitte India, transitioning from fragmented email-led processes to a unified digital community.',
    coverImage: '/images/case-studies/innovation/d1.png',
    challenge: 'Deloitte employees viewed innovation as a niche department activity. The existing portal suffered from "information fatigue," text-heavy reports, and severe usability issues like "false clicks" and broken carousel navigation.',
    solution: 'A human-centric portal focusing on "Storytelling over Stats." Using flat UI principles, neomorphic elements, and a "Value Chain" design philosophy (Aware → Engage → Impact) to foster a firm-wide innovative culture.',
    role: 'UX Designer & Researcher',
    duration: '6 Months',
    tools: ['Figma', 'Usability Testing', 'Heuristic Evaluation', 'Value Chain Mapping'],
    process: [
      { title: 'Research', substeps: ['Think Aloud Protocol', 'VIMM Heuristic Audit', 'Information Fatigue Study'], image: '/images/case-studies/portfolio-d3/experience-map.png' },
      { title: 'Strategy', substeps: ['Value Chain Definition', 'Gamification Framework', 'Recognition Loops'], image: '/images/case-studies/portfolio-d3/benchmark.png' },
      { title: 'Design', substeps: ['Flat UI Identity', 'Custom Illustrations', 'Neomorphic Components'], image: '/images/case-studies/innovation/d11.png' },
      { title: 'Incentivize', substeps: ['Innovator Awards', 'RM CC Loops', 'Success Stories'], image: '/images/case-studies/innovation/d12.png' }
    ],
    sections: [
      {
        type: 'text-image',
        title: 'Research Insights',
        content: 'Our VIMM evaluation (Visual, Intellectual, Memory, Motor) scored the baseline at 63/100. Key friction included employees viewing innovation as someone else\'s job and significant confusion caused by "False Clicks" in legacy carousels.',
        image: '/images/case-studies/portfolio-d3/experience-map.png'
      },
      {
        type: 'metrics',
        title: 'Heuristic Baseline',
        items: [
          { value: '63', label: 'Heuristic Score (/100)' },
          { value: 'High', label: 'Information Fatigue' },
          { value: 'Niche', label: 'User Perception' },
          { value: '4+', label: 'False Click Errors' },
          { value: '70%', label: 'Email Dependency' }
        ]
      },
      {
        type: 'grid',
        title: 'Competitive Benchmarking',
        items: [
          { title: 'Market Trends', image: '/images/case-studies/portfolio-d3/benchmark.png' },
          { title: 'Internal Pain Points', image: '/images/case-studies/portfolio-d3/d7-dis.png' },
          { title: 'Workflow Study', image: '/images/case-studies/portfolio-d3/d7-disc-1.png' },
          { title: 'Feature Matrix', image: '/images/case-studies/portfolio-d3/cropped-1.png' },
          { title: 'System Architecture', image: '/images/case-studies/portfolio-d3/screenshot-2025-02-28-231407-1.png' }
        ]
      },
      {
        type: 'text-image',
        title: 'Design Philosophy',
        content: 'We moved away from text-heavy reporting to a storytelling-first approach. By highlighting the human stories behind innovations, we increased engagement and made complex technical successes more accessible.',
        image: '/images/case-studies/innovation/d4.png'
      },
      {
        type: 'grid',
        title: 'UI Components & Iterations',
        items: [
          { title: 'Dashboard Concept', image: '/images/case-studies/innovation/d1.png' },
          { title: 'Asset Library', image: '/images/case-studies/innovation/d2.png' },
          { title: 'Startup Corner', image: '/images/case-studies/innovation/d5.png' },
          { title: 'Interactive Story', image: '/images/case-studies/innovation/d6.png' },
          { title: 'Gamification Flow', image: '/images/case-studies/innovation/d7.png' },
          { title: 'Recognition Logic', image: '/images/case-studies/innovation/d8.png' },
          { title: 'Eminence Section', image: '/images/case-studies/innovation/d9.png' },
          { title: 'Feedback Loop', image: '/images/case-studies/innovation/d10.png' }
        ]
      },
      {
        type: 'full-width-image',
        title: 'Final Portal Experience',
        content: 'The final destination portal successfully eliminated major interaction bottlenecks while establishing a modern, professionalDeloitte identity.',
        image: '/images/case-studies/innovation/d11.png'
      }
    ]
  },
  'product-design-portfolio': {
    id: 'product-design-portfolio',
    title: 'Product Design Portfolio (2024)',
    category: 'Industrial & Interaction Design',
    year: '2022–2024',
    description: 'A comprehensive collection of design solutions ranging from board games for neurodiversity to e-commerce return optimization, and physical health hardware.',
    coverImage: '/images/misc/mitali-portfolio-01.jpg',
    challenge: 'Addressing diverse human factors and physical challenges, bridging physical product design with digital interaction.',
    solution: 'End-to-end service and product designs including physical games, app flows, and health hardware (TALK the TALK, (RE)TURN, PetCoach, TUNNEL).',
    role: 'Product Designer',
    duration: '2 Years',
    tools: ['User Research', 'Prototyping', 'Human Factors', 'CAD', 'Industrial Design'],
    process: [
      { title: 'Observe', substeps: ['Observation Mapping', 'User Tracking'], image: '/images/misc/mitali-portfolio-05.jpg' },
      { title: 'Develop', substeps: ['Prototyping', 'User Testing'], image: '/images/misc/mitali-portfolio-10.jpg' }
    ],
    sections: [
      {
        type: 'text-image',
        title: '01 / TALK the TALK',
        content: 'A board game designed for autistic individuals to enhance employment opportunities through social interaction. Focuses on safe, structured communication frameworks.',
        image: '/images/misc/Mitali portfolio 2024 (1)-03.jpg'
      },
      {
        type: 'grid',
        title: 'TALK the TALK - Process & Research',
        items: [
          { title: 'Research & Personas', image: '/images/misc/Mitali portfolio 2024 (1)-02.jpg' },
          { title: 'Ideation', image: '/images/misc/Mitali portfolio 2024 (1)-04.jpg' },
          { title: 'Observation Mapping', image: '/images/misc/mitali-portfolio-05.jpg' },
          { title: 'Development', image: '/images/misc/Mitali portfolio 2024 (1)-06.jpg' },
          { title: 'Prototyping', image: '/images/misc/Mitali portfolio 2024 (1)-07.jpg' },
          { title: 'Play Testing', image: '/images/misc/Mitali portfolio 2024 (1)-08.jpg' },
          { title: 'Final Details', image: '/images/misc/Mitali portfolio 2024 (1)-09.jpg' },
          { title: 'Card Mechanics', image: '/images/misc/mitali-portfolio-10.jpg' },
          { title: 'User Feedback', image: '/images/misc/Mitali portfolio 2024 (1)-11.jpg' }
        ]
      },
      {
        type: 'text-image',
        title: '02 / (RE)TURN',
        content: 'An e-commerce solution focusing on psychological factors to reduce return rates and increase sustainability. Encourages mindful purchasing through UX friction.',
        image: '/images/misc/Mitali portfolio 2024 (1)-12.jpg'
      },
      {
        type: 'grid',
        title: '(RE)TURN - Experience Design',
        items: [
          { title: 'Problem Discovery', image: '/images/misc/Mitali portfolio 2024 (1)-13.jpg' },
          { title: 'Journey Mapping', image: '/images/misc/Mitali portfolio 2024 (1)-14.jpg' },
          { title: 'Intervention Points', image: '/images/misc/Mitali portfolio 2024 (1)-15.jpg' },
          { title: 'Wireframing', image: '/images/misc/Mitali portfolio 2024 (1)-16.jpg' },
          { title: 'High Fidelity', image: '/images/misc/Mitali portfolio 2024 (1)-17.jpg' },
          { title: 'User Flow', image: '/images/misc/Mitali portfolio 2024 (1)-18.jpg' },
          { title: 'Data Architecture', image: '/images/misc/Mitali portfolio 2024 (1)-19.jpg' },
          { title: 'Validation', image: '/images/misc/Mitali portfolio 2024 (1)-20.jpg' }
        ]
      },
      {
        type: 'text-image',
        title: '03 / PetCoach',
        content: 'A comprehensive hardware and software ecosystem helping dog owners monitor and improve their pet\'s health and fitness.',
        image: '/images/misc/Mitali portfolio 2024 (1)-21.jpg'
      },
      {
        type: 'grid',
        title: 'PetCoach - Hardware & Software',
        items: [
          { title: 'Concept Sketching', image: '/images/misc/Mitali portfolio 2024 (1)-22.jpg' },
          { title: 'Form Exploration', image: '/images/misc/Mitali portfolio 2024 (1)-23.jpg' },
          { title: 'Device CMF', image: '/images/misc/Mitali portfolio 2024 (1)-24.jpg' },
          { title: 'Wearable Ergonomics', image: '/images/misc/Mitali portfolio 2024 (1)-25.jpg' },
          { title: 'App UI', image: '/images/misc/Mitali portfolio 2024 (1)-26.jpg' },
          { title: 'Dashboard', image: '/images/misc/Mitali portfolio 2024 (1)-27.jpg' },
          { title: 'Health Tracking', image: '/images/misc/Mitali portfolio 2024 (1)-28.jpg' },
          { title: 'Gamification', image: '/images/misc/Mitali portfolio 2024 (1)-29.jpg' },
          { title: 'Testing', image: '/images/misc/Mitali portfolio 2024 (1)-30.jpg' }
        ]
      },
      {
        type: 'text-image',
        title: '04 / TUNNEL',
        content: 'An ergonomic hardware product aimed at alleviating and preventing carpal tunnel syndrome for heavy computer users.',
        image: '/images/misc/Mitali portfolio 2024 (1)-31.jpg'
      },
      {
        type: 'grid',
        title: 'TUNNEL - Industrial Design',
        items: [
          { title: 'Anatomy Study', image: '/images/misc/Mitali portfolio 2024 (1)-32.jpg' },
          { title: 'Initial Sketches', image: '/images/misc/Mitali portfolio 2024 (1)-33.jpg' },
          { title: 'Foam Models', image: '/images/misc/Mitali portfolio 2024 (1)-34.jpg' },
          { title: '3D Printing', image: '/images/misc/Mitali portfolio 2024 (1)-35.jpg' },
          { title: 'CAD Refinement', image: '/images/misc/Mitali portfolio 2024 (1)-36.jpg' },
          { title: 'Materials', image: '/images/misc/Mitali portfolio 2024 (1)-37.jpg' },
          { title: 'Final Renders', image: '/images/misc/Mitali portfolio 2024 (1)-38.jpg' },
          { title: 'Exploded View', image: '/images/misc/Mitali portfolio 2024 (1)-39.jpg' },
          { title: 'Packaging', image: '/images/misc/Mitali portfolio 2024 (1)-40.jpg' }
        ]
      },
      {
        type: 'grid',
        title: 'Additional Exploration',
        items: [
          { title: 'Exploration 1', image: '/images/misc/Mitali portfolio 2024 (1)-41.jpg' },
          { title: 'Exploration 2', image: '/images/misc/Mitali portfolio 2024 (1)-42.jpg' },
          { title: 'Exploration 3', image: '/images/misc/Mitali portfolio 2024 (1)-43.jpg' },
          { title: 'Exploration 4', image: '/images/misc/Mitali portfolio 2024 (1)-44.jpg' },
          { title: 'Exploration 5', image: '/images/misc/Mitali portfolio 2024 (1)-45.jpg' },
          { title: 'Exploration 6', image: '/images/misc/Mitali portfolio 2024 (1)-46.jpg' },
          { title: 'Exploration 7', image: '/images/misc/Mitali portfolio 2024 (1)-47.jpg' },
          { title: 'Exploration 8', image: '/images/misc/Mitali portfolio 2024 (1)-48.jpg' },
          { title: 'Exploration 9', image: '/images/misc/Mitali portfolio 2024 (1)-49.jpg' },
          { title: 'Exploration 10', image: '/images/misc/Mitali portfolio 2024 (1)-50.jpg' },
          { title: 'Conclusion', image: '/images/misc/Mitali portfolio 2024 (1)-51.jpg' }
        ]
      }
    ]
  }
};
