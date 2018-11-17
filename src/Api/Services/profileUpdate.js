import EndPoint from '../Config/index'
export default ProfileUpdate =  (data,token,successCallback,errorCallback) => {
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
    fetch(EndPoint.profileUpdate,options)
    .then(
        d=>{
            d.json()
            .then(
                data=>{
                    if(data.status === 7){
                    console.log('from succ',data)
                    successCallback(data)
                    }else{
                    console.log('from err',data)
                    errorCallback(data) 
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
