<script lang="ts">
  let className = '';
  export { className as class };
</script>

<style>
  .sheet {
  }
</style>

<div class={`sheet ${className}`}>
  <slot />
</div>
