<script lang="ts">
  export let heading: string;
  export let subheading: Optional<string> = undefined;
  export let tagline: Optional<string> = undefined;
</script>

<section>
  <div>
    <h1>{heading}</h1>
    {#if subheading}
      <p>{subheading}</p>
    {/if}
    {#if tagline}
      <p>{tagline}</p>
    {/if}
  </div>
</section>
