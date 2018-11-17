import React,{Component} from 'react'
import {
    View,
    TouchableOpacity,
    Text,
    ScrollView,
    Image
} from 'react-native'
import Modal from 'react-native-modal'
import styles from './styles'
import SolidButton from '../../Buttons/SolidButton'
import vw from '../../../Units/vw/'
import IconButton from '../../Buttons/IconButton'
import { EventRegister } from 'react-native-event-listeners'

export default class LoginDialouge extends Component{
    constructor(props){
        super(props)
        this.state={
            visible:false,
            content:null
        }
    }

    componentDidMount(){
        console.log('loading started')
    }

    show = (c) => {
        this.setState(prev=>{
            return{
                ...prev,
                visible:true,
                logn:c
            }
        })
    }

    hide = () => {
        this.setState(prev=>{
            return{
                ...prev,
                visible:false
            }
        })
    }

    method = ()  => {
        this.hide()
    }
    contact = () =>{
        this.setState(prev=>{
            return{
                ...prev,
                visible:false
            }
        },()=>{
           this.props.contact() 
        })
        

    }
    proceed = () =>{
        this.setState(prev=>{
            return{
                visible:false
            }
        },()=>{
          this.props.proceed()      
        })
    
    }
    logn = ()=>{
        EventRegister.emit('navLogin')
        this.hide()
    }
    render(){
        return(
            <Modal isVisible={this.state.visible} style={styles.container}>
            <TouchableOpacity onPress={this.hide} style={{flex:1,height:'100%',width:'100%'}}></TouchableOpacity>
                <View  style={styles.contentContainer}>
                <View style={styles.content}>
                    <View style={styles.closeContainer}>
                        <IconButton onPress={this.hide} size={6*vw} source={require('../../../assets/images/icons/closeIcon.png')} />
                    </View>
                    <View style={styles.imageContainer}>
                        <Image resizeMode="contain" style={styles.image} source={require('../../../assets/images/icons/loginImage.png')}/>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>You need to login first</Text>
                    </View>
                </View>
                    <View style={styles.buttonContainer}>
                        <SolidButton width={40*vw} height={10*vw}  method={this.logn} text="Login Here"  btnColor="#8DC63F" />
                    </View>
                </View>
            </Modal>
        )
    }   
}