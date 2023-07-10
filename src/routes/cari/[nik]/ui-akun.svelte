<script>
  export let data;

  function renderText(val) {
    if (!val) return;
    return val.split("-").join("");
  }

  let num;
  function copyTo(id, val) {
    navigator.clipboard.writeText(val);
    num = id;
    setTimeout(() => {
      num = null;
    }, 2000);
  }
</script>

<article>
  <header>
    <h3>Untuk Login Aplikasi</h3>
  </header>
  <label for="nomor_peserta"
    >Nomor Peserta <br />
    <input
      type="text"
      id="nomor_peserta"
      readonly
      value={renderText(data?.nomor_peserta)}
      on:focus={() => copyTo(1, renderText(data?.nomor_peserta))}
    />
    {#if num == 1}
      <div>Ter-copy</div>
    {/if}
    <small>Klik to Copy</small>
  </label>

  <label for="pin"
    >PIN <br />
    <input
      type="text"
      id="pin"
      readonly
      value={data?.pin}
      on:focus={() => copyTo(2, data?.pin)}
    />
    {#if num == 2}
      <div>Ter-copy</div>
    {/if}
    <small>Klik to Copy</small>
  </label>
</article>

<style>
  article {
    background-color: white;
    padding: 1rem;
    margin: 1rem;
    border: 2px solid var(--bg-1);
    border-radius: 8px;
  }

  label {
    position: relative;
    display: block;
    margin-bottom: 1rem;
  }

  label > div {
    background-color: black;
    color: white;
    width: fit-content;
    padding: 0.5rem 1rem;
    border-radius: 9rem 9rem 9rem 0;
    position: absolute;
    top: -1.2rem;
    right: 0;
  }

  label:last-child {
    margin: 0;
  }

  input {
    font-size: 2rem;
    width: 100%;
    padding: 0.5rem;
    background-color: var(--bg-1);
    border: 2px solid var(--bg-3);
    border-radius: 8px;
  }
</style>
