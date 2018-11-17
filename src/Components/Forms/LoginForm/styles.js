import { StyleSheet } from 'react-native'
import {Fonts} from '../../../assets/Fonts/Fonts'
import vh from '../../../Units/vh';
export default styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'transparent'
    },
    fieldsContainer:{
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
    },
    buttonContainer:{
      marginTop:5*vw,
      flex:0.5,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',

    },
    forgetText:{
      color:'white',
      fontSize:3*vw,
      textAlign:'right'
    },
    forgetContainer:{
      alignSelf: 'stretch',
      marginTop:2*vw,
      marginRight:10*vw,
      marginBottom:5*vw,


    },
    btn:{
      marginTop:3*vh,
      height:3*vh,
      width:30*vw,
      marginBottom:1*vh
    },
    btnText:{
      color:'white',
      fontFamily:Fonts.P_LIGHT,
      textAlign:'center'
    }
  });
  