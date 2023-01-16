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

    getAllClasses4FE = async (data) => {
        let a = new Promise((resolve, reject)=>{
            console.log('test')
            axios
                .get(apiroutes.CREATE_CLASS)
                .then((res)=> {
                    return resolve(res)
                })
                .catch((err)=>{
                    return resolve(err.response)
                })
        })
        return await a
    }

    myClasses = async (id) => {
        let a = new Promise((resolve, reject)=>{
            console.log('STUDENT_MY_CLASSES')
            axios
                .get(apiroutes.STUDENT_MY_CLASSES+ `/${id}`)
                .then((res)=> {
                    return resolve(res)
                })
                .catch((err)=>{
                    return resolve(err.response)
                })
        })
        return await a
    }

    classPayment = async (data) => {
        let a = new Promise((resolve, reject)=>{
            console.log('test')
            axios
                .post(apiroutes.CLASS_PAYMENT, data)
                .then((res)=> {
                    return resolve(res)
                })
                .catch((err)=>{
                    return resolve(err.response)
                })
        })
        return await a
    }

    getMonthlyPaymentsOfStudent = async (classId,studentId) => {
        let a = new Promise((resolve, reject)=>{
            console.log('test')
            axios
                .get(apiroutes.CLASS_PAYMENT + `/${classId}` +"/student" + `/${studentId}`)
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