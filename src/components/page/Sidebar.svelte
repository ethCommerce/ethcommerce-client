<script lang="ts">
  import { Button, Search, TileNav } from '@/components';
  import { stores } from '@sapper/app';
  import { sidebar } from '@/components/page/store';

  const { page } = stores();

  page.subscribe(onPageChange);

  function onPageChange({ query }) {
    if (Object.prototype.hasOwnProperty.call(query, 'search')) {
      sidebar.expand('search');
    } else if (Object.prototype.hasOwnProperty.call(query, 'tiles')) {
      sidebar.expand('tiles');
    } else {
      sidebar.contract();
    }
  }
</script>

<style>
  .sidebar {
    @apply flex;
    @apply fixed;
    @apply bg-primary-800 bg-opacity-75;
    @apply text-secondary-100;
    @apply h-screen;

    backdrop-filter: blur(2px);

    &__content {
      @apply flex flex-col;
      @apply bg-primary-900;
    }

    :global(.sidebar__item) {
      flex: 0 0 theme('sidebar.size');
      width: theme('sidebar.size');
    }
  }
</style>

<div class="sidebar">
  {#if $sidebar.expand}
    <div class="sidebar__expand">
      {#if $sidebar.expand === 'search'}
        <Search />
      {:else if $sidebar.expand === 'tiles'}
        <TileNav />
      {/if}
    </div>
  {/if}

  <div class="sidebar__content">
    <Button class="sidebar__item brand" href="/">EC</Button>

    {#if $sidebar.expand !== 'search'}
      <Button class="sidebar__item search" href="?search">?</Button>
    {:else}
      <Button class="sidebar__item search active" href="?">X</Button>
    {/if}

    <div class="flex-fill" />

    {#if $sidebar.expand !== 'tiles'}
      <Button class="sidebar__item nav" href="?tiles">::</Button>
    {:else}
      <Button class="sidebar__item nav active" href="?">X</Button>
    {/if}
  </div>
</div>
