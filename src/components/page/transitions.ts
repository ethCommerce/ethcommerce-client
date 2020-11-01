import { crossfade, fade } from 'svelte/transition';

export const [sendPage, receivePage] = crossfade({
  duration: (d) => Math.sqrt(d * 400),
  fallback: fade,
});

export const [sendSidebar, receiveSidebar] = crossfade({
  duration: (d) => Math.sqrt(d * 400),
  fallback: fade,
});
