import { StyleSheet } from 'react-native'
import vw from '../../../Units/vw'
import {Fonts} from '../../../assets/Fonts/Fonts'
export default styles = StyleSheet.create({
    // container:{
    //     height:25*vw,
    //     width:25*vw,
    //     margin:2.5*vw
    // },
    button:{
        height:25*vw,
        width:25*vw,
        marginHorizontal: 2*vw,
        alignContent: 'center',
        alignItems:'center',
        justifyContent:'center',
    },
    tagContainer:{
        height:7*vw
    },
    circle:{
        height:8*vw,
        width:8*vw,
        borderRadius:10*vw,
        alignContent: 'center',
        alignItems:'center',
        justifyContent:'center',
        alignSelf: 'center',
        position:'absolute',
        top:0*vw,
        zIndex:1000000000,
        elevation:3.1
    },
    icon:{
        width:4*vw,
        height:4*vw,
        resizeMode:'contain'
    },
    mainContainer:{
        paddingTop:6*vw,
        position:'absolute',
        top:4*vw,
        elevation:3,
        borderRadius:5,
        zIndex:200,
        // borderWidth:0.3,
        // borderColor:'rgba(0,0,0,0.1)',
        width:23*vw,
        height:15*vw,
        zIndex:100,
     
        backgroundColor:'#FFFFFF',
        shadowColor:'black',
        shadowOffset:{
            width:0.5*vw,
            height:0.5*vw
          },
          shadowOpacity:0.1,
          shadowRadius:1*vw
    },
    headingContainer:{
        height:'40%',
        
    },
    heading:{
        color:'#333333',
        textAlign:'center',
        fontSize: 3.5*vw,
        fontFamily: Fonts.WS_REGULAR,
    },
    contentContainer:{

    },
    content:{
        color:'#999999',
        textAlign:'center',
        fontSize: 3*vw,
        fontFamily: Fonts.WS_REGULAR,

    },
})