import React,{ useEffect, useState } from 'react'
import instance from '../services/instance';
import { Link, useParams,useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import patient from "../../assets/patientRegister.webp"

function createPatient() {

  const navigate=useNavigate();
  const params=useParams();
  const[values,setValues]=useState([])
  const[specialist,setSpecialist]=useState('')
  const[doctorname,setDoctorname]=useState('')
  const[time,setTime]=useState('')
  const[date,setDate]=useState('')
  const[msg,setMsg]=useState('');
  const[msgg,setMsgg]=useState('');
  const[use,setUse]=useState('')

  useEffect(()=>{
    getDoctorDetails();
  },[]);

  console.log("VALUES   "+values)
  const getDoctorDetails = async() =>{
    try{
        const response = await instance.protectedInstance.get('/admin/getAllDoctorName');
        setValues(response.data.alldoctors)
        }
        catch(error)
      {
            console.log("Error in fetching doctor details ", error)
      }
      }

  const handleCreate =(event) =>
  {
    event.preventDefault();
     const val=use.replace('Dr. ','');
    const doctorname=val.slice('-',val.search(' -'))
    if(doctorname !='' && date!='' && time!='')
    {    
      setMsgg('')
      bookAppointment({doctorname,date,time}) 
    } 
    else{
      setMsgg("Please fill all the fields to book appointment first");
    }
  
  }

  const bookAppointment = async(details)=>{
    try{
      const response = await instance.protectedInstance.put(`/patient/book_appointment/${params.id}`,details);
      setMsg('Your Appointment has been created successfully!!  ')
      setMsgg('')
      alert('Your appointment has been created')
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
        <div className="col-xl-6 d-xl-block">
          <img src={patient}
            alt="Sample photo" className="img-fluid"
            style={{'borderTopLeftRadius': ".25rem", 'borderBottomLeftRadius': '.25rem','height':'500px'}}/>
        </div>
        <div className="col-xl-6">
        <Form onSubmit={handleCreate}>
          <div className="card-body p-md-5 text-black">
            <h3 className="mb-5 text-uppercase" style={{color:"#301091",'fontWeight':'bolder','textAlign':'center'}}>Book Appointment</h3>
              
            <div className="row">
                  <select className="form-select form-select-lg mb-3" onChange={(e)=>setUse(e.target.value)}>
                    
                      <option selected >--Select Doctor--</option>
                        {
                        values.map((opts,i)=>                     
                        <option key={i} >Dr. {opts.name} - {opts.specialist}</option>
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