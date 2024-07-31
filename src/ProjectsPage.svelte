<script>
  import { ObjectLink } from "svelte-guard-history-router";

  let { router } = $props();

  const cr = router.route;
</script>

<table class="bordered striped hoverable">
  <thead>
    <tr>
      <th aria-sort="none">Project</th>
    </tr>
  </thead>
  <tbody>
    {#each $cr as project}
      <tr>
        <td>
          <ObjectLink object={project} />
        </td>
      </tr>
    {/each}
  </tbody>
</table>
