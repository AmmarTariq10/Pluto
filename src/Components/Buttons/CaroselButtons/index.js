import React, { Component } from 'react'
import { 
    View,
    Text,
    TouchableOpacity,
    Image
 } from 'react-native'
import styles from './styles'
import vw from '../../../Units/vw'
export default class CaroselButtons extends Component {
    constructor(props){
        super(props)
        console.log('service given is ',this.props.item)
    }
    render(){
        let title = this.props.item.title
        let len = title.length
    
        if(len > 15){
          title = this.props.item.title.substring(0,15) + ' ...'
        }else{
          title = this.props.item.title
        }
            return (
                  
                        <TouchableOpacity onPress={this.props.onPress} style={[styles.main,{height:35*vw,width:28*vw}]}>   
                            <View style={[styles.imgContainer,{height:15*vw,width:15*vw,borderRadius:10*vw}]}>
                            <Image style={[styles.icon]} source={{uri:this.props.item.image}} />
                            </View>
                            <View style={styles.textContainer}>
                                <Text  allowFontScaling={false} style={styles.MainLabel}>{title}</Text>
                           </View>
                        </TouchableOpacity>
                  
            )
        }
    }
