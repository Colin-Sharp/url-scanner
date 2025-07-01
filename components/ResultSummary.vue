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
    <div class="flex flex-col sm:flex-row gap-2 justify-between items-center sm:gap-1 mb-2 p-5 rounded-t top-summary">
      <div class="flex flex-col gap-1">
        <h2 class="text-lg font-bold">{{ scannedUrl }}</h2>
      </div>
      <div class="flex flex-col gap-1">
        <p class="malicious rounded-md p-2" v-if="maliciousResult">There is a high probability that this URL is malicious</p>
        <p class="suspicious rounded-md p-2" v-if="suspiciousResult && !maliciousResult">There is a medium probability that this URL is malicious</p>
        <p class="harmless rounded-md p-2" v-if="!maliciousResult && !suspiciousResult">No security vendors flagged this URL as malicious</p>
      </div>
    </div>
    <div class="status-container flex flex-wrap p-5 gap-2">
      <p class="harmless rounded-md p-2">Harmless: {{ status.harmless }}</p>
      <p class="malicious rounded-md p-2">Malicious: {{ status.malicious }}</p>
      <p class="suspicious rounded-md p-2">Suspicious: {{ status.suspicious }}</p>
      <p class="undetected rounded-md p-2">Undetected: {{ status.undetected }}</p>
      <p class="timeout rounded-md p-2">Timeout: {{ status.timeout }}</p>
    </div>
  </section>
</template>