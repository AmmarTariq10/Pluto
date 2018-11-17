import React,{Component} from 'react'
import {
    TouchableOpacity,
} from 'react-native'
import vw from '../../../Units/vw'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class CameraButton extends Component {
   
   render(){
       
    return(
        <TouchableOpacity onPress={this.props.method} style={{width:8*vw,height:8*vw,borderRadius:8*vw,borderWidth:1*vw,borderColor:'white',elevation:2,alignContent:'center',alignItems:'center',justifyContent:'center',backgroundColor:'#8DC63F',shadowOffset:{
            width:1*vw,
            height:1*vw
          },
          shadowOpacity:0.1,
          shadowRadius:1*vw}}>
           <Icon name='camera' size={3*vw} color="white" />
        </TouchableOpacity>
    )
   }
}