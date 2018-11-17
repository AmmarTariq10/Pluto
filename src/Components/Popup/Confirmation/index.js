import React,{Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    // Modal
} from 'react-native'
 import Modal from 'react-native-modal'
import styles from './styles'
import SolidButton from '../../Buttons/SolidButton'
import vw from '../../../Units/vw/'

export default class Confirmation extends Component{
    constructor(props){
        super(props)
        this.state={
            visible:false,
            id:'',
            mode:this.props.mode
        }
        console.log(this.state.mode)
    }
    UNSAFE_componentWillMount(){
console.log('Im unmounting')
    }
    componentDidMount(){
        console.log('loading started')
        console.log('data received is ')
    }

    show = (ref) => {
        this.setState(prev=>{
            return{
                ...prev,
                visible:true,
                next:ref
            }
        })
    }

    hide = () => {
        this.setState(prev=>{
            return{
                ...prev,
                visible:false
            }
        },()=>{console.log('bcbcbbcbcbcbcbcnbcjkcbgjksfcgaksfglskg')})
    }

    method = (c)  => {
        console.log(c)
    }

    render(){
   
            return(
                <Modal isVisible={this.state.visible} style={styles.container}>
                        <TouchableOpacity onPress={this.hide} style={{flex:1,height:'100%',width:'100%'}}></TouchableOpacity>
                        <View style={styles.contentContainer}>
                        <View style={styles.textContainer}>
                            <Text style={[styles.text,{color:this.props.color}]}> Are you sure want to cancel this appointment?</Text>
                            <Text style={[styles.textSmall,{color:this.props.color}]}>You will be charged additional $25 cancellation fee if cancelling after 24hr</Text>
                        </View>
                        <View style={styles.buttonContainer}>
                            <SolidButton width={25*vw} height={10*vw}  method={this.props.yes}  btnColor="#8DC63F" text="Yes" />
                            <SolidButton width={25*vw} height={10*vw}  method={this.props.no} text="No"  btnColor="#8DC63F" />
                        </View>
                    </View>
                    <Image style={styles.img} source={require('../../../assets/images/modalIcon/questionIcon.png')}/>      
                    <Confirmation ref={r=>{this.confirmation = r}} />                        
                </Modal>
            )
        }
      
}