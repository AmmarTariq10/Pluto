import { StyleSheet } from 'react-native'
import  vw  from '../../../Units/vw'
import hw from '../../../Units/vh'
import {Fonts} from '../../../assets/Fonts/Fonts'
export default styles = StyleSheet.create({
    main:{
        borderRadius: 20,
        left:'12.5%',
        position:'absolute',
        top:'65%',
        height:40*hw,
        width:75*vw,
        zIndex:100,
        elevation:1000,
        backgroundColor:'white'
    },
    headingContainer:{
        paddingTop:2*vw,
        flex:0.5,
        alignContent: 'center',
        justifyContent:'center',
        alignItems: 'center',
    },
    heading:{
        fontSize: 5*vw,
        color:'#666666',
        fontFamily: Fonts.PD_REGULAR,
    },
    contentContainer:{

   padding:3*vw
    },
    content:{
            textAlign:'center',
            color:'#999999',
            fontFamily:Fonts.WS_REGULAR
    },
    buttonContainer:{
        flex:2,
        alignItems: 'center',

    },
    iconContainer:{
        flex:0.3
    },
    mainActive:{
        borderRadius: 20,
        left:'12.5%',
        position:'absolute',
        top:'15%',
        height:80*hw,
        width:75*vw,
        zIndex:100,
        elevation:1000,
        backgroundColor:'white'
    },
    formContainer:{
        flex:5,
        alignContent: 'center',
        alignItems: 'center',
    },
    ActiveButtonContainer:{
        flex:1,
    },
    iconContainer:{
        alignContent: 'center',
        alignItems:'center',
        
    }
})