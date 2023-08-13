<script lang="ts">
  import Card from "$components/card.svelte";
  import getBrandColor from "$utils/get-brand-color";
  import hasMatch from "$utils/has-match";
  import { projects } from "$data/projects";
  import { searchQuery } from "$store";

  $: queriedProjects = projects.filter((projects) =>
    hasMatch(projects, $searchQuery, ["name", "tags"]),
  );
</script>

<ul role="list" class="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
  {#each queriedProjects as project}
    <li>
      <Card
        href={project.repository}
        linkText={project.repository.startsWith("https://github.com")
          ? "Repository"
          : "Visit"}
      >
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
        <h2 class="font-semibold text-neutral-300">{project.name}</h2>
        <div class="h-2.5" />
        <p class="text-neutral-400">{project.description}</p>
        <div class="h-5"></div>
      </Card>
    </li>
  {/each}
</ul>
