<script setup lang="ts">
import type {
  UrlScanResponse,
  UrlScanResults,
  UrlScanStats,
} from "~/models/url-scan";
import { phishingResponse, malwareResponse } from "~/assets/dummy-data";

const route = useRoute();

const state = reactive({
  analysisResponse: null as UrlScanResponse | null,
  results: null as UrlScanResults | null,
  urlScanned: "",
  isLoading: true,
});

onMounted(async () => {
  switch (route.query.id) {
    case "malware":
      state.isLoading = true;
      await new Promise((resolve) => setTimeout(resolve, 3000));
      state.analysisResponse = malwareResponse;
      state.results = malwareResponse.data.attributes.results as UrlScanResults;
      state.urlScanned = malwareResponse.meta.url_info.url;
      state.isLoading = false;
      break;
    case "phishing":
      state.isLoading = true;
      await new Promise((resolve) => setTimeout(resolve, 3000));
      state.analysisResponse = phishingResponse;
      state.results = phishingResponse.data.attributes
        .results as UrlScanResults;
      state.urlScanned = phishingResponse.meta.url_info.url;
      state.isLoading = false;
      break;
    default:
      state.isLoading = true;
      await new Promise((resolve) => setTimeout(resolve, 2000));
      try {
        const analysisResponse = await $fetch<UrlScanResponse>(
          `/api/analysis?id=${route.query.id}`,
          {
            method: "GET",
          }
        );
        state.analysisResponse = analysisResponse as UrlScanResponse;
        state.results = analysisResponse.data.attributes
          .results as UrlScanResults;
        state.urlScanned = analysisResponse.meta.url_info.url;
      } catch (error) {
        console.log(error);
      } finally {
        state.isLoading = false;
      }
  }
});
</script>

<template>
  <div class="mt-10 mb-16">
    <section v-if="!state.isLoading && state.results">
      <ResultSummary
        :scannedUrl="state.urlScanned"
        :status="state.analysisResponse?.data.attributes.stats as UrlScanStats"
      />
      <div class="flex flex-wrap">
        <article
          class="w-full sm:w-1/2 md:w-4/12 p-1 lg:w-1/3"
          v-for="(result, key) in state.results"
          :key="key"
        >
          <ScanResultItem :result="result" />
        </article>
      </div>
    </section>
    <div
      v-if="state.isLoading"
      class="flex justify-center items-center h-[calc(100vh-10rem)]"
    >
      <span class="loader"></span>
    </div>
  </div>
</template>
