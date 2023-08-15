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

  useEffect(() => {
    getDoctorDetails(params)
    console.log(params.id)
    }, []);

    const getDoctorDetails = async(params) =>{
      try{
        console.log(`PPPARRA ${params.id}`)
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
      updateDoctor({name,email,specialist,fee})  
    }
  
    const updateDoctor = async(details)=>{
      try{
        const response = await instance.protectedInstance.put(`/admin/editDoctor/${params.id}`,details);
        console.log('update successful!');
        if (response.status === 200) {
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
                  <InputGroup.Text id="inputGroup-sizing-lg">Specialist</InputGroup.Text>             
                    <Form.Control 
                      aria-label="Large"
                      as="textarea"                     
                      value={specialist}
                      onChange={(event) => setSpecialist(event.target.value) }
                    />       
                </InputGroup>
                <br/>
                <InputGroup size="lg">
                  <InputGroup.Text id="inputGroup-sizing-lg">Fee</InputGroup.Text>             
                    <Form.Control 
                      aria-label="Large"
                      as="textarea"                     
                      value={fee}
                      onChange={(event) => setFee(event.target.value) }
                    />       
                </InputGroup>
                
                <br/>
                <div className="text-center">
                 
                  <Button variant="primary" type="submit">
                       Update
                    </Button>
                 
                  <Button variant="primary"
                     onClick={() => {
                      navigate('/viewDoctor')
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

export default EditDoctor