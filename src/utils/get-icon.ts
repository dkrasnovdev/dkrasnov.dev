import {
  IconGraphQL,
  IconGolang,
  IconSourceCode,
  IconBrandAstro,
  IconBrandDocker,
  IconBrandZod,
  IconBrandNextJS,
  IconBrandReactHookForm,
  IconBrandNeovim,
} from "$components/icons";
import type { SvelteComponent } from "svelte";

export default function getIcon(tags: string[]): {
  name: string;
  svg: typeof SvelteComponent;
} {
  if (tags.includes("astro")) return { name: "astro", svg: IconBrandAstro };
  if (tags.includes("next.js"))
    return { name: "next.js", svg: IconBrandNextJS };
  if (tags.includes("docker")) return { name: "docker", svg: IconBrandDocker };
  if (tags.includes("neovim")) return { name: "neovim", svg: IconBrandNeovim };
  if (tags.includes("golang")) return { name: "golang", svg: IconGolang };
  if (tags.includes("graphql")) return { name: "graphql", svg: IconGraphQL };
  if (tags.includes("zod")) return { name: "zod", svg: IconBrandZod };
  if (tags.includes("react-hook-form"))
    return { name: "react-hook-form", svg: IconBrandReactHookForm };
  return { name: "source-code", svg: IconSourceCode };
}
