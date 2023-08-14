<script lang="ts">
  import hasMatch from "$utils/has-match";
  import type { CollectionEntry } from "astro:content";
  export let ideas: Array<CollectionEntry<"ideas">>;
  import { searchQuery } from "$store";
  import Card from "./card.svelte";

  $: queriedIdeas = ideas.filter(({ data }) =>
    hasMatch(data, $searchQuery, ["title", "tags"]),
  );
</script>

<ul role="list" class="grid-cols grid gap-6 sm:grid-cols-3 md:grid-cols-4">
  {#each queriedIdeas as idea}
    <li>
      <Card href={`/ideas/${idea.slug}`} linkText="Read">
        <p class="text-sm">
          {new Date(idea.data.date).toLocaleString("en-NZ", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </p>
        <div class="h-5" />
        <h2 class="font-semibold text-neutral-300">{idea.data.title}</h2>
        <p class="text-neutral-400">{idea.data.description}</p>
        <div class="h-2.5"></div>
      </Card>
    </li>
  {/each}
</ul>
