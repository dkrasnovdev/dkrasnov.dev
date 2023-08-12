import { IconArticle, IconFunction, IconHome, IconSalt, IconUser } from "@tabler/icons-react";

const icons = {
  Home: IconHome,
  User: IconUser,
  Article: IconArticle,
  Fn: IconFunction,
  Salt: IconSalt,

} as const

export type Item = {
  icon?: keyof typeof icons;
  color?: string;
  name: string;
  href: string;
}

export type Group = {
  name: string;
  items: Array<Item>;
}


export type Suggestion = [name: string, href: string]


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
        href: "/about"
      },
      {
        icon: "Article",
        name: "Blog",
        href: "/blog"
      },
      {
        icon: "Fn",
        name: "Portfolio",
        href: "/portfolio"
      }, {
        icon: "Salt",
        name: "Recipes",
        href: "/recipes"
      }
    ],
  },
];

const suggestions: Array<Suggestion> = [
  ["View portfolio", "/portfolio"],
  ["Discover recipes", "/recipes"]
]

export { icons, groups, suggestions }
