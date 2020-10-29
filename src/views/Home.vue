<template>
  <Sheet padding>
    <img alt="Vue logo" src="../assets/logo.png" />
  </Sheet>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Sheet } from '@/components';

@Options({
  components: {
    Sheet,
  },
})
export default class Home extends Vue {}
</script>
