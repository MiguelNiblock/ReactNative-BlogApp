import React,{useState} from 'react';
import {Text, TextInput, View, StyleSheet, Button} from 'react-native';

const BlogPostForm = ({onSubmit}) => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <View>
      <Text style={styles.label}>Title</Text>
      <TextInput style={styles.input} value={title} onChangeText={(text)=>setTitle(text)}/>
      <Text style={styles.label}>Content</Text>
      <TextInput style={styles.input} value={content} onChangeText={(text)=>setContent(text)} />
      <Button 
        title='Save Blog Post' 
        onPress={()=>{
          onSubmit(title,content)
          }
        }
      />
    </View>
  )
};

const styles = StyleSheet.create({
  label: {
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 5,
    fontSize: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    marginLeft: 15,
    marginBottom: 10,
    fontSize: 18,
    padding: 3,
  }
});

export default BlogPostForm;