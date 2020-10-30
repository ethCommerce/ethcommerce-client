<script lang="ts">
  export let href: string | undefined;
  export let type: string = "button";
  let className: string = "";
  export { className as class };

  const role = 'button';
</script>

<style>
  .button {
    @apply flex items-center justify-center;

    &:hover,
    &:active,
    &.active {
      @apply bg-primary-800;
    }
  }
</style>

{#if href}
  <a
    class={`button ${className}`}
    {href}
    {role}
    on:click
    on:mouseenter
    on:mouseleave
  >
    <slot />
  </a>
{:else}
  <button
    class={`button ${className}`}
    {type}
    {role}
    on:click
    on:mouseenter
    on:mouseleave>
    <slot />
  </button>
{/if}
