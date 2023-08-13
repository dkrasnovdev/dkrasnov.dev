<script lang="ts">
  export let filename: string;
  import { IconBrandGit, IconTypeScript } from "$components/icons";
</script>

<div
  aria-hidden="true"
  class="relative mx-auto grid h-80 w-full max-w-lg grid-rows-[auto,1fr,auto] overflow-hidden rounded-3xl border bg-zinc-950 lg:mx-0 lg:h-96 lg:max-w-full"
>
  <div
    class="absolute top-0 flex h-12 w-full items-center space-x-2 rounded-t-3xl border-b bg-neutral-900 px-4 supports-[backdrop-filter]:bg-neutral-900/50 supports-[backdrop-filter]:backdrop-blur-xl"
  >
    <IconTypeScript size={12} class="fill-neutral-500"></IconTypeScript>
    <span class="font-mono text-xs text-neutral-500">{filename}</span>
  </div>
  <div class="w-full overflow-y-auto px-4 py-16 focus:outline-none">
    <slot />
  </div>
  <div
    class="absolute bottom-0 flex h-8 w-full items-center space-x-2 rounded-b-3xl border-t bg-neutral-900 px-4 supports-[backdrop-filter]:bg-neutral-900/50 supports-[backdrop-filter]:backdrop-blur-xl"
  >
    <IconBrandGit size={12} class="fill-neutral-500"></IconBrandGit>
    <span class="font-mono text-xs text-neutral-500">main</span>
  </div>
</div>
