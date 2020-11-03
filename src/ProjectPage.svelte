<script>
  export let router;

  const cr = router.route;
</script>

{#if $cr}
  <h1>{cr.name}</h1>
{:else}No such project{/if}
