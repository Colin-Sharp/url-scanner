<script setup lang="ts">
import type { UrlScanStats } from '~/models/url-scan';

const props = defineProps({
  scannedUrl: { type: String, required: true },
  status: {
    type: Object as PropType<UrlScanStats>,
    required: true,
  }
});

</script>

<template>
  <div>
    <h1>Result Summary</h1>
  </div>
</template>