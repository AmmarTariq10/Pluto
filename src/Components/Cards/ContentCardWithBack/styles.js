import { StyleSheet } from 'react-native'
import  vw  from '../../../Units/vw'
import vh from '../../../Units/vh'
export default styles = StyleSheet.create({
    main:{
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
       
        left:'5%',
        position:'absolute',
        top:'12%',
        height:82*vh,
        width:90*vw,
        zIndex:100,
        elevation:2,
        backgroundColor:'white'
    },
    mainScrollContainer:{
        flex:1
    }
})