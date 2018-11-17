import React, { Component } from 'react'
import {
    View,
    ScrollView,
    AsyncStorage,
    NetInfo,
    ImageBackground
} from 'react-native'
import vw from '../../../Units/vw'
import styles from './styles'
import { EventRegister } from 'react-native-event-listeners'
import SegmentButton from './SegmentButton'
import DetailsCard from '../../Cards/DetailsCard'
import Loader from '../../Popup/Loader'
import { History } from '../../../Api/Services'
import HistoryCard from '../../Cards/HistoryCard'
import Toast from 'react-native-toast'
import RNRestart from 'react-native-restart';
import Invoice from '../../Popup/Invoice'
export default class SegmentSection extends Component{
    constructor(props){
            super(props) 
            this.state={
                    selected:'Profile Details',
                    i:1,
                    user:{
                        "email": "",
                        "address_1": "",
                        "first_name": "",
                        "last_name": "",
                        "phone": "",
                        "accesstoken": "",
                        "id": ""
                    }
            }       
    }

    callback = page => {
            this.setState(p=>{
                return{
                            ...p,
                            selected:page
                        }
            })
            console.log(this.state.selected, ' is page')
    }
    componentWillMount() {
        this.listener = EventRegister.addEventListener('myCustomEvent', (data) => {
                        this.setState(
                   prev=>{
                       return{
                               ...prev,
                        selected:data
                          
                       }
                   }
               )
        })
  
}
    componentDidMount(){
        NetInfo.isConnected.fetch().then(isConnected => {
            console.log('isConnected',isConnected)
            if(isConnected){
                   this.fetchHistory()
            }else{
              this.loader.hide()
              Toast.show('Cannot connect to the server')
            }
          })
    }

    fetchHistory = () => {
        this.loader.show()
        AsyncStorage.getItem('user:everlastingMassage')
        .then(
            d=>{
                console.log(d)
                let data = JSON.parse(d)
                this.setState(
                    p=>{
                        return{
                            ...p,
                            user:data
                        }
                    })
                History(this.state.user.accesstoken,{"id":this.state.user.id},this.success,this.error)
                console.log(this.state.user)
        })
    }

success = (data) => {
    console.log('data from service ',data)
    this.setState(
        p=>{
            return{
                ...p,
                history:data
            }
        }
    )
    console.log('data from state ',this.state.history)
    this.loader.hide()
} 
error = err => {
    if(err === 'invalid token'){
        Toast.show('invalid token')
        AsyncStorage.removeItem('user:everlastingMassage')
        .then(
            ()=>{
                Toast.show('Session expired, please login again')
                EventRegister.emit('navLogin')
            }
        )
        return


    }
    this.loader.hide()
    Toast.show(err)
}

renderHistory = () => {
    let history = this.state.history
    if(this.state.history){
       return history.map(
        item=>{
              return(
                <HistoryCard ref={r=>{this.his = r}} invoice={()=>{this.invoice.show(this.state.user.accesstoken,this.state.user.id,item)}} token = {this.state.user.accesstoken} item={item} />
              )
        }
    )  
    }else{
        Toast.show('No internet connection')
        return <ImageBackground source={require('../../../assets/images/backgrounds/no-net.png')} imageStyle={{width:'100%',height:'100%',resizeMode:'contain'}} style={{height:50*vw,marginTop:10*vw,width:50*vw,alignSelf:'center'}}></ImageBackground>
      
    }
}




renderArea=()=>{
                let page = this.state.selected
                switch(page){
                case 'Profile Details':
                return <DetailsCard />
                break;
                case 'Account History':
                    return <ScrollView contentContainerStyle={{alignItems: "center"}} showsVerticalScrollIndicator={false}>{this.renderHistory()}</ScrollView>
                break;     
                default:
                return <DetailsCard />
                }  
}
    render(){
            return(
            <View  style={styles.mainContainer}>
                <View style={styles.segmentArea}>
                        <SegmentButton default={true} label='Profile Details' activeColor={this.props.activeColor} callback={this.callback}/> 
                        <SegmentButton label='Account History' activeColor={this.props.activeColor} callback={this.callback}/> 
                </View>
                <View style={styles.section}>
                     {this.renderArea()}
                     <Invoice  userData={{token:this.state.user.accesstoken,userId:this.state.user.id}} pay={this.props.pay}  ref={r=>{this.invoice = r}}/>
                </View>
                <Loader ref={r=>{this.loader = r}} message="Loading"/>
            </View>
            )
    }
    
}