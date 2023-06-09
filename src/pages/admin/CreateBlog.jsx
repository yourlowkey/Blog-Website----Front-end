import React from 'react'
import { useState,useEffect } from 'react';
import TextEditor from '../../components/admin/TextEditor'
import draftToHtml from 'draftjs-to-html';
import axios from 'axios';
import { SnackBar,ErrorDialog } from '../../components';
const CreateBlog = () => {
    const [convertedContent, setConvertedContent] = useState('');
    const [title, setTitle] = useState('');
    const [error, setError] = useState('');
    const [snakeBarProps, setSnakeBarProps] = useState({
        open: false,
        type: 'success',
        message: ''
      });
    
    const handleClose = (_, reason) => {
        if (reason === 'clickaway') {
        return;
        }
        setSnakeBarProps({ open: false, type: 'success', message: '' });
    };  
    const closeErrorDialog = () => {
        setError('');
      };
    const handleContentStateChange = (content)=>{
        setConvertedContent(draftToHtml(content))
    }
    const handleTitleChange = (title)=>{
        setTitle(title)
    }
    const uploadBlogHandler = () =>{
        axios
          .post(`${process.env.REACT_APP_API_URL}/posts`, {
            title: title,
            content: convertedContent.replaceAll('text-align:none', 'text-align:center'),
          }).then(() => {
            setSnakeBarProps({ open: true, message: 'Create post successfully!', type: 'success' });
            setTitle('');
            setConvertedContent('');
          })
          .catch((err) => {
            setError(err.message);
          });
      };
  return (
    <div>CreateBlog
            <div className="container mx-auto px-10 mb-8">
            <TextEditor 
                className="shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8"  
                handleContentStateChange={handleContentStateChange}
                handleTitleChange={handleTitleChange}
                uploadBlogHandler={uploadBlogHandler}
             ></TextEditor>
        </div>
        <ErrorDialog open={!!error} closeHandler={closeErrorDialog} errorMessage={error} />
        <SnackBar open={snakeBarProps.open} handleClose={handleClose} type={snakeBarProps.type} message={snakeBarProps.message} />
    </div>
  )
}

export default CreateBlog