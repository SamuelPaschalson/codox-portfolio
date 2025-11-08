import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
      keywords: string[];
    };
    structuredData?: any;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Codox - Full Stack Developer & Creative Tech Agency",
    description:
      "Expert full stack developer specializing in custom websites, automation systems, and email solutions. Let's build something amazing together.",
    metadata: {
      title: "Codox - Full Stack Developer & Creative Tech Agency",
      description:
        "Expert full stack developer specializing in custom websites, automation systems, and email solutions. Professional web development services.",
      keywords: [
        "full stack developer",
        "web development",
        "custom websites",
        "business automation",
        "react developer",
        "next.js developer",
      ],
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Codox",
      jobTitle: "Full Stack Developer",
      description:
        "Expert full stack developer specializing in custom websites, automation systems, and email solutions",
      url: "https://codox-portfolio.netlify.app",
      sameAs: [
        // "https://github.com/codox",
        // "https://linkedin.com/in/codox",
        // "https://twitter.com/codox",
      ],
    },
  },
  skills: {
    title: "Services & Technologies - Codox",
    description:
      "Comprehensive web development services including React, Next.js, TypeScript, Node.js, and full-stack solutions for your business.",
    metadata: {
      title: "Web Development Services & Technologies - Codox",
      description:
        "Expert web development services including React, Next.js, TypeScript, Node.js, and full-stack solutions. Professional technology stack.",
      keywords: [
        "web development services",
        "react development",
        "next.js development",
        "typescript",
        "node.js",
        "full stack development",
      ],
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Web Development Services",
      description: "Comprehensive web development services and technologies",
      provider: {
        "@type": "Person",
        name: "Codox",
      },
      areaServed: "Worldwide",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Development Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Website Development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Business Automation Systems",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Email System Development",
            },
          },
        ],
      },
    },
  },
  projects: {
    title: "Projects Portfolio - Codox Web Development",
    description:
      "Showcasing impactful web development projects, full-stack applications, and technical achievements using modern technologies.",
    metadata: {
      title: "Web Development Projects Portfolio - Codox",
      description:
        "Professional web development projects showcasing React, Next.js, and full-stack applications. Real-world solutions and technical achievements.",
      keywords: [
        "web development projects",
        "portfolio",
        "react projects",
        "next.js projects",
        "full stack applications",
        "web applications",
      ],
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Web Development Projects",
      description: "Portfolio of web development projects and applications",
      itemListElement: [], // Will be populated dynamically with actual projects
    },
  },
  contact: {
    title: "Contact Codox - Web Development Services",
    description:
      "Get in touch for web development projects, consultations, and collaborations. Let's discuss your next project.",
    metadata: {
      title: "Contact Codox - Web Development Services & Consultations",
      description:
        "Contact Codox for professional web development services, project consultations, and collaboration opportunities.",
      keywords: [
        "contact web developer",
        "hire developer",
        "web development consultation",
        "project collaboration",
      ],
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "your-email@domain.com", // Add your email
      url: "https://codox-portfolio.netlify.app/contact",
      availableLanguage: "English",
    },
  },
  contributions: {
    title: "Open Source Contributions - Codox",
    description:
      "Open-source contributions, community projects, and development expertise shared with the developer community.",
    metadata: {
      title: "Open Source Contributions & Community Projects - Codox",
      description:
        "Open-source contributions, community projects, and development expertise. Sharing knowledge with the developer community.",
      keywords: [
        "open source contributions",
        "github projects",
        "developer community",
        "code contributions",
      ],
    },
  },
  resume: {
    title: "Codox Resume - Full Stack Developer",
    description:
      "Professional resume showcasing web development experience, technical skills, and project accomplishments.",
    metadata: {
      title: "Codox Resume - Full Stack Developer Experience & Skills",
      description:
        "Professional resume of Codox - Full Stack Developer with web development experience, technical skills, and project accomplishments.",
      keywords: [
        "developer resume",
        "full stack developer resume",
        "web developer cv",
        "technical resume",
      ],
    },
  },
  experience: {
    title: "Professional Experience - Codox Developer Journey",
    description:
      "Professional journey, career timeline, and development experience in web technologies and software development.",
    metadata: {
      title: "Professional Experience & Developer Journey - Codox",
      description:
        "Professional development journey, career timeline, and experience in web technologies, software development, and technical leadership.",
      keywords: [
        "developer experience",
        "career timeline",
        "professional journey",
        "web development experience",
      ],
    },
  },
};
