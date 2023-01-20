import React from "react";

import { createReactEditorJS } from "react-editor-js";

import { EDITOR_JS_TOOLS } from "./constants";

const ReactEditorJS = createReactEditorJS();

const data = {
  time: 1635603431943,
  blocks: [
    {
      id: "sheNwCUP5A",
      type: "header",
      data: {
        text: "Editor.js",
        level: 2,
      },
    },
    {
      id: "12iM3lqzcm",
      type: "paragraph",
      data: {
        text:
          "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text. Use + button to add text block with different options and edit by highlighting the text.",
      },
    },
    {
      id: "FF1iyF3VwN",
      type: "image",
      data: {
        file: {
          url: "https://codex.so/public/app/img/external/codex2x.png"
        },
        caption: "",
        withBorder: false,
        stretched: false,
        withBackground: false
      }
    }
  ],
};



function EditorPage(props) {
  
  return(
  <ReactEditorJS tools={EDITOR_JS_TOOLS} autofocus={true} defaultValue={data} onInitialize={ props.handleInitialize}/>
  ) ;
 
}

export default EditorPage;
