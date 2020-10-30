<script lang="ts">
  import Sidebar from "./Sidebar.svelte";
  import { receivePage, receiveSidebar, sendPage, sendSidebar } from "./Page.transitions";

  export let sidebar = "left";
</script>

<style>
  .page {
    @apply grid;
    @apply bg-secondary-100;
    @apply h-screen;

    &.sidebar-left {
      grid-template-columns: theme("sidebar.size") 1fr;

      .page-sidebar {
        @apply order-1;
      }
    }

    &.sidebar-right {
      grid-template-columns: 1fr theme("sidebar.size");

      .page-sidebar {
        @apply order-3;
      }
    }
  }

  /* To prevent selector warning from svelte, to lazy to look into it */
  :global {
      .page + .page {
          @apply absolute top-0;
          @apply w-full;
      }
  }

  .page-content {
    @apply order-2;
    @apply overflow-auto;
  }
</style>

<div
  class={`page sidebar-${sidebar}`}
>
  <div
    class="page-sidebar"
    in:receiveSidebar={{ key: 'sidebar' }}
    out:sendSidebar={{ key: 'sidebar' }}>
    <Sidebar />
  </div>

  <div
    class="page-content"
    in:receivePage={{ key: 'page' }}
    out:sendPage={{ key: 'page' }}
  >
    <slot />
  </div>
</div>
