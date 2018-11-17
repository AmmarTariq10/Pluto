import EndPoint from '../Config/index'
export default signup =  (data,token,successCallback,errorCallback) => {
    let headers={
        Accept: 'application/json',
        Authorization:token
    }
    
    let body = JSON.stringify(data)
    let options = {
        method:'POST',
        headers:headers,
        body
    }
    console.log(headers,body,options)
    fetch(EndPoint.signUp,options)
    .then(
        d=>{
            d.json()
            .then(
                data=>{
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
