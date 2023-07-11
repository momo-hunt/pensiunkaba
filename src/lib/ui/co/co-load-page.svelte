<script>
  import { fade } from "svelte/transition";
  import ElSpin from "../el/el-spin.svelte";
  export let show = false;
</script>

{#if show}
  <section transition:fade>
    <ElSpin />
  </section>
{/if}

<style>
  section {
    position: fixed;
    z-index: 9;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
