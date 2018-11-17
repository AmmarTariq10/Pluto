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
import AreaDialouge from '../AreaDialouge'
export default class ModeSelect extends Component{
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

    inStudio = () => {
       
        this.area.show(this.props.data.studio,'In Studio')
    }


    outOfStudio = () => {
        this.area.show(this.props.data.location,'Not in studio')
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
        if(this.props.mode === 'studio'){
            return(
                <Modal transparent={true} isVisible={this.state.visible} style={styles.container}>
                        <TouchableOpacity onPress={this.hide} style={{flex:1,height:'100%',width:'100%'}}></TouchableOpacity>
                        <View style={styles.contentContainer}>
                        <View style={styles.textContainer}>
                            <Text style={[styles.text,{color:this.props.color}]}>How do you want to avail this service?</Text>
                        </View>
                        <View style={styles.buttonContainerSingle}>
                            <SolidButton width={30*vw} height={10*vw}  method={this.inStudio}  btnColor="#8DC63F" text="In Studio" />
                        </View>
                    </View>
                    <Image style={styles.img} source={require('../../../assets/images/modalIcon/questionIcon.png')}/>

                    <AreaDialouge contact={this.props.contact} proceed={this.props.proceed}  modeHide={this.hide} ref={c=>{this.area = c}}/>
                </Modal>
            )
        }else if(this.props.mode === 'location'){
            return(
                <Modal isVisible={this.state.visible} style={styles.containerSingle}>
                        <TouchableOpacity onPress={this.hide} style={{flex:1,height:'100%',width:'100%'}}></TouchableOpacity>
                        <View style={styles.contentContainer}>
                         <View style={styles.textContainer}>
                            <Text style={[styles.text,{color:this.props.color}]}>How do you want to avail this service?</Text>
                        </View>
                        <View style={styles.buttonContainerSingle}>
                            <SolidButton width={30*vw} height={7*vh}  method={this.outOfStudio} text="Out Studio"  btnColor="#8DC63F" />
                        </View>
                    </View>
                    <Image style={styles.img} source={require('../../../assets/images/modalIcon/questionIcon.png')}/>

                    <AreaDialouge contact={this.props.contact} proceed={this.props.proceed}  modeHide={this.hide} ref={c=>{this.area = c}}/>
                </Modal>
            )
        }else{
            return(
                <Modal isVisible={this.state.visible} style={styles.container}>
                        <TouchableOpacity onPress={this.hide} style={{flex:1,height:'100%',width:'100%'}}></TouchableOpacity>
                                        
                        <View style={styles.contentContainer}>
                        <View style={styles.textContainer}>
                            <Text style={[styles.text,{color:this.props.color}]}>How do you want to avail this service?</Text>
                        </View>
                        <View style={styles.buttonContainer}>
                            <SolidButton width={25*vw} height={10*vw}  method={this.inStudio}  btnColor="#8DC63F" text="In Studio" />
                            <SolidButton width={25*vw} height={10*vw}  method={this.outOfStudio} text="Out Studio"  btnColor="#8DC63F" />
                        </View>
                    </View>
                    <Image style={styles.img} source={require('../../../assets/images/modalIcon/questionIcon.png')}/>      
                    <AreaDialouge  contact={this.props.contact} proceed={this.props.proceed}  modeHide={this.hide} ref={c=>{this.area = c}}/>
                </Modal>
            )
        }
    }   
}