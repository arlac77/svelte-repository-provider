<script>
  let { router } = $props();

  const route = router.route;
</script>

{#if $route}
  <h1>{route.name}</h1>
{:else}No such project{/if}
