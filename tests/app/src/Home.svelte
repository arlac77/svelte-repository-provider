<script>
  import { MultiGroupProvider, PullRequest, Hook } from "repository-provider";
  import { StringContentEntry } from "content-entry";
  import {
    AttributeField,
    SecureAttributeField,
    PullRequestCard,
    RepositoryGroupCard,
    HookCard,
    ContentEntryCard
  } from "../../../src/index.svelte";

  const provider = new MultiGroupProvider();
  const repositoryGroup = provider.addRepositoryGroup("rg1");
  const repository = repositoryGroup.addRepository("r1");
  const b1 = repository.addBranch("b1");
  const b2 = repository.addBranch("b2");
  const pullRequest = new PullRequest(b1, b2, 4711);

  const hook = new Hook(repository, "h1");

  const entry = new StringContentEntry("entry name", "lines 1");
</script>

<div class="canvas">
  <PullRequestCard {pullRequest} />
  <RepositoryGroupCard {repositoryGroup} />
  <HookCard {hook} />

  <AttributeField attribute={{ name: "a1", value: "value a1" }} />
  <SecureAttributeField attribute={{ name: "s1", value: "value s1" }} />

  <ContentEntryCard {entry} />
</div>
