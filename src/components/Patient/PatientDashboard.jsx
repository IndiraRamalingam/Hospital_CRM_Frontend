import React from 'react'
import { Link, useParams,useNavigate } from 'react-router-dom';

function PatientDashboard() {
    const params=useParams();
    const navigate=useNavigate();
  return (
    <>
     <section id="content-wrap-home"> 
        <div className="exp-block">
          <div className="container">
            <br/>
            <br/>
                <div className="row">
                <div className="col-4 panel text-center">  
                <figure className="d-flex justify-center" ><img src="../src/assets/ViewReport.png" alt="View Report" /></figure>                  
                  <button type="button" class="btn btn-outline-info" 
                  onClick={()=>{
                    navigate(`/viewPatient/${params.id}`)
                  }}
                  >View Details</button>
                </div>

                <div className="col-4 panel text-center">
                <figure className="d-flex justify-center" ><img src="../src/assets/BookAppointment.jpg" alt="Book Appointment"  /></figure>
                <button type="button" className="btn btn-outline-info" 
                  onClick={()=>{
                    navigate(`/bookappointment/${params.id}`)
                  }}
                  >Book Appointment</button>
                </div>

                <div className="col-4 panel text-center">                            
                <figure className="d-flex justify-center" ><img src="../src/assets/BookHistory.jpg" alt="Admin Login" height={275}  /></figure>								
                <button type="button" className="btn btn-outline-info" 
                  onClick={()=>{
                    navigate(`/bookHistory/${params.id}`)
                  }}
                  >Book History</button>
                 </div>

                  </div>
        <br/><br/>

          </div>
      </div>
  
  </section>
  
    </>
  )
}

export default PatientDashboard