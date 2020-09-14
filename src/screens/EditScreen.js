import React,{useContext, useState} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import {Context} from '../context/BlogContext';

const EditScreen = ({navigation})=> {

  const {state} = useContext(Context);
  const post = state.find((post)=>post.id === navigation.getParam('id'));

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  return (
    <View>
      <Text>EditScreen - {navigation.getParam('id')}</Text>
      <TextInput value={title} onChangeText={(newTitle)=>setTitle(newTitle)} />
      </View>
  )
};

const styles = StyleSheet.create({});

export default EditScreen;