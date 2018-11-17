import EndPoint from '../Config/index'

export default passwordUpdate =  (token,data,successCallback,errorCallback) => {

    let body = JSON.stringify(data)
    let options = {
        method:'POST',
        headers:{
            Accept: 'application/json',
            Authorization:token,
        },
        body:body
    }
    console.log(body,options)
    fetch(EndPoint.passwordUpdate,options)
    .then(
        d=>{
            console.log(d)
            d.json()
            .then(
                data=>{
                    console.log('data',data)
                   successCallback(data)
                }
            ).catch(
                error=>{
                    console.log(error)
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
