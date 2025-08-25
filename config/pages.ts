import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to Codox portfolio website.",
    metadata: {
      title: "Home",
      description: "Codox's portfolio website.",
    },
  },
  skills: {
    title: "Services",
    description: "Key services that define our identity.",
    metadata: {
      title: "Services",
      description:
        "Codox's key services that defines our professional identity.",
    },
  },
  projects: {
    title: "Projects",
    description: "Showcasing impactful projects and technical achievements.",
    metadata: {
      title: "Projects",
      description: "Codox's projects in building web applications.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect and explore collaborations.",
    metadata: {
      title: "Contact",
      description: "Contact Codox.",
    },
  },
  contributions: {
    title: "Contributions",
    description:
      "From custom websites to automation and email systems — We help you streamline your business so you can focus on what you do best.",
    metadata: {
      title: "Contributions",
      description:
        "Codox's open-source contributions and community involvement.",
    },
  },
  resume: {
    title: "Resume",
    description: "Codox's resume.",
    metadata: {
      title: "Resume",
      description: "Codox's resume.",
    },
  },
  experience: {
    title: "Experience",
    description: "Professional journey and career timeline.",
    metadata: {
      title: "Experience",
      description: "Codox's professional journey and experience timeline.",
    },
  },
};
