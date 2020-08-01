<script>
  import { Router } from "svelte-guard-history-router";
  import { MultiGroupProvider, PullRequest } from "repository-provider";
  import AttributeField from "../../src/AttributeField.svelte";
  import SecureAttributeField from "../../src/SecureAttributeField.svelte";
  import PullRequestCard from "../../src/PullRequestCard.svelte";
  import RepositoryGroupCard from "../../src/RepositoryGroupCard.svelte";

  const provider = new MultiGroupProvider();
  const repositoryGroup = provider.addRepositoryGroup("rg1");
  const repository = repositoryGroup.addRepository("r1");
  const b1 = repository.addBranch("b1");
  const b2 = repository.addBranch("b2");
  const pullRequest = new PullRequest(b1, b2, 4711);
</script>

<Router>
  <PullRequestCard {pullRequest} />
  <RepositoryGroupCard {repositoryGroup} />
</Router>

<AttributeField attribute={{ name: 'a1', value: 'value a1' }} />
<SecureAttributeField attribute={{ name: 's1', value: 'value s1' }} />
