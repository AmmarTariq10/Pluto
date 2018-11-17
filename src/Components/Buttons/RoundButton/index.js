import React,{Component} from 'react'
import {
    TouchableOpacity,
    Image,
    View,
    Text
} from 'react-native'
import styles from './styles'
export default class IconButton extends Component {
   render(){
    return(
        <TouchableOpacity onPress={this.props.onPress}>
           <View style={[styles.imageContainer,{backgroundColor:this.props.color}]}><Image style={styles.img} source={this.props.img}/></View>
            <Text style={styles.text}>{this.props.text}</Text>
        </TouchableOpacity>
    )
   }
}