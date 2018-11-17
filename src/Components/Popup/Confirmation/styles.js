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
        alignSelf: 'center',
        backgroundColor:'white',
        height:'40%',
        width:'70%',
        elevation:100,
        borderRadius: 10,
        alignContent: 'center',
        justifyContent:'center',
        alignContent: 'center',
        position:'absolute',
        top:30*vh,
        paddingTop:10*vw

    },
    img:{
        width:20*vw,
        height:20*vw,
        position:'absolute',
        top:'27.5%',
        left:'40%',
        elevation:10000000
    },
    indicatorContainer:{
        justifyContent:'center'
    },
    buttonContainer:{
       flexDirection:'row',
       justifyContent:'space-around',
        margin:'5%'
    },
    buttonContainerSingle:{
  
        alignContent: 'center',
        alignItems: 'center',
        margin:'5%'
    },
    text:{
        color:'rgba(0,0,0,0.5)',
        fontFamily: Fonts.MW_BOLD,
        fontSize:4*vw,
        marginLeft:3*vw,
        textAlign:'center'
    },
    textSmall:{
        color:'rgba(0,0,0,0.5)',
        fontFamily: Fonts.MW_REGULAR,
        fontSize:3.5*vw,
        marginLeft:3*vw,
        marginTop:2*vw,
        textAlign:'center'
    },
    textContainer:{
        padding:'5%'
    },
})