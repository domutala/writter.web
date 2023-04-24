<script setup lang="ts">
const props = defineProps({
  hides: { type: Array<string>, default: [] },
  alwaysShow: { type: Boolean, default: false },
});

const emit = defineEmits<{
  (e: "remove"): void;
  (e: "options", value: { action: string; params: any }): void;
}>();
</script>

<template>
  <div
    class="w-block-options"
    :class="{ 'always-show': alwaysShow }"
  >
    <slot name="before" />
    <!-- size -->
    <w-options-section-size
      v-if="!hides.includes('size')"
      @options="(e) => $emit('options', e)"
    />

    <!-- align -->
    <w-options-section-align
      v-if="!hides.includes('align')"
      @options="(e) => $emit('options', e)"
    />
    <!-- remove -->
    <w-options-section
      v-if="!hides.includes('remove')"
      @options="(e) => $emit('options', e)"
    >
      <button
        class="not-opacity"
        @click="$emit('options', { action: 'remove' })"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:svgjs="http://svgjs.com/svgjs"
          viewBox="0 0 24 24"
          style="enable-background: new 0 0 512 512"
          xml:space="preserve"
        >
          <g>
            <path
              d="M21 5H3a1 1 0 0 0 0 2h2v12a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V7h2a1 1 0 0 0 0-2zM11 16a1 1 0 0 1-2 0v-5a1 1 0 0 1 2 0zm4 0a1 1 0 0 1-2 0v-5a1 1 0 0 1 2 0zM10 4h4a1 1 0 0 0 0-2h-4a1 1 0 0 0 0 2z"
              fill="red"
              class=""
            ></path>
          </g>
        </svg>
      </button>
    </w-options-section>

    <slot name="after" />
  </div>
</template>

<style lang="scss">
.w-block-options {
  position: absolute;
  // top: 0;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  background-color: #fff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 0.3em;
  display: flex;
  align-items: center;
  height: min-content;

  button {
    border: 0;
    height: 36px;
    min-width: 38px;
    padding: 0;
    cursor: pointer;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;

    i {
      display: flex;
    }

    svg {
      width: 22px;
    }

    &:not(.active) {
      i,
      svg {
        opacity: 0.6;
      }
    }

    &:hover {
      background-color: #00000013;
      i,
      svg {
        opacity: 0.8;
      }
    }

    &.not-opacity {
      i,
      svg {
        opacity: 1;
      }
    }
  }

  .w-block-options-section {
    display: flex;
    align-items: center;

    &:not(:first-child) {
      border-left: 1px solid #0000001a;
    }
  }
}
</style>
