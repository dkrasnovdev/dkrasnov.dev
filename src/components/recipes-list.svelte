<script lang="ts">
  import Card from "$components/card.svelte";
  import hasMatch from "$utils/has-match";
  import { recipes } from "$data/recipes";
  import { searchQuery } from "$store";

  $: queriedRecipes = recipes.filter((recipes) =>
    hasMatch(recipes, $searchQuery, ["name", "tags"]),
  );
</script>

<ul role="list" class="grid-cols grid gap-6 sm:grid-cols-3 md:grid-cols-4">
  {#each queriedRecipes as recipe}
    <li>
      <Card
        href={recipe.repository}
        linkText={recipe.repository.startsWith("https://github.com")
          ? "Repository"
          : "Open"}
      >
        <div
          class="flex flex-wrap items-center justify-start gap-2.5 [&>*]:shrink-0"
        >
          <svelte:component
            this={recipe.icon.svg}
            size={24}
            aria-hidden="true"
            class="fill-neutral-200"
          />
        </div>
        <div class="h-5" />
        <h2 class="font-semibold text-neutral-300">{recipe.name}</h2>
        <p class="text-neutral-400">{recipe.description}</p>
        <div class="h-2.5"></div>
      </Card>
    </li>
  {/each}
</ul>
