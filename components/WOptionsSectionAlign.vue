<script setup lang="ts">
defineEmits<{ (e: "options", value: { action: string; params: any }): void }>();
</script>

<template>
  <!-- size -->
  <w-options-section>
    <button @click="$emit('options', { action: 'align', params: 'left' })">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns:svgjs="http://svgjs.com/svgjs"
        viewBox="0 0 32 32"
        style="enable-background: new 0 0 512 512"
        xml:space="preserve"
      >
        <g>
          <path
            d="M9 3a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM28 17H9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h19a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3zM2 30a1 1 0 0 0 2 0V2a1 1 0 0 0-2 0z"
          ></path>
        </g>
      </svg>
    </button>
    <button @click="$emit('options', { action: 'align', params: 'center' })">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns:svgjs="http://svgjs.com/svgjs"
        viewBox="0 0 32 32"
        style="enable-background: new 0 0 512 512"
        xml:space="preserve"
      >
        <g>
          <path
            d="M6 17a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h9v1a1 1 0 0 0 2 0v-1h9a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3h-9v-2h5a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-5V2a1 1 0 0 0-2 0v1h-5a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h5v2z"
          ></path>
        </g>
      </svg>
    </button>
    <button @click="$emit('options', { action: 'align', params: 'right' })">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns:svgjs="http://svgjs.com/svgjs"
        viewBox="0 0 32 32"
        style="enable-background: new 0 0 512 512"
        xml:space="preserve"
      >
        <g>
          <path
            d="M30 1a1 1 0 0 0-1 1v28a1 1 0 0 0 2 0V2a1 1 0 0 0-1-1zM24 3H13a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM5 29h19a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3z"
          ></path>
        </g>
      </svg>
    </button>
  </w-options-section>
</template>
