<script>
  let nik;
  let error;

  function validated() {
    error = undefined;
    if (nik && isNaN(nik)) error = "Harus diisi nomor!";
    if (nik.length != 16) error += "<br/> Jumlah harus NIK 16 nomor!";
  }
</script>

<section>
  <h2>Cari data pensiunan</h2>
  <form method="get" action="/cari/{nik}">
    <input
      type="search"
      title="Masukkan NIK KTP"
      bind:value={nik}
      placeholder="Masukkan NIK KTP"
      on:keyup={validated}
    />
    <button type="submit" disabled={error}>Cari</button>
  </form>
  <small class:error>{@html error ?? "Masukkan NIK KTP Pensiunan"}</small>
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

  small.error {
    color: red;
  }
</style>
