import React, { Component } from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native'
import styles from './styles';
import vw from '../../../Units/vw'


export default class FormInput extends Component{
    constructor(props){
        super(props)
            this.state={
                focused:false,
                labelEnabled:false,
                text:this.props.value,
                isValid:true,
                nameReg: /^[A-Za-z]+((\s)?([A-Za-z])+)*$/,
                emailReg:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                phoneReg:/^\d{3}\d{3}\d{5}$/,
                addressReg:/^[a-zA-Z0-9\s\,\''\-]*$/
        }
    }


    validate = (t) => {
        let type = this.props.type
        this.setState(
            p=>{
                return{
                    ...p,
                    text:t
                }
            },()=>{
                let isValid = this.state.isValid;
                if(type === 'email'){
                reg = this.state.emailReg
                let v = reg.test(this.state.text)
        
                console.log('reg is ',reg)
                if(v){
                    this.setState(
                        p=>{
                            return{
                                ...p,
                                isValid:true
                            }
                        },()=>{  this.props.onChange(this.state.text,true)}
                    )    
              
        
                }else{
                    this.setState(
                        p=>{
                            return{
                                ...p,
                                isValid:false
                            }
                        },()=> this.props.onChange(this.state.text,false)
                    )    
               
        
                }
                }else if(type === 'phone'){
                reg = this.state.phoneReg
                let v = reg.test(this.state.text)
                console.log('reg is ',reg)
                if(v){
                    this.setState(
                        p=>{
                            return{
                                ...p,
                                isValid:true
                            }
                        },()=>this.props.onChange(this.state.text,true)
              
                    )    
        
                }else{
                    this.setState(
                        p=>{
                            return{
                                ...p,
                                isValid:false
                            }
                        },()=>{
                            this.props.onChange(this.state.text,false)
                        }
                    )    
               
        
                }
                    
                }else if(type === 'password'){
                    let text = this.state.text
                    let length = text.length
                    console.log(length)
                    if(length > 7){
                        this.setState(
                            p=>{
                                return{
                                    ...p,
                                    isValid:true
                                }
                            },
                            ()=>{
                            this.props.onChange(t,this.state.isValid)
                            }
                        )   
                    }else{
                        this.setState(
                            p=>{
                                return{
                                    ...p,
                                        isValid:false
                                }
                            },()=>{
                            this.props.onChange(t,this.state.isValid)
                        } 
                        )  
                    }
                }else if(type === 'name'){
                 reg = this.state.nameReg
                 let v = reg.test(this.state.text)
        
                 console.log('reg is ',reg)
                 if(v){
                     this.setState(
                         p=>{
                             return{
                                 ...p,
                                 isValid:true
                             }
                         },()=>{
                                this.props.onChange(this.state.text,true)
                         }
                     )    
              
         
                 }else{
                     this.setState(
                         p=>{
                             return{
                                 ...p,
                                 isValid:false
                             }
                         },
                        ()=>{
                               this.props.onChange(this.state.text,false)
                        }
                     )    
              
         
                 }
                    
                }else if(type === 'address'){
                 reg = this.state.addressReg
        
                 let v = reg.test(this.state.text)
        
                 console.log('reg is ',reg)
                 if(v){
                     this.setState(
                         p=>{
                             return{
                                 ...p,
                                 isValid:true
                             }
                         },()=>   this.props.onChange(this.state.text,true)
                     )    
              
         
                 }else{
                     this.setState(
                         p=>{
                             return{
                                 ...p,
                                 isValid:false
                             }
                         },()=> this.props.onChange(this.state.text,false)
                     )    
                
         
                 }
                }
            })

    }

    floatingLabel = ()=>{
        if(this.state.text === '' || !this.state.text){
        this.setState(
            p=>{
                return{
                    ...p,
                    focused:!p.focused,
                    labelEnabled:false
                }
            }
        )
        }else if(this.state.text != '' && this.state.focused == false){
            this.setState(
                p=>{
                    return{
                        ...p,
                        focused:false,
                        labelEnabled:true
                    }
                }
            )
        }else if(this.state.text != '' && this.state.focused == true){
            this.setState(
                p=>{
                    return{
                        ...p,
                        focused:true,
                        labelEnabled:true
                    }
                }
            )
        }
    }


clear = () => {
    this.textInput.clear()
}
focus = () => {
    this.setState(
        p=>{
            return{
                ...p,
                focused:true
            }
        }
    )
}
render(){
    let place = this.props.placeholder
    if(this.props.value =='' || this.props.value == undefined || this.props.value == null){
        place = this.props.placeholder
    }else{
        place = this.props.value
    }

    const size = this.sizeValue
    let valid = this.state.isValid
    let color = valid ? this.props.color : 'red'
    console.log(this.props.placeholder+' color is: ',color,'validation : ',valid)

    if(this.state.focused == false && this.state.labelEnabled == false){
        console.log(1)
         return(
                <TouchableOpacity onPress={this.floatingLabel} style={[styles.container,{width:this.props.width,height:this.props.height}]}>
                    <Text style={{color:this.props.color,fontSize:4.5*vw}}>{place}</Text>
                </TouchableOpacity>
            )
    }else if(this.state.focused == true  && this.state.labelEnabled == false){
        console.log(2)
        return(
            <View style={[styles.containerFocused,{width:this.props.width,height:this.props.height+2*vw}]}>
                <Text style={[styles.label,{color:color,fontSize:3*vw}]}>{this.props.placeholder}</Text>
                <TextInput onSubmitEditing={this.props.submit} returnKeyType={this.props.keyType} ref={input => { this.textInput = input }}  multiline={this.props.multiline} keyboardType={this.props.keyboard} secureTextEntry={this.props.secureEntry} autoFocus={true} value={this.state.text} placeholderTextColor={color} style={[styles.inputFields,{color:color,width:this.props.width,height:this.props.height,fontSize:4*vw,}]} onChangeText={t=>{this.validate(t)}}  onBlur={this.floatingLabel} underlineColorAndroid="transparent" />
            </View>
        )
    }else if(this.state.focused == true  && this.state.labelEnabled == true){
        console.log(3)
        return(
            <View style={[styles.containerFocused,{width:this.props.width,height:this.props.height+2*vw}]}>
                <Text style={[styles.label,{color:color,fontSize:3*vw}]}>{this.props.placeholder}</Text>
                <TextInput onSubmitEditing={this.props.submit} returnKeyType={this.props.keyType} ref={input => { this.textInput = input }}  multiline={this.props.multiline} keyboardType={this.props.keyboard} secureTextEntry={this.props.secureEntry}  value={this.state.text} autoFocus={true} placeholderTextColor={color} style={[styles.inputFields,{color:color,width:this.props.width,height:this.props.height,fontSize:4*vw}]} onChangeText={t=>{this.validate(t)}}  onBlur={this.floatingLabel} underlineColorAndroid="transparent" />
            </View>
        )
    }
}
           
}