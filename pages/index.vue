<script setup lang="ts">
const router = useRouter();

const state = reactive({
  url: "",
  isLoading: false,
  exampleUrls: {
    google: { url: "https://www.google.com", isDummy: false },
    malicious: { url: "malicious", isDummy: true },
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

   
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    const analysisId = (scanResponse as any).data.id;

    router.push({ path: `/analysis`, query: { id: analysisId } });


    const analysisResponse = await $fetch("/api/analysis", {
      method: "GET",
      query: { id: analysisId },
    });
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-4xl font-bold">Scan URL</h1>
    <input class="border-2 border-gray-300 rounded-md p-2" type="text" v-model="state.url" />
    <button class="bg-blue-500 text-white p-2 rounded-md" :disabled="state.isLoading || !state.url" @click="scanUrl(state.url)">Scan</button>
    <p>Example URLs:</p>
    <ul>
      <li v-for="(url, key) in state.exampleUrls" :key="key">
        <button class="bg-blue-500 text-white p-2 rounded-md" @click="scanUrl(url.url, url.isDummy)">{{ key }}</button>
      </li>
    </ul>
  </div>
</template>
