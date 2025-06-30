<script setup lang="ts">
import type { UrlScanResultItem } from "~/models/url-scan";

defineProps({
  result: {
    type: Object as PropType<UrlScanResultItem>,
    required: true,
    default: () => ({}),
  },
});
</script>

<template>
  <section
    :class="[
      'scan-result-item  border-2 rounded-md p-2 flex flex-col gap-2',
      result.category,
    ]"
  >
    <h2 class="text-lg font-bold">{{ result.engine_name }}</h2>
    <div :class="['flex flex-col gap-2', result.result.toLowerCase()]">
      <p class="text-sm text-white capitalize">
        Category: {{ result.category }}
      </p>
      <p class="text-sm text-white capitalize">
        Result: {{ result.result }}
      </p>
    </div>
  </section>
</template>
