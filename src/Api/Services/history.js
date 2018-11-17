import EndPoint from '../Config/index'

export default history =  (token,data,successCallback,errorCallback) => {
    if(!token){
        this.errorCallback('Login First')
        return
    }

    let headers = {
        headers:{
            Accept: 'application/json',
            Authorization:token
        }
    }

    let body = JSON.stringify(data)
    let options = {
        method:'POST',
        headers:{
            Accept: 'application/json',
            Authorization:token,
        },
        body
    }
    console.log(headers,body,options)
    fetch(EndPoint.history,options)
    .then(
        d=>{
            console.log(d)

            d.json()
            .then(
                data=>{
                    if(data === 'invalid token'){
                        errorCallback(data)

                    }else{
                        console.log('data',data)
                    successCallback(data)
                    }
                    
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
