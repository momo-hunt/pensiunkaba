<script>
  import UiAkun from "./ui-akun.svelte";
  import { formatDateIndo } from "$lib/util/date-time";

  export let data = {};
</script>

<section>
  <header>
    <h2>{data?.nama_pensiunan}</h2>
    <h4>NIK : {data?.nik}</h4>
  </header>

  <UiAkun {data} />

  <article>
    <div class="row">
      <p>Nama Lengkap :</p>
      <h4>{data?.nama_pensiunan}</h4>
    </div>
    <div class="row">
      <p>KTP :</p>
      <h4>{data?.nik}</h4>
    </div>
    <div class="row">
      <p>Tanggal Lahir :</p>
      <h4>{formatDateIndo(data?.tanggal_lahir)}</h4>
    </div>
    <div class="row">
      <p>Tanggal Lahir Ahliwaris :</p>
      <h4>{formatDateIndo(data?.tanggal_lahir_ahliwaris)}</h4>
    </div>
    <div class="row">
      <p>Alamat :</p>
      <h4>{data?.alamat}</h4>
    </div>
    <div class="row">
      <p>Unit kerja :</p>
      <h4>{data?.unit_kerja}</h4>
    </div>
  </article>
</section>

<style>
  header {
    padding: 1rem;
    background-color: var(--bg-2);
  }

  article {
    background-color: white;
    padding: 1rem;
    margin: 1rem;
    border: 2px solid var(--bg-1);
    border-radius: 8px;
  }

  article .row {
    margin-top: 0.5rem;
    border-bottom: 1px solid var(--bg-1);
  }

  article .row:first-child {
    margin: 0;
  }

  article .row p {
    opacity: 0.7;
  }
</style>
