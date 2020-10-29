<template>
  <Button class="nav-button" :to="to" :href="href" @hover="onHover">
    <slot name="icon">
      ?
    </slot>

    <Popover :active="expand">
      <slot />
    </Popover>
  </Button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    to: String,
    href: String,
  },
})
export default class NavButton extends Vue {
  public readonly to!: string | null;
  public readonly href!: string | null;

  public expand = false;

  private onHover(): void {
    this.expand = true;
  }
}
</script>
