import React,{useContext} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext';
import {Feather} from '@expo/vector-icons';

const ShowScreen = ({navigation}) => {
  const {state} = useContext(Context);
  const blogPost = state.find((post)=>post.id === navigation.getParam('id'));

  return (
    <View>
      <Text style={styles.title}>{blogPost.title}</Text>
      <Text style={styles.content}>{blogPost.content}</Text>
    </View>
  )
};

ShowScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={()=>{
        navigation.navigate('Edit', {id: navigation.getParam('id')} )
        }
      }>
        <Feather name='edit' size={30} style={styles.edit}/>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  edit: {
    marginRight: 30,
  },
  title: {
    fontSize: 22,
    margin: 10,
    fontWeight: 'bold'
  },
  content : {
    fontSize: 18,
    margin: 5
  }
});

export default ShowScreen;