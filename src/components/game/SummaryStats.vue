<script setup lang="ts"></script>

<template>
  <div
    class="flex fixed -right-[280px] top-[30%] transition-all duration-500 hover:right-0"
  >
    <div>
      <div
        class="flex justify-center items-center shadow-md w-20 text-white font-bold border-orange-300 rounded-l-full p-2 bg-orange-500 cursor-pointer"
      >
        Stats
      </div>
    </div>

    <div
      class="overflow-hidden bg-gradient-to-r from-orange-50 to-purple-100 p-10 shadow-md"
    >
      <table class="table-auto">
        <tbody>
          <tr>
            <td
              class="border border-orange-500 px-4 py-2 text-orange-600 font-medium"
            >
              Players
            </td>
            <td
              class="border border-orange-500 px-4 py-2 text-orange-600 font-medium"
            >
              20
            </td>
          </tr>
          <tr class="bg-orange-200">
            <td
              class="border border-orange-500 px-4 py-2 text-orange-600 font-medium"
            >
              Total score
            </td>
            <td
              class="border border-orange-500 px-4 py-2 text-orange-600 font-medium"
            >
              120
            </td>
          </tr>
          <tr>
            <td
              class="border border-orange-500 px-4 py-2 text-orange-600 font-medium"
            >
              Average score
            </td>
            <td
              class="border border-orange-500 px-4 py-2 text-orange-600 font-medium"
            >
              15
            </td>
          </tr>
          <tr class="bg-orange-200">
            <td
              class="border border-orange-500 px-4 py-2 text-orange-600 font-medium"
            >
              Total tasks
            </td>
            <td
              class="border border-orange-500 px-4 py-2 text-orange-600 font-medium"
            >
              10
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
