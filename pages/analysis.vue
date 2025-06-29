<script setup lang="ts">
import type { UrlScanResponse, UrlScanResults } from "~/models/url-scan";
import {
  maliciousResponse,
  phishingResponse,
  malwareResponse,
} from "~/assets/dummy-data";

const route = useRoute();

const state = reactive({
  analysisResponse: null as UrlScanResponse | null,
  results: null as UrlScanResults | null,
  urlScanned: "",
});

onMounted(async () => {
  if (route.query.id === "malware") {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    state.analysisResponse = malwareResponse;
    state.results = malwareResponse.data.attributes.results as UrlScanResults;
    state.urlScanned = malwareResponse.meta.url_info.url;
  } else if (route.query.id === "phishing") {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    state.analysisResponse = phishingResponse;
    state.results = phishingResponse.data.attributes.results as UrlScanResults;
    state.urlScanned = phishingResponse.meta.url_info.url;
  } else if (route.query.id === "malicious") {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    state.analysisResponse = maliciousResponse;
    state.results = maliciousResponse.data.attributes.results as UrlScanResults;
    state.urlScanned = maliciousResponse.meta.url_info.url;
  } else {
    try {
      const analysisResponse = await $fetch<UrlScanResponse>(
        `/api/analysis?id=${route.query.id}`,
        {
          method: "GET",
        }
      );
      console.log(analysisResponse);
      state.analysisResponse = analysisResponse as UrlScanResponse;
      state.results = analysisResponse.data.attributes
        .results as UrlScanResults;
      state.urlScanned = analysisResponse.meta.url_info.url;
    } catch (error) {
      console.log(error);
    }
  }
});
</script>

<template>
  <div v-if="state.results">
    <h1>Results</h1>
    <div class="flex flex-wrap justify-evenly gap-2">
      <article v-for="(result, key) in state.results" :key="key">
        <ScanResultItem :result="result" />
      </article>
    </div>
  </div>
</template>
