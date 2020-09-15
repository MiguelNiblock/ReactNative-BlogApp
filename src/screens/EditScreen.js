import React,{useContext, useState} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import {Context} from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';


const EditScreen = ({navigation})=> {
  const id = navigation.getParam('id');
  const {state,editBlogPost} = useContext(Context);
  const post = state.find((post)=>post.id === id);

  return (
      <BlogPostForm post={post} onSubmit={(title,content)=>{
        editBlogPost(id,title,content,()=>navigation.pop())
      }}/>
  )
};

const styles = StyleSheet.create({});

export default EditScreen;