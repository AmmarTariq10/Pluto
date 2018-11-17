import React, {Component} from 'react';
import {Text, View,TouchableOpacity,ImageBackground,Image} from 'react-native';
import styles from './styles'
import Header from '../../Components/Header/Header'
import RoundButton from '../../Components/Buttons/RoundButton'
import RoomButton from '../../Components/Buttons/RoomButton'
import vh from '../../Units/vh';
import Speedometer from 'react-native-speedometer-chart';
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
      <View style={styles.topContainer}>
        <TouchableOpacity onPress={()=>this.props.navigation.pop()} style={{height:15*vh,width:15*vw,alignItems:"center",alignContent:"center",justifyContent:"center"}}><Image style={{height:'100%',width:'100%',marginLeft:'20%',resizeMode:'contain'}} source={require('../../assets/images/back.png')}/></TouchableOpacity>
        <View style={{flex:1,flexDirection:'row'}}>
        <ImageBackground style={{height:15*vh,width:15*vw,alignItems:"center",alignContent:"center",justifyContent:"center"}} source={require('../../assets/images/energy.png')} imageStyle={{height:'100%',width:'100%',marginLeft:'20%',resizeMode:'contain'}}></ImageBackground>
        <Text adjustsFontSizeToFit={true} style={{width:85*vw,marginLeft:'10%',fontSize:5.5*vh,color:'white',textAlignVertical:'center'}}>Energy Monitor</Text>
        </View>
      </View>
      <View style={styles.content}>
      <View style={{flex:1}}>
      <View style={{flex:1,marginHorizontal:2*vw}}>
        <Text style={{flex:0.8,borderBottomColor:'red',color:'red',borderBottomWidth:1,textAlign:'right',fontSize:8*vh}}>118KW</Text>
        <Text style={{flex:0.2,color:'red'}}>Units Used</Text>
      </View>
      <View style={{flex:1,marginHorizontal:2*vw}}>
        <Text style={{flex:0.8,borderBottomColor:'green',color:'green',borderBottomWidth:1,textAlign:'right',fontSize:8*vh}}>20034</Text>
        <Text style={{flex:0.2,color:'green'}}>Cost</Text>
      </View>
      </View>
      <View style={{flex:1,flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>
           <Speedometer size={150} value={75} totalValue={100}/>
      <Speedometer size={150} value={75} totalValue={100}/>
      </View>
      <View style={{flex:1,flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>
      <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('Energy')} style={styles.button}><Text style={styles.text}>Monthly Charts</Text></TouchableOpacity>
          </View>
      </View>
 
      </View>
      
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


