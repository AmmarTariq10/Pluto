import {StyleSheet} from 'react-native'
import vw from '../../../Units/vw';
export default styles = StyleSheet.create({
    imageContainer:{
        flex:1,
       alignItems:'center',
       alignContent:"center",
       justifyContent:"center"
    },
    img:{
        width:'50%',
        height:'50%',
        marginLeft:'25%',
        marginTop:'25%',
        resizeMode:'contain'
    },
    textContainer:{
        flex:5,
        justifyContent:"center"
    },
    text:{
        fontSize:3*vh,
        textAlign:"center",
        color:'blue'
    },
})