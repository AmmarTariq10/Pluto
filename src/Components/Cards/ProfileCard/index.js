import React, { Component } from 'react'
import {
    View,
    ImageBackground,
} from 'react-native'
import styles from './styles'
export default class ProfileCard extends Component{
    constructor(props){
        super(props)
        this.state={
            avatar:require('../../../assets/images/profile/pro.png'),
            visible:true
        }
    }

    componentDidMount(){
    }
   
    render(){
            return(
                <View style={styles.mainContainer}>
                    <View style={styles.picArea}>
                        <View style={styles.picCircle}>
                            <View style={styles.innerCircle}>
                                <ImageBackground source={this.state.avatar} style={styles.picture} imageStyle={styles.imgBack}></ImageBackground>
                            </View>
                        </View>
                    </View>
                </View>
                )
        }
    
}