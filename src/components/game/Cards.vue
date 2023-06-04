<script setup lang="ts">
import { ref, computed } from "vue";

const emit = defineEmits(["voteSelected"]);
const props = withDefaults(
  defineProps<{
    type: string;
    ready: boolean;
    selection: string | number;
  }>(),
  {
    type: "powers of 2",
    ready: false,
    selection: "",
  }
);

const fib = ref([0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, "?"]);
const pow = ref([0, 1, 2, 4, 8, 16, 32, 64, "?"]);

const votingType = computed(() => {
  if (props.type === "powers of 2") return fib.value;
  return pow.value;
});

const handleCardClick = (item: number | string) => {
  console.log("item", item);
  emit("voteSelected", item);
};
</script>

<template>
  <div class="mt-5 px-5">
    <div v-if="ready">
      <div class="text-gray-500 capitalize">Voting type</div>
      <div class="capitalize text-gray-700 font-bold text-lg mb-3">
        {{ type }}
      </div>
      <div class="flex flex-wrap justify-center md:justify-start">
        <div
          @click="handleCardClick(item)"
          v-for="(item, idx) in votingType"
          :key="idx"
          :class="[
            'flex justify-center items-center shadow-lg w-14 md:w-20 h-20 border rounded cursor-pointer mr-3 hover:bg-purple-100 transition-all duration-300 ease-in-out',
            selection === item
              ? 'bg-purple-400 text-white font-semibold text-lg -mt-8'
              : 'text-gray-700',
          ]"
        >
          {{ item }}
        </div>
      </div>
    </div>
    <div v-else class="text-gray-500 text-center">
      Voting cards will show once a new task is added by facilitator
    </div>
  </div>
</template>

<style scoped>
.move-up {
  margin-top: -10px !important;
}
</style>
