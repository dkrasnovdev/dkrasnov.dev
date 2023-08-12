<script lang="ts">
  const menu = [["GitHub", "https://github.com/dkrasnovdev"]];
</script>

<footer class="">
  <div class="">
    <p class="">
      Copyright &copy; {new Date().getFullYear()} dmitrykrasnov
    </p>

    <nav aria-label="Media">
      <ul role="list" class="">
        {#each menu as [name, href]}
          <li>
            <a {href} class="">
              {name}
            </a>
          </li>
        {/each}
      </ul>
    </nav>
  </div>
</footer>
