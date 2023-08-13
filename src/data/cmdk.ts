import {
  IconArticle,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconFunction,
  IconHome,
  IconSalt,
  IconUser,
} from "@tabler/icons-react";

const icons = {
  Home: IconHome,
  User: IconUser,
  Article: IconArticle,
  Fn: IconFunction,
  Salt: IconSalt,
  BrandGitHub: IconBrandGithub,
  BrandLinkedIn: IconBrandLinkedin,
  BrandTelegram: IconBrandTelegram,
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
        icon: "Article",
        name: "Blog",
        href: "/blog",
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
];

const suggestions: Array<Suggestion> = [
  ["View portfolio", "/portfolio"],
  ["Discover recipes", "/recipes"],
];

export { icons, groups, suggestions };
