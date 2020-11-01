<script lang="ts">
  import { afterUpdate } from 'svelte';
  import { writable, Writable } from 'svelte/store';
  import { goto, stores } from '@sapper/app';
  import { search, SearchResult } from './query';
  import { BehaviorSubject } from 'rxjs';

  const { page } = stores();
  const query: Writable<string> = writable<string>($page.query.search);
  let results: BehaviorSubject<SearchResult[]>;
  let inputElement: HTMLElement | undefined;

  function autofocus(element?: HTMLElement) {
    element && setTimeout(() => element.focus());
  }

  query.subscribe(async (q) => {
    results = (await search(q)) as BehaviorSubject<any[]>;

    if (typeof window !== 'undefined') {
      goto(`?search=${q}`);
    }
  });

  afterUpdate(() => {
    autofocus(inputElement);
  });
</script>

<style>
  :global(.search) {
    width: 50vw;

    &__header,
    &__input {
      height: theme('sidebar.size');
    }

    &__header {
      @apply flex items-center;
      @apply px-5;
      @apply text-3xl;
    }

    &__input input {
      @apply bg-secondary-100;
      @apply px-6;
      @apply w-full;
      @apply text-2xl text-primary-900;

      height: theme('sidebar.size');
    }

    &__results {
      @apply grid;

      @screen sm {
        grid-template-columns: repeat(2, 1fr);
      }

      @screen md {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }
</style>

<div class="search">
  <div class="search__header">
    <h3>Search</h3>
  </div>

  <div class="search__input">
    <input
      type="text"
      bind:this={inputElement}
      bind:value={$query}
      placeholder="Mees' dildos inc" />
  </div>

  {#if $results}
    <div class="search__results">
      {#each $results as result}
        <div class="search__result">
          <h4>{result.get('title')}</h4>
          <div>{result.get('description')}</div>
        </div>
      {/each}
    </div>
  {/if}
</div>
