import React, { createContext, useState } from 'react';

const EditorContext = createContext();

function EditorProviderWrapper(props) {
  const [editorText, setEditorText] = useState('');
  return (
    <EditorContext.Provider value={(editorText, setEditorText)}>
      {props.children}
    </EditorContext.Provider>
  );
}

export { EditorContext, EditorProviderWrapper };
