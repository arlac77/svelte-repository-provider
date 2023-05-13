<script>
  import { Router, Route, Outlet } from "svelte-guard-history-router";
  import { base } from "./constants.mjs";
  import Home from "./Home.svelte";
</script>

<Router {base}>
  <nav>
    <Route href="/" path="*" component={Home}>Repository Example</Route>
  </nav>

  <main>
    <Outlet />
  </main>
</Router>
