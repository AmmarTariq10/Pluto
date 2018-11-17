import { StyleSheet } from 'react-native'
import  vw  from '../../../Units/vw'
import hw from '../../../Units/vh'
export default styles = StyleSheet.create({
    main:{
        borderRadius: 30,
        left:'5%',
        position:'absolute',
        top:'12%',
        height:85*hw,
        width:90*vw,
        zIndex:100,
        elevation:2,
    },
    map:{  
        borderRadius: 30
    },
    mainScrollContainer:{
        flex:1
    }
})