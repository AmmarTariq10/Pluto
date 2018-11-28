const server_base = "https://ptiot-pulsatetechnologies.appspot.com"
const pie_base = "null"

export default (route,data,success,error) => {
    fetch(server_base+route,{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
         },
        body:JSON.stringify(data)
    }).then(d=>dataResolution(d,success,error)).catch(
        e=>{
            fetch(pie_base+route,{
                method:'POST',
                headers:{
                   "Content-Type":"application/json"
                },
                body:JSON.stringify(data)
            }).then(d=>dataResolution(d,success,error)).catch(error=>{
                error(error)
            })
        }
    )
}

const dataResolution = (data,success,error) => {
    console.log('from data resolution',data)
    data.json()
    .then(
        d=>{
            console.log('from data resolution',d)
            switch(d.error){
                case true:
                     console.log('entered error')
                     error(d)   
                     break;

                case false:
                console.log('entered success')
                     success(d)   
                     break;
                default:
                console.log('entered default')

                    error(d)   
                    break;
            }
        })
        .catch(error=>{
            console.log(error)
            error(error)
        })
}