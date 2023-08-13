import { IconGraphQL, IconGolang, IconSourceCode, IconBrandAstro, IconBrandDocker, IconBrandZod } from "$components/icons";
import type { SvelteComponent } from "svelte";

export default function getIcon(tags: string[]): {
  name: string;
  svg: typeof SvelteComponent;
} {
  if (tags.includes("astro")) return { name: "astro", svg: IconBrandAstro }
  if (tags.includes("docker")) return { name: "docker", svg: IconBrandDocker }
  if (tags.includes("golang")) return { name: "golang", svg: IconGolang };
  if (tags.includes("graphql")) return { name: "graphql", svg: IconGraphQL };
  if (tags.includes("zod")) return { name: "zod", svg: IconBrandZod };
  return { name: "source-code", svg: IconSourceCode };
}
