import {StyleSheet} from 'react-native'
import vw from '../../../Units/vw'
import {Fonts} from '../../../assets/Fonts/Fonts'
export default styles = StyleSheet.create({
   buttonContainer:{
    borderRadius:100,
    flex:1,
    margin:1*vw
   },
   backgroundImage:{
    flex:1
   },
   grad:{
    flex:1,
    justifyContent:'flex-end'
   },
   textContainer:{
       flex:0.28,
       paddingLeft:1*vw,
       paddingBottom:1*vw,
       

   },
   subTextContainer:{
    flex:1,
    justifyContent:'flex-end',
   },
   subText:{
    color:'white',
    fontSize: 3.5*vw,
  fontFamily: Fonts.WS_REGULAR,

   },
   mainTextContainer:{
    flex:1,
    justifyContent:'flex-end'
   },
   mainText:{
    color:'white',
    fontSize: 4*vw,
    fontWeight: 'bold',
  fontFamily: Fonts.PD_BOLD,

   },
})