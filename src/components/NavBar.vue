<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Button from './Button.vue';
import NavButton from './NavButton.vue';
import Sheet from './Sheet.vue';

export interface NavItem {
  label: string;
  to: string;
}

@Options({
  components: {
    Button,
    NavButton,
    Sheet,
  },
})
export default class AppNavBar extends Vue {}
</script>

<style>
.nav-bar {
  @apply flex flex-col;
  @apply bg-primary-900;
  @apply text-secondary-100;

  .brand,
  .help {
    flex: 0 0 theme('navbar.size');
    width: theme('navbar.size');
  }

  nav > ul {
    @apply grid;
    grid-template-rows: theme('navbar.size');
  }
}
</style>

<div class="nav-bar">
  <NavButton class="brand" to="/">
    <template v-slot:icon>
      EC
    </template>

    <Sheet class="p-4">EthCommerce</Sheet>
  </NavButton>

  <NavButton class="help" to="/search">
    <template v-slot:icon>
      ?
    </template>

    <Sheet class="p-4">Get help</Sheet>
  </NavButton>

  <div class="flex-fill" />

  <nav>
    <ul>
      <li>
        <NavButton class="h-full w-full" interaction="click">
          <template v-slot:icon>
            ::
          </template>

          <Sheet class="p-4">Open menu</Sheet>

          <template v-slot:active>
            <Sheet class="p-4">
              Some fancy menu
            </Sheet>
          </template>
        </NavButton>
      </li>
    </ul>
  </nav>
</div>
