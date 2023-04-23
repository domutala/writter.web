<script setup lang="ts">
const editorSide = ref<HTMLDivElement>();

const { $editor } = useNuxtApp();

onMounted(init);
function init() {
  if (!process.client) return;
  if (!editorSide.value) return;

  $editor({ holder: editorSide.value });
}
</script>

<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <div
      ref="editorSide"
      class="editor"
    ></div>
  </div>
</template>

<style lang="scss" scoped>
.editor {
  border-radius: 0.6em;
  min-height: 200px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 15px 0;
}
</style>
