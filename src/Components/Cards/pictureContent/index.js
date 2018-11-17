
import React,{ Component } from 'react'
import {
    View,
    ImageBackground,
    StyleSheet,
    Text
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import vw from '../../../Units/vw'
import {Fonts} from '../../../assets/Fonts/Fonts'
export default PictureContent = props =>{
    return(
        <View style={styles.container}>  
            <ImageBackground resizeMode="contain" style={[styles.bg,props.tintStyle]} source={props.src}>
                <LinearGradient style={{flex:1, justifyContent:'flex-end',borderTopRightRadius: 10*vw,borderTopLeftRadius: 10*vw}} colors={['rgba(0,0,0,0.1)','rgba(255,255,255,0.1)','rgba(255,255,255,0.1)','rgba(0,0,0,0.8)']} >
                    {props.children}
                   <Text style={styles.head}>About Us</Text>
                </LinearGradient>
            </ImageBackground>        
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        borderTopLeftRadius: 10*vw,
        borderTopRightRadius: 10*vw,
        height:45*vw
    },
    bg:{
        height:45*vw,
        borderTopLeftRadius: 10*vw,
        borderTopRightRadius: 10*vw,
        flex:1
    },
    head:{
        justifyContent:'flex-end',
        color:'white',
        fontSize: 6*vw,
        paddingBottom:4*vw,
        paddingLeft:2*vw,
        fontFamily: Fonts.PD_BOLD,
    }
})