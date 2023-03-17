<script>
  export let router;

  const router = router.route;
</script>

{#if $router}
  <h1>{router.name}</h1>
{:else}No such project{/if}
