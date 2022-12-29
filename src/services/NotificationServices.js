import axios from 'axios';
import * as apiroutes from '../apiroutes'

class NotificationServices  {
    
    createAnnoucement = async (data) => {
        let a = new Promise((resolve, reject)=>{
            const config = {
                headers : {
                    'Content-Type': 'application/json'
                }
            }
            axios
                .post(apiroutes.CREATE_NOTIFICATION, data, config)
                .then((res)=> {
                    return resolve(res)
                })
                .catch((err)=>{
                    return resolve(err.response)
                })
        })
        return await a
    }
}

export default new NotificationServices();