<script setup lang="ts">
import type { UrlScanResultItem } from '~/models/url-scan';

defineProps({
  result: { type: Object as PropType<UrlScanResultItem>, required: true, default: () => ({}) },
});

</script>

<template>
  <article class="border-2 border-gray-300 rounded-md p-2 flex flex-col gap-2">
    <h2 class="text-lg font-bold">{{ result.engine_name }}</h2>
    <p class="text-sm text-gray-500 capitalize">Category: {{ result.category }}</p>
    <p class="text-sm text-gray-500 capitalize">Result: {{ result.result }}</p>
    <p class="text-sm text-gray-500 capitalize">Method: {{ result.method }}</p>
  </article>
</template>