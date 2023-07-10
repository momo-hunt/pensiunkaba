<script>
  import "../app.css";
  import { beforeNavigate, afterNavigate } from "$app/navigation";
  import CoLoadPage from "../lib/ui/co/co-load-page.svelte";

  let loading;
  beforeNavigate(() => {
    loading = true;
  });

  afterNavigate(() => {
    loading = false;
  });
</script>

<svelte:head>
  <title>Pensiun Kaba</title>
</svelte:head>

<CoLoadPage show={loading} />

<main>
  <div>
    <slot />
  </div>

  <footer>
    <div>&copy; Copyright 2023</div>
    <div>Powered by MomoCreative</div>
  </footer>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    min-height: 100dvh;
  }

  footer {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    margin-top: auto;
    background-color: var(--bg-2);
    font-size: 14px;
  }
</style>
