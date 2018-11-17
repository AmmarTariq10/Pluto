import React, {Component} from 'react';
import {Text, View,TouchableOpacity,ImageBackground,ScrollView} from 'react-native';
import styles from './styles'
import Header from '../../Components/Header/Header'
import RoundButton from '../../Components/Buttons/RoundButton'
import RoomButton from '../../Components/Buttons/RoomButton'
export default class PanelScreen extends Component{
  componentDidMount(){

  }
  constructor(props){
    super(props)
    // EventRegister.addEventListener('NavToContactUs', () => {
    //   console.log('executed')
    //   this.props.navigation.navigate('ContactUs')
    // })
  }
  render(){
    return(
  <ImageBackground source={require('../../assets/images/loginBack.png')} style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.menuContainer}>
            <RoundButton onPress={()=>this.props.navigation.navigate('Energy')} color="#f7cd0a" img={require('../../assets/images/energy.png')} text="Energy"/>
            <RoundButton color="#464646" img={require('../../assets/images/lock.png')} text="Security"/>
            <RoundButton color="#012c45" img={require('../../assets/images/gear.png')} text="Settings"/>
            <RoundButton color="#008800" img={require('../../assets/images/door.png')} text="Doors"/>
        </View>
          <View style={styles.listContainer}>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{alignItems:"center"}} style={styles.scroll}>
              <RoomButton onPress={()=>{this.props.navigation.navigate('Devices')}}/>
              <RoomButton onPress={()=>{this.props.navigation.navigate('Devices')}}/>
              <RoomButton onPress={()=>{this.props.navigation.navigate('Devices')}}/>
              <RoomButton onPress={()=>{this.props.navigation.navigate('Devices')}}/>
              <RoomButton onPress={()=>{this.props.navigation.navigate('Devices')}}/>
              <RoomButton onPress={()=>{this.props.navigation.navigate('Devices')}}/>
              <RoomButton onPress={()=>{this.props.navigation.navigate('Devices')}}/>
              <RoomButton onPress={()=>{this.props.navigation.navigate('Devices')}}/>
              <RoomButton onPress={()=>{this.props.navigation.navigate('Devices')}}/>
              <RoomButton onPress={()=>{this.props.navigation.navigate('Devices')}}/>
              <RoomButton onPress={()=>{this.props.navigation.navigate('Devices')}}/>
              <RoomButton onPress={()=>{this.props.navigation.navigate('Devices')}}/>
              <RoomButton onPress={()=>{this.props.navigation.navigate('Devices')}}/>
              <RoomButton onPress={()=>{this.props.navigation.navigate('Devices')}}/>
              <RoomButton onPress={()=>{this.props.navigation.navigate('Devices')}}/>
              <RoomButton onPress={()=>{this.props.navigation.navigate('Devices')}}/>
              <RoomButton onPress={()=>{this.props.navigation.navigate('Devices')}}/>
              <RoomButton onPress={()=>{this.props.navigation.navigate('Devices')}}/>
              <RoomButton onPress={()=>{this.props.navigation.navigate('Devices')}}/>
              <RoomButton onPress={()=>{this.props.navigation.navigate('Devices')}}/>
              <RoomButton onPress={()=>{this.props.navigation.navigate('Devices')}}/>
              <RoomButton onPress={()=>{this.props.navigation.navigate('Devices')}}/>
              <RoomButton onPress={()=>{this.props.navigation.navigate('Devices')}}/>
              <RoomButton onPress={()=>{this.props.navigation.navigate('Devices')}}/>
              <RoomButton onPress={()=>{this.props.navigation.navigate('Devices')}}/>
          </ScrollView>
          <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('Devices')} style={styles.button}><Text style={styles.text}>Accessibilites</Text></TouchableOpacity>
          </View>
          </View>
          <View style={styles.empty}>
          
          </View>
        </View>
  </ImageBackground>
    )
  }
}


