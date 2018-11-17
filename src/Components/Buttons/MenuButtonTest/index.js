import React, { Component } from 'react'
import { 
    View,
    Text,
    TouchableOpacity,
    Image
 } from 'react-native'
import styles from './styles'
import vw from '../../../Units/vw'
export default class MenuButtonTest extends Component {
    constructor(props){
        super(props)
        console.log('service given is ',this.props.item)
    }
    render(){
        let t = this.props.item.title
        let len = t.length
        let title = this.props.item.title
    
        if(len > 20){
          title = this.props.item.title.substring(0,20) + ' ...'
        }else{
          title = this.props.item.title
        }
            return (
                        <TouchableOpacity onPress={this.props.click} style={[styles.main,{height:this.props.size-2*vw,width:this.props.size-2*vw}]}>   
                            <View style={[styles.imgContainer,{height:this.props.size-25*vw,width:this.props.size-25*vw,borderRadius:this.props.size-25*vw}]}>
                            <Image style={[styles.icon]} source={{uri:this.props.item.image}} />
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.MainLabel}>{title}</Text>
                           </View>
                        </TouchableOpacity>
                
            )
        }
    }
