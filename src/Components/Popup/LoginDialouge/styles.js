import {
    StyleSheet
} from 'react-native'
import vw from '../../../Units/vw/'
import vh from '../../../Units/vh'
import { Fonts } from '../../../assets/Fonts/Fonts'
export default styles = StyleSheet.create({
    container:{
        flex:1,
    },
    contentContainer:{
        alignSelf: 'stretch',
        backgroundColor:'white',
        height:40*vh,
        width:'100%',
        elevation:100,
        alignContent: 'center',
        alignContent: 'center',
        position:'absolute',
        top:60*vh,
        padding:2*vw,
    },
    buttonContainer:{
     flex:1,
     alignContent: 'center',
     alignItems: 'center',
    },
    content:{
        flex:1.8
    },
    closeContainer:{
        height:5*vh,
        alignContent: 'flex-end',
        alignItems: 'flex-end',

    },
    imageContainer:{
        height:10*vh,
        marginTop:2*vh
    },
    image:{
        width:'100%',
        height:'100%',
    },
    textContainer:{
        height:2*vh,
        marginTop:1*vh
    },
    text:{
        textAlign:'center'
    },
})