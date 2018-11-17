import React, { Component } from 'react'
import {
    View,
} from 'react-native'
import vw from '../../../Units/vw'
import styles from './styles';

import FormHeading from '../../Headings/FormHeading'
import FormInput from '../../Inputs/FormInput'
import SolidButton from '../../Buttons/SolidButton'
export default RegistrationForm = (props) => {
            return(
                <View  fixDoubleTapIssue={true} style={styles.container}>
                <FormHeading heading="Register"/>
                <View style={styles.fieldsContainer}>
                        <FormInput secureEntry={false} placeholder="Email" focused={false} />
                        <FormInput secureEntry={false} placeholder="Username" focused={false} />
                        <FormInput secureEntry={true} placeholder="Password" focused={false} />
                </View>
                <View style={styles.buttonContainer}>
                <SolidButton method={props.handler} text="Register" width={70*vw} height={15*vw} btnColor="#8DC63F"/></View>
                </View>
            )
}   