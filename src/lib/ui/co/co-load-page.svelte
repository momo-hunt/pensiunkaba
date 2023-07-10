<script>
  import { fade } from "svelte/transition";
  export let show = false;
</script>

{#if show}
  <section transition:fade>
    <div>
      <span />
      <p>Loading...</p>
    </div>
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

  section > div {
    padding: 1rem;
    background-color: white;
    display: flex;
    align-items: center;
    gap: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 1rem hsl(40, 75%, 50%);
  }

  section span {
    position: relative;
    display: inline-block;
    width: 2rem;
    aspect-ratio: 1/1;
    border: 4px solid hsl(40, 75%, 90%);
    border-radius: 50%;
  }

  section span::before {
    content: "";
    position: absolute;
    top: -4px;
    left: -4px;
    width: 100%;
    height: 100%;
    border: 4px solid hsl(40, 75%, 50%);
    border-color: transparent transparent transparent hsl(40, 75%, 50%);
    border-radius: 50%;
    animation: rotate 1s linear infinite;
  }

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }

  p {
    letter-spacing: 2px;
  }
</style>
