import React, { Component } from 'react'
import {
    View,
    AsyncStorage,
    TouchableOpacity,
    Text
} from 'react-native'
import vw from '../../../Units/vw'
import styles from './styles';
import FormInput from '../../Inputs/FormInput'
import SolidButton from '../../Buttons/SolidButton'
import Loader from '../../Popup/Loader'
import {LoginService} from '../../../Api/Services'
import Toast from 'react-native-toast'
import {EventRegister} from 'react-native-event-listeners'
export default class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            emailValid:false,
            passwordValid:false,
        }
        console.log('contructed')
    }

    success=(data)=>{
    console.log(data)
    AsyncStorage.setItem('user:everlastingMassage',JSON.stringify(data))
    this.loader.hide()
    this.props.nav()
    }

    failed=(data)=>{
        this.loader.hide()
        Toast.show(data.message)
    }

    componentDidMount(){
       
    }

    handler=()=>{
        this.loader.show()
        AsyncStorage.removeItem('user:everlastingMassage')
        console.log('email validation : ',this.state.emailValid + 'email is',this.state.email)
        console.log('password validation : ',this.state.passwordValid + 'pass is',this.state.password)
        if(this.state.emailValid === false){
            Toast.show('Email not valid')
            this.loader.hide()
            return
        }
        if(this.state.password === ''){
            Toast.show('Password is required')
            this.loader.hide()
            return
        }
        if(this.state.email === ''){
            Toast.show('Email is required')
            this.loader.hide()
            return
        }
        if(this.state.passwordValid === false){
            Toast.show('Password not valid')
            this.loader.hide()
            return
        }

        LoginService({email:this.state.email,password:this.state.password},this.success,this.failed)
    }

    render(){
        console.log('State')
        console.log('email ',this.state.email)
        console.log('email valid ',this.state.emailValid)
        console.log('password ',this.state.password)
        console.log('password valid ',this.state.passwordValid)

        return(
            <View  fixDoubleTapIssue={true} style={styles.container}>
               

                <View style={styles.fieldsContainer}> 
                {/* <FormHeading heading='Login' /> */}
                    <FormInput keyType="next" submit={()=>this.pass.focus()} ref={a=>{this.email = a}} height={12*vw} width={80*vw} keyboard='email-address' onChange={(t,valid)=>{this.setState(p=>{return{...p,email:t,emailValid:valid}})}} type='email' secureEntry={false} placeholder="Email" focused={false} color='white' />
                    <Loader ref={c=>{this.loader = c}} handler={this.loginHandler} />
                    <FormInput submit={()=>this.handler()} keyType="go"  ref={r=>this.pass = r} height={15*vw} width={80*vw} onChange={(t,valid)=>{this.setState(p=>{return{...p,password:t,passwordValid:valid}})}} type='password' secureEntry={true} placeholder="Password" focused={false} color='white' />
                    {/* <KeyboardSpacer /> */}
                    
                    <View style={{flex:1, alignSelft:'stretch',flexDirection:'row'}}>
                    <View style={{flex:1,flexDirection:'row'}}></View>
                    <TouchableOpacity style={styles.forgetContainer} onPress={this.props.forget}><Text style={styles.forgetText}>Forgot your password? Reset Here</Text></TouchableOpacity>
                    </View>
                </View>
            <View style={styles.buttonContainer}>
            <Loader message="Please wait" ref={r=>{this.loader = r}} />
            <SolidButton method={this.handler} text="Login" width={70*vw} height={15*vw} btnColor="#8DC63F"/>
                <TouchableOpacity style={styles.btn} onPress={()=>{
                    EventRegister.emit('navHome')
                }}><Text style={styles.btnText}>Go To Home</Text></TouchableOpacity>
            </View>
            </View>
        )
    }
   
}   