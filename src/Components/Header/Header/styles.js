import { StyleSheet } from 'react-native'
import vw from '../../../Units/vw'
import {Fonts} from '../../../assets/Fonts/Fonts'
import vh from '../../../Units/vh';
export default styles = StyleSheet.create({
   mainContainer:{
       height:10*vh,
       width:100*vw,
       backgroundColor:'rgba(255,255,255,0.6)',
       elevation:10,
       flexDirection:'row'
   },
   leftContainer:{
    flex:4,
    flexDirection:'row'
   },   
   logoContainer:{
    flex:1
   },
   logo:{
       resizeMode:'contain',
       width:'80%',
       height:'80%',
       marginTop:'10%',
       marginLeft:'10%'
   },
   empty:{
       flex:3
   },
   rightContainer:{
    flex:1,
    alignContent:"center",
    justifyContent:"center",
    alignItems:"center",
    borderLeftColor:'#97bdc2',
    borderLeftWidth:1
   },
   notButton:{
flex:1,
    alignContent:"center",
    justifyContent:"center",
    alignItems:"center"
   },
   bell:{
    resizeMode:'contain',
    flex:1
  
   },
})