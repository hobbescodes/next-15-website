import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import app from "@/lib/config/app";

import type { LinkProps } from "@/lib/ui";
import type { IconType } from "react-icons";

type ApplicationKeys = "projects" | "contact";
type SocialKeys = "linkedin" | "github" | "twitter";

interface Navigation extends LinkProps {
  label: string;
  icon?: IconType;
  sublinks?: Navigation[];
}

interface NavigationGroup {
  application: Record<ApplicationKeys, Navigation>;
  socials: Record<SocialKeys, Navigation>;
}

const NAVIGATION_LINKS: NavigationGroup = {
  application: {
    projects: {
      label: "Projects",
      href: "/projects",
    },
    contact: {
      label: "Contact",
      href: "/contact",
      isDisabled: true,
    },
  },
  socials: {
    linkedin: {
      label: "LinkedIn",
      href: app.socials.linkedin,
      icon: FaLinkedin,
    },
    github: {
      label: "GitHub",
      href: app.socials.github,
      icon: FaGithub,
    },
    twitter: {
      label: "Twitter",
      href: app.socials.twitter,
      icon: FaXTwitter,
    },
  },
};

export default NAVIGATION_LINKS;
