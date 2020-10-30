<script lang="ts">
  import { Button } from "@/components";
</script>

<style>
  .sidebar {

      &__content {
          @apply flex flex-col;
          @apply h-screen;
          @apply bg-primary-900;
          @apply text-secondary-100;
      }

    :global(.sidebar__item) {
      flex: 0 0 theme("sidebar.size");
      width: theme("sidebar.size");
    }
  }
</style>

<div class="sidebar">
  <div class="sidebar__content">
    <Button class="sidebar__item brand" href="/">EC</Button>

    <Button class="sidebar__item help" href="/search">?</Button>

    <div class="flex-fill" />

    <Button class="sidebar__item">::</Button>
  </div>

  <div class="sidebar__expand">
    <slot name="expand"/>
  </div>
</div>
