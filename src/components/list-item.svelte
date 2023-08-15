<script lang="ts">
  import Card from "$components/card.svelte";
  import clsx from "clsx";
  import type { SvelteComponent } from "svelte";
  export let url: Optional<string> = undefined;
  export let name: string;
  export let description: string;
  export let icon: { name: string; svg: typeof SvelteComponent };
</script>

<li
  class={clsx({
    "pointer-events-none select-none opacity-50": !url,
  })}
>
  <Card
    href={url}
    linkText={!url
      ? "Planned"
      : url.startsWith("https://github.com")
      ? "Repository"
      : "Open"}
  >
    <div
      class="flex flex-wrap items-center justify-start gap-2.5 [&>*]:shrink-0"
    >
      <svelte:component
        this={icon.svg}
        size={24}
        aria-hidden="true"
        class="fill-neutral-200"
      />
    </div>
    <div class="h-5" />
    <h2 class="font-semibold text-neutral-300">{name}</h2>
    <div class="h-1.5"></div>
    <p class="text-neutral-400">{description}</p>
    <div class="h-2.5"></div>
  </Card>
</li>
