import { StyleSheet } from 'react-native'
import vw from '../../Units/vw'
import vh from '../../Units/vh'
import {Fonts} from '../../assets/Fonts/Fonts'

let unit = vw

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#F8F8F8',
      elevation:1
    },
    content:{
      flex:1
    },
    menuContainer:{
      flex:1,
      flexDirection:'row',
      alignItems:"center",
      justifyContent:"space-around"
    },
    listContainer:{
      flex:2,
      alignItems:"center"
    },
    scroll:{
      height:'70%',
      width:"80%",
      backgroundColor:'rgba(255,255,255,0.3)',
      borderRadius:2*vw,

    },
    buttonContainer:{
      flex:1,
      
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
    empty:{
      flex:1
    },
  });
  