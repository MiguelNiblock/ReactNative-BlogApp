import React,{useContext, useState} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import {Context} from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';


const EditScreen = ({navigation})=> {

  const {state} = useContext(Context);
  const post = state.find((post)=>post.id === navigation.getParam('id'));

  return (
      <BlogPostForm />
  )
};

const styles = StyleSheet.create({});

export default EditScreen;