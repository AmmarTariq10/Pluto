import React,{Component} from 'react'
import {
    View,
    ActivityIndicator,
    Text
} from 'react-native'
import Modal from 'react-native-modal'
import styles from './styles'
export default class Loader extends Component{
    constructor(props){
        super(props)
        this.state={
            visible:false
        }
    }
    componentDidMount(){
        console.log('loading started')
    }
    
    show = () => {
        this.setState(prev=>{
            return{
                visible:true
            }
        })
    }

    hide = () => {
        this.setState(prev=>{
            return{
                visible:false
            }
        })
    }

    render(){
        return(
            <Modal isVisible={this.state.visible} style={styles.container}>
                <View style={styles.loaderContainer}>
                    <View style={styles.indicatorContainer}>
                        <ActivityIndicator size="small" color={this.props.color}  />
                    </View>
                    <View style={styles.loadingContainerText}>
                        <Text style={[styles.loadingText,{color:this.props.color}]}>{this.props.message + ' ...'}</Text>
                    </View>
                </View>
            </Modal>
        )
    }   
}