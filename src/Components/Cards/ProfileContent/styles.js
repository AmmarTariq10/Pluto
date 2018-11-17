import { StyleSheet } from 'react-native'
import  vw  from '../../../Units/vw'
import hw from '../../../Units/vh'
export default styles = StyleSheet.create({
    main:{
        position:'absolute',
        top:'12%',
        height:100*hw,
        width:'100%',
        zIndex:100,
        elevation:1,
    },
    mainScrollContainer:{
        flex:1
    }
})