<script lang="ts">
  import Card from "$components/card.svelte";
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
          {#each project.icons as icon}
            <svelte:component
              this={icon}
              stroke={1.5}
              aria-hidden="true"
              class="text-neutral-500"
            />
          {/each}
        </div>
        <div class="h-1.5" />
        <p class="font-semibold">{project.name}</p>
      </Card>
    </li>
  {/each}
</ul>
