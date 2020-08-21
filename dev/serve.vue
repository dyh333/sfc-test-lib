<script lang="ts">
import Vue from 'vue';
import { SfcTestLibSample } from '@/entry';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    SfcTestLibSample,
  }
});
</script>

<template>
  <div id="app">
    <sfc-test-lib-sample />
  </div>
</template>
