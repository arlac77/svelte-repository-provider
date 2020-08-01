<script>
  import AttributeField from "../../src/AttributeField.svelte";
  import SecureAttributeField from "../../src/SecureAttributeField.svelte";
  import PullRequestCard from "../../src/PullRequestCard.svelte";

  class PullRequest {
    static get attributes() {
      return { "a1" : { type: "string" } };
    }
    
    get displayName() {
      return "PR #1";
    }
  }
  
  const pr = new PullRequest();
  
</script>

<AttributeField attribute={{ name: 'a1', value: "value a1"}}/>
<SecureAttributeField attribute={{ name: 's1', value: "value s1"}}/>

<PullRequestCard pullRequest={pr}/>