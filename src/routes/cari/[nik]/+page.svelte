<script>
  import CoHeader from "$lib/ui/co/co-header.svelte";
  import ElSpin from "../../../lib/ui/el/el-spin.svelte";
  import UiDetail from "./ui-detail.svelte";

  export let data;

  async function loadData() {
    if (!data?.nik) return;
    const res = await fetch(`/api/pensiun/${data?.nik}`);
    return await res.json();
  }

  let promise = loadData();
  let nik = data?.nik;
</script>

<CoHeader />
<h2>Data Pensiun</h2>

{#await promise}
  <div class="loading">
    <ElSpin text="Memuat data.." />
  </div>
{:then data}
  {#if data?.results.length == 0}
    <article>
      <h4>Hasil pencarian :<br />"{nik}"</h4>
      <p>Data tidak ditemukan !</p>
    </article>
  {:else}
    <UiDetail data={data?.results[0]} />
  {/if}
{:catch error}
  <pre>
    <code>
      {JSON.stringify({ error }, null, 2)}
    </code>
  </pre>
{/await}

<style>
  .loading {
    padding: 1rem;
  }

  h2 {
    padding: 1rem;
  }

  article {
    background-color: white;
    padding: 1rem;
    margin: 1rem;
    border: 2px solid var(--bg-1);
    border-radius: 8px;
  }

  article p {
    margin-top: 1rem;
    text-align: center;
  }
</style>
