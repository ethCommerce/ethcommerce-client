import { writable } from 'svelte/store';

export interface SidebarState {
  expand: false | string;
}

const sidebarStore = writable<SidebarState>({
  expand: false,
});

export const sidebar = {
  subscribe: sidebarStore.subscribe,

  expand(section: string) {
    sidebarStore.update((state: SidebarState) => {
      state.expand = section;
      return state;
    });
  },

  contract() {
    sidebarStore.update((state: SidebarState) => {
      state.expand = false;
      return state;
    });
  },
};
