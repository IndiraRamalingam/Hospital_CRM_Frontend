import React,{ useEffect, useState } from 'react'
import instance from '../services/instance';
import { Link, useParams,useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function editPatient() {

  const params=useParams();
  console.log(params)
  const navigate=useNavigate();
  const[name,setName]=useState('');
  const[age,setAge]=useState('');
  const[email,setEmail]=useState('');
  const[address,setAddress]=useState('');
  const[phone,setPhone]=useState('');
  const[disease,setDisease]=useState('');
  const[prescription,setPrescription]=useState('');

 useEffect(() => {
  getPatientDetails(params)
  console.log(params.id)
  }, []);

  const getPatientDetails = async(params) =>{
    try{
      console.log(`PPPARRA ${params.id}`)
        const response = await instance.protectedInstance.get(`/doctor/get_patients/${params.id}`);
        console.log(response)
        const res=response.data;
        setName(res.patient.name)
        setAge(res.patient.age)
        setEmail(res.patient.email)
        setAddress(res.patient.address)
        setPhone(res.patient.phone)
        if(res.patient.disease)
        {
          setDisease(res.patient.disease)
        }
        else{
          setDisease('Patient yet not consulted Doctor')
        }
        if(res.patient.prescription)
        {
          setPrescription(res.patient.prescription)
        }else{
          setPrescription('Patient yet not consulted Doctor')
        }
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

    const all={name}
    const handleUpdate =(event) =>
  {
    event.preventDefault();
    prescribePatient({name})  
  }

  const prescribePatient = async({name})=>{
    try{
      const response = await instance.protectedInstance.put(`/doctor/prescribe_patients/${params.id}`,{name});
      console.log('update successful!');
      console.log("TOKEN __> "+response.data.token);
      if (response.status === 200) {
        navigate('/doctorDashboard')
      }
    }
    catch(error)
    {
      console.log("Error in updating"+error)
    }

  }

    return (
      <>
      {/* <div className="card p-5"> */}
         <div className="mx-auto col-10 col-md-8 col-lg-4 mt-4" style={formStyles}>
            <Form onSubmit={handleUpdate}>
              <div>
                <h4 style={{ textAlign: "center" }}>Prescribe Medicines Below</h4>
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
                  <InputGroup.Text id="inputGroup-sizing-lg">Disease</InputGroup.Text>             
                    <Form.Control 
                      aria-label="Large"
                      as="textarea"                     
                      value={disease}
                      onChange={(event) => setDisease(event.target.value) }
                    />       
                </InputGroup>
                <br/>
                <InputGroup size="lg">
                  <InputGroup.Text id="inputGroup-sizing-lg">Medicine</InputGroup.Text>             
                    <Form.Control 
                      aria-label="Large"
                      as="textarea"                     
                      value={prescription}
                      onChange={(event) => setPrescription(event.target.value) }
                    />       
                </InputGroup>
                
                <br/>
                <div className="text-center">
                    <Button variant="primary" type="submit">
                       Save
                    </Button>
    
                </div>
              </Form>           
        </div>
      </>
    )
}

export default editPatient