<template>
  <div class="nav-bar">
    <Button class="brand" to="/">
      <img src="//via.placeholder.com/64/90CDF4?text=EC" />
    </Button>

    <Button class="brand" to="/">
      <img src="//via.placeholder.com/64/90CDF4?text=?" />
    </Button>

    <div class="flex-fill" />

    <nav>
      <ul>
        <li v-for="item in navItems" :key="item.label">
          <NavButton class="h-full w-full" :to="item.to">
            <template v-slot:icon>
              {{ item.label.charAt(0).toUpperCase() }}
            </template>
            {{ item.label }}
          </NavButton>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Button from './Button.vue';
import NavButton from './NavButton.vue';

export interface NavItem {
  label: string;
  to: string;
}

@Options({
  components: {
    Button,
    NavButton,
  },
})
export default class AppNavBar extends Vue {
  public navItems: NavItem[] = [
    {
      label: 'Home',
      to: '/',
    },
  ];
}
</script>

<style>
.nav-bar {
  @apply flex flex-col;
  @apply bg-primary-300;

  .brand {
    max-width: theme('navbar.size');
  }

  nav > ul {
    @apply grid;
    grid-template-rows: theme('navbar.size');
  }
}
</style>
