<script setup lang="ts">
import { ref, computed, watch, watchEffect } from "vue";

const emit = defineEmits(["submit", "update:title", "update:description"]);
const props = withDefaults(
  defineProps<{ title: string; description: string }>(),
  {
    title: "",
    description: "",
  }
);

import PCInput from "../common/PCInput.vue";
import PCTextarea from "../common/PCTextarea.vue";
import PCButton from "../common/PCButton.vue";

const submitted = ref(false);
const title = ref(props.title);
const description = ref(props.description);

watch(
  () => title.value,
  () => {
    emit("update:title", title.value);
  }
);

watch(
  () => description.value,
  () => {
    emit("update:description", description.value);
  }
);

watchEffect(() => {
  title.value = props.title;
  description.value = props.description;
});

// validation
const titleError = computed(() => submitted.value && title.value === "");

const onSubmit = () => {
  submitted.value = true;
  if (titleError.value) return;
  emit("submit");

  submitted.value = false;
};
</script>

<template>
  <div>
    <PCInput placeholder="Title" v-model="title" />
    <small class="text-red-400" v-if="titleError">Title is required</small>

    <PCTextarea class="mt-5" placeholder="Description" v-model="description" />
    <PCButton text="Add task" class="mt-10" @click="onSubmit" />
  </div>
</template>
