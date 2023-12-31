import React, { useEffect, useState } from 'react'
import instance from '../services/instance';
import { Link, useParams,useNavigate } from 'react-router-dom';
import doctor from "../../assets/DoctorDashboard.webp"
function DoctorDashboard() {

    const params=useParams();
    const navigate=useNavigate();
    const[doctorname,setDoctorname]=useState('')

    useEffect(()=>{
        getDoctorName()
    },[]);

    const getDoctorName=async()=>{
        try{
            const response = await instance.protectedInstance.get('/doctor');
            const res=response.data.name;
            setDoctorname(res)
        }
        catch(error)
        {
            console.log('Error in getting doctor name ',error)
        }
        }
  return (
        <>
        <section className="h-100 gradBG"> 
        <div className=" d-flex justify-content-end align-items-center ">
          <button className="btn btn-danger mt-4 mr-5"  onClick={()=>
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
        
        <div className="col-xl-5 d-xl-block">
          <img src={doctor}
            alt="Sample photo" className="img-fluid"
            style={{'borderTopLeftRadius': ".25rem", 'borderBottomLeftRadius': '.25rem','height':'450px','width':'25rem'}}/>
        </div>

        <div className="col-xl-7">
            <div className="card-body p-md-5 text-black">
            <h3 className="mb-5 mt-5 text-uppercase" style={{color:"#301091",'fontWeight':'bolder','textAlign':'center'}}>Doctor Dashboard</h3>
            
            <div className="row">
                <div className="col-12 panel text-center">  
                    <h5 className="mb-5 text-uppercase" style={{color:"#5ae55a",'fontWeight':'600','textAlign':'center'}}>Welcome Dr. {doctorname}</h5>
                </div>
            </div>
                <div className="row">
                <div className="col-12 panel text-center">  
                  <button type="button" className=" mb-5 btn btn-outline-warning" 
                  onClick={()=>{
                    navigate(`/viewPatientList/${params.id}`)
                  }}
                  >Click to view Appointment List</button>
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

export default DoctorDashboard