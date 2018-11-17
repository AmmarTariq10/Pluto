import { StyleSheet } from 'react-native'
import vw from '../../../Units/vw'
import vh from '../../../Units/vh'
import {Fonts} from '../../../assets/Fonts/Fonts'
export default styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    fieldsContainer:{
      flex: 4,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
    },
    buttonContainer:{
      marginTop:5*vw,
      flex:1,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
    },
    btn:{
      marginTop:10*vh,
      height:5*vh,
      width:30*vw,
    },
    btnText:{
      color:'white',
      fontFamily:Fonts.P_LIGHT,
      textAlign:'center'
    }
  });
  