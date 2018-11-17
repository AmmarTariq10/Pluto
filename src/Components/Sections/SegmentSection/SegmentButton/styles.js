import {StyleSheet} from 'react-native'
import vw from '../../../../Units/vw'
export default styles = StyleSheet.create({
  segmentButton:{
    flex:1,
    borderBottomWidth:0.4*vw,
    borderBottomColor:'white',
    marginLeft:1,
    marginRight:1,
    justifyContent:'center'
},
ActiveSegmentButton:{
  flex:1,
  borderBottomWidth:0.4*vw,
  marginLeft:1,
  marginRight:1,
  justifyContent:'center'

},
segmentContainer:{

},
segmentText:{
   textAlign:'center',
   color:'#E3E3E3',
   fontSize:4.5*vw
},
})