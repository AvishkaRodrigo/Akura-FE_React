import axios from 'axios';
import * as apiroutes from '../apiroutes'

class ClassServices  {
    
    createClass = async (data) => {
        let a = new Promise((resolve, reject)=>{
            console.log('test')
            axios
                .post(apiroutes.CREATE_CLASS, data)
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

export default new ClassServices();