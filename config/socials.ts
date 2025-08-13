import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "",
    icon: Icons.gitHub,
    link: "https://github.com",
  },
  {
    name: "LinkedIn",
    username: "",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/",
  },
  {
    name: "Twitter",
    username: "",
    icon: Icons.twitter,
    link: "https://twitter.com/",
  },
  {
    name: "Gmail",
    username: "",
    icon: Icons.gmail,
    link: "mailto:google.com",
  },
];
