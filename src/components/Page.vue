<template>
  <div class="page" :class="pageClasses">
    <template v-if="navigation === 'left'">
      <NavBar />
    </template>

    <div class="page-content">
      <slot />
    </div>

    <template v-if="navigation === 'right'">
      <NavBar />
    </template>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { NavBar } from '@/components';

@Options({
  components: {
    NavBar,
  },
  props: {
    navigation: { type: String, default: 'left' },
  },
})
export default class Page extends Vue {
  public navigation!: string;

  public get pageClasses(): Record<string, boolean> {
    return {
      [`navigation-${this.navigation}`]: true,
    };
  }
}
</script>

<style>
.page {
  @apply grid;
  @apply bg-secondary-100;
  @apply h-screen;

  &.navigation-left {
    grid-template-columns: theme('navbar.size') 1fr;
  }

  &.navigation-right {
    grid-template-columns: 1fr theme('navbar.size');
  }
}

.page-content {
  @apply overflow-auto;
}
</style>