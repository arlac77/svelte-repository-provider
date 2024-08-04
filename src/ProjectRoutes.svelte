<script>
    import { Project } from "repository-provider";
    import {
      Route,
      DetailRoute,
      MasterRoute
    } from "svelte-guard-history-router";
    import ProjectsPage from "./ProjectsPage.svelte";
    import ProjectPage from "./ProjectPage.svelte";
    import DisplayNameLink from "./DisplayNameLink.svelte";
  
    let { provider, projectItem } = $props();
  </script>
  
  <Route
    path="/project"
    factory={MasterRoute}
    iteratorFor={() => provider.projects}
    objectInstance={Project}
    component={ProjectsPage}>
    {@render projectItem()};
    <Route
      path="/:project"
      factory={DetailRoute}
      propertyMapping={{ project: 'name' }}
      linkComponent={DisplayNameLink}
      component={ProjectPage} />
  </Route>
  