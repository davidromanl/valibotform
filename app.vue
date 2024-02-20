<script setup lang="ts">
const localePath = useLocalePath()
</script>
<template>
  <div class="w-full max-w-6xl mx-auto">
    <nav class="flex justify-center gap-5 bg-slate-400 p-2">
      <NuxtLink :to="localePath('/')">Input</NuxtLink>
      <NuxtLink :to="localePath('/form')">Form</NuxtLink>
      <NuxtLink :to="localePath('/nuxtui')">NuxtUI</NuxtLink>
    </nav>
    <hr class="my-4" />
    <NuxtPage />
  </div>
</template>
