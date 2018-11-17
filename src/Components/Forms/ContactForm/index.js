import React, { Component } from 'react'
import {
    View
} from 'react-native'
import styles from './styles'
import FormInput from '../../Inputs/FormInput'
import KeyboardSpacer from 'react-native-keyboard-spacer';
import SolidButton from '../../Buttons/SolidButton'
import ContactService from '../../../Api/Services/contact'
import vw from '../../../Units/vw'
import Loader from '../../Popup/Loader'
import Toast from 'react-native-toast'
export default class ContactForm extends Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            name:'',
            message:'',
            emailValid:false,
            nameValid:false,
            messageValid:false,
                        
        }
        console.log('contructed')
    }


    success=(data)=>{
        this.loader.hide()
        this.setState(p=>{
            return{
                ...p,
            email:'',
            name:'',
            message:'',
            emailValid:false,
            nameValid:false,
            messageValid:false,   
            }
     
        })
        Toast.show('Email sent')

    }
    
        failed=(data)=>{
            this.loader.hide()
            Toast.show(data.message)
        }
        
        
    handler=()=>{
        this.loader.show()
        console.log('email validation : ',this.state.emailValid + 'email is',this.state.email)
        console.log('message validation : ',this.state.messageValid + 'email is',this.state.message)
        console.log('name validation : ',this.state.nameValid + 'email is',this.state.name)

        if(this.state.emailValid === false){
            Toast.show('Please provide a valid email address')
            this.loader.hide()
            return
        }
        if(this.state.nameValid === false){
            Toast.show('Please provide a valid name')
            this.loader.hide()
            return
        }

        if(this.state.message === ''){
            Toast.show('Please write a message')            
            this.loader.hide()
            return
        }

        ContactService({"email":this.state.email,"name":this.state.name,"message":this.state.message},this.success,this.failed)
    }
        render(){
            console.log(this.state.email)
            console.log(this.state.name)
            console.log(this.state.message)

            return(
                <View style={styles.container}>
                    <Loader message="Please wait" ref={r=>{this.loader = r}}/>
                    <View style={styles.formContainer}>
                    <FormInput keyType="next" submit={()=>this.email.focus()} ref={r=>{this.name = r}} keyboard='default' onChange={(t,valid)=>{this.setState(p=>{return{...p,name:t,nameValid:valid}})}} type='name'  width={60*vw} height={12*vw} placeholder='Name' color='#999999' />
                    <FormInput keyType="next"  submit={()=>this.message.focus()}  ref={r=>{this.email = r}} keyboard='email-address' onChange={(t,valid)=>{this.setState(p=>{return{...p,email:t,emailValid:valid}})}} type='email' width={60*vw} height={12*vw} placeholder='Email' color='#999999'/>
                    <FormInput keyType="go"  submit={()=>this.handler()}  ref={r=>{this.message = r}} multiline={true} keyboard='default' onChange={(t,valid)=>{this.setState(p=>{return{...p,message:t,messageValid:valid}})}} type='address' width={60*vw} height={30*vw} placeholder='Message' color='#999999'/>
                    <KeyboardSpacer/> 
                    </View>
                    <View style={styles.btnContainer}>
                    <SolidButton method={this.handler} width={40*vw} height={12*vw} btnColor="#8DC63F" text="Submit Request" />
                    </View>
                </View>
            )
        }
}