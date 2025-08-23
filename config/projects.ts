import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  vidArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "zen-task",
    companyName: "ZenTask",
    type: "Design",
    category: ["Web Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "Designed an automating system that helps organise, manage and prioritise Workflow.",
    websiteLink: "",
    techStack: [
      "Next.js",
      "React",
      "Node.js",
      "MongoDB",
      "Figma",
      "UI/UX",
      "Typescript",
    ],
    startDate: new Date("2021-07-01"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/zentask/logo.jpg",
    pagesInfoArr: [
      {
        title: "Landing Page",
        description:
          "Modern and responsive landing page showcasing company services and portfolio",
        imgArr: [
          "/projects/zentask/zentask1.jpg",
          "/projects/zentask/zentask2.jpg",
          "/projects/zentask/zentask.jpg",
        ],
        vidArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        // "During my time at Builtdesign, I had the opportunity to work on a dynamic and user-focused project that involved designing and optimizing a website catering to a user base of over 4000 individuals. My role as a full-stack web developer was to ensure a seamless experience for users by creating an efficient and maintainable platform.",
        // "I collaborated closely with the product team to integrate cutting-edge features, employing technologies like Next.js and React with TypeScript for captivating front-end experiences. Additionally, I contributed significantly to the backend by utilizing Node.js, MongoDB, and GraphQL to design robust APIs and ensure smooth system functionality.",
        // "This experience allowed me to enhance my skills in various areas of web development and deliver a high-quality product. I gained proficiency in front-end technologies such as Material UI and Tailwind CSS, as well as backend technologies including Nest.js and MySQL. The project's success in catering to a large user base and providing an intuitive user interface has further motivated me to pursue excellence in web development.",
      ],
      bullets: [
        // "Developed and optimized a high-performing website catering to over 4000 users.",
        // "Collaborated closely with the product team to implement cutting-edge features.",
        // "Created an intuitive admin dashboard to efficiently manage and announce contest winners.",
        // "Leveraged Next.js, React with TypeScript for captivating front-end experiences.",
        // "Utilized Node.js, MongoDB, and GraphQL to design and manage databases.",
      ],
    },
  },
  {
    id: "company-project",
    companyName: "Company Projects",
    type: "Apps",
    category: ["Web Dev", "Full Stack", "Mobile Dev"],
    shortDescription: "Developed NDA Mobile Apps for Companies.",
    websiteLink: "",
    techStack: [
      "Next.js",
      "React",
      "Node.js",
      "MongoDB",
      "Figma",
      "UI/UX",
      "React Native",
      "Typescript",
    ],
    startDate: new Date("2021-07-01"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/blank/blank.jpg",
    pagesInfoArr: [
      {
        title: "Landing Page",
        description:
          "Modern and responsive landing page showcasing company services and portfolio",
        imgArr: [
          "/projects/zentask/zentask1.jpg",
          "/projects/zentask/zentask2.jpg",
          "/projects/zentask/zentask.jpg",
        ],
        vidArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        // "During my time at Builtdesign, I had the opportunity to work on a dynamic and user-focused project that involved designing and optimizing a website catering to a user base of over 4000 individuals. My role as a full-stack web developer was to ensure a seamless experience for users by creating an efficient and maintainable platform.",
        // "I collaborated closely with the product team to integrate cutting-edge features, employing technologies like Next.js and React with TypeScript for captivating front-end experiences. Additionally, I contributed significantly to the backend by utilizing Node.js, MongoDB, and GraphQL to design robust APIs and ensure smooth system functionality.",
        // "This experience allowed me to enhance my skills in various areas of web development and deliver a high-quality product. I gained proficiency in front-end technologies such as Material UI and Tailwind CSS, as well as backend technologies including Nest.js and MySQL. The project's success in catering to a large user base and providing an intuitive user interface has further motivated me to pursue excellence in web development.",
      ],
      bullets: [
        // "Developed and optimized a high-performing website catering to over 4000 users.",
        // "Collaborated closely with the product team to implement cutting-edge features.",
        // "Created an intuitive admin dashboard to efficiently manage and announce contest winners.",
        // "Leveraged Next.js, React with TypeScript for captivating front-end experiences.",
        // "Utilized Node.js, MongoDB, and GraphQL to design and manage databases.",
      ],
    },
  },
  {
    id: "david-goggins",
    companyName: "David Goggins",
    type: "Design",
    category: ["Mobile Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "Unlock unstoppable strength throught the discipline, resilience and relentless mindset.",
    websiteLink: "",
    techStack: ["React Native", "Node.js", "MongoDB", "Javascript"],
    startDate: new Date("2021-07-01"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/davidgoggins/logo.jpg",
    pagesInfoArr: [
      {
        title: "Light and Dark Mods",
        description:
          "Elegantly designed quotes display with customizable themes and sharing options",
        vidArr: ["/projects/davidgoggins/davidgoggins.mp4"],
        imgArr: [],
      },
      {
        title: "Quotes Download Component",
        description:
          "Feature allowing users to download quotes as beautiful images for social media sharing",
        imgArr: [
          "/projects/davidgoggins/davidgoggins.jpg",
          "/projects/davidgoggins/davidgoggins1.jpg",
        ],
        vidArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [],
      bullets: [],
    },
  },
  {
    id: "alpha-beta",
    companyName: "Alpha Beta Edifice",
    type: "Website",
    category: ["Mobile Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "Distinct Architecture & Security - Specializing in the creation of cutting-edge, secure technology facilities.",
    githubLink: "",
    techStack: ["React Native", "Javascript", "Redux", "Node.js", "express.js"],
    startDate: new Date("2021-07-14"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/alpha-beta/logo.png",
    pagesInfoArr: [
      {
        title: "Splash Screen",
        description: "Custom animated splash screen with app branding",
        imgArr: [
          "/projects/alpha-beta/alpha-beta.png",
          "/projects/alpha-beta/alpha-beta1.png",
          "/projects/alpha-beta/alpha-beta2.png",
        ],
        vidArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [],
      bullets: [],
    },
  },
  {
    id: "neo-sphere",
    companyName: "NeoSphere",
    type: "Design",
    category: ["Web Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "Leveraged advanced AI and blockchain technology to scale your operations with military-grade security.",
    websiteLink: "",
    techStack: ["Next.js", "React", "Node.js", "MongoDB", "Typescript"],
    startDate: new Date("2022-03-01"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/neo-sphere/logo.jpg",
    pagesInfoArr: [
      {
        title: "Blog Landing Page",
        description:
          "Modern and responsive landing page showcasing featured articles",
        imgArr: ["/projects/neo-sphere/nerosphere.jpg"],
        vidArr: ["/projects/neo-sphere/neosphere.mp4"],
      },
      {
        title: "Blog Listing",
        description:
          "Organized display of all blog posts with search and filtering",
        imgArr: ["/projects/neo-sphere/nerosphere1.jpg"],
        vidArr: [],
      },
      {
        title: "Category Navigation",
        description: "Intuitive category-based navigation system",
        imgArr: ["/projects/neo-sphere/neosphere2.jpg"],
        vidArr: [],
      },
      {
        title: "Article View",
        description:
          "Clean and readable article layout with rich media support",
        imgArr: ["/projects/neo-sphere/neosphere3.jpg"],
        vidArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [],
      bullets: [],
    },
  },
  {
    id: "portfolio-card",
    companyName: "Portfolio Card",
    type: "Website",
    category: ["Web Dev", "Frontend", "3D Modeling"],
    shortDescription:
      "Forged an immersive 3D Portfolio Card utilizing the prowess of Three.js and Blender, where art and technology converge in an interactive masterpiece.",
    websiteLink: "",
    githubLink: "https://github.com/SamuelPaschalson/3d-portfolio-card-master",
    techStack: ["React", "Javascript", "HTML 5", "CSS 3"],
    startDate: new Date("2022-03-01"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/card/logo.png",
    pagesInfoArr: [
      {
        title: "Card Views",
        description: "Front and back views of the interactive 3D card",
        imgArr: ["/projects/card/card_2.webp", "/projects/card/card_3.webp"],
        vidArr: [],
      },
      {
        title: "Interactive Elements",
        description:
          "Custom links embedded in the 3D model with interactive animations",
        imgArr: ["/projects/card/card_1.webp"],
        vidArr: [],
      },
      {
        title: "3D Model Development",
        description: "Blender project showcasing the model creation process",
        imgArr: ["/projects/card/card_4.webp"],
        vidArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "In my personal, I've ventured into the world of creativity, fashioning a distinctive portfolio card through the utilization of Three.js.",
        "This portfolio card transcends convention; it emerges as a captivating 3D model, adorned with meticulous lighting arrangements that conjure a spellbinding visual journey.",
        "To materialize this concept, I've harnessed the combined potential of Three.js and Blender, orchestrating a meticulous crafting of the central 3D model that serves as the cornerstone of the card's allure.",
        "Yet, the allure extends beyond aesthetics. I've ingeniously interwoven custom links directly into the fabric of Three.js components. Through the creation and seamless integration of novel components, these additions elegantly rest upon the card's surface, mirroring its rotations and delivering an interactive dimension to my portfolio.",
        "The portfolio card itself is an opus of motion, perpetually swaying in an auto-rotational dance that unfurls its multifaceted essence. As an enhancement, I've introduced an instinctive user interaction element. A simple, intuitive drag of the card in specific directions grants viewers a comprehensive vantage, enabling exploration from every conceivable angle.",
        "At its core, my personal epitomizes technical finesse, artistic expression, and interactive design. The amalgamation of Three.js, Blender's prowess, and the innovation of component integration has birthed not only a portfolio card, but a dynamic encounter leaving an indelible imprint on all who partake.",
      ],
      bullets: [
        "Conceptualized and realized a distinct portfolio card using Three.js, highlighting creative exploration.",
        "Crafted a mesmerizing 3D model enhanced by thoughtful lighting arrangements, resulting in a captivating visual voyage.",
        "Leveraged the synergy of Three.js and Blender to meticulously sculpt and refine the central 3D model, embodying meticulous attention to detail.",
        "Innovatively integrated custom links within Three.js components, introducing an interactive layer via seamlessly incorporated new elements.",
        "Enabled an auto-rotating feature for the portfolio card, perpetually showcasing its various facets to observers.",
        "Introduced an instinctual user interaction mechanism, allowing viewers to comprehensively explore the card's dimensions through simple, intuitive dragging motions.",
        "Represented a fusion of technical prowess, artistic ingenuity, and interactive design in a project that reshapes the boundaries of conventional portfolio representation.",
      ],
    },
  },
  {
    id: "cirql-dashboard",
    companyName: "Cirql Dashboard",
    type: "Website",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "Created a dashboard project using React and Tailwind CSS, focusing on UI design and routing implementation.",
    websiteLink: "",
    techStack: ["React", "Tailwind CSS", "Google Auth"],
    startDate: new Date("2023-01-01"),
    endDate: new Date("2023-02-15"),
    companyLogoImg: "/projects/cirql/logo.png",
    pagesInfoArr: [
      {
        title: "Dashboard Home",
        description:
          "Main dashboard view with analytics widgets and data visualization",
        imgArr: ["/projects/cirql/web_1.png", "/projects/cirql/web_2.png"],
        vidArr: [],
      },
      {
        title: "Profile Page",
        description:
          "User profile management interface with customization options",
        imgArr: ["/projects/cirql/web_3.png", "/projects/cirql/web_4.png"],
        vidArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [],
      bullets: [],
    },
  },
  {
    id: "kuli-kuli",
    companyName: "Kuli Kuli",
    type: "Website",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "Created a dashboard project using React and Tailwind CSS, focusing on UI design and routing implementation.",
    websiteLink: "",
    techStack: ["React", "Tailwind CSS", "Google Auth"],
    startDate: new Date("2023-01-01"),
    endDate: new Date("2023-02-15"),
    companyLogoImg: "/projects/kuli-kuli/logo.jpg",
    pagesInfoArr: [
      {
        title: "Dashboard Home",
        description:
          "Main dashboard view with analytics widgets and data visualization",
        imgArr: [
          "/projects/kuli-kuli/kuli-kuli.jpg",
          "/projects/kuli-kuli/kuli-kulli1.jpg",
        ],
        vidArr: [],
      },
      {
        title: "Profile Page",
        description:
          "User profile management interface with customization options",
        imgArr: [
          "/projects/kuli-kuli/kuli-kuli3.jpg",
          "/projects/kuli-kuli/kuli-kuli2.jpg",
        ],
        vidArr: ["/projects/kuli-kuli/kuli-kuli.mp4"],
      },
    ],
    descriptionDetails: {
      paragraphs: [],
      bullets: [],
    },
  },
  {
    id: "apex-shopping",
    companyName: "Apex Shopping App",
    type: "Apps",
    category: ["Mobile Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "Developed a feature-rich mobile shopping application with admin panel, user authentication, and seamless product management using React Native and Firebase.",
    githubLink: "https://github.com/SamuelPaschalson/apex-shopping",
    techStack: ["React Native", "Javascript", "Redux", "Node.js", "express.js"],
    startDate: new Date("2021-07-14"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/apex/logo.png",
    pagesInfoArr: [
      {
        title: "Splash Screen",
        description: "Custom animated splash screen with app branding",
        imgArr: ["/projects/apex/app_7.webp"],
        vidArr: [],
      },
      {
        title: "Login/Signup Authentication",
        description: "Secure user authentication system with Firebase",
        imgArr: ["/projects/apex/app_1.webp"],
        vidArr: [],
      },
      {
        title: "All Products Explore Screen",
        description: "Interactive product browsing with categories and filters",
        imgArr: ["/projects/apex/app_3.webp"],
        vidArr: [],
      },
      {
        title: "Admin Panel",
        description:
          "Comprehensive admin dashboard for product and order management",
        imgArr: ["/projects/apex/app_4.webp", "/projects/apex/app_6.webp"],
        vidArr: [],
      },
      {
        title: "Sidenav Navigation",
        description: "Intuitive side navigation for easy app navigation",
        imgArr: ["/projects/apex/app_5.webp"],
        vidArr: [],
      },
      {
        title: "Firebase Database",
        description:
          "Real-time database structure for efficient data management",
        imgArr: ["/projects/apex/db.webp"],
        vidArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "The Apex Shopping App represents a comprehensive mobile e-commerce solution that I developed from the ground up using React Native and Firebase. This project showcases my ability to create a full-featured shopping application with both user and admin functionalities.",
        "The application features a robust authentication system, allowing users to securely sign up and log in. The product exploration interface is designed with user experience in mind, incorporating smooth navigation and intuitive filtering options.",
        "One of the key highlights is the admin panel, which provides complete control over product management, order processing, and inventory tracking. The integration with Firebase ensures real-time data synchronization and reliable data persistence.",
        "The app's architecture emphasizes scalability and performance, utilizing Redux for state management and following best practices for mobile app development. The UI/UX design focuses on providing a seamless shopping experience across different device sizes.",
      ],
      bullets: [
        "Implemented secure user authentication and authorization using Firebase",
        "Designed and developed an intuitive product browsing and shopping cart system",
        "Created a comprehensive admin panel for product and order management",
        "Integrated real-time data synchronization using Firebase Database",
        "Implemented state management using Redux for optimal performance",
        "Designed responsive UI components following mobile-first principles",
        "Incorporated smooth animations and transitions for enhanced user experience",
      ],
    },
  },
  {
    id: "joystick-labs",
    companyName: "JoyStick Labs",
    type: "Apps",
    category: ["Mobile Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "Developed a feature-rich mobile Web3 Gaming platform. This project uses next/font to automatically optimize and load Inter, a custom Google Font.",
    githubLink: "https://github.com/SamuelPaschalson/Joysticklabstestnet",
    techStack: [
      "React",
      "Next.js",
      "Javascript",
      "Redux",
      "Node.js",
      "express.js",
    ],
    startDate: new Date("2021-07-14"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/joystick/logo.png",
    pagesInfoArr: [
      {
        title: "",
        description: "Custom animated splash screen with app branding",
        imgArr: ["/projects/joystick/joystick.png"],
        vidArr: [],
      },
      {
        title: "",
        description: "",
        imgArr: ["/projects/joystick/joystick1.png"],
        vidArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        // "The Apex Shopping App represents a comprehensive mobile e-commerce solution that I developed from the ground up using React Native and Firebase. This project showcases my ability to create a full-featured shopping application with both user and admin functionalities.",
        // "The application features a robust authentication system, allowing users to securely sign up and log in. The product exploration interface is designed with user experience in mind, incorporating smooth navigation and intuitive filtering options.",
        // "One of the key highlights is the admin panel, which provides complete control over product management, order processing, and inventory tracking. The integration with Firebase ensures real-time data synchronization and reliable data persistence.",
        // "The app's architecture emphasizes scalability and performance, utilizing Redux for state management and following best practices for mobile app development. The UI/UX design focuses on providing a seamless shopping experience across different device sizes.",
      ],
      bullets: [
        // "Implemented secure user authentication and authorization using Firebase",
        // "Designed and developed an intuitive product browsing and shopping cart system",
        // "Created a comprehensive admin panel for product and order management",
        // "Integrated real-time data synchronization using Firebase Database",
        // "Implemented state management using Redux for optimal performance",
        // "Designed responsive UI components following mobile-first principles",
        // "Incorporated smooth animations and transitions for enhanced user experience",
      ],
    },
  },
  {
    id: "java-management",
    companyName: "Java Management Api",
    type: "Apps",
    category: ["Api", "Full Stack"],
    shortDescription:
      "Developed a rich api management system using Java Spring boot for book management",
    githubLink: "https://github.com/SamuelPaschalson/management-system",
    techStack: [
      "Java",
      "Next.js",
      "Javascript",
      "Redux",
      "Node.js",
      "express.js",
    ],
    startDate: new Date("2021-07-14"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/blank/logo.png",
    pagesInfoArr: [
      {
        title: "",
        description: "",
        imgArr: ["/projects/blank/blank.jpg"],
        vidArr: [],
      },
      {
        title: "",
        description: "",
        imgArr: ["/projects/blank/blank.jpg"],
        vidArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        // "The Apex Shopping App represents a comprehensive mobile e-commerce solution that I developed from the ground up using React Native and Firebase. This project showcases my ability to create a full-featured shopping application with both user and admin functionalities.",
        // "The application features a robust authentication system, allowing users to securely sign up and log in. The product exploration interface is designed with user experience in mind, incorporating smooth navigation and intuitive filtering options.",
        // "One of the key highlights is the admin panel, which provides complete control over product management, order processing, and inventory tracking. The integration with Firebase ensures real-time data synchronization and reliable data persistence.",
        // "The app's architecture emphasizes scalability and performance, utilizing Redux for state management and following best practices for mobile app development. The UI/UX design focuses on providing a seamless shopping experience across different device sizes.",
      ],
      bullets: [
        // "Implemented secure user authentication and authorization using Firebase",
        // "Designed and developed an intuitive product browsing and shopping cart system",
        // "Created a comprehensive admin panel for product and order management",
        // "Integrated real-time data synchronization using Firebase Database",
        // "Implemented state management using Redux for optimal performance",
        // "Designed responsive UI components following mobile-first principles",
        // "Incorporated smooth animations and transitions for enhanced user experience",
      ],
    },
  },
  {
    id: "xenok-resume",
    companyName: "XenOK Resmue Builder",
    type: "Website",
    category: ["Api", "Full Stack"],
    shortDescription:
      "With this resume builder though basic you will build a resume that is just perfect for you, the project would be constantly updated, so you are in for a treat.",
    githubLink: "https://github.com/SamuelPaschalson/Resume-builder-site",
    techStack: ["PHP", "Laravel", "Javascript"],
    startDate: new Date("2021-07-14"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/blank/logo.png",
    pagesInfoArr: [
      {
        title: "",
        description:
          "With this resume builder though basic you will build a resume that is just perfect for you, the project would be constantly updated, so you are in for a treat.",
        imgArr: ["/projects/blank/xenok.png"],
        vidArr: [],
      },
      {
        title: "",
        description: "",
        imgArr: ["/projects/blank/blank.jpg"],
        vidArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [],
      bullets: [],
    },
  },
  {
    id: "gym-website",
    companyName: "Gym Website",
    type: "Website",
    category: ["Frontend", "Full Stack"],
    shortDescription:
      "A prototype of a gym website that displaying the members, coaches, programs, our pricing plans and how to contact us, with a counting animation and a working email join using email js.",
    githubLink: "https://github.com/SamuelPaschalson/Gym-Website",
    techStack: ["PHP", "Laravel", "Javascript"],
    startDate: new Date("2021-07-14"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/blank/logo.png",
    pagesInfoArr: [
      {
        title: "",
        description:
          "A prototype of a gym website that displaying the members, coaches, programs, our pricing plans and how to contact us, with a counting animation and a working email join using email js.",
        imgArr: ["/projects/blank/gym.png"],
        vidArr: [],
      },
      {
        title: "",
        description: "",
        imgArr: ["/projects/blank/blank.jpg"],
        vidArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [],
      bullets: [],
    },
  },
  {
    id: "pout-polish",
    companyName: "Pout Polish",
    type: "Website",
    category: ["Web Dev", "Full Stack", "Frontend"],
    shortDescription:
      "A Lipcare brand. Your lips, but softer, shinier, and absolutely irresistible..",
    githubLink: "https://github.com/SamuelPaschalson/pout-polish",
    techStack: ["React", "Next.js", "Javascript"],
    startDate: new Date("2021-07-14"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/pout-polish/logo.jpg",
    pagesInfoArr: [
      {
        title: "",
        description:
          "A Lipcare brand. Your lips, but softer, shinier, and absolutely irresistible..",
        imgArr: ["/projects/pout-polish/pout1.png"],
        vidArr: [],
      },
      {
        title: "",
        description: "",
        imgArr: [
          "/projects/pout-polish/pout2.png",
          "/projects/pout-polish/pout3.png",
          "/projects/pout-polish/pout4.png",
        ],
        vidArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [],
      bullets: [],
    },
  },
  {
    id: "roovas",
    companyName: "Roovas",
    type: "Website",
    category: ["Web Dev", "Full Stack", "Frontend"],
    shortDescription:
      "Everything you need to successfully buy or sell your property is here..",
    githubLink: "#",
    techStack: ["React", "Next.js", "Javascript"],
    startDate: new Date("2021-07-14"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/roovas/logo.png",
    pagesInfoArr: [
      {
        title: "",
        description:
          "Everything you need to successfully buy or sell your property is here..",
        imgArr: ["/projects/roovas/roovas.png"],
        vidArr: [],
      },
      {
        title: "",
        description: "",
        imgArr: [
          "/projects/roovas/roovas1.png",
          "/projects/roovas/roovas2.png",
          "/projects/roovas/roovas3.png",
        ],
        vidArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [],
      bullets: [],
    },
  },
  {
    id: "ecommerce-website",
    companyName: "E-Commerce Website",
    type: "Website",
    category: ["Frontend", "Frontend", "Full Stack"],
    shortDescription:
      "An Ecommerce site made from scratch in Webpack, to pay on the site use 4242424242424242424242 as the card number its all for testing.",
    githubLink: "https://github.com/SamuelPaschalson/react-app-from-scratch/",
    techStack: ["React", "Node.js", "Javascript"],
    startDate: new Date("2021-07-14"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/blank/logo.png",
    pagesInfoArr: [
      {
        title: "",
        description:
          "An Ecommerce site made from scratch in Webpack, to pay on the site use 4242424242424242424242 as the card number its all for testing.",
        imgArr: ["/projects/blank/e-commerce.png"],
        vidArr: [],
      },
      {
        title: "",
        description: "",
        imgArr: ["/projects/blank/blank.jpg"],
        vidArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [],
      bullets: [],
    },
  },
  {
    id: "dreamshare",
    companyName: "DreamShare Website",
    type: "Website",
    category: ["Web Dev", "Full Stack", "Frontend"],
    shortDescription:
      "A responsive site made with sass, webpack and json. Though the responsiveness is incomplete, expect a complete project soon.",
    githubLink: "https://github.com/SamuelPaschalson/TestSite/",
    techStack: ["React", "Node.js", "Javascript"],
    startDate: new Date("2021-07-14"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/blank/logo.png",
    pagesInfoArr: [
      {
        title: "",
        description:
          "A responsive site made with sass, webpack and json. Though the responsiveness is incomplete, expect a complete project soon.",
        imgArr: ["/projects/blank/dreamshare.png"],
        vidArr: [],
      },
      {
        title: "",
        description: "",
        imgArr: ["/projects/blank/blank.jpg"],
        vidArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [],
      bullets: [],
    },
  },
  {
    id: "jsondb",
    companyName: "JSONDB (Npm)",
    type: "Website",
    category: ["Web Dev", "Full Stack", "Api", "Backend"],
    shortDescription:
      "This is a node_modules package that lets users access or use database like structure with Json files",
    githubLink: "https://www.npmjs.com/package/@samuelpaschalson/json-db",
    techStack: ["React", "Node.js", "Javascript"],
    startDate: new Date("2021-07-14"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/blank/logo.png",
    pagesInfoArr: [
      {
        title: "",
        description:
          "This is a node_modules package that lets users access or use database like structure with Json files",
        imgArr: ["/projects/blank/blank.jpg"],
        vidArr: [],
      },
      {
        title: "",
        description: "",
        imgArr: ["/projects/blank/blank.jpg"],
        vidArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [],
      bullets: [],
    },
  },
  {
    id: "lyrically",
    companyName: "Lyrically",
    type: "Apps",
    category: ["Web Dev", "Full Stack", "Backend"],
    shortDescription:
      "A React Native native app utilising Expo, React Navigation and fetching data from multiple API's (Deezer and Lyrics.OVH).",
    githubLink: "https://github.com/SamuelPaschalson/Lyrically",
    techStack: ["React", "Node.js", "Javascript"],
    startDate: new Date("2021-07-14"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/blank/logo.png",
    pagesInfoArr: [
      {
        title: "",
        description:
          "A React Native native app utilising Expo, React Navigation and fetching data from multiple API's (Deezer and Lyrics.OVH).",
        imgArr: ["/projects/blank/blank.jpg"],
        vidArr: [],
      },
      {
        title: "",
        description: "",
        imgArr: ["/projects/blank/blank.jpg"],
        vidArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [],
      bullets: [],
    },
  },
  {
    id: "zoo-management",
    companyName: "Zoo Management",
    type: "Website",
    category: ["Web Dev", "Full Stack", "Backend"],
    shortDescription:
      "A Zoo management template in php, using a protoytype of the Xanak templating.",
    githubLink: "https://github.com/SamuelPaschalson/Zoo-management",
    techStack: ["PHP", "Laravel", "Javascript"],
    startDate: new Date("2021-07-14"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/blank/logo.png",
    pagesInfoArr: [
      {
        title: "",
        description:
          "A Zoo management template in php, using a protoytype of the Xanak templating.",
        imgArr: ["/projects/blank/blank.jpg"],
        vidArr: [],
      },
      {
        title: "",
        description: "",
        imgArr: ["/projects/blank/blank.jpg"],
        vidArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [],
      bullets: [],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
