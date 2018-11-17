import BASE_URL from './URL'
export default EndPoint = {
    login:BASE_URL + "/request-login",
    signUp:BASE_URL + "/request-signup",
    history:BASE_URL + "/request-history",
    services:BASE_URL + "/request-services",
    contact:BASE_URL + "/request-contact-us",
    forget:BASE_URL + "/request-forgot-password",
    verify:BASE_URL + "/request-verify-token",
    passwordUpdate:BASE_URL + "/request-password",
    profileUpdate:BASE_URL + "/request-updateprofile",
    appointmentUpdate:BASE_URL + "/request-appointment",
    contactImage:BASE_URL + "/request-contact-image",
    invoice:BASE_URL + "/invoice-details",
    payment:BASE_URL + "/pay-invoice",
}