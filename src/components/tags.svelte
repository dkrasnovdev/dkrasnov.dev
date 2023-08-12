<script lang="ts">
  import { tags } from "$data/tags";
  import { searchQuery } from "$store";
</script>

<ul
  role="list"
  class="flex flex-wrap items-center justify-center gap-3 md:justify-start [&>*]:shrink-0"
>
  <li aria-current={$searchQuery.toLowerCase() === "" ? "true" : "false"}>
    <button
      on:click={() => searchQuery.set("")}
      class="flex h-7 items-center rounded-full p-5 font-semibold capitalize text-neutral-500 transition focus:outline-none focus:ring"
    >
      All portfolio
    </button>
  </li>

  {#each tags as tag}
    <li
      aria-current={$searchQuery.toLowerCase() === tag.toLowerCase()
        ? "true"
        : "false"}
    >
      <button
        on:click={() => searchQuery.set(tag)}
        class="flex h-7 items-center rounded-full p-5 font-semibold capitalize text-neutral-500 transition focus:outline-none focus:ring"
      >
        {tag.replaceAll("-", " ")}
      </button>
    </li>
  {/each}
</ul>

<style lang="postcss">
  [aria-current="true"] > button {
    @apply bg-neutral-900 text-neutral-200;
  }
</style>
