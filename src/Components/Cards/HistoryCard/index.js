import React, { Component } from 'react'
import {
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    Image,
    Alert,
    AsyncStorage
} from 'react-native'
import styles from './styles'
import vw from '../../../Units/vw'
import DateTimePicker from 'react-native-modal-datetime-picker';
import { AppointmentUpdate } from '../../../Api/Services'
import Loader from '../../Popup/Loader'
import Toast from 'react-native-toast'
import Confirmation from '../../Popup/Confirmation'
import vh from '../../../Units/vh';
export default class HistoryCard extends Component{
    constructor(props){
        super(props)
        console.log('history',this.props.item)
        this.state={
            timePickerVisible: false,
            datePickerVisible: false,
            date:this.props.item.appointment_date,
            time:this.props.item.time,
            user:{},
            status:this.props.item.status,
            updated:false,
            invoice:false
        }
        console.log('token ',this.props.token)
    }
    componentDidMount(){
      console.log('item service from history card',this.props.item)
      AsyncStorage.getItem('user:everlastingMassage')
      .then(
        data=>{
          let d = JSON.parse(data)
          console.log('user data from history',d)
          this.setState(p=>{
              return{
                ...p,
                user:d
              }
            },()=>{console.log('user data from state',this.state.user)}
          )
        }
      )
      
      
    }
    showDatePicker = () =>{ 
        this.setState(
          p=>{
            return{
              ...p,
              datePickerVisible: true
            }
          })
      }
      hideDatePicker = () =>{ 
        this.setState(
          p=>{
            return{
              ...p,
              datePickerVisible: false
            }
          })
      }

      datePickerHandler = (d) => {
        let date = d.toString()
        console.log('A date has been picked: ', date)
        this.loader.show()
        this.setState(
          p=>{
            return{
              ...p,
              date:date.substring(4,15)
            }
          }
        )
        this.hideDatePicker();
      }

       test = () => {
         let data={
           invoiceData : this.state.invoice,
          userData : this.props.userData
         }
          
         this.props.pay(data)
       }

      success = (d) => {
       
        console.log(d)
        if(d.status === 10){
          this.setState(
            p=>{
              return{
                ...p,
                status:'Cancelled',
                updated:true
              }
            }
          )
          this.loader.hide()
          Toast.show('Updated succesfuly')
        }else{
          this.error(d)
        }
        
      }
      error = (e) => {
        this.setState(
          p=>{
            return{
              ...p,
              status:'Cancelled',
              updated:true
            }
          }
        )
        console.log(e.message)
        Toast.show(e.message)

        this.loader.hide()
      }

      showTimePicker = () =>{ 
        this.setState(
          p=>{
            return{
              ...p,
              timePickerVisible: true 
            }
          })
      }
    
      hideTimePicker = () =>{ 
        this.setState(
          p=>{
            return{
              ...p,
              timePickerVisible: false
            }
          })
      }
      cancel = () => {
        if(this.state.updated === true){
          Toast.show('Already cancelled')
          return
        }
        if(this.state.status === 'Cancelled'){
          Toast.show('Already cancelled')
          return
        }
        this.confirmation.show()
      }

      confirm = () => {
        this.confirmation.hide()
        this.loader.show()
        let data = {
          "appointment_date":this.props.item.appointment_date,
          "id":this.state.user.id,
          "app_id":this.props.item.id,
          "service_id":this.props.item.service_id,
          "service_image":this.props.item.service_image,
          "service_name":this.props.item.service_name,
          "status":"Cancelled",
          "appointment_time":this.props.item.time,
          "address":this.state.user.address_1,
          "phone":this.state.user.phone
        }
        console.log('sending Data...',data)
        AppointmentUpdate(data,this.state.user.accesstoken,this.success,this.error)
      }
      notConfirm=()=>{
        this.confirmation.hide()
      }
      renderInvoiceButton = () => {
        console.log('invoice id',this.props.item.invoiceId)
        if(this.props.item.invoiceId != '0'){
          return(
            <TouchableOpacity onPress={this.props.invoice} style={[styles.dateContainer,{flexDirection:'row',flex:0.8,marginLeft:5*vw}]}><Image  source={require('../../../assets/images/icons/eye.png')} name="calendar" style={styles.icon}  size={8*vw}  color="#CCCCCC" /><Text numberOfLines={1} ellipsizeMode='tail'  style={[styles.value,{color:'#8DC63F'}]}>Invoice </Text></TouchableOpacity> 
          )
        }
        // switch(this.props.item.invoiceId){
        //   case '0':
        //   return(
        //     <View onPress={this.props.invoice} style={[styles.dateContainer,{flexDirection:'row',flex:0.8}]}><View style={styles.iconContainer}></View></View> 
        //   )
        //   default:
           
        // }
  }


    renderCancel = ()=> {
      if(this.state.status != 'Cancelled' && this.state.status != 'Approved'){
        return(
        <TouchableOpacity onPress={this.cancel} style={{width:10*vw,height:3*vw,position:'absolute',top:2*vh,right:3*vw }}><Text numberOfLines={1} ellipsizeMode='tail'  style={{fontSize:3*vw}}>Cancel</Text></TouchableOpacity>
        )
      }
    }

    render(){
      let t = this.props.item.service_name
      let len = t.length
      let title = this.props.item.service_name
  
      if(len > 20){
        title = this.props.item.service_name.substring(0,20) + ' ...'
      }else{
        title = this.props.item.service_name
      }
            return(
                <View style={styles.mainContainer}>
                    <View style={styles.imgContainer}>
                        <ImageBackground style={styles.image} imageStyle={styles.imageBack} source={{uri:this.props.item.service_image}}></ImageBackground>
                    </View>
                <View  style={styles.content}>
                    <View style={styles.titleContainer}><Text numberOfLines={1} ellipsizeMode='tail'  numberOfLines={1} ellipsizeMode='tail' style={styles.title}>{title}</Text><Text numberOfLines={1} ellipsizeMode='tail'  style={styles.status}>{this.state.status}</Text></View>
                    <View style={styles.instanceContainer}>
                        <View style={[styles.dateContainer,{flexDirection:'row'}]}><Image source={require('../../../assets/images/icons/clockGreyIcon.png')} name="clock-o" style={styles.icon}  /><Text numberOfLines={1} ellipsizeMode='tail'  style={styles.value}>{this.state.time}</Text></View>
                        <View style={[styles.timeContainer,{flexDirection:'row'}]}><Image  source={require('../../../assets/images/icons/calenderGreyIcon.png')} name="calendar" style={styles.icon}  size={8*vw}  color="#CCCCCC" /><Text numberOfLines={1} ellipsizeMode='tail'  style={styles.value}>{this.state.date}</Text></View>
                        <View style={{flex:0.95}}>{this.renderInvoiceButton()}</View>
                    </View>
                </View>
                  <Loader message="Please wait" ref={c=>{this.loader = c}}/>
                  <Confirmation yes={this.confirm} no={this.notConfirm} ref={r=>{this.confirmation = r}} />
                    {this.renderCancel()}
                </View>
                )
        }
    
}