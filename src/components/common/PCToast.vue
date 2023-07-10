<script setup lang="ts">
import { ref, watch } from "vue";
import { target } from "../../utils/toastEventBus";
import GIcon from "./GIcon.vue";

const messages = ref<{ type: string; message: string }[]>([]);
function isCustomEvent(event: Event): event is CustomEvent {
  return "detail" in event;
}

target.addEventListener("toastify", (event: Event) => {
  if (!isCustomEvent(event)) {
    throw new Error("not a custom event");
  }
  messages.value = [event.detail, ...messages.value];
});

const removeMessage = (idx: number) => {
  const updated = [...messages.value];
  updated.splice(idx, 1);
  messages.value = updated;
};

let timer: NodeJS.Timeout;

watch(
  () => messages.value,
  (newValue) => {
    if (newValue.length > 0) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        removeMessage(newValue.length - 1);
      }, 1500);
    }
  }
);
</script>

<template>
  <div class="fixed top-0 right-0 z-10 p-2">
    <div
      v-for="({ type, message }, idx) in messages"
      :key="idx"
      class="p-2 w-[350px] min-h-[100px] rounded mb-2"
      :class="[
        type === 'error'
          ? 'bg-red-100'
          : type === 'info'
          ? 'bg-blue-100'
          : 'bg-green-200',
        type === 'info'
          ? 'text-blue-500'
          : type === 'error'
          ? 'text-red-500'
          : 'text-green-500',
      ]"
    >
      <div class="flex">
        <GIcon
          class="ml-auto cursor-pointer"
          name="close"
          @click="removeMessage(idx)"
        />
      </div>

      <div class="flex items-center">
        <div class="mr-3">
          <GIcon
            class="text-[50px]"
            :name="
              type === 'info'
                ? 'info'
                : type === 'error'
                ? 'cancel'
                : 'task_alt'
            "
          />
        </div>
        <div class="text-[2xl]">{{ message }}</div>
      </div>
    </div>
  </div>
</template>
