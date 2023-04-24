<script setup lang="ts">
defineEmits<{ (e: "options", value: { action: string; params: any }): void }>();
</script>

<template>
  <!-- size -->
  <w-options-section>
    <button @click="$emit('options', { action: 'size', params: 'lg' })">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns:svgjs="http://svgjs.com/svgjs"
        width="512"
        height="512"
        x="0"
        y="0"
        viewBox="0 0 32 32"
        style="enable-background: new 0 0 512 512"
        xml:space="preserve"
        class=""
      >
        <g>
          <g data-name="1">
            <rect
              width="12"
              height="16"
              x="10"
              y="8"
              rx="1"
            ></rect>
            <path
              d="M29.634 7.227a1.01 1.01 0 0 0-.83-.207l-5 1A1 1 0 0 0 23 9v14a1 1 0 0 0 .804.98l5 1A1.029 1.029 0 0 0 29 25a1 1 0 0 0 1-1V8a1.002 1.002 0 0 0-.366-.773zM8.196 8.02l-5-1A1 1 0 0 0 2 8v16a1 1 0 0 0 1 1 1.029 1.029 0 0 0 .196-.02l5-1A1 1 0 0 0 9 23V9a1 1 0 0 0-.804-.98z"
            ></path>
          </g>
        </g>
      </svg>
    </button>
    <button @click="$emit('options', { action: 'size' })">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns:svgjs="http://svgjs.com/svgjs"
        viewBox="0 0 24 24"
        style="enable-background: new 0 0 512 512"
        xml:space="preserve"
        class=""
      >
        <g>
          <g>
            <path
              d="M22 15V9c0-1.66-1.34-3-3-3H5C3.34 6 2 7.34 2 9v6c0 1.66 1.34 3 3 3h14c1.66 0 3-1.34 3-3zM5.93 19.5h12.14a.5.5 0 0 1 .49.6c-.27 1.48-1.14 1.9-3.23 1.9H8.67c-2.1 0-2.96-.42-3.23-1.9a.5.5 0 0 1 .49-.6zM8.67 2h6.66c2.1 0 2.96.42 3.23 1.9.06.31-.18.6-.49.6H5.93a.5.5 0 0 1-.49-.6C5.71 2.42 6.57 2 8.67 2z"
            ></path>
          </g>
        </g>
      </svg>
    </button>

    <button @click="$emit('options', { action: 'size', params: 'sm' })">
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
          <g>
            <path
              d="M9 22h6c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3H9C7.34 2 6 3.34 6 5v14c0 1.66 1.34 3 3 3zM4.5 5.93v12.14a.5.5 0 0 1-.6.49C2.42 18.29 2 17.43 2 15.33V8.67c0-2.1.42-2.96 1.9-3.23a.5.5 0 0 1 .6.49zM22 8.67v6.66c0 2.1-.42 2.96-1.9 3.23-.31.06-.6-.18-.6-.49V5.93a.5.5 0 0 1 .6-.49c1.48.27 1.9 1.13 1.9 3.23z"
            ></path>
          </g>
        </g>
      </svg>
    </button>
  </w-options-section>
</template>
