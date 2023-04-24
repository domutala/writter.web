<script setup lang="ts">
import { IContent } from "~/models/Content";

const props = defineProps({
  modelValue: { type: Object as PropType<IContent>, required: true },
  disableLoad: { type: Boolean, default: false },
});
</script>

<template>
  <div
    class="w-block"
    :class="[modelValue.size, modelValue.align]"
  >
    <slot name="options" />

    <div class="w-block-content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.w-block {
  position: relative;
  justify-content: center;
  display: flex;

  &.left {
    justify-content: flex-start;
  }
  &.right {
    justify-content: flex-end;
  }

  &:not(:hover) {
    .w-block-options {
      &:not(.allways-show) {
        display: none;
      }
    }
  }

  .w-block-content {
    max-width: 70%;
    width: 1100px;
  }

  &.lg {
    .w-block-content {
      width: 100%;
      max-width: unset;
    }
  }

  &.sm {
    .w-block-content {
      max-width: 63%;
      width: 772px;
    }
  }
}
</style>
