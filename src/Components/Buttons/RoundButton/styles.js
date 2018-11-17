import {StyleSheet} from 'react-native'
import vw from '../../../Units/vw';
export default styles = StyleSheet.create({
    imageContainer:{
       height:15*vw,
       width:15*vw,
       borderRadius: 10*vw,
       elevation:10,
       alignItems:'center',
       alignContent:"center",
       justifyContent:"center"
    },
    img:{
        width:'65%',
        height:'65%',
        resizeMode:'contain'
    },
    text:{
        fontSize:3*vh,
        textAlign:"center",
        color:'white'
    },
})