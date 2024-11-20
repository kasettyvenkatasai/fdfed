import './App.css';
import Vernav from './superadmin/Vernav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './superadmin/Dashboard';
import Colleges from './superadmin/Colleges';
import Admins from './superadmin/Admins';
import Vernavstud from './student/Vernavstud';
import Home from './student/Home';
import StudAppoint from './student/appointment';
import StudBook from './student/bookings';
import StudSch from './student/schedule';
import Set from './student/setting';
import Docvernav from './doctor/docvernav';
import Dochome from './doctor/dochome';
import Docbooking from './doctor/docbooking';
import Docschedule from './doctor/docschedule';
import Docpatients from './doctor/docpatients';
import Docsetting from './doctor/docsetting';
import Aboutus from './aboutus';
import Login from './forms/dslogin';
import Index1 from './Index1';
import A from './A';
import Suserlg from './forms/suserlogin';
import Vernavadmin from './admin/Vernavadmin';
import Homeadmin from './admin/Homeadmin';
import Patientsadmin from './admin/Patientsadmins';
import Reports from './admin/Reportsadmin';
import Docforget from './forms/doctorforget';
import Doctorsadmin from './admin/Doctorsadmin';
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/' element={<div><Index1></Index1></div>}></Route>
          <Route path="/superadmin" element={<div><Vernav/><Dashboard/></div>}/>    
          <Route path="/superadmincolleges" element={<div style={{marginTop:'-25px'}}><Vernav/><Colleges></Colleges></div>} /> 
          <Route path="/superadmin_admins" element={<><Vernav /><Admins/></>} /> 
          <Route path="/studenthome" element={<><Vernavstud /><Home></Home></>} /> 
          <Route path="/studentappointment" element={<><Vernavstud /><StudAppoint></StudAppoint></>} /> 
          <Route path="/studentbooking" element={<><Vernavstud style={{marginTop:'-25px'}} /><StudBook></StudBook></>} /> 
          <Route path="/studentschedule" element={<><Vernavstud  /><StudSch></StudSch></>} /> 
          <Route path="/studentsetting" element={<><Vernavstud  /><Set></Set></>} /> 
          <Route path="/doctorhome" element={<><Docvernav></Docvernav><Dochome></Dochome></>} /> 
          <Route path="/doctorbooking" element={<><Docvernav></Docvernav><Docbooking></Docbooking></>} /> 
          <Route path="/doctorschedule" element={<><Docvernav></Docvernav><Docschedule></Docschedule></>} /> 
          <Route path="/doctorpatients" element={<><Docvernav></Docvernav><Docpatients></Docpatients></>} /> 
          <Route path="/doctorsetting" element={<><Docvernav></Docvernav><Docsetting></Docsetting></>} /> 
          <Route path='/aboutus' element={<Aboutus></Aboutus>}></Route>
          <Route path='/a' element={<A/>}></Route>
          <Route path='/suserlogin' element={<Suserlg/>}></Route>
          <Route path='/dslogin' element={<Login/>}></Route>
          <Route path='/admin' element={<><Vernavadmin></Vernavadmin><Homeadmin></Homeadmin></>}></Route>
          <Route path='/adminpatients' element={<><Vernavadmin></Vernavadmin><Patientsadmin></Patientsadmin></>}></Route>
          <Route path='/admindoctors' element={<><Vernavadmin></Vernavadmin><Doctorsadmin></Doctorsadmin></>}></Route>
          <Route path='/adminreports' element={<><Vernavadmin></Vernavadmin><Reports></Reports></>}></Route>
          <Route path='/forgetpassword' element={<Docforget/>}></Route>

        </Routes>
      </Router>
       
    </div>
  );
}

export default App;
