/*
Author : Ammar Tariq
Email : ammar.tariq@hotmail.com
Version : Beta
*/

import React, {Component} from 'react';

import {StatusBar,StyleSheet,View,AsyncStorage} from 'react-native';

import MainNavigator from './src/Navigators/MainNavigator'

import { EventRegister } from 'react-native-event-listeners';
// import Header from './src/Components/Header/MainHeader'

export default class App extends Component{
  componentDidMount(){
    // AsyncStorage.getItem('userAuthorizedData:Pluto')
    // .then(
    //   d=>{
    //     if(d){
    //       EventRegister.emit('userAuthorized')
    //     }else{
    //       EventRegister.emit('userUnauthorized')
    //     }
    //   }
    // )
  }

  
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
