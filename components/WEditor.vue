<script setup lang="ts">
import Quill from "quill";

const props = defineProps({ modelValue: { type: Object as PropType<any> } });
const emit = defineEmits<{ (e: "update:modelValue", value: any): void }>();

const editorSide = ref<HTMLDivElement>();
const editor = ref<Quill>();
const { $quill } = useNuxtApp();

onMounted(init);
function init() {
  if (!editorSide.value) return;

  editor.value = $quill(editorSide.value, { placeholder: "hey..." });
  editor.value.on("text-change", onChange);
  onValue(true);
}

function onChange() {
  emit("update:modelValue", editor.value?.getContents());
}

watch(() => props.modelValue, onValue, { deep: true });
function onValue(force = false) {
  if (force || props.modelValue !== editor.value?.getContents()) {
    editor.value?.updateContents(props.modelValue);
  }
}
</script>

<template>
  <div class="w-editor">
    <div ref="editorSide"></div>
  </div>
</template>

<style lang="scss">
.w-editor {
  margin: auto;
  outline: none;

  .ql-toolbar {
    border: 0 !important;
  }

  .ql-container {
    border: 0 !important;
    border-top: 1px solid #f1f1f1 !important;

    .ql-editor {
      min-height: 100px;
    }
  }
}
</style>
