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
        height:35*vh,
        width:'70%',
        elevation:100,
        borderRadius: 10,
        alignContent: 'center',
        justifyContent:'center',
        alignContent: 'center',
        position:'absolute',
        top:25*vh,
        paddingTop:10*vw

    },
    img:{
        width:20*vw,
        height:20*vw,
        position:'absolute',
        top:20*vh,
        left:'40%',
        zIndex:100000000000000,
        elevation:1000000000
    },
    indicatorContainer:{
        justifyContent:'center'
    },
    buttonContainer:{
       flexDirection:'row',
       justifyContent:'space-around',
       alignContent: 'center',
       alignItems:'center',
        margin:'5%'
    },
    buttonContainerSingle:{
        height:5*vh,
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
    textContainer:{
        padding:'5%'
    },
})