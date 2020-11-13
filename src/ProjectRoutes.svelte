<script>
    import { Project } from "repository-provider";
    import {
      Route,
      DetailRoute,
      MasterRoute
    } from "svelte-guard-history-router";
    import ProjectsPage from "./ProjectsPage.svelte";
    import ProjectPage from "./ProjectPage.svelte";
    import ProjectLink from "./ProjectLink.svelte";
  
    export let provider;
  </script>
  
  <Route
    path="/project"
    factory={MasterRoute}
    iteratorFor={() => provider.projects}
    objectInstance={Project}
    component={ProjectsPage}>
    <slot />
    <Route
      path="/:project"
      factory={DetailRoute}
      propertyMapping={{ project: 'name' }}
      linkComponent={ProjectLink}
      component={ProjectPage} />
  </Route>
  