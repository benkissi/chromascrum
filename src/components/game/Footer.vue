<script setup lang="ts">
import GIcon from "../common/GIcon.vue";
const handleBuyCoffee = () => {
  window.open("https://www.buymeacoffee.com/benkissi", "_blank");
};

const handleSocial = () => {
  window.open("https://www.linkedin.com/in/benkissi/", "_blank");
};
</script>

<template>
  <div
    class="w-full absolute -bottom-[70px] hover:bottom-0 transition-all duration-500"
  >
    <div class="text-center cursor-pointer">
      <GIcon
        name="keyboard_double_arrow_down"
        class="text-[30px] text-purple-700"
      />
    </div>
    <div class="flex items-center justify-between bg-gray-100 rounded p-2">
      <div class="cursor-pointer group" @click="handleSocial">
        <div class="font-[200] font-albert">Want to know the developer?</div>
        <div class="group-hover:text-purple-600">Follow me here</div>
      </div>
      <div
        @click="handleBuyCoffee"
        class="flex items-center animate-bounce rounded-full h-[40px] py-1 px-3 bg-orange-500 text-white text-[15px] cursor-pointer"
      >
        Buy me coffee
      </div>
    </div>
  </div>
</template>
