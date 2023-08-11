import React,{ useEffect, useState } from 'react'
import instance from '../services/instance';
import { Link, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Modal, Table } from 'react-bootstrap';


function viewPatient() {

  const params=useParams();
  console.log(params)
  const[name,setName]=useState('');
  const[age,setAge]=useState('');
  const[email,setEmail]=useState('');
  const[address,setAddress]=useState('');
  const[phone,setPhone]=useState('');
  const[disease,setDisease]=useState('');
  const[prescription,setPrescription]=useState('');
  const [showModal, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    viewPatientDetails(params)
  }, []);

  const viewPatientDetails = async({params}) =>{
    try{

        const response = await instance.protectedInstance.get('/patient/patientDetails');
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
console.log("P_Name  --> "+name)

const formStyles = {
  background: "whitesmoke",
  boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37)",
  width: "45rem",
  padding: "2rem",
  borderRadius: "1rem",
  margin: "0rem 1.5rem",
};

  return (
    <>
      <div className="mx-auto col-10 col-md-8 col-lg-4 align-items-center" style={formStyles}>
            <Form >
              <br/>
              <div style={{ textAlign: "center" }} className='m-5'>
                <h4 >WELCOME {name} !!!</h4>
                <br/>
                <p >You can now view your reports by clicking the button below,</p>
                <Button variant="primary" onClick={handleShow} className='mb-5'>
                    View Report
                </Button>
                
              </div>
              
              <Modal show={showModal} onHide={handleClose} centered style={{ textAlign: "center" }}>
                  <Modal.Header closeButton>
                    <Modal.Title >Report</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Table striped>                   
                      <tbody>
                        <tr>
                          <td>Name</td>
                          <td>{name}</td>
                        </tr>
                        <tr>
                          <td>Age</td>
                          <td>{age}</td>
                        </tr>
                        <tr>
                          <td>Email</td>
                          <td>{email}</td>
                        </tr>
                        <tr>
                          <td>Contact</td>
                          <td>{phone}</td>
                        </tr>
                        <tr>
                          <td>Disease</td>
                          <td>{disease}</td>
                        </tr>
                        <tr>
                          <td>Prescription</td>
                          <td>{prescription}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    {/* <Button variant="primary" onClick={handleClose}>
                      Save Changes
                    </Button> */}
                  </Modal.Footer>
                </Modal>
                {/* <Form.Group className="mb-3">
                    <Form.Control 
                    size="lg"
                    defaultValue={name}
                    />
                </Form.Group> */}
              </Form>           
        </div>
    </>
  )
}

export default viewPatient