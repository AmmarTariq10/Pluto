import {StyleSheet} from 'react-native'
import {Fonts} from '../../../assets/Fonts/Fonts'
import vw from '../../../Units/vw'
export default styles = StyleSheet.create({
    main:{
        elevation:1,
        backgroundColor:'rgba(255,255,255,0.5)',
        borderRadius:25,
        margin:1*vw,
        alignItems: 'center',
        alignContent: 'center',
        shadowOffset:{
            width:1*vw,
            height:1*vw
          },
          shadowOpacity:0.1,
          shadowRadius:1*vw
    },
    imgContainer:{
        marginTop:5*vw,
        backgroundColor:'white',
        elevation:1
    },
    icon:{
        height:'100%',
        width:'100%',
        resizeMode:'contain'
    },
    textContainer:{
        paddingTop:'5%',
        width:'50%'
        
    },
    MainLabel:{
        textAlign:'center',
        flexWrap: "wrap",     
        color:'#2C2E85',
        fontFamily: Fonts.PD_BOLD,
        textAlignVertical:'center'
    },
    subLabel:{
        textAlign:'center',
        color:'#2C2E85',
        fontFamily: Fonts.PD_BOLD,
        textAlignVertical:'center'
    },
    price:{     
        color:'#26A9E0',
        fontFamily: Fonts.PD_BOLD,
        fontSize:5*vw,
        textAlign:'center'
    },
  
})