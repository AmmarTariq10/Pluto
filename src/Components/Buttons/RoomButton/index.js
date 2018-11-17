import React,{Component} from 'react'
import {
    TouchableOpacity,
    Image,
    View,
    Text
} from 'react-native'
import styles from './styles'
import vh from '../../../Units/vh';
import vw from '../../../Units/vw';
export default class RoomButton extends Component {
   render(){
    return(
        <TouchableOpacity style={{flexDirection:"row",width:'80%',height:6.5*vh,borderRadius:2*vw,backgroundColor:'rgba(255,255,255,0.8)',marginVertical:0.5*vh}} onPress={this.props.onPress}>
           <View style={[styles.textContainer]}><Text style={styles.text}>Dummy Room</Text></View>
            <View style={{flex:1}}><Image source={require('../../../assets/images/gearBlue.png')} style={styles.img} /></View>
        </TouchableOpacity>
    )
   }
}