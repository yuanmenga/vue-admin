<template>
  <input
    type="text"
    class="hd-input"
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as any).value)"
  />
</template>

<script setup lang="ts">
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
</script>

<style scoped lang="scss">
.hd-input {
  @apply w-full border border-gray-300 rounded-sm outline-none py-2 px-3 placeholder:text-sm focus:ring-2 ring-offset-1 ring-violet-500 duration-300 focus:border-white;
}
</style>
