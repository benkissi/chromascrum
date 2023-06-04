<script setup lang="ts">
import PCAvater from "../common/PCAvater.vue";

const props = defineProps<{
  name: string;
}>();
</script>

<template>
  <div class="flex items-center">
    <PCAvater :name="props.name" />
    <div class="ml-2 capitalize text-xl font-albert">{{ name }}</div>
    <div class="ml-auto font-bold italic text-green-600">played</div>
  </div>
</template>
