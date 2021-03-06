import { StyleSheet } from 'react-native'
import vw from '../../../Units/vw'
import {Fonts} from '../../../assets/Fonts/Fonts'
export default styles = StyleSheet.create({
    container:{
      alignContent:'center',
      alignItems:'center',

      borderBottomWidth: 1,
      borderBottomColor: '#EEEEEE',
      flexDirection:'row'
    },
    containerFocused:{
      borderBottomWidth: 2,
      borderBottomColor: '#8DC63F',
    },
    headingContainer:{
      flex:1, 
    },
    inputFields:{
      fontFamily: Fonts.P_LIGHT,
      textAlignVertical: "top",
    
    },
    label:{
      fontFamily: Fonts.P_LIGHT,
   
    }
  });
  