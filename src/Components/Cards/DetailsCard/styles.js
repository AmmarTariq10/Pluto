import { StyleSheet } from 'react-native'
import  vw  from '../../../Units/vw'
import hw from '../../../Units/vh'
import {Fonts} from '../../../assets/Fonts/Fonts'
export default styles = StyleSheet.create({
    mainContainer:{
        flex:1.3,
    },
    iconContainer:{
        flexDirection: 'row',
        flex:0.1,
        justifyContent:'flex-end',
        paddingRight:4*vw,
        paddingTop:4*vw
    },
    form:{
        flex:1.2,
        alignContent: 'center',
        alignItems: 'center',
    },
    btnContainer:{
        marginTop:5*vw,
    flexDirection:'row',
    flex:0.3,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent:'center'
    },
    scroll:{
        flex:1
    }
})