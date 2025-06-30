<script setup lang="ts">
import type { UrlScanStats } from '~/models/url-scan';

const props = defineProps({
  scannedUrl: { type: String, required: true },
  status: {
    type: Object as PropType<UrlScanStats>,
    required: true,
  }
});

const maliciousResult = computed(() => props.status.malicious > 0 );
const suspiciousResult = computed(() => props.status.suspicious > 0 );
</script>

<template>
  <section :class="['result-summary', maliciousResult ? 'malicious' : suspiciousResult ? 'suspicious' : 'harmless']">
    <div class="flex flex-col sm:flex-row gap-2 justify-between items-center sm:gap-1 mb-2 p-3 rounded-t top-summary">
      <div class="flex flex-col gap-1">
        <h2 class="text-lg font-bold">{{ scannedUrl }}</h2>
      </div>
      <div class="flex flex-col gap-1">
        <p class="text-red-500 border border-red-500 rounded-md p-2" v-if="maliciousResult">There is a high probability that this URL is malicious</p>
        <p class="text-yellow-500 border border-yellow-500 rounded-md p-2" v-if="suspiciousResult && !maliciousResult">There is a medium probability that this URL is malicious</p>
        <p class="text-green-500 border border-green-500 rounded-md p-2" v-if="!maliciousResult && !suspiciousResult">No security vendors flagged this URL as malicious</p>
      </div>
    </div>
    <div class="flex flex-wrap p-2 gap-2">
      <p class="text-green-500 border border-green-500 rounded-md p-2">Harmless: {{ status.harmless }}</p>
      <p class="text-red-500 border border-red-500 rounded-md p-2">Malicious: {{ status.malicious }}</p>
      <p class="text-yellow-500 border border-yellow-500 rounded-md p-2">Suspicious: {{ status.suspicious }}</p>
      <p class="text-gray-500 border border-gray-500 rounded-md p-2">Undetected: {{ status.undetected }}</p>
      <p class="text-gray-500 border border-gray-500 rounded-md p-2">Timeout: {{ status.timeout }}</p>
    </div>
  </section>
</template>