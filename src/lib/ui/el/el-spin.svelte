<script>
  export let text = "Loading...";
</script>

<div>
  <span />
  <p>{text}</p>
</div>

<style>
  div {
    padding: 1rem;
    background-color: white;
    display: flex;
    align-items: center;
    gap: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 1rem hsl(40, 75%, 50%);
  }

  span {
    position: relative;
    display: inline-block;
    width: 2rem;
    aspect-ratio: 1/1;
    border: 4px solid hsl(40, 75%, 90%);
    border-radius: 50%;
  }

  span::before {
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
