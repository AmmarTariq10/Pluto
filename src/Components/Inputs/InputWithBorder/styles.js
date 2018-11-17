import { StyleSheet } from 'react-native'
import vw from '../../../Units/vw'
import {Fonts} from '../../../assets/Fonts/Fonts'
export default styles = StyleSheet.create({
    container:{
      borderBottomWidth: 2,
      borderBottomColor:'#FFFFFF'
      
    },
    containerFocused:{
      borderBottomWidth: 2,
      fontFamily: Fonts.P_LIGHT
    },
    headingContainer:{
      flex:1, 
    },
    inputFields:{
      fontFamily: Fonts.P_LIGHT,
      padding:0,
      margin:0,
    },
    label:{
      fontFamily: Fonts.P_LIGHT,
      padding:0,
      margin:0,
      color:'#8DC63F'
    }
  });
  