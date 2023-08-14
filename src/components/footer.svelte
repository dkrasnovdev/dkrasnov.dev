<script lang="ts">
  import { socials } from "$data/socials";
</script>

<footer
  class="item-center flex h-footer-height justify-center border-t-2 border-neutral-800 px-page-gutter"
>
  <div
    class="flex w-full max-w-content flex-col-reverse items-center justify-center gap-3 sm:flex-row sm:justify-between sm:gap-0"
  >
    <a
      href="/"
      class="-ml-2.5 rounded-md px-2.5 py-1.5 text-sm font-semibold text-neutral-500 transition hover:text-neutral-200 focus:outline-none focus:ring focus:ring-inset"
      >dmitrykrasnov</a
    >
    <nav aria-label="Socials">
      <ul role="list" class="flex items-center">
        {#each socials as [name, href]}
          <li>
            <a
              {href}
              target="_blank"
              class="rounded-md px-2.5 py-1.5 text-sm font-semibold text-neutral-500 transition hover:text-neutral-200 focus:outline-none focus:ring focus:ring-inset"
            >
              {name}
            </a>
          </li>
        {/each}
      </ul>
    </nav>
  </div>
</footer>
