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
import { GetInvoiceDetails } from '../../../Api/Services'
import { Fonts } from '../../../assets/Fonts/Fonts';
import vh from '../../../Units/vh';
export default class Invoice extends Component{
    constructor(props){
        super(props)
        this.state={
            visible:false,
            content:null,
            invoiceData:{
                invoiceBasicInfo:[
                    {
                        date_added:"",
                        invoiceStatus:"1",
                        invoiceTotal:"0",
                        notes:""
                    }
                ],invoiceInfo:[
                    {
                        invoice_items:"",
                        invoice_prices:""
                    },{
                        invoice_items:"",
                        invoice_prices:""
                    },{
                        invoice_items:"",
                        invoice_prices:""
                    },{
                        invoice_items:"",
                        invoice_prices:""
                    },{
                        invoice_items:"",
                        invoice_prices:""
                    },{
                        invoice_items:"",
                        invoice_prices:""
                    },{
                        invoice_items:"",
                        invoice_prices:""
                    },{
                        invoice_items:"",
                        invoice_prices:""
                    },{
                        invoice_items:"",
                        invoice_prices:""
                    }
                ]
            }
        }
    }

    componentDidMount(){

        console.log('loading started')
    }

    show = (access,id,data) => {
        GetInvoiceDetails(access,{"id":id,"invoiceId":data.invoiceId},(d)=>{
            this.setState(prev=>{
                return{
                    ...prev,
                    visible:true,
                    invoiceData:d,
                    invoiceBasic:data
                }
            })
               console.log('invoice details',d) 
        },(e)=>{
            console.log('invoice details err',e) 

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

    renderItem = () => {
      return  this.state.invoiceData.invoiceInfo.map(
            item=>{
                return(
                    <View style={[styles.headingContainer,{borderBottomWidth:0,marginVertical:0.5*vh }]}><Text numberOfLines={1} ellipsizeMode="tail" style={[styles.heading,{marginLeft:2*vw,
        fontSize:2*vh
                    }]}>{item.invoice_items}</Text><Text style={[styles.heading,{flex:0.4,
                        
        fontSize:2*vh}]}>{'$'+item.invoice_prices}</Text></View>
                )
            }
        )
    }
    paymentInit = () => {
       
        let data = {
            userData:this.props.userData,
            invoiceData:this.state.invoiceData,
            invoiceBasic:this.state.invoiceBasic
        }
        this.props.pay(data)
        this.setState(
            p=>{
                return{
                    ...p,
                    visible:!p.visible
                }
            },this.props.pay(data)
        )
    }
    renderButton = () => {
        if(this.state.invoiceData.invoiceBasicInfo[0].invoiceStatus != 1)
        return(
            <SolidButton  width={30*vw} method={this.paymentInit} height={7*vh} style={styles.button} text="Checkout" btnColor="#8DC63F"/>
        )
    }
    render(){
        // let date = ''
        // if(this.state.data.invoiceBasicInfo[0]){
        //     date = this.state.data.invoiceBasicInfo[0].date
        // }
        console.log('date',this.state.invoiceData)
        console.log('invoice data',this.state.invoiceData.invoiceBasicInfo[0])
        return(
            <Modal onBackdropPress={this.hide} isVisible={this.state.visible} style={styles.container}>
                <View  style={styles.contentContainer}>
                    <View style={styles.titleContainer}>
                        <TouchableOpacity onPress={this.hide} style={styles.closeButton}>
                            <Image style={styles.closeImage} source={require('../../../assets/images/icons/closeIcon.png')} />
                        </TouchableOpacity>
                        <Text style={styles.title}>INVOICE</Text>
                    </View>
                    <View style={styles.nameContainer}>
                            <View style={[styles.row,{flex:0.5}]}>
                                    <View style={{flex:1,marginLeft:2*vw,flexDirection:'row'}}>
                                        <Text style={styles.date}>{'Created on ' + this.state.invoiceData.invoiceBasicInfo[0].date_added}</Text>
                                    </View>
                            </View>
                           <View style={styles.row}>
                            <View style={{flex:1,marginLeft:2*vw}}>
                                <Text numberOfLines={5} ellipsizeMode="tail" style={styles.notes}>{'Note : ' +this.state.invoiceData.invoiceBasicInfo[0].notes }</Text>
                            </View>
                        </View>
                    </View>
                    <ScrollView style={styles.invoiceDetailsContainer}>
                        <View style={styles.headingContainer}><Text style={[styles.heading,{marginLeft:2*vw,marginVertical:0.5*vh}]}>Item</Text><Text style={[styles.heading,{flex:0.4}]}>Price</Text></View>
                            {this.renderItem()}
                        <View style={[styles.headingContainer,{borderBottomWidth:0,borderTopWidth:1,flexDirection:'row',marginVertical:0.5*vh}]}>
                            <View style={{flex:1}}></View>
                            <View style={{flex:0.4,flexDirection:'row'}}>
                                <Text style={[styles.heading,{flex:0,fontFamily:Fonts.WS_SEMI,marginVertical:1*vh}]}>{'Total: ' + '$'+this.state.invoiceData.invoiceBasicInfo[0].invoiceTotal}</Text>
                            </View>
                        </View>
                    </ScrollView>
                    <View style={styles.footer}>
                    {this.renderButton()}
                    </View>
                </View>
            </Modal>
        )
    }   
}