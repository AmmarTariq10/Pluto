import React,{ Component } from 'react'
import {
    View,
    Image,
} from 'react-native'
import styles from './styles';
export default class TabButton extends Component{
    constructor(props){
        super(props)
    }
    render(){
        if(this.props.isActive === true){
         return(
            <View style={styles.container}>
                    <Image style={styles.icon} source={this.props.activeLink}/>
            </View>
        )   
        }else if(this.props.isActive === false){
            return(
               <View  style={styles.container}>
                    <Image style={styles.icon} source={this.props.inactiveLink} />
               </View>
           )
        }
    }
} 