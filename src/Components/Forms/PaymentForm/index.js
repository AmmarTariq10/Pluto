import React, { Component } from 'react'
import {
    AsyncStorage,
    View
} from 'react-native'
import styles from './styles'
import FormInput from '../../Inputs/FormInput'

import KeyboardSpacer from 'react-native-keyboard-spacer';
import vw from '../../../Units/vw'
export default class BookingForm extends Component{
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    componentDidMount(){
     
    }


        render(){
            return(
                <View style={styles.container}>
                    <FormInput onChangeText={t=>{this.setState(p=>{return{...p,type:t}})}} keyboard='default'  height={15*vw} color='#666666' value={this.state.name} width={70*vw} type='name' placeholder='Type'/>
                    <FormInput onChangeText={t=>{this.setState(p=>{return{...p,name:t}})}} keyboard='default' height={15*vw} color='#666666' value={this.state.address} width={70*vw}  type='name' placeholder='Name'/>
                    <FormInput onChangeText={t=>{this.setState(p=>{return{...p,number:t}})}} keyboard='numeric' height={15*vw} color='#666666' value={this.state.phone} width={70*vw} type='phone' placeholder='Card Number'/>
                    <FormInput onChangeText={t=>{this.setState(p=>{return{...p,}})}} keyboard='email-address' height={15*vw} color='#666666' value={this.state.email} width={70*vw} type='phone' placeholder='Expiry Year'/>
                    <FormInput onChangeText={t=>{this.setState(p=>{return{...p,}})}} keyboard='email-address' height={15*vw} color='#666666' value={this.state.email}    width={70*vw} type='phone' placeholder='Expiry Month'/>
                    <KeyboardSpacer/>
                </View>
            )
        }
}