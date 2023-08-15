import React,{ useEffect, useState } from 'react'
import instance from '../services/instance';
import { Link, useParams,useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function createPatient() {

  const navigate=useNavigate();
  const params=useParams();
  console.log(params)
  const[values,setValues]=useState([])
  const[specialist,setSpecialist]=useState()
  const[time,setTime]=useState('')
  const[date,setDate]=useState('')
  const[msg,setMsg]=useState('');
  const[msgg,setMsgg]=useState('');


  useEffect(()=>{
    getDoctorDetails();
  },[]);

  console.log("VALUES   "+values)
  const getDoctorDetails = async() =>{
    try{
        const response = await instance.protectedInstance.get('/admin/getAllDoctorName');
        console.log(response.data.alldoctors)
        setValues(response.data.alldoctors)
        console.log("Doctor details fetched successfully")
        }
        catch(error)
      {
            console.log("Error in fetching doctor details ", error)
    }
    }
   

  const handleCreate =(event) =>
  {
    event.preventDefault();
    bookAppointment({specialist,date,time}) 
  }

  const bookAppointment = async(details)=>{
    try{
        console.log(details)
      const response = await instance.protectedInstance.put(`/patient/book_appointment/${params.id}`,details);
      console.log('Created successful!');
      setMsg('Your Appointment has been created successfully!!  ')
      setMsgg('')
      navigate(`/patientDashboard/${params.id}`)
    }
    catch(error)
    {
      console.log("Error in creating doctor "+error)
      setMsg('')
      setMsgg("Please fill all the fields to book appointment");
    }

  }

  return (

    <>
      <section className="h-100" style={{background:"#dbe0e3"}}>
        <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col">
        <div className="card card-registration my-4">
        <div className="row g-0">
        <div className="col-xl-6 d-xl-block">
          <img src="../src/assets/patientRegister.webp"
            alt="Sample photo" className="img-fluid"
            style={{'borderTopLeftRadius': ".25rem", 'borderBottomLeftRadius': '.25rem','height':'500px'}}/>
        </div>
        <div className="col-xl-6">
        <Form onSubmit={handleCreate}>
          <div className="card-body p-md-5 text-black">
            <h3 className="mb-5 text-uppercase" style={{color:"#301091",'fontWeight':'bolder','textAlign':'center'}}>Book Appointment</h3>
              
            <div className="row">
                  <select className="form-select form-select-lg mb-3" onChange={(e)=>setSpecialist(e.target.value)}>
                    <option selected>Specialist</option>
                        {
                        values.map((opts,i)=>
                        <option key={i}>{opts.specialist}</option>
                        )
                        }
                    </select>
                    <div>  

                 <br/>

              <div class='row'>
                <input type='date' 
                className='form-control form-control-lg'
                onChange={(e) => setDate(e.target.value)}/>
              </div>
                <br/>
                  
                  <div className='row'>
                    <select className="form-select form-select-lg mb-3" onChange={(e) =>setTime(e.target.value)}>
                    <option selected>Appointment Time</option>
                      <option value="08.00 AM">08.00 AM</option>
                      <option value="10.00 AM">10.00 AM</option>
                      <option value="12.00 PM">12.00 PM</option>
                      <option value="04.00PM">04.00PM</option>
                      <option value="06.00PM">06.00PM</option>
                      <option value="08.00PM">08.00PM</option>
                    </select>
                    </div>        
            <p style={{ color: "#2fe62f","fontSize":'20px' }}>{msg}</p>
            <p style={{ color: "red" }}>{msgg}</p>
            </div>

            <div className="d-flex justify-content-end pt-3">
              <button type="button" className="btn btn-light btn-lg"
              onClick={() => {
                navigate(`/patientDashboard/${params.id}`)
                    console.log("Cancelled")
                }}>
              Cancel</button>
              <button type="Submit" className="btn btn-warning btn-lg ms-2">Book Appointment</button>
            </div>

          </div>
          </div>
          </Form>
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

export default createPatient