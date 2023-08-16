import React,{ useEffect, useState } from 'react'
import instance from '../services/instance';
import { Link, useParams,useNavigate } from 'react-router-dom';
import { Table } from 'react-bootstrap';

function BookHistory() {
    const params=useParams()
    const[specialist,setSpecialist]=useState([]);
    const[time,setTime]=useState([]);
    const[date,setDate]=useState([]);
    const navigate=useNavigate();

    useEffect(()=>{
        bookHistory()
    },[]);

    const bookHistory = async() =>{
        try{
            const response = await instance.protectedInstance.get(`/patient/patientDetails/${params.id}`);
            console.log(response.data.patient.time)
            setSpecialist(response.data.patient.specialist) 
            setDate(response.data.patient.date) 
            setTime(response.data.patient.time) 
            console.log("Patients fetched successfully")
        }
        catch(error)
        {
            console.log("Error in fetching patients ", error)
        }
    }

    
  return (
    <>
      <section className="h-100" style={{background:"#dbe0e3"}}>
        <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col">
        <div className="card card-registration my-4">
        <div className="row g-0"></div>
        <div className="card-body p-md-5 text-black">
        <h3 className="mb-1 text-uppercase" style={{color:"#301091",'fontWeight':'bolder','textAlign':'center'}}>Appointment History</h3>
    </div>
    <div className='row'>

    <div className='col-3'>
        <Table striped >
                <thead align='middle'>
                  <tr >
                    <th>#</th>
                  </tr>
                </thead> 
                <tbody>                   
                    {specialist.map((s,i)=>{
                        return(
                            <tr align='middle'>
                                <td key={i}>{i+1}</td>                         
                            </tr>
                        )
                    })}
                </tbody>
         </Table>
        </div>

        <div className='col-3'>
        <Table striped >
                <thead align='middle'>
                  <tr >
                    <th >Specialist</th>
                  </tr>
                </thead> 
                <tbody>                 
                    {specialist.map((s,i)=>{
                        return(
                            <tr align='middle'>                      
                                <td key={s.id}>{s}</td>
                            </tr>
                        )
                    })}
                </tbody>
         </Table>
        </div>

        <div className='col-3'>
        <Table striped >
                <thead align='middle'>
                  <tr >                
                    <th >Appointment Date</th>
                  </tr>
                </thead> 
                <tbody>                   
                    {date.map((s,i)=>{
                        return(
                            <tr align='middle'>                                                       
                                <td key={s.id}>{s}</td>
                            </tr>
                        )
                    })}
                </tbody>
         </Table>
        </div>

        <div className='col-3'>
        <Table striped >
                <thead align='middle'>
                  <tr >                
                    <th > Appointment Time</th>
                  </tr>
                </thead> 
                <tbody>                   
                    {time.map((s,i)=>{
                        return(
                            <tr align='middle'>                                                       
                                <td key={s.id}>{s}</td>
                            </tr>
                        )
                    })}
                </tbody>
         </Table>
        </div>

    </div>
    
        <button  type="button" className="btn btn-danger btn-lg" style={{fontWeight:'bolder', 'textAlign':'center'}}
            onClick={()=>{
            navigate(`/patientDashboard/${params.id}`)}}>
            Close</button>
    </div>
    </div>
    </div>  
    </div>
    </section>
</>
  )
}

export default BookHistory