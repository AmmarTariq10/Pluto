import React, { Component } from 'react'
import {
    View
} from 'react-native'
import styles from './styles'
export default class ProfileContent extends Component{
    constructor(props){
            super(props)
    }
    render(){
            return(
            <View style={styles.main}>{this.props.children}</View>
            )
    }
}