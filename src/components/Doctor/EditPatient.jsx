import React,{ useEffect, useState } from 'react'
import instance from '../services/instance';
import { Link, useParams,useNavigate } from 'react-router-dom';
import { Modal, Button, Form } from "react-bootstrap";
import { Table } from 'react-bootstrap';

function editPatient() {

  const params=useParams();

  const navigate=useNavigate();
  const[name,setName]=useState('');
  const[age,setAge]=useState('');
  const[disease,setDisease]=useState('');
  const[prescription,setPrescription]=useState('');
  const[newdisease,setNewDisease]=useState([]);
  const[newprescription,setNewPrescription]=useState([]);
  const[errormsg,setErrorMsg]=useState('')
  const[msg,setMsg]=useState('')
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 useEffect(() => {
  getPatientDetails(params)
  console.log(params.id)
  }, []);

  const getPatientDetails = async(params) =>{
    try{
      console.log(`PPPARRA ${params.id}`)
        const response = await instance.protectedInstance.get(`/doctor/get_patients/${params.id}`);
        console.log(response.data.patient)
        const res=response.data;
        setName(res.patient.name)
        setAge(res.patient.age)
        setNewDisease(response.data.patient.disease)
        setNewPrescription(response.data.patient.prescription)
        console.log("Patient details fetched successfully")
        }
        catch(error)
        {
            console.log("Error in fetching patient details ", error)
        }
    }
  const handleUpdate =(event) =>
  {
    event.preventDefault();
    if(disease !='' && prescription!='')
    {
      prescribePatient({disease,prescription}) 
    }
    else{
      setErrorMsg('Please fill all the fields')
    }
     
  }

  const prescribePatient = async(details)=>{
    try{
      const response = await instance.protectedInstance.put(`/doctor/prescribe_patients/${params.id}`,details);
      console.log('update successful!');
      if (response.status === 200) {
        setMsg("Prescription Added")    
        setErrorMsg('') , setDisease(''),setPrescription('')
        window.location.reload(false); 
      }
    }
    catch(error)
    {
      console.log("Error in updating"+error)
    }

  }


    return (
      <>
        <section className="h-100 gradBG">
          
        <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col">
        <div className="card card-registration my-4">
        <div className="row g-0"></div>
        <div className="card-body p-md-5 text-black">
        <h3 className="mb-1 text-uppercase" style={{color:"#301091",'fontWeight':'bolder','textAlign':'center'}}>Prescription History</h3>
    </div>
    <div className='row'>

    <div className='col-4'>
    <div class="table-responsive-sm text-nowrap">
        <Table striped >
                <thead align='middle'>
                  <tr >
                    <th>#</th>
                  </tr>
                </thead> 
                <tbody>                   
                    {newdisease.map((s,i)=>{
                        return(
                            <tr align='middle' >
                                <td key={s.id}> {i+1}</td>                         
                            </tr>
                        )
                    })}
                </tbody>
         </Table>
         </div>
        </div>

        <div className='col-4'>
        <div class="table-responsive-sm text-nowrap">
        <Table striped >
                <thead align='middle'>
                  <tr >
                    <th >Disease</th>
                  </tr>
                </thead> 
                <tbody>                 
                    {newdisease.map((s,i)=>{
                        return(
                            <tr align='middle'>                      
                                <td key={s.id}>{s}</td>
                            </tr>
                        )
                    })}
                </tbody>
         </Table>
         </div>
        </div>
        <div className='col-4'>
        <div class="table-responsive-sm text-nowrap">
        <Table striped >
                <thead align='middle'>
                  <tr >
                    <th >Prescription</th>
                  </tr>
                </thead> 
                <tbody>                 
                    {newprescription.map((s,i)=>{
                        return(
                            <tr align='middle'>                      
                                <td key={s.id}>{s}</td>
                            </tr>
                        )
                    })}
                </tbody>
         </Table>
         </div>
        </div>
    </div>
    

    <div className="d-flex justify-content-end pt-3">
              <button type="button" className="btn btn-light btn-lg"
              onClick={() => {
                navigate(`/viewPatientList/${params.id}`)
                }}>
              close</button>
              <button type="Submit" className="btn btn-warning btn-lg ms-2" onClick={handleShow}>Add Prescription</button>
            </div>
    </div>
    </div>
    </div>  
    </div>
    <div className='modal-dialog modal-dialog-centered'>
    <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Prescription</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <LoginForm onSubmit={onLoginFormSubmit} /> */}
          <Form >
          <div className="form-outline mb-4">
              <input type="textarea" className="form-control form-control-lg" 
              placeholder="Disease"
               value={disease}
              onChange={(event) => setDisease(event.target.value) }/>
            </div>

            <div className="form-outline mb-4">
              <input type="textarea" className="form-control form-control-lg" 
              placeholder='Prescription'
                   value={prescription}
                  onChange={(event) => setPrescription(event.target.value) }/>
            </div>
          </Form>
          
        </Modal.Body>
        <p style={{ color: "green",'textAlign':'center' }}>{msg}</p>
        <p style={{ color: "red" ,'textAlign':'center'}}>{errormsg}</p>
        <Modal.Footer>
          <Button variant="success" onClick={handleUpdate}>
            Save
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    
    </section>
      
      </>
    )
}

export default editPatient