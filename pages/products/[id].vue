<template>
  <h1>PRODUCT {{ id }} PAGE</h1>
</template>

<script setup lang="ts">
// TODO
const route = useRoute()

// When accessing /posts/1, route.params.id will be 1
console.log(route.params.id);

const id = route.params.id;

const count = ref(1)
const double = computed(() => count.value * 2);

const { data, refresh, pending } = await useFetch('/api/hello');
</script>
