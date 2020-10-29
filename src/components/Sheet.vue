<template>
  <div class="sheet" :class="sheetClasses">
    <slot />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    padding: Boolean,
  },
})
export default class Sheet extends Vue {
  public padding!: boolean;

  public get sheetClasses() {
    return {
      padding: this.padding,
    };
  }
}
</script>

<style>
.sheet {
  &.padding {
    @apply p-16;
  }
}
</style>
