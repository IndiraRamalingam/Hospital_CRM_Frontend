import React,{ useEffect, useState } from 'react'
import instance from '../services/instance';
import { Link, useParams,useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SideBar from '../Pages/SideBar'

function EditPatientByAdmin() {

    const params=useParams();
    console.log(params)
    const navigate=useNavigate();
    const[name,setName]=useState('');
    const[age,setAge]=useState('');
    const[email,setEmail]=useState('');
    const[address,setAddress]=useState('');
    const[phone,setPhone]=useState('');
    const[gender,setGender]=useState('')
    const[msg,setMsg]=useState('');
    const[msgg,setMsgg]=useState('');
    const[infor,setInfor]=useState('');
  
   useEffect(() => {
    getPatientDetails(params)
    }, []);
  
    const getPatientDetails = async(params) =>{
      try{
          const response = await instance.protectedInstance.get(`/admin/patientsById/${params.id}`);

          const res=response.data;
          setName(res.patient.name)
          setAge(res.patient.age)
          setEmail(res.patient.email)
          setAddress(res.patient.address)
          setPhone(res.patient.phone)
          setGender(res.patient.gender)
          }
          catch(error)
          {
              console.log("Error in fetching patient details ", error)
          }
      }
    const handleUpdate =(event) =>
    {
      event.preventDefault();
      if((name!=''&&gender!=''&&email!=''&&age!=''&&address!=''&&phone!=''))
      {
        editPatient({name,gender,age,address,email,phone}) 
      }
      else{
        setMsgg("Please fill all the details")
      }      
    }
  
    const editPatient = async(details)=>{
      try{
        const response = await instance.protectedInstance.put(`/admin/editPatient/${params.id}`,details);
        if (response.status === 200) {
          setMsgg('')
          alert('Data has been updated successfully')
          navigate('/viewAllPatients')
        }
      }
      catch(error)
      {
        console.log("Error in updating"+error)
      }
    }

  return (
    <>
    <div id="page-top">
        <div id="wrapper">
        <SideBar/>
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">    
                <section className="h-100 gradBG" >
                <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col">
                <div className="card card-registration my-4">
                <div className="row g-0">
                <div className="col-xl-12">
                <Form onSubmit={handleUpdate}>
                  <div className="card-body p-md-5 text-black">
                    <h3 className="mb-5 text-uppercase" style={{color:"#301091",'fontWeight':'bolder','textAlign':'center'}}>Edit Patient Details</h3>
                      
                    <div className="form-outline mb-4">
                      <div className='row'>
                        <div className='col-sm-3 fs-4 fw-bold labelnew'>
                        Patient Name
                        </div>
                        <div className='col-sm-9'>
                        <input type="text" className="form-control form-control-lg" 
                          value={name}
                          placeholder='Patient Name'
                          onChange={(event) => setName(event.target.value)}
                          />
                        </div>
                      </div>              
                    </div>

                    <div className="form-outline mb-4">
                    <div className='row'>
                      <div className='col-sm-3 fs-4 fw-bold labelnew'>
                      Age
                      </div>
                      <div className='col-sm-9'>
                      <input type="text" className="form-control form-control-lg" 
                      placeholder='Age'
                      value={age}
                      onChange={(event) => setAge(event.target.value) }/>
                      </div>
                    </div>
                    </div>

                    <div className="form-outline mb-4">              
                    <div className='row'>
                      <div className='col-sm-3 fs-4 fw-bold labelnew'>
                        Email ID
                      </div>
                      <div className='col-sm-9'>
                        <input type="email" className="form-control form-control-lg" 
                        placeholder="Email ID"
                        value={email}
                        onChange={(event) => setEmail(event.target.value) }/>
                      </div>
                    </div>
                   </div>

                    <div className="form-outline mb-4">
                    <div className='row'>
                      <div className='col-sm-3 fs-4 fw-bold labelnew'>
                      Address
                      </div>
                      <div className='col-sm-9'>
                        <input type="text" className="form-control form-control-lg" 
                        placeholder='Address'
                        value={address}
                        onChange={(event) => setAddress(event.target.value) }/>
                      </div>
                    </div>
                    </div>

                    <div className="form-outline mb-4">
                    <div className='row'>
                      <div className='col-sm-3 fs-4 fw-bold labelnew'>
                        Contact
                      </div>
                      <div className='col-sm-9'>
                        <input type="text" className="form-control form-control-lg" 
                        placeholder='Contact Number'
                        value={phone}
                        onChange={(event) => setPhone(event.target.value) }/>
                      </div>
                    </div>
                    </div>
                    
                    <div>
                    <p style={{ color: "#2fe62f","fontSize":'20px' }}>{msg}  <Link to="/viewAllPatients">{infor}</Link></p>
                    <p style={{ color: "red" }}>{msgg}</p>
                    </div>

                    <div className="d-flex justify-content-end pt-3">
                      <button type="button" className="btn btn-light btn-lg"
                      onClick={() => {
                        navigate('/viewAllPatients')
                        }}>
                      Cancel</button>
                      <button type="Submit" className="btn btn-warning btn-lg ms-2">Update</button>
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

            </div>
            <a className="backtotop" href="#page-top">
              <i className="fas fa-angle-up"></i>
            </a>        
          </div>
        </div>
      </div>
    </>
  )
}

export default EditPatientByAdmin