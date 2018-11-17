import React, { Component } from 'react'
import { 
    View,
    Text,
    TouchableOpacity,
 } from 'react-native'
 import { EventRegister } from 'react-native-event-listeners'
import styles from './styles'
export default class SegmentButton extends Component {    
    constructor(props){ 
        super(props)
        this.state={
            active:false,
            default:this.props.default
        }
    }
    componentWillMount() {
        console.log('label is ',this.props.label ,' state is ', this.state.active,' default is ',this.props.default)
        this.listener = EventRegister.addEventListener('myCustomEvent', (data) => {
            if(data === this.props.label){
                    this.setState(
               prev=>{
                   return{
                       ...prev,
                       active:true,
                       default:false
                   }
               }
           )
        }else{
            this.setState(
                prev=>{
                    return{
                        ...prev,
                        active:false,
                        default:false
                    }
                }
            )}
        })    
    }

    componentWillUnmount() {
        EventRegister.removeEventListener(this.listener)
    }
    componentDidMount(){
        console.log(this.props.label, ' is mounted')

    }

    activator = () => {
        EventRegister.emit('myCustomEvent',this.props.label)
    }

    render(){
        if(this.state.active == true || this.state.default == true){
            return (
                <View style={[styles.ActiveSegmentButton,{borderBottomColor:this.props.activeColor}]}>
                    <Text style={[styles.segmentText,{color:this.props.activeColor}]}>{this.props.label}</Text>    
                </View>
            )
        }else if (this.state.active == false){
            return (
                <TouchableOpacity onPress={this.activator} style={styles.segmentButton}>
                    <Text style={styles.segmentText}>{this.props.label}</Text>
                </TouchableOpacity>
            )
        }
        }   
    }
