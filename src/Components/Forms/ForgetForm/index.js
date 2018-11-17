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
import {Forget,Verify,PasswordUpdate} from '../../../Api/Services'
import KeyboardSpacer from 'react-native-keyboard-spacer'
export default class ForgetForm extends Component{
    constructor(props){
        super(props);
        this.state={
            email:'', 
            emailValid:false,
            password:'',
            passwordValid:false,
            code:'',
            codeValid:false,
            step:'forget'
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
            Toast.show('email not valid')
            this.loader.hide()
            return
        }

        if(this.state.password === ''){
            Toast.show('Password is required')
            this.loader.hide()
            return
        }
        LoginService({email:this.state.email,password:this.state.password},this.success,this.failed)
    }

    forgetHandler = () => {
        this.loader.show()
        if(!this.state.email && !this.state.emailValid){
            this.loader.hide()
            Toast.show('Please enter a valid email')
            return
        }

        Forget({email:this.state.email},
            (data)=>{
                if(data.status === 2){
                
                    Toast.show('Check your email for security code')
                    this.emailField.clear()
                    this.setState(p=>{
                        return{
                            ...p,
                            step:'verify',
                            email:'',
                            emailValid:false
                        }
                    })
                }else{
                    Toast.show('Something went wrong')
                }
                console.log(data)
                this.loader.hide()
            },
            (error)=>{
            console.log(error)
            this.loader.hide()
            Toast.show(error)
            })
        }

        verifyHandler = () => {
            this.loader.show()
            if(!this.state.code && !this.state.codeValid){
                this.loader.hide()
                Toast.show('Please enter a valid security code')
                return
            }
            Verify({security_code:this.state.code},(d)=>{
                console.log(d)
                if(d.status === 1){
                    this.codeField.clear()
                    this.setState(p=>{
                        return{
                            ...p,
                            step:'update',
                            id:d.userid,
                            token:d.accessToken
                        }
                    })
                }else{
                    Toast.show('Please enter your security code again')
                }
                this.loader.hide()
            },
            (e)=>{
                console.log(e)
                this.loader.hide()
            })
        }
        updateHandler = () => {
            this.loader.show()
            if(!this.state.password){
                this.loader.hide()
                Toast.show('Please enter a valid password')
                return
            }
            let pass = this.state.password
            if(pass.length < 9){
                this.loader.hide()
                Toast.show('Please enter password atleast 10 character password')
                return
            }
            console.log(this.state.token)
            console.log(this.state.id)
            PasswordUpdate(this.state.token,{password:this.state.password,id:this.state.id},(d)=>{
                console.log(d)
                this.loader.hide()
                Toast.show(d)
                this.props.login()
            },
            (e)=>{
                console.log(e)
                Toast.show(e)
                this.loader.hide()
            }
        )
        }


        login = () => {
            this.props.login()
        }

    render(){
    
      switch(this.state.step){
          case 'forget':
          return(
            <View  fixDoubleTapIssue={true} style={styles.container}>
                <View style={styles.fieldsContainer}>
                    <FormInput submit={()=>this.forgetHandler()} keyType="next" ref={c=>{this.emailField = c}} height={12*vw} width={80*vw} keyboard='email-address' onChange={(t,valid)=>{this.setState(p=>{return{...p,email:t,emailValid:valid}})}} type='email' secureEntry={false} value={this.state.email} placeholder="Email" color='white' />
                    <Loader ref={c=>{this.loader = c}} handler={this.loginHandler} />
           
                </View>
            <View style={styles.buttonContainer}>
            <Loader message="Please wait" ref={r=>{this.loader = r}} />
            <SolidButton method={this.forgetHandler} text="Send Code" width={70*vw} height={15*vw} btnColor="#8DC63F"/>
            <TouchableOpacity onPress={this.login} style={styles.btn} >
              <Text style={styles.btnText}>Back to login</Text>
            </TouchableOpacity>
            </View>

            </View>
        )  

        case 'verify':
        return(
            <View  fixDoubleTapIssue={true} style={styles.container}>
                <View style={styles.fieldsContainer}>
                   <FormInput submit={()=>this.verifyHandler()} keyType="next" ref={r=>{this.codeField = r}} height={12*vw} width={80*vw} keyboard='default' onChange={(c,v)=>{this.setState(p=>{return{...p,code:c,codeValid:v}})}} value={this.state.code} type='address' secureEntry={false}  placeholder="Enter code" color='white' />
                    <Loader ref={c=>{this.loader = c}} handler={this.loginHandler} /> 
                
                </View>
            <View style={styles.buttonContainer}>
            <Loader message="Please wait" ref={r=>{this.loader = r}} />
            <SolidButton method={this.verifyHandler} text="Verify Code" width={70*vw} height={15*vw} btnColor="#8DC63F"/>
            <TouchableOpacity onPress={this.login} style={styles.btn}>
              <Text style={styles.btnText}>Back to login</Text>
            </TouchableOpacity>
            </View>

            </View>
            )
        
        case 'update':
        return(
            <View  fixDoubleTapIssue={true} style={styles.container}>
                <View style={styles.fieldsContainer}>
                    <FormInput submit={()=>this.updateHandler()} keyType="go"  height={12*vw} width={80*vw} keyboard='default' onChange={(t,valid)=>{this.setState(p=>{return{...p,password:t}})}} type='password' secureEntry={true}  placeholder="Password" focused={false} color='white' />

                    {/* <FormInput height={15*vw} width={80*vw} onChange={(t,valid)=>{this.setState(p=>{return{...p,password:t,passwordValid:valid}})}} type='password' secureEntry={true} placeholder="Password" value={this.state.password} focused={false} color='white' /> */}
            
                </View>
            <View style={styles.buttonContainer}>
            <Loader message="Please wait" ref={r=>{this.loader = r}} />
            <SolidButton method={this.updateHandler} text="Update" width={70*vw} height={15*vw} btnColor="#8DC63F"/>
            <TouchableOpacity onPress={this.login} style={styles.btn}>
              <Text style={styles.btnText}>Back to login</Text>
            </TouchableOpacity>
            </View>

            </View>
            )
            



      }

            
    
      
    }
}   