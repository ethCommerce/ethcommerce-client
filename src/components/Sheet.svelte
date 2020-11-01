<script lang="ts">
  export let id: string | undefined;

  let className: string = '';
  export { className as class };
</script>

<style>
  .sheet {
  }
</style>

<div {id} class={`sheet ${className}`}>
  <slot />
</div>
