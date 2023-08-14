<script lang="ts">
  import Card from "$components/card.svelte";
  import hasMatch from "$utils/has-match";
  import { projects } from "$data/projects";
  import { searchQuery } from "$store";

  $: queriedProjects = projects.filter((project) =>
    hasMatch(project, $searchQuery, ["name", "tags"]),
  );
</script>

<ul role="list" class="grid-cols grid gap-6 sm:grid-cols-3 md:grid-cols-4">
  {#each queriedProjects as project}
    <li>
      <Card
        href={project.repository}
        linkText={project.repository.startsWith("https://github.com")
          ? "Repository"
          : "Open"}
      >
        <div
          class="flex flex-wrap items-center justify-start gap-2.5 [&>*]:shrink-0"
        >
          <svelte:component
            this={project.icon.svg}
            size={24}
            aria-hidden="true"
            class="fill-neutral-200"
          />
        </div>
        <div class="h-5" />
        <h2 class="font-semibold text-neutral-300">{project.name}</h2>
        <p class="text-neutral-400">{project.description}</p>
        <div class="h-2.5"></div>
      </Card>
    </li>
  {/each}
</ul>
