<script setup lang="ts">
import GIcon from "../common/GIcon.vue";

withDefaults(
  defineProps<{
    reveal?: boolean;
    name: string;
  }>(),
  { reveal: false }
);
</script>

<template>
  <div>
    <div
      class="w-[60px] h-[80px] bg-transparent cursor-pointer group perspective"
    >
      <div
        :class="reveal ? 'my-rotate-y-180' : ''"
        class="relative preserve-3d w-full h-full duration-1000"
      >
        <div
          class="absolute backface-hidden border-2 border-purple-200 rounded w-full h-full"
        >
          <img src="../../assets/images/card.png" class="w-full h-full" />
        </div>
        <div
          class="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden"
        >
          <div
            id="front"
            class="absolute inset-0 flex flex-col border-[2px] border-purple-200 rounded ] p-0.5"
          >
            <div>2</div>
            <GIcon
              name="fullscreen_exit"
              class="text-center rotate-45 text-purple-500"
            />
            <div class="ml-auto mt-auto">2</div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center font-albert mt-1">{{ name }}</div>
  </div>
</template>

<style scoped></style>
