<script>
  import UiAkun from "./ui-akun.svelte";

  export let data = {};
</script>

<section>
  <header>
    <h2>{data?.nama_pensiunan}</h2>
    <h4>NIK : {data?.nik}</h4>
  </header>

  <UiAkun {data} />
</section>

<style>
  header {
    padding: 1rem;
    background-color: var(--bg-2);
  }
</style>
