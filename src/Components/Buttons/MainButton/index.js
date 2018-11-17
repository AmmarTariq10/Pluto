import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native'
import styles from './styles';
export default class MainButton extends Component{
    constructor(props){
        super(props)
            this.state={
                focused:false,
                labelEnabled:false,
                text:''
        }
}
render(){
    return(
            <TouchableOpacity onPress={this.props.onPress} style={[styles.btn,{width:this.props.width,height:this.props.height},this.props.style]}>
                <Text style={[styles.text,{fontSize:this.props.height*0.4,}]}>{this.props.text}</Text>
            </TouchableOpacity>
    )
}
}   