<script lang="ts">
  import Card from "$components/card.svelte";
  import getBrandColor from "$utils/get-brand-color";
  import hasMatch from "$utils/has-match";
  import { portfolio } from "$data/portfolio";
  import { searchQuery } from "$store";

  $: filteredportfolio = portfolio.filter((portfolio) =>
    hasMatch(portfolio, $searchQuery, ["name", "tags"]),
  );
</script>

<ul role="list" class="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
  {#each filteredportfolio as portfolio}
    <li>
      <Card href={portfolio.repository}>
        <div
          class="flex flex-wrap items-center justify-center gap-2.5 md:justify-start [&>*]:shrink-0"
        >
          <svelte:component
            this={portfolio.icon.svg}
            stroke={1.5}
            size={36}
            aria-hidden="true"
            class={getBrandColor(portfolio.icon.name)}
          />
        </div>
        <div class="h-1.5" />
        <p class="font-semibold">{portfolio.name}</p>
      </Card>
    </li>
  {/each}
</ul>
