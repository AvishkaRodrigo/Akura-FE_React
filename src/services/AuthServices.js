import axios from 'axios';
import * as apiroutes from '../apiroutes'

class AuthServices  {
    
    login = async (data) => {
        let a = new Promise((resolve, reject)=>{
            axios
                .post(apiroutes.LOGIN, data)
                .then((res)=> {
                    console.log(res)
                    return resolve(res)
                })
                .catch((err)=>{
                    return resolve(err.response)
                })
        })
        return await a
    }
}

export default new AuthServices();