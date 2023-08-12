<script lang="ts">
  import Link from "$components/link.svelte";

  export let id: Optional<string> = undefined;
  export let href: Optional<string> = undefined;
  export let linkText: Optional<string> = undefined;
  export let size: "sm" | "lg" = "sm";
</script>

<svelte:element
  this={href ? "a" : "div"}
  {id}
  {href}
  target="_blank"
  class="flex h-full w-full flex-col border-2 border-neutral-800 bg-neutral-900 transition target:ring focus:outline-none focus:ring"
  class:hoverable={href}
  class:size-sm={size === "sm"}
  class:size-lg={size === "lg"}
>
  <slot />

  {#if linkText}
    <div class="flex-1" />
    <div class="pt-1.5 font-semibold">
      <Link nested {href}>{linkText}</Link>
    </div>
  {/if}
</svelte:element>

<style lang="postcss">
  .size-sm {
    @apply rounded-xl p-5;
  }
  .size-lg {
    @apply rounded-3xl p-6 lg:p-10;
  }
  .hoverable:hover {
    @apply bg-neutral-800;
  }
</style>
