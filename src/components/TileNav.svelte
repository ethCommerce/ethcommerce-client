<style>
  :global(.tile-nav) {
    @apply flex flex-col;
    @apply h-full;

    width: 50vw;

    &__header,
    &__footer {
      @apply flex-static;

      height: theme('sidebar.size');
    }

    &__header {
      @apply flex items-center;
      @apply px-5;
      @apply text-3xl;
    }

    &__content {
      @apply flex-fill;
    }

    &__footer {
      @apply bg-primary-800;
    }
  }
</style>

<div class="tile-nav">
  <div class="tile-nav__header">
    <h3>Mees</h3>
  </div>

  <div class="tile-nav__content" />

  <div class="tile-nav__footer" />
</div>
