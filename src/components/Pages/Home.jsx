import React from 'react'
import { Link } from 'react-router-dom'
import home from "../../assets/HomeNew.avif"
import patient from "../../assets/PatientsIcon.png"
import doctor from "../../assets/DoctorIcon.png"
import admin from "../../assets/AdminIcon.png"

function Home() {
  return (
    <div>
  
<div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={home} height="400" alt="Hospital CRM"/>
    </div>   
  </div>
</div>

<section id="content-wrap-home" className='gradBG'>
  
<div className="exp-block">
		<div className="container">
      <br/>
			<div className="title line text-center">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
			</div>
      <br/>

							<div className="row">
							<div className="col-sm-4 mb-4">
							<div className="panel text-center" >
								<figure className="d-flex justify-center" ><img src={patient} alt="Patient Login" /></figure>								
                <Link to='/patientsignin'><h5>Patient Login</h5></Link>
							</div>
						</div>
				      <div className="col-sm-4 mb-4">
							<div className="panel text-center" >
              <figure className="d-flex justify-center" ><img src={doctor} alt="Doctor Login"  /></figure>
                <Link to='/doctorsignin'><h5>Doctor Login</h5></Link>
							</div>
						</div>
				      <div className="col-sm-4 mb-4">
							<div className="panel text-center" >
              <figure className="d-flex justify-center" ><img src={admin} alt="Admin Login"  /></figure>								
                <Link to='/adminsignin'><h5>Admin Login</h5></Link>
							</div>
						</div>
				</div>
      <br/><br/>

        <div className="title line text-center textWhite">
          <h1>Sample Credentials</h1>
          <br/>
          <div className='row'>
            <div className='col-sm-4 mb-4 '>
              <h4>Patient Credentials</h4>
              <h6><b>Email:</b> patient@gmail.com</h6>
              <h6><b>Password:</b> 123</h6>
            </div>
            <div className='col-sm-4 mb-4'>
              <h4>Doctor Credentials</h4>
              <h6><b>Email:</b> doctor@gmail.com</h6>
              <h6><b>Password:</b> 123</h6>
            </div>
            <div className='col-sm-4 mb-4'>
              <h4>Admin Credentials</h4>
              <h6><b>Email:</b> admin@gmail.com</h6>
              <h6><b>Password:</b> 123</h6>
            </div>
            
          </div>
				
			</div>
      <br/><br/>
		</div>
	</div>

</section>


    </div>
  )
}

export default Home