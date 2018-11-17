import { StyleSheet } from 'react-native'
import vw from '../../Units/vw'
import vh from '../../Units/vh'
import {Fonts} from '../../assets/Fonts/Fonts'

let unit = vw

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#F8F8F8'
    },
    content:{
      height:70*vh,
      backgroundColor:'rgba(255,255,255,0.6)',
      marginHorizontal:2*vw,
      borderRadius:2*vw,
    },
    
    topContainer:{
      height:15*vh,
      flexDirection:'row'
    },
    button:{
      width:70*vw,
      height:8*vh,
      borderRadius:2*vw,
      backgroundColor:'rgba(255,255,255,0.8)',
      marginTop:3*vh,
      alignContent:"center",
      justifyContent:"center",
      alignItems:"center"
    },
text:{
color:'#024670',
fontSize:4*vh,
textAlign:"center"
},
    
  });
  