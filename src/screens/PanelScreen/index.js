import React, {Component} from 'react';
import {Text, View,TouchableOpacity,ImageBackground,ScrollView,AsyncStorage} from 'react-native';
import styles from './styles'
import Header from '../../Components/Header/Header'
import RoundButton from '../../Components/Buttons/RoundButton'
import RoomButton from '../../Components/Buttons/RoomButton'
import Api from '../../Api';
export default class PanelScreen extends Component{
  componentDidMount(){
    AsyncStorage.getItem('PlutoUserData')
    .then(
      d=>{
        let data = JSON.parse(d)
        console.log(data)
        Api('/devices/get/byuser', {
          username:data.credentials.username,
          password:data.credentials.password,
          token:data.data.value
        },data=>{
          console.log('from screen success',data.message[0])
          data.message.forEach(
            d=>{
              for(var key in d){
                this.setState(
                  p=>{
                    return{
                      ...p,
                      devices:[...p.devices,...d[key]]
                    }
                  }
                )
                console.log('devices',this.state.devices)
              }
            }
          )


        },error=>{
          Toast.show(error.message.toString())
        })
      }
    )
    
  }
  constructor(props){
    super(props)
    this.state={
      devices:[]
    }
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
              {this.state.devices.map(
                device=>{
                  return(
              <RoomButton key={device._id} device={device} onPress={()=>{this.props.navigation.navigate('Devices')}}/>

                  )
                }
              )}
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


