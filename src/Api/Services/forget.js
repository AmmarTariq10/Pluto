import EndPoint from '../Config/index'

export default forget =  (data,successCallback,errorCallback) => {
    let body = JSON.stringify(data)
    let options = {
        method:'POST',
        headers:{
            Accept: 'application/json'
        },
        body:body
    }

    console.log(body,options)
    fetch(EndPoint.forget,options)
    .then(
        d=>{
            console.log(d)
            d.json()
            .then(
                data=>{
                    console.log('data',data)
                    if(data.status === 3){
                        errorCallback('This email does not exist in our database')
                    }else{
                        successCallback(data)
                    }
                }
            ).catch(
                error=>{
                    console.log(error)
                    console.log('error from json parsing')
                    errorCallback('An error occured while processing your request')
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
