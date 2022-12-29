import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
import StudentDashboard from './views/Student/StudentDashboard';
import GetAllInstructors from './views/Admin/GetAllInstructors';
import GetAllStudents from './views/Admin/GetAllStudents';
import GetAllParents from './views/Admin/GetAllParents';
import StudentMyClasses from './views/Student/ClassDashboard/StudentMyClasses';



function App() {
  const token = localStorage.getItem('token')
  return (
    <div className="App">
      {/* <Provider store={store}> */}
        <BrowserRouter>
          {/* {token ? */}
            <Navbar/>
          {/* : null
          } */}
          <Routes>
            <Route
              path='/'
              element={<Login/>}
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
              path='/class/dashboard'
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
              path='/class/create'
              element={<CreateClass/>}
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
          </Routes>
        </BrowserRouter>
      {/* </Provider> */}
    </div>
  );
}

export default App;
