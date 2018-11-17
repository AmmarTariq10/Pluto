import {
    StyleSheet
} from 'react-native'

import vw from '../../../Units/vw/'
import vh from '../../../Units/vh'
import { Fonts } from '../../../assets/Fonts/Fonts'

export default styles = StyleSheet.create({
    container:{
        flex:1,
        zIndex:100000
    },
    loaderContainer:{
        alignSelf: 'center',
        backgroundColor:'white',
        height:'20%',
        width:'70%',
        elevation:100,
        borderRadius: 10,
        flexDirection:'row', alignContent: 'center',
        justifyContent:'center',
        alignContent: 'center',

    },
    indicatorContainer:{
        justifyContent:'center'
    },
    loadingContainerText:{
        alignContent: 'center',
        justifyContent:'center',
        marginRight:10*vw
    },
    loadingText:{
        color:'rgba(0,0,0,0.5)',
        fontFamily: Fonts.MW_BOLD,
        fontSize:4*vw,
        marginLeft:3*vw
    },
    

})