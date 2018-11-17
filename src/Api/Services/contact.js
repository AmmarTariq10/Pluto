import EndPoint from '../Config/index'

export default ContactService =  (data,successCallback,errorCallback) => {
    let headers = {
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    }

    console.log('data to send from contact service',data)
    let body = JSON.stringify(data)
    let options = {
        method:'POST',
        headers,
        body
    }
    fetch(EndPoint.contact,options)
    .then(
        d=>{
            console.log('received data',d)
            d.json()
            .then(
                data=>{
            console.log('parsed data',data)

                    successCallback(data)
                }
            ).catch(
                error=>{
                    console.log('error from json parsing')
                    errorCallback(error)
                }
            )
        }
    ).catch(
        error=>{
            console.log('network or request error')
            errorCallback(error)
        }
    )
}
