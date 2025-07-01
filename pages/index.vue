<script setup lang="ts">
const router = useRouter();

const state = reactive({
  url: "",
  isLoading: false,
  exampleUrls: {
    harmless: { url: "https://www.google.com", isDummy: false },
    phishing: { url: "phishing", isDummy: true },
    malware: { url: "malware", isDummy: true },
  },
});

const scanUrl = async (url: string, isDummy: boolean = false) => {
  if (isDummy) {
    router.push({ path: `/analysis`, query: { id: url } });
    return;
  }
  try {
    const scanResponse = await $fetch(`/api/virustotal?url=${url}`);

    const analysisId = (scanResponse as any).data.id;

    router.push({ path: `/analysis`, query: { id: analysisId } });
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div class="flex flex-col items-center justify-center h-[calc(100vh-10rem)]">
    <h1 class="text-4xl font-bold mb-4">Scan URL</h1>
    <input class="input" type="text" v-model="state.url" />
    <button
      class="button mt-4"
      :disabled="state.isLoading || !state.url"
      @click="scanUrl(state.url)"
    >
      Scan
    </button>
    <p class="text-white mt-4">Example URLs:</p>
    <ul>
      <li v-for="(url, key) in state.exampleUrls" :key="key">
        <button class="button my-2" @click="scanUrl(url.url, url.isDummy)">
          {{ key }}
        </button>
      </li>
    </ul>
  </div>
</template>
