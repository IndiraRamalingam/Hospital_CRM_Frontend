import React,{ useEffect, useState } from 'react'
import instance from '../services/instance';
import { Link, useParams,useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SideBar from '../Pages/SideBar';
import doctor from "../../assets/DoctorRegister.jpg"

function CreateDoctor() {

  const navigate=useNavigate();
  const[name,setName]=useState('');
  const[password,setPassword]=useState('');
  const[confirmpassword,setConfirmpassword]=useState('');
  const[email,setEmail]=useState('');
  const[specialist,setSpecialist]=useState('');
  const[fee,setFee]=useState('');
  const[msg,setMsg]=useState('');
  const[msgg,setMsgg]=useState('');
  const[infor,setInfor]=useState('');
  
  
    const handleCreate =(event) =>
    {
      event.preventDefault();
      if(password == confirmpassword)
      {
        if(name!=''&&password!=''&&email!=''&&specialist!=''&&fee!='')
        {
          createDoctor({name,password,email,specialist,fee}) 
        }else{
          setMsgg('Please fill all the fields')
        }
        
      }
      else{
        setMsgg("Password is not matching")
      }
      
    }
  
    const createDoctor = async(details)=>{
      try{
        const response = await instance.protectedInstance.post('/admin/addDoctor',details);
        console.log('Created successful!');
        setMsg('New Doctor Added Succesfully')
        setMsgg(''),setName(''),setPassword(''),setConfirmpassword(''),setSpecialist('--Specialist In--'),setFee(''),setEmail('')
        setInfor("Back to Dashboard")
      }
      catch(error)
      {
        console.log("Error in creating doctor "+error)
        setMsgg("Please fill all the fields to add new doctor");
      }
  
    }

  return (
    <div id="page-top">
        <div id="wrapper">
        <SideBar/>
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">

            <section className="h-100" style={{background:"#dbe0e3"}}>
        <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col">
        <div className="card card-registration my-4">
        <div className="row g-0">
        <div className="col-xl-6 d-none d-xl-block">
          <img src={doctor}
            alt="Sample photo" className="img-fluid"
            style={{'borderTopLeftRadius': ".25rem", 'borderBottomLeftRadius': '.25rem','height':'610px'}}/>
        </div>
        <div className="col-xl-6">
        <Form onSubmit={handleCreate}>
          <div className="card-body p-md-5 text-black">
            <h3 className="mb-5 text-uppercase" style={{color:"#301091",'fontWeight':'bolder','textAlign':'center'}}>Add New Doctor</h3>
              
            <div className="form-outline mb-4">
              <input type="text" className="form-control form-control-lg" 
              value={name}
              placeholder='Doctor Name'
              onChange={(event) => setName(event.target.value)}
              />
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
              {/* <input type="text" className="form-control form-control-lg" 
              placeholder='Specialist'
              value={specialist}
              onChange={(event) => setSpecialist(event.target.value) }/> */}
              <select className="form-select form-select-lg mb-3" onChange={(e) =>setSpecialist(e.target.value)}>
                    <option selected>--Specialist In--</option>
                      <option value="General Physician">General Physician</option>
                      <option value="Paediatrician">Paediatrician</option>
                      <option value="Gynecologist">Gynecologist</option>
                      <option value="Physiotherapist">Physiotherapist</option>
                      <option value="Diabetologist">Diabetologist</option>
                      <option value="Gastroenterologist">Gastroenterologist</option>
                    </select>
            </div>

            <div className="form-outline mb-4">
              <input type="text" className="form-control form-control-lg" 
              placeholder='Fee'
              value={fee}
              onChange={(event) => setFee(event.target.value) }/>
            </div>

         
            
            <div>
            <p style={{ color: "#2fe62f","fontSize":'20px' }}>{msg}  <Link to="/adminDashboard">{infor}</Link></p>
            <p style={{ color: "red" }}>{msgg}</p>
            </div>

            <div className="d-flex justify-content-end pt-3">
              <button type="button" className="btn btn-light btn-lg"
              onClick={() => {
                navigate('/adminDashboard')
                    console.log("Cancelled")
                }}>
              Cancel</button>
              <button type="Submit" className="btn btn-primary btn-lg ms-2">Add Doctor</button>
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
  )
}

export default CreateDoctor