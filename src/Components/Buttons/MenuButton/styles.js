import {StyleSheet} from 'react-native'
import {Fonts} from '../../../assets/Fonts/Fonts'
export default styles = StyleSheet.create({
    main:{
        elevation: 1,
    },
    imgContainer:{
        paddingTop:'5%',
        height:'60%',
        height:'60%',
    },
    icon:{
        height:'100%',
        width:'100%',
        resizeMode:'cover'
    },
    textContainer:{
        paddingTop:'5%',
       
    },
    MainLabel:{
        textAlign:'center',
        fontWeight: 'bold',
        color:'#26A9E0',
        fontFamily: Fonts.PD_REGULAR,
    },
    subLabel:{
        textAlign:'center',
        fontWeight: 'bold',
        color:'#2C2E85',
        fontFamily: Fonts.PD_BOLD,
    },
    price:{     
        color:'#26A9E0',
        fontFamily: Fonts.PD_BOLD,
        marginBottom:3,
        marginLeft:3
    }
})