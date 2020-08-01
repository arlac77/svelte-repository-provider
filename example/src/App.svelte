<script>
  import { Router } from "svelte-guard-history-router";
  import AttributeField from "../../src/AttributeField.svelte";
  import SecureAttributeField from "../../src/SecureAttributeField.svelte";
  import PullRequestCard from "../../src/PullRequestCard.svelte";
  import RepositoryGroupCard from "../../src/RepositoryGroupCard.svelte";

  class PullRequest {
    static get attributes() {
      return { a1: { type: "string" } };
    }

    get displayName() {
      return "PR #1";
    }
  }

  const pullRequest = new PullRequest();

  class RepositoryGroup {
    static get attributes() {
      return { a1: { type: "string" } };
    }

    get displayName() {
      return "RG #1";
    }
  }

  const repositoryGroup = new RepositoryGroup();
</script>

<Router>
  <PullRequestCard {pullRequest} />
  <RepositoryGroupCard {repositoryGroup} />
</Router>

<AttributeField attribute={{ name: 'a1', value: 'value a1' }} />
<SecureAttributeField attribute={{ name: 's1', value: 'value s1' }} />
