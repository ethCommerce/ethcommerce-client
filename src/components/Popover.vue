<template>
  <div class="popover">
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class Popover extends Vue {
  mounted() {
    console.log(this.$el);
  }
}
</script>

<style>
.popover {
  @apply absolute;
}
</style>
