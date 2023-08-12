<script lang="ts">
  export let size = 24;
  export let stroke = 2;
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  viewBox="0 0 24 24"
  stroke-width={stroke}
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
  {...$$restProps}
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M14.5 4h2.5a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-5"
  ></path>
  <path d="M6 5l-2 2l2 2"></path>
  <path d="M10 9l2 -2l-2 -2"></path>
</svg>
