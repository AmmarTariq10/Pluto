import EndPoint from '../Config/index'

export default login =  (data,successCallback,errorCallback) => {
    let headers = {
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    }
    let body = JSON.stringify(data)
    let options = {
        method:'POST',
        headers,
        body
    }
    fetch(EndPoint.login,options)
    .then(
        d=>{
            d.json()
            .then(
                data=>{
                    if(data.accesstoken === undefined || data.accesstoken === null){
                    console.log('from err',data)

                        errorCallback(data)
                    }else{
                    console.log('from successCallback',data)
                    successCallback(data) 
                    }
                    
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
