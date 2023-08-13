<script lang="ts">
  const menu = [
    ["GitHub", "https://github.com/dkrasnovdev"],
    ["LinkedIn", "https://github.com/dkrasnovdev"],
    ["Telegram", "https://t.me/dkrasnovdev"],
  ];
</script>

<footer
  class="item-center flex h-footer-height justify-center border-t-2 border-neutral-800 px-page-gutter"
>
  <div
    class="flex w-full max-w-content flex-col-reverse items-center justify-center gap-3 sm:flex-row sm:justify-between sm:gap-0"
  >
    <p class="text-sm font-semibold text-neutral-600">dmitrykrasnov</p>
    <nav aria-label="Socials">
      <ul role="list" class="flex items-center">
        {#each menu as [name, href]}
          <li>
            <a
              {href}
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
