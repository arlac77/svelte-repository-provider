<script>
  let { entry } = $props();
</script>

<h1>{entry.name}</h1>

{#await entry.string}
  <p>...waiting</p>
{:then string}
  {string}
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
