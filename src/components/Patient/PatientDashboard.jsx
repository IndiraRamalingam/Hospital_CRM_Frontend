import React from 'react'
import { Link, useParams,useNavigate } from 'react-router-dom';
import view from "../../assets/ViewReport.png"
import appointment from "../../assets/BookAppointment.png"
import history from "../../assets/BookHistory.png"

function PatientDashboard() {
    const params=useParams();
    const navigate=useNavigate();
  return (
    <>
     <section className="h-100" style={{background:"#dbe0e3"}}> 
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col">
        <div className="card card-registration my-4">
        <div className="row g-0">
        <div className="col-xl-12">
            <div className="card-body p-md-5 text-black">
            <h3 className="mb-5 text-uppercase" style={{color:"#301091",'fontWeight':'bolder','textAlign':'center'}}>Patient Dashboard</h3>
            
                <div className="row">
                <div className="col-4 panel text-center">  
                <figure className="d-flex justify-center" ><img src={view} alt="View Report" /></figure>                  
                  <button type="button" class="btn btn-outline-info" 
                  onClick={()=>{
                    navigate(`/viewPatient/${params.id}`)
                  }}
                  >View Details</button>
                </div>

                <div className="col-4 panel text-center">
                <figure className="d-flex justify-center" ><img src={appointment} alt="Book Appointment"  /></figure>
                <button type="button" className="btn btn-outline-info" 
                  onClick={()=>{
                    navigate(`/bookappointment/${params.id}`)
                  }}
                  >Book Appointment</button>
                </div>

                <div className="col-4 panel text-center">                            
                <figure className="d-flex justify-center" ><img src={history} alt="Admin Login"   /></figure>								
                <button type="button" className="btn btn-outline-info" 
                  onClick={()=>{
                    navigate(`/bookHistory/${params.id}`)
                  }}
                  >Book History</button>
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
  
    </>
  )
}

export default PatientDashboard