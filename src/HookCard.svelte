<script>
  import Attributes from "./Attributes.svelte";

  let { hook } = $props();
</script>

<div class="card">
  <div class="card-content">
    <h5 class="card-title">{hook.displayName}</h5>
    <ul>
      {#each [...hook.events] as event}
        <li>{event}</li>
      {/each}
    </ul>

    <Attributes object={hook} />
  </div>
</div>
