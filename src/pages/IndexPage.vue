<template>
  <q-page class="row items-center justify-evenly">
    <pre>{{ companies }}</pre>
  </q-page>
</template>

<script setup lang="ts">
import { useCompaniesStore } from 'src/stores/example-store';
import { storeToRefs } from 'pinia';

const companiesStore = useCompaniesStore();
const { companies } = storeToRefs(companiesStore);

defineOptions({
  async preFetch({ store }) {
    const companiesStore = useCompaniesStore(store);
    await companiesStore.execute();
  },
});
</script>
