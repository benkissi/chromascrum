<script setup lang="ts">
defineProps({
  name: String,
});
</script>

<template>
  <span class="material-symbols-rounded">{{ name }}</span>
</template>
