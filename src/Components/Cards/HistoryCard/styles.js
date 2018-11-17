import { StyleSheet } from 'react-native'
import  vw  from '../../../Units/vw'
import hw from '../../../Units/vh'
import {Fonts} from '../../../assets/Fonts/Fonts'
import vh from '../../../Units/vh';
export default styles = StyleSheet.create({
    mainContainer:{
        height:15*vh,
        width:90*vw,
        flexDirection:'row',
        marginVertical:2*vh,
        borderRadius:2*vw,
        elevation:4,
        backgroundColor:'#FFFFFF',
        overflow: 'visible',
    },
    imgContainer:{
        flex:2,
        borderRightWidth:1,
        borderRightColor:'#eee',
        paddingRight:2*vw

    },
    image:{
        flex:1
    },
    imageBack:{
        width:'100%',
        height:'100%',
        resizeMode:'contain',
        marginLeft:1*vw
    },
    content:{
        flex:6,
        paddingLeft:2*vw
    },
    title:{
        color:'#666666',
        textAlign:'left',
        fontSize:2.5*vh,
        fontFamily:Fonts.PD_BOLD
    },
    statusContainer:{
        flex:0.2,

    },
    status:{
        color:'#666666',
        textAlign:'left',
        fontSize:3*vw,
        fontFamily:Fonts.WS_REGULAR
        
    },
    instanceContainer:{
        flexDirection:'row',
        flex:0.4,
        marginRight:3*vw
    },
    dateContainer:{
        flex:1
    },
    dateButton:{
        flexDirection:'row',
        flex:1
    },
    textContainer:{

    },
    value:{
        fontSize:1.8*vh,
        color:'#cccccc',
        fontFamily:Fonts.WS_REGULAR,
        marginLeft:0.5*vw
    },
    text:{
        color:'#cccccc',
        paddingLeft:2*vw,
        fontFamily:Fonts.WS_REGULAR

    },
    timeContainer:{
       flex:1
    },
    timeButton:{
        flexDirection:'row',
        flex:1
    },
    btnContainer:{
        flex:1.3,
        alignContent: 'flex-end',
        alignItems: 'flex-end',
        marginTop:1*vw,
        marginRight:3*vw

    },
    icon:{
        height:2*vh,
        width:2*vh,
        resizeMode:"contain"
    },
    titleContainer:{
        flex:1,
        marginTop:1*vh
    }
   
})