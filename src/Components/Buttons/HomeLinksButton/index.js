import React, { Component } from 'react'
import { 
    View,
    Text,
    TouchableOpacity,
    ImageBackground
 } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles'
export default class HomeLinksButton extends Component {
    constructor(props){
        super(props)
    }
    render(){
            return (
            <TouchableOpacity onPress={this.props.method} style={styles.buttonContainer}>
                <ImageBackground resizeMode="cover" imageStyle={{borderRadius:10}} style={styles.backgroundImage} source={this.props.image}>
                    <LinearGradient   start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={[this.props.startColor,this.props.endColor]} style={styles.grad}>
                        <View style={styles.textContainer}>
                        <View style={styles.subTextContainer}><Text style={styles.subText}>{this.props.subText}</Text></View>                                       
                        <View style={styles.mainTextContainer}><Text style={styles.mainText}>{this.props.mainText}</Text></View>
                        </View>
                    </LinearGradient>
                </ImageBackground>
            </TouchableOpacity>
                   
            )
        }
           
        
    }
