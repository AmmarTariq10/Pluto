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
import HTML from 'react-native-render-html';

export default class AreaDialouge extends Component{
    constructor(props){
        super(props)
        this.state={
            visible:false,
            content:null
        }
    }
    componentDidMount(){
        console.log('loading started')
        console.log(this.state.content)
    }
    show = (c,m) => {
        this.setState(prev=>{
            return{
                ...prev,
                visible:true,
                content:c,
                mode:m
            }
        })
    }
    hide = () => {
      
        this.setState(prev=>{
            return{
                ...prev,
                visible:false
            }
        },()=> this.props.modeHide())
    }
    method = ()  => {
        this.hide()
    }
    contact = () =>{
        this.hide()
        this.props.contact()
    }
    proceed = () =>{
        this.hide()
        this.props.proceed(this.state.mode)
    }
    render(){
        return(
            <Modal isVisible={this.state.visible} style={styles.container}>
            <TouchableOpacity onPress={this.hide} style={{flex:1,height:'100%',width:'100%'}}></TouchableOpacity>
                <View  style={styles.contentContainer}>
                    <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                        <HTML html={this.state.content} />
                    </ScrollView> 
                    <View style={styles.buttonContainer}>
                            <SolidButton width={25*vw} height={10*vw}  method={this.proceed} text="Proceed"  btnColor="#8DC63F" />
                            <SolidButton width={25*vw} height={10*vw}  method={this.contact} text="Contact Us"  btnColor="#8DC63F" />
                        </View>
                </View>
            <Image style={styles.img} source={require('../../../assets/images/modalIcon/infoIcon.png')}/>

            </Modal>
        )
    }   
}