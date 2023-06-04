<script setup lang="ts">
import { ref } from "vue";
import PCInput from "../common/PCInput.vue";
import PCButton from "../common/PCButton.vue";
import PCToggle from "../common/PCToggle.vue";
import PCSelect from "../common/PCSelect.vue";

const gameName = ref("");
const votingType = ref("");
const game = {
  name: "",
};

const votingOptions = [
  {
    text: "Fibonacci ( 0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 )",
    value: "fibonacci",
  },
  {
    text: "Powers of 2 ( 0, 1, 2, 4, 8, 16, 32, 64 )",
    value: "powers of 2",
  },
];

const currentUser = {
  id: "omxlkmxlzm",
  username: "Ben Kissi",
  type: "facilitator",
};

const users = [
  {
    id: "omxlkmxlzm",
    username: "Ben Kissi",
    type: "facilitator",
  },
  {
    id: "sjjsjiowj",
    username: "Margaret Kissi",
    type: "player",
  },
];

const handleNameUpdate = () => {};

const handleToggleUserType = () => {};

const onVotingSelect = () => {};
</script>

<template>
  <div>
    <div class="mb-8">
      <div class="text-gray-500 mb-2">Change game name</div>
      <div class="flex items-center mt-2">
        <PCInput placeholder="Game name" v-model="gameName" />
        <div>
          <PCButton
            text="Update"
            class="ml-3"
            @click="handleNameUpdate"
            :disabled="gameName === game.name"
          />
        </div>
      </div>
    </div>

    <div class="mb-8">
      <div class="text-gray-500 mb-2">Make user facilitator</div>
      <div class="flex mt-2" v-for="user in users" :key="user.id">
        <div class="mr-3 w-1/2">
          {{ user.username }}
          <span v-if="currentUser.id === user.id" class="ml-2">(you)</span>
        </div>
        <div
          :class="[
            'mr-3 capitalize font-bold underline',
            user.type === 'facilitator' ? 'text-green-500' : 'text-yellow-500',
          ]"
        >
          {{ user.type }}
        </div>
        <PCToggle
          class="ml-auto"
          v-on:toggle="handleToggleUserType"
          :currentState="user.type === 'facilitator'"
          :disabled="currentUser.id === user.id"
        />
      </div>
    </div>

    <div class="mb-8">
      <div class="text-gray-500 mb-2">Change card system</div>
      <div class="mt-2">
        <PCSelect
          :options="votingOptions"
          :existingValue="
            votingOptions.find((item) => item.value === votingType)
          "
          placeholder="Select voting type"
          v-on:selection="onVotingSelect"
          class="mb-3"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
