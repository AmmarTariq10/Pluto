import React, { Component } from 'react'
import {
    View,
    AsyncStorage,
    ScrollView,
    Image
} from 'react-native'
import styles from './styles'
import SolidButton from '../../Buttons/SolidButton'
import vw from '../../../Units/vw'
import FormInput from '../../Inputs/FormInput'
import KeyboardSpacer from 'react-native-keyboard-spacer';
import Loader from '../../../Components/Popup/Loader'
import { ProfileUpdate, PasswordUpdate } from '../../../Api/Services'
import Toast from 'react-native-toast'
import RNRestart from 'react-native-restart'
export default class DetailsCard extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            email:'',
            phone:'',
            address:'',
            nameValid:true,
            emailValid:true,
            phoneValid:true,
            addressValid:true,
            fixedEmail:'',
            token:'',
            id:'',
            password:'',
            confirmPassword:'',
            passwordValid:false,
            confirmPasswordValid:false,
        }
    }
    componentDidMount(){
        this.loader.show()
        this.getItems()
    }
    getItems = () => {
        AsyncStorage.getItem('user:everlastingMassage')
        .then(
            d=>{
               let data=JSON.parse(d)   
               console.log('account',data)
               this.loader.hide()
               this.setState(
                   prev=>{
                       return{
                           ...prev,
                            name:data.first_name,
                            email:data.email,
                            phone:data.phone,
                            address:data.address_1,
                            fixedEmail:data.email,
                            token:data.accesstoken,
                            id:data.id
                       }
                   }
               )
            }
        )
    }

    logHandler = () => {
        console.log('hellor')
        if(this.state.fixedEmail === this.state.email){
            if(this.state.name === ''){
            Toast.show('Name required.')
            return 
            }
            if(this.state.nameValid === false){
                Toast.show('Name invalid.')
                return 
            }

            if(this.state.phone === ''){
                Toast.show('Phone requried.')
                return 
            }
            if(this.state.phoneValid === false){
                Toast.show('Phone invalid.')
                return 
            }

            if(this.state.address === ''){
                Toast.show('Address required.')
                return 
            }
            if(this.state.addressValid === false){
                Toast.show('Address invalid.')
                return 
            }
            
        }else{
            Toast.show('Email address cannot be updated.')
            return
        }

        let data = {
            "email":this.state.fixedEmail,
            "first_name":this.state.name,
            "last_name":this.state.name,
            "address":this.state.address,
            "phone":this.state.phone,
            "id":this.state.id
        }
        let token = this.state.token
        console.log(token,data)
        ProfileUpdate(data,token,this.success,this.error) 
    }
    success=(data)=>{
        if(this.state.password != ''){
            if(this.state.passwordValid ===false){
                Toast.show('Please enter atleast 10 character password')
                return 
            }
            if(this.state.password != this.state.confirmPassword){
                Toast.show('Confirm password does not match the password field')
                return
            }else{
                let d = {
                    "password":this.state.password,
                          "id":this.state.id
                }
                PasswordUpdate(this.state.token,d,d=>{
                    Toast.show('Password updated')
                    this.logout
                }, this.error
            )
            }
        }
        let d = {
            accesstoken:this.state.token,
            address_1:this.state.address,
            email:this.state.fixedEmail,
            first_name:this.state.name,
            id:this.state.id,
            last_name:this.state.name,
            phone:this.state.phone,
        }
        AsyncStorage.setItem('user:everlastingMassage',JSON.stringify(d))
        this.getItems()
        this.loader.hide()
        console.log('successful')
        console.log(data)
        Toast.show('Profile updated successfully')
    }
    error=(data)=>{
        this.loader.hide()
        if(err === 'invalid token'){
            Toast.show('invalid token')
            AsyncStorage.removeItem('user:everlastingMassage')
            .then(
                ()=>{
                    Toast.show('Session expired, please login again')
                    EventRegister.emit('navLogin')
                }
            )
            return
    
        }
        Toast.show(data)
    }

    logout = () => {
        AsyncStorage.removeItem('user:everlastingMassage')
        RNRestart.Restart();
    }

    render(){
            return(
                <View style={styles.mainContainer}>
                    <View style={styles.iconContainer}>
                    <Image source={require('../../../assets/images/icons/editIcon.png')} style={{width:4*vw,height:4*vw}} color="#9E9E9E" />
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
                    <View style={styles.form}>
                        <FormInput keyType="next" ref={r=>{this.name = r}}  submit={()=>this.email.focus()}  type='name' keyboard='default' height={12*vw} width={80*vw} onChange={(t,valid)=>this.setState(p=>{return{...p,name:t,nameValid:valid}})} secureEntry={false} placeholder="Name" value={this.state.name} focused={false} color='#666666' />
                        <FormInput keyType="next" ref={r=>{this.email = r}}  submit={()=>this.phone.focus()}   type='email' keyboard='email-address' height={12*vw} width={80*vw} onChange={(t,valid)=>this.setState(p=>{return{...p,email:t,emailValid:valid}})} secureEntry={false} placeholder="Email" value={this.state.email} focused={false} color='#666666' />
                        <FormInput keyType="next" ref={r=>{this.phone = r}}  submit={()=>this.address.focus()}   type='phone' keyboard='numeric' height={12*vw} width={80*vw} onChange={(t,valid)=>this.setState(p=>{return{...p,phone:t,phoneValid:valid}})} secureEntry={false} placeholder="Phone" value={this.state.phone} focused={false} color='#666666' />
                        <FormInput keyType="next" ref={r=>{this.address = r}}  submit={()=>this.pass.focus()}   type='address' keyboard='default' height={12*vw} width={80*vw} onChange={(t,valid)=>this.setState(p=>{return{...p,address:t,addressValid:valid}})} value={this.state.address} secureEntry={false} placeholder="Address" focused={false} color='#666666' /> 
                        <FormInput keyType="next" ref={r=>{this.pass = r}}  submit={()=>this.confirm.focus()}   type='password' keyboard='default' height={12*vw} width={80*vw} onChange={(t,valid)=>this.setState(p=>{return{...p,password:t,passwordValid:valid}})} secureEntry={true} placeholder="Password" value={this.state.password} focused={true} color='#666666' />
                        <FormInput keyType="go"  ref={r=>{this.confirm = r}}  submit={()=>this.logHandler()}  type='address' keyboard='default' height={12*vw} width={80*vw} onChange={(t,valid)=>this.setState(p=>{return{...p,confirmPassword:t,confirmPasswordValid:valid}})} value={this.state.confirmPassword} secureEntry={true} placeholder="Confirm Password" focused={false} color='#666666' />
                       <KeyboardSpacer/>
                    </View></ScrollView>
                    <View style={styles.btnContainer}>
                         <SolidButton marginRight={4*vw} method={this.logHandler} text="Update Profile" width={35*vw} height={12*vw} btnColor="#8DC63F"/>
                         <SolidButton method={this.logout} text="Logout" width={35*vw} height={12*vw} btnColor="#8DC63F"/>
                    </View>
                    <Loader message='Please wait' ref={r=>{this.loader = r}} />
                </View>
                )
        }
    
}