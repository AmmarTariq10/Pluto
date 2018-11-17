import React, { Component } from 'react'
import {
    ScrollView,
} from 'react-native'
import styles from './styles'
export default class ContentCard extends Component{
    constructor(props){
            super(props)
    }
    render(){
            return(
            <ScrollView  fixDoubleTapIssue={true} showsVerticalScrollIndicator={false}  style={[styles.main,{backgroundColor:this.props.backgroundColor}]}>
                    {this.props.children}    
            </ScrollView>
            )
    }
}