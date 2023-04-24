<script setup lang="ts">
import { IContent } from "@/models/Content";
import { url } from "inspector";
import { PropType } from "nuxt/dist/app/compat/capi";
const props = defineProps({
  modelValue: { type: Object as PropType<IContent>, required: true },
  disableLoad: { type: Boolean, default: false },
});
const emit = defineEmits<{
  (e: "update:modelValue", value: IContent): void;
  (e: "remove"): void;
  (e: "options", value: { action: string; params: any }): void;
}>();

const data = ref<IContent>();
const odata = ref<File>();
const ourl = computed(() =>
  odata.value ? URL.createObjectURL(odata.value) : data.value?.picture?.url
);

function load() {
  if (props.disableLoad) return;
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";

  input.addEventListener("change", () => {
    if (input.files && input.files.length > 0) {
      odata.value = input.files[0];
    }
  });

  input.click();
}

watch(() => odata.value, onDatas, { deep: true });
function onDatas() {
  if (!data.value) return;

  data.value.picture = data.value.picture || {};
  data.value.picture.url = ourl.value;
  data.value.picture.file = odata.value;

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
      <w-options
        @remove="emit('remove')"
        @options="(e) => emit('options', e)"
      >
        <template #after>
          <w-options-section>
            <button @click="load">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns:svgjs="http://svgjs.com/svgjs"
                viewBox="0 0 512 512"
                style="enable-background: new 0 0 512 512"
                xml:space="preserve"
              >
                <g>
                  <path
                    d="M255.5 511.9H130.8c-57-.1-98.1-41-98.4-98-.1-19.9-.1-39.8 0-59.7.1-20.5 12.5-33.7 31.6-33.8s31.6 13.1 31.8 33.6c.1 20.2-.1 40.5.1 60.8.2 21.2 12.6 33.6 34 33.6h252.7c21.3 0 33.8-12.4 34-33.6.1-20.2-.1-40.5.1-60.8.1-20.5 12.6-33.6 31.7-33.6s31.7 13.2 31.5 33.8c-.2 25.9 1.2 52.1-2 77.6-6 46.8-45.8 79.8-93.2 80-43.2.3-86.2.1-129.2.1z"
                  ></path>
                  <path
                    d="M224.3 109.2c-4.8 4.5-7.7 7-10.3 9.6-20.3 20.5-40.4 41.1-60.8 61.4-14.5 14.5-34.6 15.5-47.6 2.9s-12.5-33.4 1.7-47.8c41.4-41.6 82.9-83.1 124.5-124.5 14.7-14.6 33.8-14.6 48.4 0 41.9 41.6 83.6 83.3 125.2 125.2 13.7 13.8 13.8 34.6 1 47s-33 11.8-46.9-2c-20.7-20.6-41-41.5-61.5-62.2-2.6-2.7-5.5-5.2-9.7-9.1-.3 5.7-.6 9.4-.6 13.2 0 65.4.1 130.9-.1 196.3-.1 24.6-21.6 39.2-44.1 30.4-12.4-4.8-19.2-15.6-19.2-31.4-.1-64.7-.1-129.4 0-194.2z"
                  ></path>
                </g>
              </svg>
            </button>
          </w-options-section>
        </template>
      </w-options>
    </template>

    <div class="w-block-picture">
      <div class="w-picture-container">
        <div
          class="one"
          v-if="ourl"
        >
          <img :src="ourl" />
        </div>
        <div
          v-else
          class="one placeholder"
          @click="load"
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
                fill-rule="evenodd"
                d="M1.25 6A4.75 4.75 0 0 1 6 1.25h12A4.75 4.75 0 0 1 22.75 6v12A4.75 4.75 0 0 1 18 22.75H6A4.75 4.75 0 0 1 1.25 18zM6 2.75A3.25 3.25 0 0 0 2.75 6v8.5l2.522 1.681a4 4 0 0 0 5.047-.5l3.362-3.362a4 4 0 0 1 5.048-.5l2.38 1.587c.049.033.096.067.141.103V6A3.25 3.25 0 0 0 18 2.75zM8.5 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
                clip-rule="evenodd"
              ></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </w-block>
</template>

<style lang="scss" scoped>
.w-block-picture {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: auto;

  .w-picture-container {
    overflow: hidden;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
    position: relative;
    min-height: 100px;

    .one {
      width: 100%;
      position: relative;

      .remover {
        position: absolute;
        top: 20px;
        right: 20px;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }

      &.placeholder {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 20px;
        cursor: pointer;
        height: 350px;
        background-color: #00000009;

        svg {
          opacity: 0.3;
          width: 116px;
        }
      }
    }

    .loader {
      position: absolute;
      bottom: 20px;
      right: 20px;
      z-index: 1;
    }
  }
}
</style>
