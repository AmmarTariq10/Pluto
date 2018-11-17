import React,{Component} from 'react'
import {
    View
} from 'react-native'
import styles from './styles'
import TabButton from '../../Buttons/TabButton'
class NavigationTab extends Component{
    constructor(props){
        super(props)
        this.state={
            currentActive:'Home'
        }
    }
    componentDidMount(){
        alert(this.state.c)
    }
    switcher=(page)=>{
        this.setState(prev=>{
            return{
                ...prev,
                currentActive:page
            }
        })
    }
    render(){
        let c = this.state.currentActive
        switch(c){
            case 'Home':
                return(
                <View style={[styles.tabContainer]}>
                    <TabButton switcher={this.switcher} inactiveLink={require('../../../assets/images/tabIcons/home/inactive.png')} id="Home"  activeLink={require('../../../assets/images/tabIcons/home/active.png')} isActive={true} />
                    <TabButton switcher={this.switcher} inactiveLink={require('../../../assets/images/tabIcons/about/inactive.png')} id="AboutUs" activeLink={require('../../../assets/images/tabIcons/about/active.png')}  isActive={false} />
                    <TabButton switcher={this.switcher} inactiveLink={require('../../../assets/images/tabIcons/services/inactive.png')} id="Service" activeLink={require('../../../assets/images/tabIcons/services/active.png')} isActive={false} />
                    <TabButton switcher={this.switcher} inactiveLink={require('../../../assets/images/tabIcons/contact/inactive.png')}  id="ContactUs" activeLink={require('../../../assets/images/tabIcons/contact/active.png')} isActive={false} />
                </View>
                    )

            case 'AboutUs':
            return(
                <View style={[styles.tabContainer]}>
                    <TabButton switcher={this.switcher} inactiveLink={require('../../../assets/images/tabIcons/home/inactive.png')}  id="Home" activeLink={require('../../../assets/images/tabIcons/home/active.png')} isActive={false} />
                    <TabButton switcher={this.switcher} inactiveLink={require('../../../assets/images/tabIcons/about/inactive.png')}  id="AboutUs" activeLink={require('../../../assets/images/tabIcons/about/active.png')}  isActive={true} />
                    <TabButton switcher={this.switcher} inactiveLink={require('../../../assets/images/tabIcons/services/inactive.png')} id="Service" activeLink={require('../../../assets/images/tabIcons/services/active.png')} isActive={false} />
                    <TabButton switcher={this.switcher} inactiveLink={require('../../../assets/images/tabIcons/contact/inactive.png')}  id="ContactUs" activeLink={require('../../../assets/images/tabIcons/contact/active.png')} isActive={false} />
                </View>
                    )

            case 'Service':
            return(
                <View style={[styles.tabContainer]}>
                    <TabButton switcher={this.switcher} inactiveLink={require('../../../assets/images/tabIcons/home/inactive.png')} id="Home"  activeLink={require('../../../assets/images/tabIcons/home/active.png')} isActive={false} />
                    <TabButton switcher={this.switcher} inactiveLink={require('../../../assets/images/tabIcons/about/inactive.png')} id="AboutUs"  activeLink={require('../../../assets/images/tabIcons/about/active.png')}  isActive={false} />
                    <TabButton switcher={this.switcher} inactiveLink={require('../../../assets/images/tabIcons/services/inactive.png')} id="Service" activeLink={require('../../../assets/images/tabIcons/services/active.png')} isActive={true} />
                    <TabButton switcher={this.switcher} inactiveLink={require('../../../assets/images/tabIcons/contact/inactive.png')} id="ContactUs"  activeLink={require('../../../assets/images/tabIcons/contact/active.png')} isActive={false} />
                </View>
                    )
            case 'ContactUs':
            return(
                <View style={[styles.tabContainer]}>
                    <TabButton switcher={this.switcher} inactiveLink={require('../../../assets/images/tabIcons/home/inactive.png')}  id="Home" activeLink={require('../../../assets/images/tabIcons/home/active.png')} isActive={false} />
                    <TabButton switcher={this.switcher} inactiveLink={require('../../../assets/images/tabIcons/about/inactive.png')}  id="AboutUs" activeLink={require('../../../assets/images/tabIcons/about/active.png')}  isActive={false} />
                    <TabButton switcher={this.switcher} inactiveLink={require('../../../assets/images/tabIcons/services/inactive.png')} id="Service" activeLink={require('../../../assets/images/tabIcons/services/active.png')} isActive={false} />
                    <TabButton switcher={this.switcher} inactiveLink={require('../../../assets/images/tabIcons/contact/inactive.png')}  id="ContactUs" activeLink={require('../../../assets/images/tabIcons/contact/active.png')} isActive={true} />
                </View>
                    )

        }


        
    }
}
export default NavigationTab