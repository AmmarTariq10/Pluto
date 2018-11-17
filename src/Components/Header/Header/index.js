import React,{Component} from 'react' 
import {
    View,
    Image,
    TouchableOpacity,
    ImageBackground
} from 'react-native'
import styles from './styles'


export default MainHeader = (props)=>{
return(
    <View style={styles.mainContainer}>
        <View style={styles.leftContainer}>
            <ImageBackground source={require('../../../assets/images/plutoHead.png')} imageStyle={styles.logo} style={styles.logoContainer}>

            </ImageBackground>
            <View style={styles.empty}></View>
        </View>
        <View style={styles.rightContainer}>
            <TouchableOpacity style={styles.notButton}>
                <Image style={require('../../../assets/images/bell.png')} style={styles.bell}/>
            </TouchableOpacity>
        </View>
    </View>
)
}