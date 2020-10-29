<template>
  <component
    :is="tagName"
    class="button"
    :class="buttonClasses"
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
    active: Boolean,
  },
})
export default class Button extends Vue {
  public readonly to!: string;
  public readonly active!: boolean;

  get isAnchor(): boolean {
    return !!this.$attrs.href;
  }

  get isRouterLink(): boolean {
    return !!this.$attrs.to;
  }

  get tagName(): string {
    if (this.isRouterLink) {
      return 'RouterLink';
    } else if (this.isAnchor) {
      return 'a';
    }

    return 'button';
  }

  get buttonClasses(): Record<string, boolean> {
    return {
      active: this.active,
    };
  }
}
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
