<script setup lang="ts">
const route = useRoute();
const isHome = computed(() => route.path === "/");
</script>

<template>
  <header>
    <nav class="flex justify-between items-center mx-4">
      <NuxtLink class="flex items-center gap-2" to="/">
        <img src="/logo.png" alt="URL Scanner" class="w-10 h-10" />
        <span class="text-2xl font-bold text-orange-600">URL Scanner</span>
      </NuxtLink>
      <NuxtLink v-if="!isHome" class="font-bold text-xl text-orange-600" to="/"
        >Home</NuxtLink
      >
    </nav>
  </header>
  <main class="px-4 my-8 max-w-screen-lg mx-auto">
    <slot />
  </main>
  <footer
    class="text-center fixed bottom-0 w-full bg-black bg-opacity-20 py-2 text-sm text-gray-500"
  >
    <p>
      &copy; {{ new Date().getFullYear() }}
      <a href="https://www.virustotal.com" target="_blank" class="text-blue-500"
        >VirusTotal</a
      >
    </p>
  </footer>
</template>
