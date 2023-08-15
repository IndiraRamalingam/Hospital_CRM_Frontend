import React,{ useEffect, useState } from 'react'
import instance from '../services/instance';
import { Link, useParams,useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';


function createPatient() {

  const navigate=useNavigate();
  const[name,setName]=useState('');
  const[age,setAge]=useState('');
  const[gender,setGender]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[confirmpassword,setConfirmpassword]=useState('');
  const[address,setAddress]=useState('');
  const[phone,setPhone]=useState('');
  const[msg,setMsg]=useState('');
  const[msgg,setMsgg]=useState('');
  const[infor,setInfor]=useState('');


  const handleCreate =(event) =>
  {
    event.preventDefault();
    if(password == confirmpassword)
    {
      createDoctor({name,password,gender,email,age,address,phone}) 
    }
    else{
      setMsgg("Password is not matching")
    }
    
  }

  const createDoctor = async(details)=>{
    try{
      const response = await instance.authInstance.post('/patient/signup',details);
      console.log('Created successful!');
      setMsg('Your Registration has been done successfully!!  ')
      setMsgg(''), setName(''), setAge(''),setEmail(''),setAddress(''),setConfirmpassword(''),setPassword(''),setGender(''),setPhone('')
      setInfor(" Click here to LogIn")
    }
    catch(error)
    {
      console.log("Error in creating patient "+error)
      setMsg('')
      setMsgg("Please fill all the fields to register");
    }

  }

  return (


// Patient Registration

    <>
      <section className="h-100" style={{background:"#dbe0e3"}}>
        <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col">
        <div className="card card-registration my-4">
        <div className="row g-0">
        <div className="col-xl-6 d-none d-xl-block">
          <img src="../src/assets/patientRegister.webp"
            alt="Sample photo" className="img-fluid"
            style={{'borderTopLeftRadius': ".25rem", 'borderBottomLeftRadius': '.25rem','height':'750px'}}/>
        </div>
        <div className="col-xl-6">
        <Form onSubmit={handleCreate}>
          <div className="card-body p-md-5 text-black">
            <h3 className="mb-5 text-uppercase" style={{color:"#301091",'fontWeight':'bolder','textAlign':'center'}}>Register as Patient</h3>
              
            <div className="form-outline mb-4">
              <input type="text" className="form-control form-control-lg" 
              value={name}
              placeholder='Patient Name'
              onChange={(event) => setName(event.target.value)}
              />
            </div>

            <div className="form-outline mb-4">
              <input type="text" className="form-control form-control-lg" 
              placeholder='Age'
              value={age}
              onChange={(event) => setAge(event.target.value) }/>
            </div>

            <div className="form-outline mb-4">
              <input type="email" className="form-control form-control-lg" 
              placeholder="Email ID"
              value={email}
              onChange={(event) => setEmail(event.target.value) }/>
            </div>

            <div className="row">
              <div className="col-md-5 mb-4">
                <div className="form-outline">
                  <input type="text" className="form-control form-control-lg" 
                  placeholder='Password'
                  value={password}
                  onChange={(event) => setPassword(event.target.value) }/>
                </div>
              </div>
              <div className="col-md-7 mb-4">
                <div className="form-outline">
                  <input type="text" className="form-control form-control-lg" 
                  placeholder='Confirm Password'
                  value={confirmpassword}
                  onChange={(event) => setConfirmpassword(event.target.value) }/>
                </div>
              </div>
            </div>

            <div className="form-outline mb-4">
              <input type="text" className="form-control form-control-lg" 
              placeholder='Address'
              value={address}
              onChange={(event) => setAddress(event.target.value) }/>
            </div>

            <div className="form-outline mb-4">
              <input type="text" className="form-control form-control-lg" 
              placeholder='Contact Number'
              value={phone}
              onChange={(event) => setPhone(event.target.value) }/>
            </div>

            <div className="d-md-flex justify-content-start align-items-center mb-4 py-2" style={{color:"rgb(63 97 118)",'fontSize':'18px'}}>
              <h5 className="mb-0 me-4" >Gender: </h5>
              <br/>
              <div className="form-check form-check-inline mb-0 me-4">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                  value="Female" onChange={e=>setGender(e.target.value)} />
                <label className="form-check-label" htmlFor="femaleGender">Female</label>
              </div>
              <div className="form-check form-check-inline mb-0 me-4">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                  value="Male" onChange={e=>setGender(e.target.value)} />
                <label className="form-check-label" htmlFor="maleGender">Male</label>
              </div>
              <div className="form-check form-check-inline mb-0">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                  value="Other" onChange={e=>setGender(e.target.value)} />
                <label className="form-check-label" htmlFor="otherGender">Other</label>
              </div>
            </div>
            
            <div>
            <p style={{ color: "#2fe62f","fontSize":'20px' }}>{msg}  <Link to="/patientsignin">{infor}</Link></p>
            <p style={{ color: "red" }}>{msgg}</p>
            </div>

            <div className="d-flex justify-content-end pt-3">
              <button type="button" className="btn btn-light btn-lg"
              onClick={() => {
                navigate('/patientsignin')
                    console.log("Cancelled")
                }}>
              Cancel</button>
              <button type="Submit" className="btn btn-warning btn-lg ms-2">Submit form</button>
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