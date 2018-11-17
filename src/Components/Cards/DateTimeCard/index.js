import React,{ Component } from 'react'
import {
    View,
    TouchableOpacity,
    Text,
    Image
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import styles from './styles'
import vw from '../../../Units/vw'

export default DateTimeCard = props => {
    return(
        // <View style={styles.container}>
            <TouchableOpacity onPress={props.pressHandler} style={styles. button}>
               <LinearGradient style={styles.circle}  start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['#8DC63F','#62C78B']}>
                        <Image source={props.img} style={styles.icon}/>
                </LinearGradient> 
                <View style={styles.mainContainer}>
                
                <View style={styles.headingContainer}>
                    <Text style={styles.heading}>{props.heading}</Text>
                </View>
                <View style={styles.contentContainer}>
                 <Text style={styles.content}>
                 {props.content}
                 </Text>            
                </View>
                </View>  
               
            </TouchableOpacity>
        // </View>
    )
}