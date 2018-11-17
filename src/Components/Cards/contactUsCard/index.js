import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image} from 'react-native'
import styles from './styles'
import SolidButton from '../../Buttons/SolidButton'
import vw from '../../../Units/vw'
import GestureRecognizer from 'react-native-swipe-gestures';
import KeyboardSpacer from 'react-native-keyboard-spacer'
import ContactForm from '../../Forms/ContactForm'
import {EventRegister} from 'react-native-event-listeners'
export default class ContactUsCard extends Component{
    handler=()=>{
        this.setState(
            prev=>{
                return{
                    ...prev,
                    active:!prev.active
                }
            }
        )
    }
    componentDidMount(){

    }

    constructor(props){
        EventRegister.addEventListener('NavToContactUs',()=>{
            console.log('event called')
            this.handler()
        })
            super(props)
            this.state={
                active:true
            }
    }

    render(){
        if(this.state.active === false){
            return(
            <GestureRecognizer 
            onSwipeUp={this.handler}
            style={styles.main}>
                    <View style={styles.headingContainer}>
                        <Text style={styles.heading}>Contact Us</Text>
                    </View>
                    <View style={styles.contentContainer}>
                        <Text style={styles.content}>If you have questions, or would like more information, please leave your name and contact information.</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <SolidButton method={this.handler}  width={40*vw} height={11*vw} btnColor="#8DC63F" text="Contact Form" />
                    </View> 
            </GestureRecognizer> 
            )
        }
        else if(this.state.active === true){
            return(
                <GestureRecognizer 
                onSwipeDown={this.handler}
                style={styles.mainActive}>
              
                <TouchableOpacity onPress={this.handler} style={styles.iconContainer}>
                    <Image style={{width:3*vw,height:3*vw,marginTop:2*vw}} source={require('../../../assets/images/icons/downArrowIcon.png')} />
                </TouchableOpacity>
                        <View style={styles.headingContainer}>
                            <Text style={styles.heading}>Contact Us</Text>
                   

                        </View>
                        <View style={styles.contentContainer}>
                            <Text style={styles.content}>If you have questions, or would like more information, please leave your name and contact information.</Text>
                        </View>
                        <View style={styles.formContainer}>
                            <ContactForm />
                        </View>
                        
                </GestureRecognizer>
                )
        }
    }
}