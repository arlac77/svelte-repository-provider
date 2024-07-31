<script>
  let { attribute } = $props();
</script>

<label>
  {attribute.name} ({attribute.env})
  <input
    aria-label={attribute.name}
    aria-required={attribute.mandatory ? "true" : "false"}
    maxlength="75"
    size="60"
    autocorrect="off"
    autocapitalize="off"
    type="text"
    placeholder={attribute.name}
    name={attribute.name}
    id={attribute.name}
    required
    bind:value={attribute.value} />
</label>
