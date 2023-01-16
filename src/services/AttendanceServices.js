import axios from 'axios';
import * as apiroutes from '../apiroutes'

class AttendanceServices  {
    
    markAttendance = async (data) => {
        let a = new Promise((resolve, reject)=>{
            // console.log('test')
            axios
                .post(apiroutes.MARK_ATTENDANCE, data)
                .then((res)=> {
                    return resolve(res)
                })
                .catch((err)=>{
                    return resolve(err.response)
                })
        })
        return await a
    }

    showAttendance = async (class_ID,date) => {
        let a = new Promise((resolve, reject)=>{
            // console.log('test')
            axios
                .get(apiroutes.SHOW_ATTENDANCE+ `/${class_ID}`+ `/${date}`)
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

export default new AttendanceServices();