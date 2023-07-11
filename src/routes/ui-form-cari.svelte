<script>
  let nik;
  let error;
  let errMessage;
  $: nikLength = (nik && nik.toString().length) || "";

  function validated() {
    if (nikLength != 16) {
      error = true;
      errMessage = "Jumlah harus 16 nomor!";
    }

    if (nikLength == 16) {
      error = false;
      errMessage = "OK";
    }
  }
</script>

<section>
  <h2>Cari data pensiunan</h2>
  <p>Masukkan NIK KTP Pensiunan</p>
  <form method="get" action="/cari/{nik}" class:error>
    <input
      type="number"
      title="Masukkan NIK KTP"
      bind:value={nik}
      placeholder="NIK KTP"
      on:keyup={validated}
    />
    <button type="submit" disabled={error || !nik}>Cari</button>
  </form>
  <div class:error>{(nik && error && `Jumlah : ${nikLength}`) || ""}</div>
  <div class:error>{errMessage ?? ""}</div>
</section>

<style>
  section {
    margin: 1rem;
  }

  form {
    display: flex;
    background-color: var(--bg-2);
    border-radius: 1rem;
    overflow: hidden;
    border: 2px solid var(--bg-3);
    margin: 0.5rem 0;
  }

  form.error {
    border-color: red;
  }

  div.error {
    color: red;
  }

  input {
    padding: 1rem 0.5rem;
    font-size: 1.4rem;
    background: transparent;
    border: none;
    outline: none;
    width: 100%;
  }

  form:focus-within {
    outline: 4px solid hsla(40, 100%, 75%, 0.6);
  }

  button {
    padding: 1rem;
    font-size: inherit;
    border: none;
    background-color: var(--primary);
    color: white;
    outline: none;
    font-weight: bold;
    letter-spacing: 1px;
    cursor: pointer;
  }

  button:disabled {
    opacity: 0.6;
    color: var(--bg-4);
  }
</style>
