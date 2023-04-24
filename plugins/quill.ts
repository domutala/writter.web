import Quill, { QuillOptionsStatic } from "quill";
import * as Emoji from "quill-emoji";

import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import "quill-emoji/dist/quill-emoji.css";

export default defineNuxtPlugin(() => {
  const quill = (
    container: string | Element,
    options: QuillOptionsStatic = {}
  ) => {
    Quill.register("modules/emoji", Emoji);

    const toolbarOptions = [
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["emoji", "blockquote", "code-block"],

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }], // text direction

      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],

      // ["image", "video", "clean"], // remove formatting button
    ];

    return new Quill(container, {
      theme: "snow",
      modules: {
        toolbar: toolbarOptions,
        "emoji-toolbar": true,
        "emoji-textarea": true,
        "emoji-shortname": true,
        // imageUploader: {
        //   upload: (file: File) => {
        //     return new Promise((resolve, reject) => {
        //       const formData = new FormData();
        //       formData.append("file", file);

        //       $fetch("http://192.168.100.24:44650/file", {
        //         method: "POST",
        //         body: formData,
        //       })
        //         // .then((response) => response.json())
        //         .then((result: any) => {
        //           resolve(`http://192.168.100.24:44650/file?token=${result}`);
        //         })
        //         .catch((error) => {
        //           reject("Upload failed");
        //           console.error("Error:", error);
        //         });
        //     });
        //   },
        // },
      },
      ...options,
    });
  };

  inject("Quill", () => "Quill");

  return {
    provide: { quill },
  };
});
