import React, { useState } from 'react';
// import './TextEditor.css';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import useAppSettingStore from '../../store/appSettingStore';
import { Button, TextField } from '@mui/material';


const TextEditor = (props) => {
  const [editorState, setEditorState] = useState(()=>EditorState.createEmpty());
//   const appSettingStore = useAppSettingStore();
//   const isDarkMode = appSettingStore.isDarkMode;

  const handleEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  const onTitleChangeHandler = (event) => {
    props.handleTitleChange(event.target.value);
  };

  const uploadImageCallBack = (file) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://api.imgur.com/3/image');
      xhr.setRequestHeader('Authorization', 'Client-ID XXXXX');
      const data = new FormData();
      data.append('image', file);
      xhr.send(data);
      xhr.addEventListener('load', () => {
        const response = JSON.parse(xhr.responseText);
        resolve(response);
      });
      xhr.addEventListener('error', () => {
        const error = JSON.parse(xhr.responseText);
        reject(error);
      });
    });
  };
console.log("editor",editorState);
  return (
    <div className="textEditorContainer">
      <div className="textEditorBlogTitleContainer">
        <TextField className='bg-white' id="outlined-error" label="Blog title" fullWidth onChange={onTitleChangeHandler} />
      </div>
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorStateChange}
        onContentStateChange={props.handleContentStateChange}
        wrapperClassName="pt-4"
        editorClassName="bg-white"
        toolbarClassName="border"
        toolbar={{
          image: { uploadCallback: uploadImageCallBack, alt: { present: true, mandatory: true } }
        }}
        hashtag={{
          separator: ' ',
          trigger: '#'
        }}
        mention={{
          separator: ' ',
          trigger: '@',
          suggestions: [
            { text: 'Golang', value: 'golang', url: 'golang' },
            { text: 'Javascript', value: 'javascript', url: 'javascript' }
          ]
        }}
      />
      <div className="mt-8">
        <Button variant="outlined" onClick={props.uploadBlogHandler}>
          Upload Blog
        </Button>
      </div>
    </div>
  );
};

export default TextEditor;
