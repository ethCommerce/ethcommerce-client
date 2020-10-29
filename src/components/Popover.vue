<template>
  <template v-if="active">
    <div class="popover">
      <slot />
    </div>
  </template>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    active: Boolean,
  },
})
export default class Popover extends Vue {
  public active!: boolean;
}
</script>

<style>
.popover {
  @apply absolute;
}
</style>
