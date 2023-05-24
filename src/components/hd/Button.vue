<template>
  <button class="hd-button">{{ props.content }}</button>
</template>

<script setup lang="ts">
const props = defineProps({
  content: String,
});
</script>

<style scoped lang="scss">
.hd-button {
  @apply w-full bg-violet-700 rounded-md py-2 text-lg text-white hover:bg-violet-500 duration-300;
}
</style>
