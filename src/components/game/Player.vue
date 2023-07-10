<script setup lang="ts">
import PCAvater from "../common/PCAvater.vue";

const props = defineProps<{
  name: string;
  vote: number | null;
}>();
</script>

<template>
  <div class="flex items-center">
    <PCAvater :name="props.name" />
    <div class="ml-2 capitalize text-xl font-albert">{{ name }}</div>
    <div v-if="vote === null" class="ml-auto italic font-bold">
      Not voted yet
    </div>
    <div v-else class="ml-auto font-bold italic text-green-600">
      {{ vote }}
    </div>
  </div>
</template>
