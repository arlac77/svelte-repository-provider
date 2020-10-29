<script>
  export let object;
</script>

<h1>{object.name}</h1>

{#await object.getString()}
  <p>...waiting</p>
{:then string}
  {string}
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
