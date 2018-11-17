import React, {Component} from 'react';
import {Text, View,TouchableOpacity,ImageBackground,Image,ScrollView} from 'react-native';
import styles from './styles'
import Header from '../../Components/Header/Header'
import RoundButton from '../../Components/Buttons/RoundButton'
import RoomButton from '../../Components/Buttons/RoomButton'
import vh from '../../Units/vh';
import Speedometer from 'react-native-speedometer-chart';
import ToggleSwitch from 'toggle-switch-react-native'
export default class PanelScreen extends Component{
  componentDidMount(){

  }
  constructor(props){
    super(props)
    this.state = {
      isOn:false
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
      <View style={styles.topContainer}>
        <TouchableOpacity  onPress={()=>this.props.navigation.pop()} style={{height:15*vh,width:15*vw,alignItems:"center",alignContent:"center",justifyContent:"center"}}><Image style={{height:'100%',width:'100%',marginLeft:'20%',resizeMode:'contain'}} source={require('../../assets/images/back.png')}/></TouchableOpacity>
        <View style={{flex:1,flexDirection:'row'}}>
        <ImageBackground style={{height:10*vh,width:15*vw,alignItems:"center",alignContent:"center",justifyContent:"center"}} source={require('../../assets/images/bulb.png')} imageStyle={{height:'70%',width:'100%',marginTop:'50%',marginLeft:'20%',resizeMode:'contain'}}></ImageBackground>
        <Text adjustsFontSizeToFit={true} style={{width:85*vw,marginLeft:'10%',fontSize:5.5*vh,color:'white',textAlignVertical:'center'}}>Room 1</Text>        
        </View>
      </View>
      <ScrollView style={styles.content}>
        <View style={{height:7*vh,borderBottomWidth:1,flexDirection:"row",marginHorizontal:2*vw}}>
        <Text style={{flex:1,fontSize:4*vh,textAlignVertical:"center"}}>Room 1</Text>
        <ToggleSwitch
    isOn={this.state.isOn}
    onColor='green'
    offColor='grey'
    label={false}
    size='medium'
    onToggle={ (isOn) => this.setState({isOn:isOn})}
/>
        </View>
      </ScrollView>
      
      {/* <View style={styles.content}>
        <View style={styles.menuContainer}>
            <TouchableOpacity style={{flex:1}}><Image source={require('../../assets/images/loginBack.png')}/></TouchableOpacity>
            <ImageBackground source={require('../../assets/images/energy.png')} style={{flex:1}}></ImageBackground>
            <Text allowFontScaling={true} adjustsFontSizeToFit={true} style={{flex:3,fontSize:3.5*vh,color:'white'}}>Energy Monitor</Text>
        </View>
          <View style={styles.listContainer}>

          </View>
        </View> */}
  </ImageBackground>
    )
  }
}


