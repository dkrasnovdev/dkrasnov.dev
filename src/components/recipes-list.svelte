<script lang="ts">
  import hasMatch from "$utils/has-match";
  import ListItem from "$components/list-item.svelte";
  import { recipes } from "$data/recipes";
  import { searchQuery } from "$store";

  $: queriedRecipes = recipes.filter((recipes) =>
    hasMatch(recipes, $searchQuery, ["name", "tags"]),
  );
</script>

<ul role="list" class="grid-cols grid gap-6 sm:grid-cols-3 md:grid-cols-4">
  {#each queriedRecipes as recipe}
    <ListItem
      url={recipe.url}
      name={recipe.name}
      description={recipe.description}
      icon={recipe.icon}
    />
  {/each}
</ul>
