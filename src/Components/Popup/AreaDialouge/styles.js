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
        height:'55%',
        width:'70%',
        elevation:100,
        borderRadius: 10,
        alignContent: 'center',
        alignContent: 'center',
        position:'absolute',
        top:25*vh,
        padding:2*vw,
        paddingTop:10*vw,
   

    },
    indicatorContainer:{
        justifyContent:'center'
    },
    buttonContainer:{
       height:20*vw,
       flexDirection:'row',
       justifyContent:'space-around',
       paddingBottom:5*vw,
       paddingTop:5*vw

    },
    text:{
        color:'rgba(0,0,0,0.5)',
        fontFamily: Fonts.MW_BOLD,
        fontSize:4*vw,
        marginLeft:3*vw
    },
    img:{
        width:20*vw,
        height:20*vw,
        position:'absolute',
        top:'20%',
        left:'40%',
        elevation:10000000
    },
    textContainer:{
        padding:'10%'
    },
    textContainerAreas:{
        padding:'10%'
    },
    textAreas:{
        color:'rgba(0,0,0,0.5)',
        fontFamily: Fonts.MW_BOLD,
        fontSize:3*vw,
        marginLeft:3*vw
    },
})