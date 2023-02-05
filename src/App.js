import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store';


import Home from './views/Home';
import Navbar from './components/Navbar/Navbar'
import RegisterStudent from './views/Register/RegisterStudent'
import RegisterInstructor from './views/Register/RegisterInstructor'
import RegisterParent from './views/Register/RegisterParent'
import QRgenerator from './components/QR/QRgenerator'
import QRGenerator from './components/QRGenerator'
import QRscanner from './components/QR/QRscanner'
import Login from './views/Login/Login'
import Announcement from './views/Instructor/Announcement';
import Classes from './views/PublicPages/Classes';
import Notification from './views/Student/NotificationView';
import ClassDashboard from './views/Student/ClassDashboard/ClassDashboard';
import CreateClass from './views/Admin/CreateClass';
import MyClasses from './views/Instructor/MyClasses';
import GetAllInstructors from './views/Admin/GetAllInstructors';
import GetAllStudents from './views/Admin/GetAllStudents';
import GetAllParents from './views/Admin/GetAllParents';
import MyStudentClasses from './views/Parent/MyStudentClasses';
import { useEffect, useState } from 'react';
import LocalStorageServices from './services/LocalStorageServices';
import MarkAttendance from './views/Attendance/MarkAttendance';
import CheckAttendance from './views/Attendance/CheckAttendance';
import MyStudents from './views/Parent/MyStudents';
import StudentMonthlyPayment from './views/Parent/StudentMonthlyPayment';
import MyClassStudents from './views/Instructor/MyClassStudents';
import EarlyLeave from './views/StaffMember/EarlyLeave';
import UploadResult from './views/Instructor/UploadResult';
import ViewAllExams from './views/Instructor/ViewAllExams';
import StudentResults from './views/Parent/StudentResults';
import StudentMyClasses from './views/Student/ClassDashboard/StudentMyClasses';



function App() {
  const [loaded, setLoaded] = useState(false);
  let user = LocalStorageServices.getItem('user')
  useEffect(()=>{
    if (user != null){
      setLoaded(true)
    }else{
      setLoaded(false)
    }
  },[user])
  return (
    <div className="App">
      {/* <Provider store={store}> */}
        <BrowserRouter>
          {/* {token ? */}
            {loaded ? 
            <Navbar/>
            :
            null
            }
          {/* : null
          } */}
          <Routes>
          <Route path="*" element={<Navigate replace to="/" />} />
            <Route
              path='/'
              element={<Login/>}
            />

            <Route
              path='/register/student'
              element={<RegisterStudent/>}
            />
            <Route
              path='/register/instructor'
              element={<RegisterInstructor/>}
            />
            <Route
              path='/register/parent'
              element={<RegisterParent/>}
            />


            <Route
              path='/notification/view'
              element={<Notification/>}
            />
            <Route
              path='/student/dashboard'
              element={<StudentMyClasses/>}
            />
            <Route
              path='/class/dashboard/:id'
              element={<ClassDashboard/>}
            />
            <Route
              path='/classes'
              element={<Classes/>}
            />
            <Route
              path='/class/instructor/'
              element={<MyClasses/>}
            />
            <Route
              path='/class/students/:classID'
              element={<MyClassStudents/>}
            />
            <Route
              path='/class/create'
              element={<CreateClass/>}
            />


            
            
            
            <Route
              path='/instructor/all'
              element={<GetAllInstructors/>}
            />
            <Route
              path='/student/all'
              element={<GetAllStudents/>}
            />
            <Route
              path='/parent/all'
              element={<GetAllParents/>}
            />

            
            <Route
              path='/earlyleave'
              element={<EarlyLeave/>}
            />
            <Route
              path='/announcement/send'
              element={<Announcement/>}
            />
            <Route
              path='/qrgenerator'
              element={<QRgenerator/>}
            />
            <Route
              path='/qrscanner'
              element={<QRscanner/>}
            />
            <Route
              path='/1'
              element={<QRGenerator/>}
            />


            <Route
              path='/mark-attendance'
              element={<MarkAttendance/>}
            />
            <Route
              path='/check-attendance'
              element={<CheckAttendance/>}
            />

            <Route
              path='/release-result'
              element={<UploadResult/>}
            />
            <Route
              path='/viewAllExams'
              element={<ViewAllExams/>}
            />



            <Route
              path='/results/:class_ID/:ST_ID'
              element={<StudentResults/>}
            />
            <Route
              path='/MyStudents'
              element={<MyStudents/>}
            />
            <Route
              path='/parent/dashboard'
              element={<MyStudentClasses/>}
            />
            <Route
              path='/parent/classPayments/:classId'
              element={<StudentMonthlyPayment/>}
            />


          </Routes>
        </BrowserRouter>
      {/* </Provider> */}
    </div>
  );
}

export default App;
