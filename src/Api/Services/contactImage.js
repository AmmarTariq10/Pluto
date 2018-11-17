import EndPoint from '../Config/index'

export default contactImage = (successCallback,errorCallback) => {
    fetch(EndPoint.contactImage)
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
