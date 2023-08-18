import React,{ useEffect, useState } from 'react'
import instance from '../services/instance';
import { Link, useParams,useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import SideBar from '../Pages/SideBar';

function EditDoctor() {

  const params=useParams();
  console.log(params)
  const navigate=useNavigate();
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[specialist,setSpecialist]=useState('');
  const[fee,setFee]=useState('');
  const[msgg,setMsgg]=useState('');

  useEffect(() => {
    getDoctorDetails(params)
    console.log(params.id)
    }, []);

    const getDoctorDetails = async(params) =>{
      try{
          const response = await instance.protectedInstance.get(`/admin/doctors/${params.id}`);
          console.log(response)
          const res=response.data;
          setName(res.doctor.name)
          setEmail(res.doctor.email)
          setSpecialist(res.doctor.specialist)
          setFee(res.doctor.fee)
          console.log("Doctor details fetched successfully")
          }
          catch(error)
        {
              console.log("Error in fetching doctor details ", error)
          }
      }
    const handleUpdate =(event) =>
    {
      event.preventDefault();
      if(name!=''&&email!=''&&specialist!=''&&fee!='')
      {
        updateDoctor({name,email,specialist,fee})  
      }
      else{
        setMsgg("Please fill all the details")
      }
     
    }
  
    const updateDoctor = async(details)=>{
      try{
        const response = await instance.protectedInstance.put(`/admin/editDoctor/${params.id}`,details);
        console.log('update successful!');
        if (response.status === 200) {
          setMsgg('')
          alert('Data has been updated successfully')
          navigate('/viewDoctor')
         
        }
      }
      catch(error)
      {
        console.log("Error in updating "+error)
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
        {/* <div className="col-xl-6 d-none d-xl-block">
          <img src={patient}
            alt="Sample photo" className="img-fluid"
            style={{'borderTopLeftRadius': ".25rem", 'borderBottomLeftRadius': '.25rem','height':'750px'}}/>
        </div> */}
        <div className="col-xl-12">
        <Form onSubmit={handleUpdate}>
          <div className="card-body p-md-5 text-black">
            <h3 className="mb-5 text-uppercase" style={{color:"#301091",'fontWeight':'bolder','textAlign':'center'}}>Edit Doctor Details</h3>
              
            <div className="form-outline mb-4">
              <div className='row'>
                <div className='col-sm-3 fs-4 fw-bold labelnew'>
                Doctor Name
                </div>
                <div className='col-sm-9'>
                <input type="text" className="form-control form-control-lg" 
              value={name}
              placeholder='Doctor Name'
              onChange={(event) => setName(event.target.value)}
              />
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
              Specialist
              </div>
              <div className='col-sm-9'>
                {/* <input type="text" className="form-control form-control-lg" 
                placeholder='Specialist'
                value={specialist}
                onChange={(event) => setSpecialist(event.target.value) }/> */}
                <select className="form-select form-select-lg mb-3" onChange={(e) =>setSpecialist(e.target.value)}>
                    <option >{specialist}</option>
                      <option value="General Physician">General Physician</option>
                      <option value="Paediatrician">Paediatrician</option>
                      <option value="Gynecologist">Gynecologist</option>
                      <option value="Physiotherapist">Physiotherapist</option>
                      <option value="Diabetologist">Diabetologist</option>
                      <option value="Gastroenterologist">Gastroenterologist</option>
                    </select>
              </div>
            </div>

            </div>

            <div className="form-outline mb-4">
            <div className='row'>
              <div className='col-sm-3 fs-4 fw-bold labelnew'>
                Fee
              </div>
              <div className='col-sm-9'>
                <input type="number" className="form-control form-control-lg" 
                placeholder='Fee'
                value={fee}
                onChange={(event) => setFee(event.target.value) }/>
              </div>
            </div>
            </div>
            
            <div>
            <p style={{ color: "red" }}>{msgg}</p>
            </div>

            <div className="d-flex justify-content-end pt-3">
              <button type="button" className="btn btn-light btn-lg"
              onClick={() => {
                navigate('/viewDoctor')
                    console.log("Cancelled")
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

export default EditDoctor