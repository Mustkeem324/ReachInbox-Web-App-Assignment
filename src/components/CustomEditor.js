// src/components/CustomEditor.js
import React, { useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const CustomEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const saveContent = () => {
    const contentState = editorState.getCurrentContent();
    const rawContent = JSON.stringify(convertToRaw(contentState));
    console.log('Saved content:', rawContent);
  };

  return (
    <div className="custom-editor">
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
      />
      <button onClick={saveContent}>SAVE</button>
    </div>
  );
};

export default CustomEditor;
