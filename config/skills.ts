import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Web Development",
    description:
      "We create beautiful websites that reflect your brand and help you grow, SEO-ready to support your business goals.",
    rating: 5,
    icon: Icons.webDevelopment,
  },
  {
    name: "Web Design",
    description:
      "We keep your website running smoothly with regular updates, backups, and security checks.",
    rating: 5,
    icon: Icons.webDesign,
  },
  {
    name: "Web Maintenance",
    description:
      "We offer support with launches, systems, course setups, landing pages, Whether it’s a one-time fix or ongoing help, we do our best.",
    rating: 5,
    icon: Icons.webMaintenance,
  },
  {
    name: "CRM Setup",
    description:
      "We set up and integrate CRMs tailored to your business needs. Track leads, manage contacts, and automate follow-ups.",
    rating: 5,
    icon: Icons.crmSetup,
  },
  {
    name: "AI-Powered Automation",
    description:
      "Build web applications and APIs quickly using a fast, unopinionated Node.js framework.",
    rating: 5,
    icon: Icons.aiAutomation,
  },
  // {
  //   name: "Node.js",
  //   description:
  //     "Run JavaScript on the server side, enabling dynamic and responsive applications.",
  //   rating: 3,
  //   icon: Icons.nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   description:
  //     "Store and retrieve data seamlessly with a flexible and scalable NoSQL database.",
  //   rating: 4,
  //   icon: Icons.mongodb,
  // },
  // {
  //   name: "Typescript",
  //   description:
  //     "Enhance JavaScript with static types, making code more understandable and reliable.",
  //   rating: 3,
  //   icon: Icons.typescript,
  // },
  // {
  //   name: "Javascript",
  //   description:
  //     "Create interactive and dynamic web experiences with the versatile scripting language.",
  //   rating: 4,
  //   icon: Icons.javascript,
  // },
  // {
  //   name: "HTML 5",
  //   description:
  //     "Structure web content beautifully with the latest version of HyperText Markup Language.",
  //   rating: 4,
  //   icon: Icons.html5,
  // },
  // {
  //   name: "CSS 3",
  //   description:
  //     "Style web pages creatively with the latest iteration of Cascading Style Sheets.",
  //   rating: 4,
  //   icon: Icons.css3,
  // },
  // {
  //   name: "React Native",
  //   description:
  //     "Develop cross-platform mobile apps using React for consistent and engaging experiences.",
  //   rating: 4,
  //   icon: Icons.react,
  // },
  // {
  //   name: "Expo",
  //   description:
  //     "Develop cross-platform mobile apps using React Native managed workflow (Expo).",
  //   rating: 4,
  //   icon: Icons.expo,
  // },
  // {
  //   name: "Mysql",
  //   description:
  //     "Store and retrieve data seamlessly with a flexible and scalable SQL database.",
  //   rating: 4,
  //   icon: Icons.mysql,
  // },
  // {
  //   name: "Redux",
  //   description:
  //     "Manage app state effectively using a predictable and centralized state container.",
  //   rating: 4,
  //   icon: Icons.redux,
  // },
  {
    name: "Virtual Assistance",
    description:
      "We offer support with launches, systems, course setups, landing pages, Whether it’s a one-time fix or ongoing help, we do our best.",
    rating: 5,
    icon: Icons.virtualAssistant,
  },
  // {
  //   name: "Socket.io",
  //   description:
  //     "Enable real-time, bidirectional communication between clients and servers effortlessly.",
  //   rating: 3,
  //   icon: Icons.socketio,
  // },
  // {
  //   name: "Material UI",
  //   description:
  //     "Create stunning and responsive UIs with a popular React UI framework.",
  //   rating: 4,
  //   icon: Icons.mui,
  // },
  {
    name: "Email Marketing & Automation",
    description:
      "We help you set up effective email campaigns and automated workflows using email tools and increase conversions with ease.",
    rating: 5,
    icon: Icons.emailMarketing,
  },
  // {
  //   name: "AWS",
  //   description:
  //     "Utilize Amazon Web Services to build and deploy scalable, reliable, and secure applications.",
  //   rating: 3,
  //   icon: Icons.amazonaws,
  // },
  // {
  //   name: "Bootstrap",
  //   description:
  //     "Quickly create responsive and appealing web designs using a popular CSS framework.",
  //   rating: 4,
  //   icon: Icons.bootstrap,
  // },
  // {
  //   name: "Netlify",
  //   description:
  //     "Manage and organize relational databases efficiently for data-driven applications.",
  //   rating: 4,
  //   icon: Icons.netlify,
  // },
  // {
  //   name: "Figma",
  //   description:
  //     "Create seamless webdesigns and prototype for conversion to websites, apps or highend scalable pojects.",
  //   rating: 4,
  //   icon: Icons.figma,
  // },
  // {
  //   name: "Photoshop",
  //   description:
  //     "Create seamless webdesigns and prototype for conversion to websites, apps or highend scalable pojects.",
  //   rating: 4,
  //   icon: Icons.photoshop,
  // },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
