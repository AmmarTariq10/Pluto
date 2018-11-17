import { StyleSheet } from 'react-native'
import vw from '../../../Units/vw'
import {Fonts} from '../../../assets/Fonts/Fonts'
export default styles = StyleSheet.create({
  btn:{
    borderRadius: 2*vw,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor:'transparent',
    borderWidth:2,
    borderColor:'white'
  },
  text:{
    fontSize: 4*vw,
    color:'white',
    textAlign:'center',
    fontFamily: Fonts.MW_REGULAR,
    color:'white'
  }
  });