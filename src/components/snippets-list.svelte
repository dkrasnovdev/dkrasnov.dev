<script lang="ts">
  import hasMatch from "$utils/has-match";
  import { portfolio } from "$data/portfolio";
  import { searchQuery } from "$store";

  $: filteredportfolio = portfolio.filter((portfolio) =>
    hasMatch(portfolio, $searchQuery, ["name", "tags"]),
  );
</script>

<ul class="grid grid-cols-2 gap-5">
  {#each filteredportfolio as portfolio}
    <li>
      {#each portfolio.icons as icon}
        <svelte:component
          this={icon}
          stroke={1.5}
          aria-hidden="true"
          class="text-subtle"
        />
      {/each}
    </li>
  {/each}
</ul>
