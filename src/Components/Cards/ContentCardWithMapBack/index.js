import React, { Component } from 'react'
import {
    ImageBackground,
    View
} from 'react-native'
import styles from './styles'
import {ContactImage} from '../../../Api/Services'
export default class ContentCardWithBack extends Component{
    constructor(props){
            super(props)
            this.state={
                image:'https://via.placeholder.com/450x760'
            }
    }
    componentDidMount(){
        ContactImage((data)=>{
            if(data.image){
                this.setState(
                    p=>{
                        return{
                            ...p,image:data.image
                        }
                    }
                )
            }else{
                this.setState(
                    p=>{
                        return{
                            ...p
                        }
                    }
                )
            }
        },(e)=>{
            console.log(e)
        })
    }
    render(){
            return(
                <View  fixDoubleTapIssue={true} style={styles.main} >
                <ImageBackground style={{flex:1}} imageStyle={styles.map} source={{uri:this.state.image}} resizeMode="cover">
                {this.props.children}
                </ImageBackground>
                </View>
            )
    }
}