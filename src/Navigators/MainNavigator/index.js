import React, { Component } from 'react'
import { View, AsyncStorage } from 'react-native'

import {createSwitchNavigator,createStackNavigator} from 'react-navigation'
import { EventRegister } from 'react-native-event-listeners'

import { LoginScreen,PanelScreen,DevicesScreen,EnergyScreen } from '../../screens'

import SplashScreen from 'react-native-splash-screen'
import styles from '../../screens/EnergyScreen/styles';



export default class MainNavigator extends Component {
  constructor(props){
      super(props)   
      this.state={
        authorized:false
      }
  }

  componentWillUnmount(){
    EventRegister.removeAllListeners()
  }
  componentDidMount(){
    EventRegister.addEventListener('userAuthorized', (data) => {
      this.setState(
        p=>{
          return{
            ...p,
            authorized:true
          }

        },SplashScreen.hide()
      )
  })
  EventRegister.addEventListener('userUnauthorized', () => {
    this.setState(
      p=>{
        return{
          ...p,
          authorized:false
        }
      },SplashScreen.hide()
    )
  })
  AsyncStorage.getItem('PlutoUserData').then(
    d=>{
      if(d){
        EventRegister.emit('userAuthorized')
      }else{
        EventRegister.emit('userUnauthorized')

      }
    }
  )
  // SplashScreen.hide()
    console.log('hiding splash')
  }
  renderNavigator =() =>{
    switch(this.state.authorized){
      case true:
          return(
            
              <Authorized />
            )
      case false:
      return(<UnAuthorized />)
    }
  }
    render() {
      console.log('user auth status changed to : ',this.state.authorized)
      return(
        <View style={{flex:1}}>
          {this.renderNavigator()}
        </View>
      )
    }
}

const UnAuthorized = createSwitchNavigator({
    Login:{
    screen:LoginScreen,
    },
},{
  navigationOptions:{
    header:null
  }
})

  const Authorized = createStackNavigator({ 
    Panel:{
      screen:PanelScreen
    },Devices:{
      screen:DevicesScreen,
     },Energy:{
      screen:EnergyScreen,
     },
    
     
},{
  navigationOptions:{
    header:null
  }
})