import axios from 'axios';
import * as apiroutes from '../apiroutes'
import LocalStorageServices from './LocalStorageServices';

const accessToken = LocalStorageServices.getItem('token');

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


    getAllParents = async (id) => {
        let a = new Promise((resolve, reject)=>{
            
            axios
                .get(apiroutes.GET_ALL_PARENTS
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
    
    getParentStudents = async () => {
        const accessToken = LocalStorageServices.getItem('token');
        console.log("accdsesd",accessToken)
        // const config = {
        //     headers : {
        //         'Content-Type': 'application/json',
        //         'x-auth-token': `${accessToken}`
        //         } 
        //     }
        // };
        
        let a = new Promise((resolve, reject)=>{
            axios
                .get(apiroutes.GET_STUDENTS_OF_SINGLE_PARENT,{
                    headers : {
                        'x-auth-token': `${accessToken}`
                    } 
                })
                .then((res)=> {
                    return resolve(res)
                })
                .catch((err)=>{
                    return resolve(err.response)
                })
        })
        return await a
    }

    setMyStudent = (id) => {
        LocalStorageServices.setItem('myStudent',id)
    }
    
    removeMyStudent = (id) => {
        LocalStorageServices.removeItem('myStudent')
    }
}

export default new ParentServices();