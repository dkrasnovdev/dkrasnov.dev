import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconBulb,
  IconFileCv,
  IconFunction,
  IconHome,
  IconSalt,
  IconUser,
} from "@tabler/icons-react";

const icons = {
  Home: IconHome,
  User: IconUser,
  Bulb: IconBulb,
  Fn: IconFunction,
  Salt: IconSalt,
  BrandGitHub: IconBrandGithub,
  BrandLinkedIn: IconBrandLinkedin,
  BrandTelegram: IconBrandTelegram,
  FileCv: IconFileCv,
} as const;

export type Item = {
  icon?: keyof typeof icons;
  color?: string;
  name: string;
  href: string;
};

export type Group = {
  name: string;
  items: Array<Item>;
};

export type Suggestion = [name: string, href: string];

const groups: Array<Group> = [
  {
    name: "Pages",
    items: [
      {
        icon: "Home",
        name: "Home",
        href: "/",
      },
      {
        icon: "User",
        name: "About",
        href: "/about",
      },
      {
        icon: "Bulb",
        name: "Ideas",
        href: "/ideas",
      },
      {
        icon: "Fn",
        name: "Portfolio",
        href: "/portfolio",
      },
      {
        icon: "Salt",
        name: "Recipes",
        href: "/recipes",
      },
    ],
  },
  {
    name: "Socials",
    items: [
      {
        icon: "BrandGitHub",
        name: "GitHub",
        href: "https://github.com/dkrasnovdev",
      },
      {
        icon: "BrandTelegram",
        name: "Telegram",
        href: "https://t.me/dkrasnovdev",
      },
      {
        icon: "BrandLinkedIn",
        name: "LinkedIn",
        href: "https://linkedin.com/dkrasnovdev",
      },
    ],
  },
  {
    name: "Resume",
    items: [
      {
        icon: "FileCv",
        name: "CV (Light)",
        href: "/dkrasnov-cv-light.pdf"
      },
      {
        icon: "FileCv",
        name: "CV (Dark)",
        href: "/dkrasnov-cv-dark.pdf"
      }
    ]
  }
];

const suggestions: Array<Suggestion> = [
  ["View portfolio", "/portfolio"],
  ["Discover recipes", "/recipes"],
];

export { icons, groups, suggestions };
