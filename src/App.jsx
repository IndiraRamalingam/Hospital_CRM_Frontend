import React from 'react'
import '../src/app.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home'
import AboutUs from './components/Pages/AboutUs'
import Contact from './components/Pages/Contact'
import NavBar from './components/Pages/NavBar'
import Footer from './components/Pages/Footer'
import Charts from './components/Pages/Charts';
import AdminSiginIn from './components/SignIn/AdminSiginIn'
import DoctorSignIn from './components/SignIn/DoctorSignIn'
import PatientSignIn from './components/SignIn/PatientSignIn'
import CreatePatient from './components/Patient/CreatePatient'
import EditPatient from './components/Patient/EditPatient'
import ViewPatient from './components/Patient/viewPatient'
import ViewAllPatients from './components/Admin/ViewAllPatients'
import DoctorDashboard from './components/Doctor/DoctorDashboard'
import CreateDoctor from './components/Doctor/CreateDoctor'
import EditDoctor from './components/Doctor/EditDoctor'
import ViewDoctor from './components/Doctor/ViewDoctor'
import AdminDashboard from './components/Admin/AdminDashboard'
import EditPatientByAdmin from './components/Admin/EditPatientByAdmin'
import ViewContacts from './components/Admin/ViewContacts'
import CreatePatientByAdmin from './components/Admin/CreatePatientByAdmin'


function App() {
  return (
    <div id="page-container">
   <div id="content-wrap">
      <NavBar/>
          
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<Home />} />
          <Route path='/aboutUs' element={<AboutUs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/viewContact' element={<ViewContacts/>}/>
          <Route path='/charts' element={<Charts />}/>
          <Route path='/adminsignin' element={<AdminSiginIn />} />
          <Route path='/doctorsignin' element={<DoctorSignIn />} />
          <Route path='/patientsignin' element={<PatientSignIn />} />
          <Route path='/createPatient' element={<CreatePatient/>} />
          <Route path='/editPatient/:id' element={<EditPatient />} />
          <Route path='/viewPatient/:id' element={<ViewPatient />} />
          <Route path='/viewAllPatients' element={<ViewAllPatients />} />
          <Route path='/doctorDashboard' element={<DoctorDashboard />} />
          <Route path='/createDoctor'element={<CreateDoctor/>}/>
          <Route path='/editDoctor/:id' element={<EditDoctor/>}/>
          <Route path='/viewDoctor' element={<ViewDoctor/>}/>
          <Route path='/adminDashboard' element={<AdminDashboard />} />
          <Route path='/createPatientByAdmin' element={<CreatePatientByAdmin />}/>
          <Route path='editPatientByAdmin/:id' element={<EditPatientByAdmin/>}/>
          
        </Routes>
      </BrowserRouter>
      </div>
      <Footer/>
    </div>
  )
}

export default App