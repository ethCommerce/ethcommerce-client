<template>
  <component
    :is="tagName"
    class="button"
    :type="type"
    :to="to"
    :href="href"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  inheritAttrs: false,
  props: {
    type: { type: String, default: 'button' },
    to: String,
    href: String,
  },
})
export default class Button extends Vue {
  public type!: string;
  public to!: string | null;
  public href!: string | null;

  get tagName(): string {
    if (this.to) {
      return 'RouterLink';
    } else if (this.href) {
      return 'a';
    }

    return 'button';
  }
}
</script>

<style>
.button {
  @apply flex items-center justify-center;

  &:hover {
    @apply bg-primary-300 bg-opacity-25;
  }
}
</style>
