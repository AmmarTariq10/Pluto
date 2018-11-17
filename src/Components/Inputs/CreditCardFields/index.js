import React, { Component } from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native'
import styles from './styles';
import vw from '../../../Units/vw'


export default class CreditCardFields extends Component{
    constructor(props){
        super(props)
            this.state={
                focused:false,
                labelEnabled:false,
                text:this.props.value ? this.props.value : '',
        }
    }


    // validate = (t) => {
    //     let type = this.props.type
    //     this.setState(
    //         p=>{
    //             return{
    //                 ...p,
    //                 text:t
    //             }
    //         },()=>{
    //             let isValid = this.state.isValid;
    //             if(type === 'email'){
    //             reg = this.state.emailReg
    //             let v = reg.test(this.state.text)
        
    //             console.log('reg is ',reg)
    //             if(v){
    //                 this.setState(
    //                     p=>{
    //                         return{
    //                             ...p,
    //                             isValid:true
    //                         }
    //                     },()=>{  this.props.onChange(this.state.text,true)}
    //                 )    
              
        
    //             }else{
    //                 this.setState(
    //                     p=>{
    //                         return{
    //                             ...p,
    //                             isValid:false
    //                         }
    //                     },()=> this.props.onChange(this.state.text,false)
    //                 )    
               
        
    //             }
    //             }else if(type === 'phone'){
    //             reg = this.state.phoneReg
    //             let v = reg.test(this.state.text)
    //             console.log('reg is ',reg)
    //             if(v){
    //                 this.setState(
    //                     p=>{
    //                         return{
    //                             ...p,
    //                             isValid:true
    //                         }
    //                     },()=>this.props.onChange(this.state.text,true)
              
    //                 )    
        
    //             }else{
    //                 this.setState(
    //                     p=>{
    //                         return{
    //                             ...p,
    //                             isValid:false
    //                         }
    //                     },()=>{
    //                         this.props.onChange(this.state.text,false)
    //                     }
    //                 )    
               
        
    //             }
                    
    //             }else if(type === 'password'){
    //                 let text = this.state.text
    //                 let length = text.length
    //                 console.log(length)
    //                 if(length > 9){
    //                     this.setState(
    //                         p=>{
    //                             return{
    //                                 ...p,
    //                                 isValid:true
    //                             }
    //                         },
    //                         ()=>{
    //                         this.props.onChange(t,this.state.isValid)
    //                         }
    //                     )   
    //                 }else{
    //                     this.setState(
    //                         p=>{
    //                             return{
    //                                 ...p,
    //                                     isValid:false
    //                             }
    //                         },()=>{
    //                         this.props.onChange(t,this.state.isValid)
    //                     } 
    //                     )  
    //                 }
    //             }else if(type === 'name'){
    //              reg = this.state.nameReg
    //              let v = reg.test(this.state.text)
        
    //              console.log('reg is ',reg)
    //              if(v){
    //                  this.setState(
    //                      p=>{
    //                          return{
    //                              ...p,
    //                              isValid:true
    //                          }
    //                      },()=>{
    //                             this.props.onChange(this.state.text,true)
    //                      }
    //                  )    
              
         
    //              }else{
    //                  this.setState(
    //                      p=>{
    //                          return{
    //                              ...p,
    //                              isValid:false
    //                          }
    //                      },
    //                     ()=>{
    //                            this.props.onChange(this.state.text,false)
    //                     }
    //                  )    
              
         
    //              }
                    
    //             }else if(type === 'address'){
    //              reg = this.state.addressReg
        
    //              let v = reg.test(this.state.text)
        
    //              console.log('reg is ',reg)
    //              if(v){
    //                  this.setState(
    //                      p=>{
    //                          return{
    //                              ...p,
    //                              isValid:true
    //                          }
    //                      },()=>   this.props.onChange(this.state.text,true)
    //                  )    
              
         
    //              }else{
    //                  this.setState(
    //                      p=>{
    //                          return{
    //                              ...p,
    //                              isValid:false
    //                          }
    //                      },()=> this.props.onChange(this.state.text,false)
    //                  )    
                
         
    //              }
    //             }
    //         })

    // }

    // floatingLabel = ()=>{
    //     if(this.state.text === '' || !this.state.text){
    //     this.setState(
    //         p=>{
    //             return{
    //                 ...p,
    //                 focused:!p.focused,
    //                 labelEnabled:false
    //             }
    //         }
    //     )
    //     }else if(this.state.text != '' && this.state.focused == false){
    //         this.setState(
    //             p=>{
    //                 return{
    //                     ...p,
    //                     focused:false,
    //                     labelEnabled:true
    //                 }
    //             }
    //         )
    //     }else if(this.state.text != '' && this.state.focused == true){
    //         this.setState(
    //             p=>{
    //                 return{
    //                     ...p,
    //                     focused:true,
    //                     labelEnabled:true
    //                 }
    //             }
    //         )
    //     }
    // }


getFocus = () => {
    this.setState(
        p=>{
            return{
                ...p,
                focused:!p.focused
            }
        }
    )
}
changeText = t => { 
    this.setState(
        p=>{
            return{
                ...p,
                text:t
            }
        },()=>this.props.onChangeText(this.state.text)
        )
}

changeTextCard = t => {
    this.setState(
        p=>{
            return{
                ...p,
                text:t
            }
        },()=>this.props.onChangeText(this.state.text)
        )
}




    focus = ()=> {
        this.getFocus()
    }

render(){
    let place = this.props.placeHolder
    let border = 'transparent'
    color=''
    if(this.state.text ===''){
        place = this.props.placeHolder;
        border = '#c1c1c1'
        color = '#c1c1c1';

    }else{
        place = this.state.text
        border = '#8DC63F'

    }
    switch(this.props.type){
        case 'card':
            switch(this.state.focused){
                case true:
                    border = '#8DC63F'
        
                    return(
                        <View style={[styles.containerFocused,{width:this.props.width,height:this.props.height,borderBottomColor:border},this.props.style]}>
                            <Text style={[styles.label,{fontSize:this.props.height*0.2,height:this.props.height*0.3}]}>{this.props.placeHolder}</Text>
                            <TextInput onSubmitEditing={this.props.submit} returnKeyType={this.props.keyType}   maxLength={this.props.max}  onChangeText={this.changeTextCard} placeholder={this.props.placeHolder} keyboardType={this.props.keyboard} autoFocus={true} value={this.state.text} style={[styles.inputFields,{width:this.props.width,padding:0,margin:0,height:this.props.height*0.6,fontSize:4*vw}]} onBlur={this.getFocus} underlineColorAndroid="transparent" />
                        </View>
                    )
                case false:
                    return(
                            <TouchableOpacity onPress={this.getFocus}  style={[styles.containerFocused,{width:this.props.width,height:this.props.height,justifyContent:"center",borderBottomColor:border},this.props.style]}>
                                        {
                                            ()=>{
                                                if(this.state.text === ''){
                                        <Text style={[styles.label,{fontSize:this.props.height*0.1,height:this.props.height*0.3}]}>{''}</Text>
                                                }else{
                                        <Text style={[styles.label,{fontSize:this.props.height*0.1,height:this.props.height*0.3}]}>{this.props.placeHolder}</Text>
                                                
                                                }
                                            }
                                        }
                                    
                                        <Text ellipsizeMode="tail" numberOfLines={1} style={[styles.inputFields,{color:color,fontSize:4.5*vw,textAlignVertical:'center',padding:0,margin:0}]}>{place}</Text>
                            </TouchableOpacity>
                    )
            }

        default:
        switch(this.state.focused){
            case true:
                border = '#8DC63F'
    
                return(
                    <View style={[styles.containerFocused,{width:this.props.width,height:this.props.height,borderBottomColor:border},this.props.style]}>
                        <Text style={[styles.label,{fontSize:this.props.height*0.2,height:this.props.height*0.3}]}>{this.props.placeHolder}</Text>
                        <TextInput  onSubmitEditing={this.props.submit} returnKeyType={this.props.keyType}  maxLength={this.props.max}  onChangeText={this.changeText} placeholder={this.props.placeHolder} keyboardType={this.props.keyboard} autoFocus={true} value={this.state.text} style={[styles.inputFields,{width:this.props.width,padding:0,margin:0,height:this.props.height*0.6,fontSize:4*vw}]} onBlur={this.getFocus} underlineColorAndroid="transparent" />
                    </View>
                )
            case false:
                return(
                        <TouchableOpacity onPress={this.getFocus}  style={[styles.containerFocused,{width:this.props.width,height:this.props.height,justifyContent:"center",borderBottomColor:border},this.props.style]}>
                                    {
                                        ()=>{
                                            if(this.state.text === ''){
                                    <Text style={[styles.label,{fontSize:this.props.height*0.1,height:this.props.height*0.3}]}>{''}</Text>
                                            }else{
                                    <Text style={[styles.label,{fontSize:this.props.height*0.1,height:this.props.height*0.3}]}>{this.props.placeHolder}</Text>
                                              
                                            }
                                        }
                                    }
                                   
                                    <Text ellipsizeMode="tail" numberOfLines={1} style={[styles.inputFields,{color:color,fontSize:4.5*vw,textAlignVertical:'center',padding:0,margin:0}]}>{place}</Text>
                        </TouchableOpacity>
                )
        }

    }

}
           
}