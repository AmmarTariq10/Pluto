import { StyleSheet } from 'react-native'
import  vw  from '../../../Units/vw'
import hw from '../../../Units/vh'
import {Fonts} from '../../../assets/Fonts/Fonts'
export default styles = StyleSheet.create({
    mainContainer:{
        flex:1,
    },
    nameContainer:{
        alignContent: 'center',
        alignItems: 'center',  
    },
    name:{
        color:'#666666',
        textAlign:'center',
        paddingTop:3*vw,
        fontSize:5*vw
    },
    picArea:{
        flex:1.5,
        alignContent: 'center',
        alignItems: 'center',
        zIndex:100000,
        elevation:2,
        shadowOffset:{
            width:3*vw,
            height:3*vw
          },
          shadowOpacity:0.3,
          shadowRadius:3*vw

    },
    picCircle:{
        width:25*vw,
        height:25*vw,
        borderRadius:25*vw,
        backgroundColor:'rgba(255,255,255,0.3)',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent:'center',
        elevation:2
    },
    innerCircle:{
        width:20*vw,
        height:20*vw,
        borderRadius:25*vw,
        backgroundColor:'rgba(255,255,255,0.5)',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent:'center',
        elevation:1
    },
    picture:{
        width:15*vw,
        height:15*vw,
        borderRadius:15*vw,
        alignContent: 'flex-end',
        alignItems: 'flex-end',
        justifyContent:'flex-end'
    },
    imgBack:{
        resizeMode:'cover',
        width:15*vw,
        height:15*vw,
        borderRadius:7.5*vw,
    },
})