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
                focus:false,
                text:'',
        }
    }
getFocus = () => {
    this.setState(
        p=>{
            return{
                ...p,
                focus:!p.focus
            }
        }
    )
}
        renderLabel = ()=> {
            switch(this.state.text){
                case '':
                    return this.props.label
                default:
                    return this.state.text
            }
        }
        render(){

            switch(this.state.focus){
                case false:
                   return( 
                        <TouchableOpacity onPress={this.getFocus} style={[{width:this.props.width,height:this.props.height},styles.container]}>
                            <Text numberOfLines={1} style={{fontSize:this.props.height*0.7,color:'white'}}>{this.renderLabel()}</Text>
                        </TouchableOpacity>
                    )
                case true:
                    return(
                        <View style={[{width:this.props.width,height:this.props.height},styles.container]}>
                            <Text style={{fontSize:this.props.height*0.2,color:'white',margin:0,padding:0}}>{this.props.label}</Text>
                            <TextInput placeholder={this.props.placeholder} placeholderTextColor="white" value={this.state.text} secureTextEntry={this.props.secure} onChangeText={t=>{this.setState({text:t});this.props.onChangeText(t)}} autoFocus={true} onBlur={this.getFocus} style={[{fontSize:0.55*this.props.height,color:'white'},styles.field]}/> 
                        </View>
                    )
            }

        }
                
}