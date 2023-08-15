import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
  
<div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="../src/assets/Home.jpg" height="400" alt="First slide"/>
    </div>   
  </div>
</div>

<section id="content-wrap-home">
  
<div className="exp-block">
		<div className="container">
      <br/>
			<div className="title line text-center">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>
      <br/>

							<div className="row">
							<div className="col-4">
							<a href="Patient Login" className="panel text-center" >
								<figure className="d-flex justify-center" ><img src="../src/assets/PatientsIcon.png" alt="Patient Login" /></figure>
								
                <Link to='/patientsignin'><h5>Patient Login</h5></Link>
							</a>
						</div>
				      <div className="col-4">
							<a href="Doctor Login" className="panel text-center">
              <figure className="d-flex justify-center" ><img src="../src/assets/DoctorIcon.png" alt="Doctor Login"  /></figure>
                <Link to='/doctorsignin'><h5>Doctor Login</h5></Link>
							</a>
						</div>
				      <div className="col-4">
							<a href="Admin Login" className="panel text-center" >
              <figure className="d-flex justify-center" ><img src="../src/assets/AdminIcon.png" alt="Admin Login"  /></figure>								
                <Link to='/adminsignin'><h5>Admin Login</h5></Link>
							</a>
						</div>
				</div>
      <br/><br/>

        <div className="title line text-center">
          <h1>Sample Credentials</h1>
          <br/>
          <div className='row'>
            <div className='col-4'>
              <h4>Patient Credentials</h4>
              <h6><b>Email:</b> patient@gmail.com</h6>
              <h6><b>Password:</b> 123</h6>
            </div>
            <div className='col-4'>
              <h4>Doctor Credentials</h4>
              <h6><b>Email:</b> doctor@gmail.com</h6>
              <h6><b>Password:</b> 123</h6>
            </div>
            <div className='col-4'>
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