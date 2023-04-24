<script setup lang="ts">
import randomatic from "randomatic";
import { IContent } from "./models/Content";

const contents = ref<IContent[]>([]);

function push(index: string) {
  const ctn: IContent = { id: randomatic("A0", 24) };
  const ctns: { [key: string]: IContent } = {
    picture: {
      ...ctn,
      picture: {},
    },
    text: {
      ...ctn,
      text: {},
    },
  };

  contents.value.push(ctns[index]);
}
function remove(index: number) {
  contents.value.splice(index, 1);
}

function onOptions(index: number, value: { action: string; params: any }) {
  if (!contents.value[index]) return;

  const funcs: { [key: string]: () => void } = {
    size() {
      contents.value[index].size = value.params;
    },
    align() {
      contents.value[index].align = value.params;
    },
    remove() {
      contents.value.splice(index, 1);
    },
  };

  if (typeof funcs[value.action] === "function") funcs[value.action]();
}
</script>

<template>
  <div class="w-blocks">
    <div
      v-for="(content, c) in contents"
      :key="c"
    >
      <w-block-picture
        v-if="content.picture"
        v-model:model-value="contents[c]"
        @remove="remove(c)"
        @options="(e) => onOptions(c, e)"
      />
      <w-block-text
        v-if="content.text"
        v-model:model-value="contents[c]"
        @remove="remove(c)"
        @options="(e) => onOptions(c, e)"
      />
    </div>

    <div class="w-block">
      <div class="w-block-options allways-show">
        <div class="w-block-options-section">
          <button class="not-opacity">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns:svgjs="http://svgjs.com/svgjs"
              viewBox="0 0 64 64"
              style="enable-background: new 0 0 512 512"
              xml:space="preserve"
            >
              <g>
                <path
                  d="M20.1 3h-8.3C7 3 3 7 3 11.9v8.3C3 25 7 29 11.9 29h8.3c4.9 0 8.9-4 8.9-8.9v-8.3C29 7 25 3 20.1 3zM52.1 35h-8.3C39 35 35 39 35 43.9v8.3c0 4.9 4 8.9 8.9 8.9h8.3c4.9 0 8.9-4 8.9-8.9v-8.3C61 39 57 35 52.1 35zM52.1 3h-8.3C39 3 35 7 35 11.9v8.3c0 4.9 4 8.9 8.9 8.9h8.3c4.9 0 8.9-4 8.9-8.9v-8.3C61 7 57 3 52.1 3zM27.1 46.1h-9.3v-9.3c0-1-.8-1.9-1.9-1.9s-1.9.8-1.9 1.9v9.3H4.9C3.8 46.1 3 47 3 48s.8 1.9 1.9 1.9h9.3v9.3c0 1 .8 1.9 1.9 1.9s1.9-.8 1.9-1.9v-9.3h9.3c1 0 1.9-.8 1.9-1.9s-1-1.9-2.1-1.9z"
                ></path>
              </g>
            </svg>
          </button>

          <!-- add text -->
          <button
            class="not-opacity"
            @click="push('text')"
          >
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
                  d="M17.5 25.5A2.5 2.5 0 0 0 15 23H4.5A2.5 2.5 0 0 0 2 25.5v1A2.5 2.5 0 0 0 4.5 29H15a2.5 2.5 0 0 0 2.5-2.5zm12.5-10a2.5 2.5 0 0 0-2.5-2.5h-23A2.5 2.5 0 0 0 2 15.5v1A2.5 2.5 0 0 0 4.5 19h23a2.5 2.5 0 0 0 2.5-2.5zm0-10A2.5 2.5 0 0 0 27.5 3h-23A2.5 2.5 0 0 0 2 5.5v1A2.5 2.5 0 0 0 4.5 9h23A2.5 2.5 0 0 0 30 6.5z"
                ></path>
              </g>
            </svg>
          </button>

          <!-- add image -->
          <button
            class="not-opacity"
            @click="push('picture')"
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
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.w-blocks {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>
