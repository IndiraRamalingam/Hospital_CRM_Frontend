import React,{ useEffect, useState } from 'react'
import instance from '../services/instance';
import { Link, useParams,useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
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
  
  
   useEffect(() => {
    getPatientDetails(params)
    console.log(params.id)
    }, []);
  
    const getPatientDetails = async(params) =>{
      try{
        console.log(`PPPARRA ${params.id}`)
          const response = await instance.protectedInstance.get(`/admin/patientsById/${params.id}`);
          console.log(response)
          const res=response.data;
          setName(res.patient.name)
          setAge(res.patient.age)
          setEmail(res.patient.email)
          setAddress(res.patient.address)
          setPhone(res.patient.phone)
  
          console.log("Patient details fetched successfully")
          }
          catch(error)
          {
              console.log("Error in fetching patient details ", error)
          }
      }
      const formStyles = {
        background: "whitesmoke",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37)",
        width: "45rem",
        padding: "2rem",
        borderRadius: "1rem",
        margin: "0rem 1.5rem",
      };
  
    const handleUpdate =(event) =>
    {
      event.preventDefault();
      prescribePatient({name,age,address,email,phone})  
    }
  
    const prescribePatient = async(details)=>{
      try{
        const response = await instance.protectedInstance.put(`/admin/editPatient/${params.id}`,details);
        console.log('update successful!');
        if (response.status === 200) {
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
         
            <div className="mx-auto col-10 col-md-8 col-lg-4 mt-4" style={formStyles}>
            <Form onSubmit={handleUpdate}>
            <div>
                <h4 style={{ textAlign: "center" }}>Update Details Below</h4>
                <br/>
            </div>

                <InputGroup size="lg">
                <InputGroup.Text id="inputGroup-sizing-lg">Name</InputGroup.Text>
                    <Form.Control
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    value={name}
                    onChange={(event) => setName(event.target.value) }
                    />
                </InputGroup>
                <br/>
                <InputGroup size="lg">
                <InputGroup.Text id="inputGroup-sizing-lg">Age</InputGroup.Text>
                    <Form.Control
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    value={age}
                    onChange={(event) => setAge(event.target.value) }
                    />
                </InputGroup>
                <br/>
                <InputGroup size="lg">
                <InputGroup.Text id="inputGroup-sizing-lg">Email</InputGroup.Text>             
                    <Form.Control 
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"                  
                    value={email}
                    onChange={(event) => setEmail(event.target.value) }
                    />       
                </InputGroup>
                <br/>
                <InputGroup size="lg">
                <InputGroup.Text id="inputGroup-sizing-lg">Contact</InputGroup.Text>             
                    <Form.Control 
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"                  
                    value={phone}
                    onChange={(event) => setPhone(event.target.value) }
                    />       
                </InputGroup>
                <br/>
                <InputGroup size="lg">
                <InputGroup.Text id="inputGroup-sizing-lg">Address</InputGroup.Text>             
                    <Form.Control 
                    aria-label="Large"
                    as="textarea"                     
                    value={address}
                    onChange={(event) => setAddress(event.target.value) }
                    />       
                </InputGroup>
               
                
                <br/>
                <div className="text-center">
                
                <Button variant="primary" type="submit">
                    Update
                    </Button>
                
                <Button variant="primary"
                    onClick={() => {
                    navigate('/viewAllPatients')
                        console.log("Cancelled")
                    }}>
                    Cancel
                    </Button>
                    
                    </div>
            </Form>           
        </div>

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