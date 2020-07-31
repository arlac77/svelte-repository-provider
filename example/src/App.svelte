<script>
  import AttributeField from "../../src/AttributeField.svelte";
  import SecureAttributeField from "../../src/SecureAttributeField.svelte";
</script>

<AttributeField attribute={{ name: 'a1', value: "value a1"}}/>
<SecureAttributeField attribute={{ name: 's1', value: "value s1"}}/>
