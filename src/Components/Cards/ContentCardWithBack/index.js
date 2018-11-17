import React, { Component } from 'react'
import {
    ScrollView,
    ImageBackground,
    View
} from 'react-native'
import styles from './styles'
import vh from '../../../Units/vh'
export default class ContentCardWithBack extends Component{
    constructor(props){
            super(props)
    }
    render(){
            if(this.props.enabled === true){
        return(
            <ImageBackground imageStyle={{alignSelf:'flex-end',flexDiretion:'row',marginTop:40*vh}} resizeMode='cover' source={require('../../../assets/images/backgrounds/aboutBack.png')} style={styles.main}>
               {this.props.children}
            </ImageBackground>
            )    
            }else{
                return(
                        <View style={styles.main}>
                          
                                        {this.props.children}
                               
                        </View>
                )       
            }
            
    }
}