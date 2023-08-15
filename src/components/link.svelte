<script lang="ts">
  export let href: Optional<string> = undefined;
  export let decorations = true;
  export let nested = false;

  const element = href && !nested ? "a" : "span";
  const isExternal = href?.startsWith("http");
</script>

<svelte:element
  this={element}
  {href}
  class="inline font-medium text-neutral-300 underline-offset-2 transition after:inline-block after:whitespace-pre hover:underline"
  class:internal-link={!!href && decorations && !isExternal}
  class:external-link={!!href && decorations && isExternal}
  ><slot /></svelte:element
>

<style lang="postcss">
  .internal-link {
    @apply after:content-['_→'];
  }

  .external-link {
    @apply after:content-['_↗'];
  }
</style>
