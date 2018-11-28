import React, { Component } from 'react';
import {
  View,
  Image,
  ImageBackground,
  StatusBar,
  AsyncStorage
} from 'react-native';
import styles from './styles'
import InputWithBorder from '../../Components/Inputs/InputWithBorder'
import vw from '../../Units/vw';
import vh from '../../Units/vh';
import MainButton from '../../Components/Buttons/MainButton'
import Toast from 'react-native-toast'
import { EventRegister } from 'react-native-event-listeners';
import Api from '../../Api'
export default class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }

  }
  componentDidMount(){

  }
  static navigationOptions = {
    header: null
  };

  success = (d) => {
    console.log(d)
  }

  nav = () => {
    //  this.props.navigation.navigate('Home')
  }
  login = () => {
    if (this.state.username === '') {
      Toast.show('Please Enter a valid username')
      return
    }
    if (this.state.password === '') {
      Toast.show('Please enter password for ' + this.state.username)
      return
    }

    Api('/login', {
      username:this.state.username,
      password:this.state.password
    },data=>{
      console.log('from screen success',data)
      AsyncStorage.setItem('PlutoUserData',JSON.stringify({data:data.message,credentials:{username:this.state.username,password:this.state.password}}))
      EventRegister.emit('userAuthorized')
    },error=>{
      Toast.show(error.message.toString())
    })

    // fetch('https://ptiot-pulsatetechnologies.appspot.com/login',{
    //   method:'POST',
    //   headers:{"Content-type":"application/json"},
    //   body:JSON.stringify({
    //     "username": this.state.username,
    //     "password": this.state.password
    //   })
    // }).then(
    //   d=>{
    //     console.log('data',d)
    //   }
    // )
  }

  render() {
    return (
      <ImageBackground source={require('../../assets/images/loginBack.png')} style={styles.container}>
        <ImageBackground source={require('../../assets/images/logo.png')} imageStyle={styles.logo} style={styles.logoContainer}></ImageBackground>
        <View style={styles.content}>
          <View style={{ flex: 0.5 }}></View>
          <View style={{ flex: 1, alignItems: "center", justifyContent: "space-around" }}>
            <InputWithBorder onChangeText={t => { this.setState(p => { return { ...p, username: t } }) }} width={80 * vw} height={6 * vh} placeholder="Enter your username" label="Username" />
            <InputWithBorder onChangeText={t => { this.setState(p => { return { ...p, password: t } }) }} width={80 * vw} height={6 * vh} placeholder="Enter your password" secure={true} label="Pasword" />
            <MainButton onPress={this.login} width={50 * vw} height={8 * vh} text="LOGIN" />
          </View>
          <View style={{ flex: 0.5 }}></View>
        </View>
      </ImageBackground>
    );
  }
}
