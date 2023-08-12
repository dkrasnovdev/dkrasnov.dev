<script lang="ts">
  import hasMatch from "$utils/has-match";
  import { projects } from "$data/projects";
  import { queryProject } from "$store";

  $: filteredProjects = projects.filter((project) =>
    hasMatch(project, $queryProject, ["name", "tags"]),
  );
</script>

<ul class="grid grid-cols-2 gap-5">
  {#each filteredProjects as project}
    <li>
      {#each project.icons as icon}
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
