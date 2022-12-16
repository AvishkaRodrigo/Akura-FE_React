import axios from 'axios';
import * as apiroutes from '../apiroutes'

class ParentServices  {
    
    createUser = async (data) => {
        let a = new Promise((resolve, reject)=>{
            
            axios
                .post(apiroutes.CREATE_USER, data)
                .then((res)=> {
                    return resolve(res)
                })
                .catch((err)=>{
                    return resolve(err.response)
                })
        })
        return await a
    }


    getAllParentsToAdminView = async (id) => {
        let a = new Promise((resolve, reject)=>{
            
            axios
                .get(apiroutes.GET_PARENTS_FOR_ADMIN
                // TODO - uncomment to access ins only
                    // ,{
                    //     // headers: {
                    //     //     Authorization: `Bearer ${accessToken}`
                    //     //     // Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ0ZXN0Iiwicm9sZSI6MSwiaWF0IjoxNjY2MDA0NjA2LCJleHAiOjE2NjYzNjQ2MDZ9.CUnkweojyIlcs1HmIMwb1S9bjyRxzzzD-WGyy2LPvT8'}`
                    //     // }
                    // } 
                )
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

export default new ParentServices();