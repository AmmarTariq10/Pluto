import React, { Component } from 'react'
import { 
    View,
    Text,
    TouchableOpacity,
    Image,
    ImageBackground
 } from 'react-native'
import styles from './styles'
export default class MenuButton extends Component {
    constructor(props){
        super(props)
    }
    render(){
            return (
            <View style={{flexDirection:'row'}}>
                 <TouchableOpacity onPress={this.props.click} style={[this.props.style]}>
                        <ImageBackground resizeMode='contain' style={[styles.main,{height:this.props.size,width:this.props.size}]} source={require('../../../assets/images/backgrounds/buttonBackSquare.png')}>
                            <View style={styles.imgContainer}>
                            <Text style={styles.price}>$79</Text>
                            <Image style={styles.icon} source={this.props.item.option1.img} />
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.MainLabel}>{this.props.item.option1.label}</Text>
                                <Text style={styles.subLabel}>{this.props.item.option1.subLabel}</Text>
        
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={this.props.click}       style={[this.props.style]}>
                        <ImageBackground resizeMode='contain' style={[styles.main,{height:this.props.size,width:this.props.size}]} source={require('../../../assets/images/backgrounds/buttonBackSquare.png')}>
                            <View style={styles.imgContainer}>
                            <Text style={styles.price}>$79</Text>
                                <Image style={styles.icon} source={this.props.item.option2.img} />
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.MainLabel}>{this.props.item.option2.label}</Text>
                                <Text style={styles.subLabel}>{this.props.item.option2.subLabel}</Text>
                              
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
            </View>
                   
            )
        }
    }
