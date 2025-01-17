import React, { useRef, useEffect } from "react";


import EditorJS from "@editorjs/editorjs";
import { EDITOR_JS_TOOLS } from "./constants";


const EditorPage = ({ handleInitialize }) => {
  const editorInstance = useRef(null);

  useEffect(() => {
    editorInstance.current = new EditorJS({
      holder: "editorjs",
      onChange: () => console.log("Something is changing!!"),

      onReady: () => {
        handleInitialize(editorInstance.current);
      },

      data: JSON.parse(localStorage.getItem("editorContent")),

      placeholder: "Let's write an awesome story!",
      // Add other Editor.js configuration options here
      tools: EDITOR_JS_TOOLS,
    });

    return () => {
      if (editorInstance.current) {
        editorInstance.current.destroy();
      }
    };
  }, [handleInitialize]);

  return <div id="editorjs"></div>;
};

export default EditorPage;
