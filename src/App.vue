<template>
  <div class="app">
    <NavBar />
    <div class="app-content">
      <RouterView />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { NavBar } from '@/components';

@Options({
  components: {
    NavBar,
  },
})
export default class App extends Vue {}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

.app {
  @apply grid;
  @apply bg-secondary-100;
  @apply h-screen;

  grid-template-columns: theme('navbar.size') 1fr;
}

.app-content {
  @apply overflow-auto;
}
</style>
