import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home'
import AboutUs from './components/Pages/AboutUs'
import Contact from './components/Pages/Contact'
import NavBar from './components/Pages/NavBar'
import Footer from './components/Pages/Footer'
import '../src/app.css'
import AdminSiginIn from './components/SignIn/AdminSiginIn'
import DoctorSignIn from './components/SignIn/DoctorSignIn'
import PatientSignIn from './components/SignIn/PatientSignIn'
import CreatePatient from './components/Patient/CreatePatient'
import EditPatient from './components/Patient/EditPatient'
import DeletePatient from './components/Patient/DeletePatient'
import ViewPatient from './components/Patient/viewPatient'
import DoctorDashboard from './components/Doctor/DoctorDashboard'

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
          <Route path='/adminsignin' element={<AdminSiginIn />} />
          <Route path='/doctorsignin' element={<DoctorSignIn />} />
          <Route path='/patientsignin' element={<PatientSignIn />} />
          <Route path='/createPatient' element={<CreatePatient/>} />
          <Route path='/editPatient/:id' element={<EditPatient />} />
          <Route path='/deletePatient/:id' element={<DeletePatient />} />
          <Route path='/viewPatient/:id' element={<ViewPatient />} />
          <Route path='/doctorDashboard' element={<DoctorDashboard />} />
          
        </Routes>
      </BrowserRouter>
      </div>
      <Footer/>
    </div>
  )
}

export default App