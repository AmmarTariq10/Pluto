import {
    StyleSheet
} from 'react-native'
import vw from '../../../Units/vw/'
import vh from '../../../Units/vh'
import { Fonts } from '../../../assets/Fonts/Fonts'
export default styles = StyleSheet.create({
    container:{
        flex:1,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent:'center',
    },
    contentContainer:{
        backgroundColor:'#EEEEEE',
        height:85*vh,
        width:85*vw,
        elevation:100,
    },
    titleContainer:{
        height:8*vh,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent:'center',
        paddingHorizontal:5*vw,
        backgroundColor:'#EEEEEE',
    },
    closeButton:{
        height:4*vh,
        width:4*vh,
        position:'absolute',
        top:1*vh,
        right:2*vw
    },
    closeImage:{
        height:'100%',
        width:'100%',
        resizeMode:'contain'
    },
    title:{
        fontSize: 3*vh,
        color:'#2A4995',
        textAlign:'center',
      fontFamily: Fonts.PD_BOLD,
    },
    invoiceDetailsContainer:{
        flex:1,
        backgroundColor:'#FFF',
        elevation:5,
        marginTop:2*vw
    },
    footer:{
        height:20*vh,
        alignItems:'center',
        alignContent:'center',
        justifyContent: 'center',
    },
    subContainer:{
        flex:1,
        alignItems:'center',
        alignContent:'center',
        justifyContent: 'center',
    },
    footerText:{
        fontSize: 2.5*vh,
        color:'#8DC63F',
      fontFamily: Fonts.PD_REGULAR,

    },
    nameContainer:{
        height:12*vh,
        marginBottom:3*vh,

    },
    row:{
        flex:1,
        flexDirection: 'row'
    },
    col:{
        flex:1,
        alignItems:'center',
        alignContent:'center',
        justifyContent: 'center',
    },
    
    headingContainer:{
        flex:1,
        flexDirection:'row',
        marginHorizontal:2*vw,
        borderBottomWidth:1,
        borderColor:'#c1c1c1'
    },
    heading:{
        flex:1,
        textAlign:'left',
        fontFamily:Fonts.WS_REGULAR,
        fontSize:2.3*vh

    },
    date:{
        fontFamily:Fonts.WS_SEMI,
        fontSize:2.3*vh
        
    },
    notes:{
        fontFamily:Fonts.WS_REGULAR,
        fontSize:1.8*vh
        
    },
})