<script lang="ts">
  export let heading: string;
  export let subheading: Optional<string> = undefined;
</script>

<section class="flex flex-col items-center justify-between gap-5 md:flex-row">
  <div class="shrink-0 text-center md:text-left">
    <h1 class="text-xl font-bold tracking-tight">{heading}</h1>
    <div class="h-1" />
    {#if subheading}
      <p class="font-serif italic">{subheading}</p>
    {/if}
  </div>
  {#if $$slots.default}
    <div>
      <slot />
    </div>
  {/if}
</section>
