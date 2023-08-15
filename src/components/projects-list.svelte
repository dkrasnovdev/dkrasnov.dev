<script lang="ts">
  import hasMatch from "$utils/has-match";
  import ListItem from "$components/list-item.svelte";
  import { projects } from "$data/projects";
  import { searchQuery } from "$store";

  $: queriedProjects = projects.filter((project) =>
    hasMatch(project, $searchQuery, ["name", "tags"]),
  );
</script>

<ul role="list" class="grid-cols grid gap-6 sm:grid-cols-3 md:grid-cols-4">
  {#each queriedProjects as project}
    <ListItem
      url={project.url}
      name={project.name}
      description={project.description}
      icon={project.icon}
    />
  {/each}
</ul>
