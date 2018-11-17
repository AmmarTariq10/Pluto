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
        AsyncStorage.getItem('user:everlastingMassage')
        .then(
            d=>{
                let data = JSON.parse(d)
                console.log('data from storage',data)
                if(data != null){
                    this.setState(
                    p=>{
                        return{
                            ...p,
                            name:data.first_name ? data.first_name : '',
                            address:data.address_1 ? data.address_1 : '',
                            phone:data.phone ? data.phone : '',
                            email:data.email ? data.email : '',
                        }
                    },()=>this.props.fetchData(this.state)
                ) 
                }
                console.log(this.state)
                
            }
        )
    }

        NameHandler = (t,v) => {
            console.log(t,v)

            this.setState(
                p=>{
                    return{
                        ...p,
                        name:t,
                        nameValide:v
                    }
                },()=> this.props.fetchData(this.state)
            )
           
        }
        AddressHandler = (t,v) => {
            console.log(t,v)
            this.setState(
                p=>{
                    return{
                        ...p,
                        address:t,
                        addressValide:v
                    }
                },()=>this.props.fetchData(this.state)
            )
            
        }
        PhoneHandler = (t,v) => {
            console.log(t,v)

            this.setState(
                p=>{
                    return{
                        ...p,
                        phone:t,
                        phoneValide:v
                    }
                },()=>this.props.fetchData(this.state)
            )
            
        }
        EmailHandler = (t,v) => {
            console.log(t,v)

            this.setState(
                p=>{
                    return{
                        ...p,
                        email:t,
                        emailValide:v
                    }
                },()=> this.props.fetchData(this.state)
            )
           
        }

        render(){
            return(
                <View style={styles.container}>
                    <FormInput submit={()=>this.address.focus()} keyType="next" ref={r=>{this.name = r}} keyboard='default'  height={15*vw} color='#666666' onChange={(t,valid)=>{this.NameHandler(t,valid)}}  value={this.state.name}      width={70*vw} type='name' placeholder='Name'/>
                    <FormInput submit={()=>this.phone.focus()}  keyType="next" ref={r=>{this.address = r}} keyboard='default' height={15*vw} color='#666666' onChange={(t,valid)=>{this.AddressHandler(t,valid)}} value={this.state.address}    width={70*vw}  type='address' placeholder='Address'/>
                    <FormInput submit={()=>this.email.focus()}  keyType="next" ref={r=>{this.phone = r}} keyboard='numeric' height={15*vw} color='#666666' onChange={(t,valid)=>{this.PhoneHandler(t,valid)}}     value={this.state.phone}  width={70*vw} type='phone' placeholder='Phone'/>
                    <FormInput keyType="go" ref={r=>{this.email = r}} keyboard='email-address' height={15*vw} color='#666666' onChange={(t,valid)=>{this.EmailHandler(t,valid)}}   value={this.state.email}    width={70*vw} type='email' placeholder='Email'/>
                    <KeyboardSpacer/>
                </View>
            )
        }
}