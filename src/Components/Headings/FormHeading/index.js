import React, { Component } from 'react'
import {
    View,
    Text
} from 'react-native'
import styles from './styles';

export default FormHeading = (props) => {
    return(
        <View style={styles.headingContainer}>
                <Text style={styles.heading}>{props.heading}</Text>
        </View>
    )
}   