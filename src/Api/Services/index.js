import login from './login'
import signup from './signup'
import history from './history'
import services from './services'
import contact from './contact'
import forget from './forget'
import verify from './verify'
import passwordUpdate from './paswordUpdate'
import ProfileUpdate from './profileUpdate'
import appointmentUpdate from './appointmentUpdate'
import contactImage from './contactImage'
import invoice from './invoice'
import pay from './pay'
module.exports = {
    LoginService:login,
    Signup:signup,
    History:history,
    ServiceListings:services,
    Contact:contact,
    Forget:forget,
    Verify:verify,
    PasswordUpdate:passwordUpdate,
    ProfileUpdate:ProfileUpdate,
    AppointmentUpdate:appointmentUpdate,
    ContactImage:contactImage,
    GetInvoiceDetails:invoice,
    Payment:pay
}
