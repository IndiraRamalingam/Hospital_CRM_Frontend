import React,{ useEffect, useState } from 'react'
import instance from '../services/instance';
import { Link, useParams,useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import SideBar from '../Pages/SideBar'
import { Table , Dropdown} from 'react-bootstrap';

function CreatePatientByAdmin() {

  const navigate=useNavigate();
  const[name,setName]=useState('');
  const[age,setAge]=useState('');
  const[gender,setGender]=useState('');
  const[values,setValues]=useState([])
  const[specialist,setSpecialist]=useState()
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[confirmpassword,setConfirmpassword]=useState('');
  const[address,setAddress]=useState('');
  const[phone,setPhone]=useState('');
  const[msg,setMsg]=useState('');
  const[msgg,setMsgg]=useState('');
  const[infor,setInfor]=useState('');

  useEffect(()=>{
    getDoctorDetails();
  },[]);

  console.log("VALUES   "+values)
  const getDoctorDetails = async() =>{
    try{
        const response = await instance.protectedInstance.get('/admin/getAllDoctorName');
        console.log(response.data.alldoctors)
        setValues(response.data.alldoctors)
        // let user=(response.data.alldoctors[0].name)
        // console.log(response.data.alldoctors[0].name)
        //  setSpecialistt(response.data.alldoctors)
        //  setSpecialist(...user)
        // console.log("DSFSDF   "+specialist)
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

  const handleCreate =(event) =>
  {
    event.preventDefault();
    //console.log("RESULT bfre  "+specialist.specialist)
    if(password == confirmpassword)
    {
      createDoctor({name,password,gender,email,specialist,age,address,phone}) 
      //console.log("RESULT   "+specialist.specialist)
    }
    else{
      setMsgg("Password is not matching")
    }
    
  }

  const createDoctor = async(details)=>{
    try{
      const response = await instance.protectedInstance.post('/admin/addPatient',details);
      console.log('Created successful!');
      setMsg('New Patient Added Succesfully')
      setMsgg('')
      setInfor("Back to Dashboard")
    }
    catch(error)
    {
      console.log("Error in creating doctor "+error)
      setMsg('')
      setMsgg("Please fill all the fields to add new doctor");
    }

  }

  return (
    <div id="page-top">
        <div id="wrapper">
        <SideBar/>
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">

            <div className="mx-auto col-10 col-md-8 col-lg-4 mt-4" style={formStyles}>
            <Form onSubmit={handleCreate}>
              <div>
                <h4 style={{ textAlign: "center" }}>Add New Patient</h4>
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
                  <InputGroup.Text id="inputGroup-sizing-lg">Password</InputGroup.Text>
                    <Form.Control
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      value={password}
                      onChange={(event) => setPassword(event.target.value) }
                    />
                </InputGroup>
                <br/>
                <InputGroup size="lg">
                  <InputGroup.Text id="inputGroup-sizing-lg">Confirm Password</InputGroup.Text>
                    <Form.Control
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      value={confirmpassword}
                      onChange={(event) => setConfirmpassword(event.target.value) }
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
                <InputGroup size="lg">
                  <InputGroup.Text id="inputGroup-sizing-lg">Phone</InputGroup.Text>             
                    <Form.Control 
                      aria-label="Large"
                      as="textarea"                     
                      value={phone}
                      onChange={(event) => setPhone(event.target.value) }
                    />       
                </InputGroup>
                
                <br/>

              <select onChange={(e)=>setSpecialist(e.target.value)}>
                {
                  values.map((opts,i)=>
                  <option key={i}>{opts.specialist}</option>
                  )
                }
              </select>
              <h1>{specialist}</h1>

              <input type='radio' name='gender' value="Male" onChange={e=>setGender(e.target.value)} /> Male
              <input type='radio' name='gender' value="Female" onChange={e=>setGender(e.target.value)} /> Female

              <h1>{gender}</h1>

                {/* <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                Specialist
                </Dropdown.Toggle>
                <Dropdown.Menu               
                onChange={(event) => setSpecialist(event.target.value)}   >
                {specialistt.map((p) =>{                 
                    return(
                      <Dropdown.Item key={p._id} value={p.specialist}>
                      {p.specialist}
                     </Dropdown.Item>
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown> */}
              <br/>
              

                <p style={{ color: "green" }}>{msg}<Link to="/viewAllPatients">{infor}</Link></p>
                <p style={{ color: "red" }}>{msgg}</p>
                
                <br/>

                <div className="text-center">
                 
                  <Button variant="primary" type="submit">
                       Add Patient
                    </Button>
                 
                  <Button variant="primary"
                     onClick={() => {
                      navigate('/adminDashboard')
                          console.log("Cancelled")
                      }}>
                       Cancel
                    </Button>
                       
                    </div>
              </Form>           
        </div>
``
            </div>
            <a className="backtotop" href="#page-top">
              <i className="fas fa-angle-up"></i>
            </a>        
          </div>
        </div>
      </div>
  )
}

export default CreatePatientByAdmin