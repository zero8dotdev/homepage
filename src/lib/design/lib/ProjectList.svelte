<script>
  import ProjectListItem from './ProjectListItem.svelte';
  export let title = 'Selected work';
  /** @type {Array<{status: 'live' | 'wip', name: string, tags: string, desc: string}>} */
  export let projects = [];
</script>

<section class="section" id="work">
  <h2>{title}</h2>
  <ul>
    {#each projects as p}
      <ProjectListItem status={p.status} name={p.name} tags={p.tags} desc={p.desc} />
    {/each}
  </ul>
</section>

<style>
  .section { margin-bottom: 72px; }
  h2 {
    font-family: var(--font-sans);
    font-size: 22px;
    font-weight: 600;
    letter-spacing: -0.02em;
    margin: 0 0 24px;
    color: var(--fg);
  }
  ul { list-style: none; margin: 0; padding: 0; }
</style>
