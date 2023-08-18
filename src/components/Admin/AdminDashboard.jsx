import React from 'react'
import SideBar from '../Pages/SideBar'
import { Link, useParams,useNavigate } from 'react-router-dom';
import doctor from "../../assets/AdminDoctor.png"
import patient from "../../assets/AdminPatient.png"
import queries from "../../assets/AdminQueries.png"

function AdminDashboard() {
  const params=useParams();
  const navigate=useNavigate();

  return (
  <>
   <div id="page-top">
        <div id="wrapper">
        <SideBar/>
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <section className="h-100 gradBG"> 
              {/* Logout Button */}
              <div className=" d-flex justify-content-end align-items-center ">
                  <button className="btn btn-danger mt-4 mr-5 "  onClick={()=>
                    {
                      localStorage.clear();
                      window.location.href = '/';
                    }}>LogOut</button>
                  </div>
                  <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col">
                    <div className="card card-registration my-4">
                    <div className="row g-0">
                    <div className="col-xl-12">
                    <div className="card-body p-md-5 text-black">
                    <h2 className="mb-5 text-uppercase" style={{color:"#301091",'fontWeight':'bolder','textAlign':'center'}}>Admin Dashboard</h2>
                      <div className="row">
                      <div className="col-sm-4 panel text-center mb-4">  
                      <figure className="d-flex justify-center" ><img src={doctor} alt="View Doctors" /></figure>                  
                        <button type="button" className="btn btn-outline-info" 
                        onClick={()=>{
                          navigate('/viewDoctor')
                        }}
                        >View Doctors</button>
                      </div>

                      <div className="col-sm-4 panel text-center mb-4">
                      <figure className="d-flex justify-center" ><img src={patient} alt="View Patients"  /></figure>
                      <button type="button" className="btn btn-outline-info" 
                        onClick={()=>{
                          navigate('/viewAllPatients')
                        }}
                        >View Patients</button>
                      </div>

                      <div className="col-sm-4 panel text-center mb-4">                            
                      <figure className="d-flex justify-center" ><img src={queries} alt="View Queries"   /></figure>								
                      <button type="button" className="btn btn-outline-info" 
                        onClick={()=>{
                          navigate('/viewContact')
                        }}
                        >View Queries</button>
                      </div>
                    </div>
                  
                </div>
              </div>
            </div>
        </div>
        </div>
        </div>
        </div>
        </section>
      </div>
      </div>
      </div>
      </div>
          </>
        )
      }

export default AdminDashboard