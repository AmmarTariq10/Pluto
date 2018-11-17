import { StyleSheet } from 'react-native'
import vw from '../../../Units/vw'
export default styles = StyleSheet.create({
    mainContainer:{
        flex:1
    },
    segmentArea:{
        flexDirection:'row',
        flex:0.1,
        marginRight:3*vw,
        marginLeft:3*vw,
        marginTop:10*vw

    },
    section:{
        margin:2*vw,
        flex:0.63,
        backgroundColor:'white',
        borderRadius:2*vw,
        shadowOffset:{
            width:2*vw,
            height:2*vw
          },
          shadowOpacity:0.3,
          shadowRadius:2*vw
    }
})