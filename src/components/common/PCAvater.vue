<script setup lang="ts">
import { computed } from "vue";
import { getInitials } from "../../utils/methods";
const props = defineProps<{
  name: string;
}>();

const initials = computed(() => getInitials(props.name));
</script>

<template>
  <div
    class="flex justify-center items-center rounded-full h-12 w-12 bg-purple-500 text-white uppercase"
  >
    {{ initials }}
  </div>
</template>
