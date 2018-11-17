import {StyleSheet} from 'react-native'
import vw from '../../../Units/vw'
export default styles = StyleSheet.create({
    container:{
        flex:1,
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
        marginTop:1*vw,
        marginBottom:1*vw,
        elevation:100,
        zIndex:1000
    },
    icon:{
        width:5*vw,
        height:5*vw,
        resizeMode:'contain' 
    }
    
})