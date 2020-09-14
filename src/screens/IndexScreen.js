import React,{useContext} from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import {Context} from '../context/BlogContext';
import {Feather, Ionicons} from '@expo/vector-icons';

const IndexScreen = ({navigation}) => {

  const {state,deleteBlogPost} = useContext(Context);
  
  return (
    <View>
      <FlatList 
        data={state}
        keyExtractor={(post)=>post.title}
        renderItem={({item})=>{
          return (
            <TouchableOpacity onPress={()=>navigation.navigate('Show',{id: item.id})}>
              <View style={styles.row}>
                <Text style={styles.title}>{item.title}-{item.id}</Text>
                <TouchableOpacity onPress={()=>deleteBlogPost(item.id)}>
                  <Feather name='trash' size={28} color='black' />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )
        }
      }
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={()=>navigation.navigate('Create')} >
        <Ionicons name='md-add-circle-outline' size={30} style={styles.plus}/>
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({
  row: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
  },
  plus: {
    marginRight: 30,
  }
});

export default IndexScreen;
