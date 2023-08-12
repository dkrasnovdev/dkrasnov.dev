<script lang="ts">
  import { IconSearch } from "$components/icons";
  import Key from "$components/key.svelte";
  import { searchQuery } from "$store";

  export let label: string;

  let element: HTMLElement;

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === "Escape") {
      element.blur();
    }

    if (
      e.key === "/" &&
      element != null &&
      document.activeElement?.tagName === "BODY" &&
      document.activeElement !== element
    ) {
      e.preventDefault();
      element.focus();
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<div
  class="relative flex h-12 w-full items-center space-x-3 overflow-hidden rounded-full border-2 bg-neutral-900 px-3 transition focus-within:ring"
>
  <label for="search">
    <span class="sr-only">{label}</span>
    <span>
      <IconSearch size={20} aria-hidden="true" class="stroke-neutral-500 " />
    </span>
  </label>

  <input
    id="search"
    type="text"
    bind:this={element}
    bind:value={$searchQuery}
    placeholder={label}
    class="h-12 w-full bg-transparent py-3 font-medium placeholder:text-neutral-500 focus:outline-none sm:h-10"
  />

  <div class="absolute right-3">
    <Key>/</Key>
  </div>
</div>
