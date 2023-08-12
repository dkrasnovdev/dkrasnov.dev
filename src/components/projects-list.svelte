<script lang="ts">
  import Card from "$components/card.svelte";
  import getBrandColor from "$utils/get-brand-color";
  import hasMatch from "$utils/has-match";
  import { projects } from "$data/projects";
  import { searchQuery } from "$store";

  $: filteredProjects = projects.filter((project) =>
    hasMatch(project, $searchQuery, ["name", "tags"]),
  );
</script>

<ul role="list" class="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
  {#each filteredProjects as project}
    <li>
      <Card href={project.repository}>
        <div
          class="flex flex-wrap items-center justify-center gap-2.5 md:justify-start [&>*]:shrink-0"
        >
          <svelte:component
            this={project.icon.svg}
            stroke={1.5}
            size={36}
            aria-hidden="true"
            class={getBrandColor(project.icon.name)}
          />
        </div>
        <div class="h-1.5" />
        <p class="font-semibold">{project.name}</p>
      </Card>
    </li>
  {/each}
</ul>
