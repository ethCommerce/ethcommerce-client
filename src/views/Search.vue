<template>
  <Page navigation="right">
    <Sheet class="p-16">
      <img alt="Vue logo" src="../assets/logo.png" />
    </Sheet>
  </Page>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Page, Sheet } from '@/components';

@Options({
  components: {
    Page,
    Sheet,
  },
})
export default class Search extends Vue {}
</script>
