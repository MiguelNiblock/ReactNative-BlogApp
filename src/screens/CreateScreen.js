import React,{useContext,useState} from 'react';
import {Text, TextInput, View, StyleSheet, Button} from 'react-native';
import {Context} from '../context/BlogContext';

const CreateScreen = ({navigation}) => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const {addBlogPost} = useContext(Context);

  return (
    <View>
      <Text style={styles.label}>Title</Text>
      <TextInput style={styles.input} value={title} onChangeText={(text)=>setTitle(text)}/>
      <Text style={styles.label}>Content</Text>
      <TextInput style={styles.input} value={content} onChangeText={(text)=>setContent(text)} />
      <Button 
        title='Add Blog Post' 
        onPress={()=>{
          addBlogPost(title,content)
          navigation.navigate('Index')
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

export default CreateScreen;