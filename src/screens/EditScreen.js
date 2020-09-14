import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const EditScreen = ({navigation})=> {
  return (
    <Text>EditScreen - {navigation.getParam('id')}</Text>
  )
};

const styles = StyleSheet.create({});

export default EditScreen;