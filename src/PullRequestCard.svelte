<script>
  import { ObjectLink } from "svelte-guard-history-router";
  import Attributes from "./Attributes.svelte";

  let { pullRequest } = $props();
</script>

<div class="card">
  <div class="card-content">
    <h5 class="card-title">{pullRequest.displayName}</h5>
    <div>
      Source:
      <ObjectLink object={pullRequest.source} />
    </div>
    <div>
      Destination:
      <ObjectLink object={pullRequest.destination} />
    </div>

    <Attributes object={pullRequest} />
  </div>
</div>
