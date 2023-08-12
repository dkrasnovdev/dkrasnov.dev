import { IconGraphQL, IconGolang, IconSourceCode } from "$components/icons";
import type { SvelteComponent } from "svelte";

export default function getIcon(tags: string[]): {
  name: string;
  svg: typeof SvelteComponent;
} {
  if (tags.includes("golang")) return { name: "golang", svg: IconGolang };
  if (tags.includes("graphql")) return { name: "graphql", svg: IconGraphQL };
  return { name: "source-code", svg: IconSourceCode };
}
