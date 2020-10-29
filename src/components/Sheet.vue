<template>
  <div class="sheet">
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class Sheet extends Vue {}
</script>

<style>
.sheet {}
</style>
