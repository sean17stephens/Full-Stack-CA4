import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { render } from 'react-dom';
import CustomButton from './components/CustomButton';

export default class App extends React.Component() {
  
  constructor(){
    super()
    this.state = {
      productCount: 0
    }
  }

  render(){
  return (
    <View style={styles.container}>
      <Text>Hello and Welcome to my Mobile Phone App</Text>
      <Text>This is a cross platform app</Text>
      <CustomButton/>
      <Text>this.state.productCount</Text>
    </View> 
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
