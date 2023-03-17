<script>
  export let router;

  const route = router.route;
</script>

{#if $route}
  <h1>{route.name}</h1>
{:else}No such project{/if}
