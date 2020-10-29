<template>
  <Button
    class="nav-button"
    :active="active"
    :to="to"
    @click="onClick"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <slot name="icon">
      ?
    </slot>

    <Popover class="bottom-0 left-100 bg-primary-400" :active="expand || active">
      <template v-if="active">
        <slot name="active" />
      </template>
      <template v-else-if="expand">
        <slot />
      </template>
    </Popover>
  </Button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Button from './Button.vue';
import Popover from './Popover.vue';

@Options({
  props: {
    to: String,
    interaction: String,
  },
  components: {
    Button,
    Popover,
  },
})
export default class NavButton extends Vue {
  public readonly to!: string | null;
  public readonly href!: string | null;
  public readonly interaction!: 'click' | 'hover' | null;

  public expand = false;
  public active = false;

  private onMouseEnter(): void {
    this.expand = true;
  }

  private onMouseLeave(): void {
    this.expand = false;
  }

  private onClick(event: MouseEvent): void {
    console.log(event.target);
    if (this.$el === event.target || !this.$el.contains(event.target)) {
      this.active = !this.active;
    }
  }
}
</script>

<style>
.nav-button {
  @apply relative;

  .popover {
    @apply flex items-center justify-center;
    @apply min-h-full;
    @apply whitespace-no-wrap;
  }
}
</style>
