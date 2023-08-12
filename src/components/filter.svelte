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

<div>
  <label for="search">
    <span class="sr-only">{label}</span>
    <span>
      <IconSearch size={20} aria-hidden="true" />
    </span>
  </label>

  <input
    id="search"
    type="text"
    bind:this={element}
    bind:value={$searchQuery}
    placeholder={label}
    class="bg-black"
  />

  <div>
    <Key></Key>
  </div>
</div>
