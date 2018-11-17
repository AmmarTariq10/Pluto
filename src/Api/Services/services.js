import EndPoint from '../Config/index'
export default services = (successCallback,errorCallback) => {
    fetch(EndPoint.services)
    .then(
        d=>{
            d.json()
            .then(
                data=>{
                    console.log('from successCallback',data)
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
