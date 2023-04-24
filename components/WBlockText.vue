<script setup lang="ts">
import { IContent } from "@/models/Content";
import { PropType } from "nuxt/dist/app/compat/capi";

const props = defineProps({
  modelValue: { type: Object as PropType<IContent>, required: true },
});
const emit = defineEmits<{
  (e: "update:modelValue", value: IContent): void;
  (e: "remove"): void;
  (e: "options", value: { action: string; params: any }): void;
}>();

const data = ref<IContent>();
const odata = ref<any>();
const ourl = computed(() =>
  odata.value ? URL.createObjectURL(odata.value) : data.value?.picture?.url
);

watch(() => odata.value, onDatas, { deep: true });
function onDatas() {
  if (!data.value) return;

  data.value.text = data.value.text || {};
  data.value.text.content = odata.value;

  emit("update:modelValue", data.value);
}

onMounted(onValue);
watch(() => props.modelValue, onValue, { deep: true });
function onValue() {
  data.value = props.modelValue;
}
</script>

<template>
  <w-block
    v-if="data"
    v-model:model-value="data"
  >
    <template #options>
      <w-options @options="(e) => emit('options', e)" />
    </template>
    <div class="w-block-text">
      <w-editor v-model:model-value="odata" />
    </div>
  </w-block>
</template>
