import React,{ useEffect, useState } from 'react'
import instance from '../services/instance';
import { Link, useParams,useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { Table } from 'react-bootstrap';


function viewPatient() {

  const params=useParams()
  const[name,setName]=useState('');
  const[age,setAge]=useState('');
  const[email,setEmail]=useState('');
  const[address,setAddress]=useState('');
  const[phone,setPhone]=useState('');
  const[disease,setDisease]=useState('');
  const[prescription,setPrescription]=useState('');
  const[date,setDate]=useState('')
  const[specialist,setSpecialist]=useState('')
  const[time,setTime]=useState('')
  const[color,setColor] = useState('')
  const navigate=useNavigate();

  useEffect(() => {
    viewPatientDetails(params)
  }, []);

  const viewPatientDetails = async(params) =>{
    try{

        const response = await instance.protectedInstance.get(`/patient/patientDetails/${params.id}`);
        console.log(response)
        const res=response.data;
        setName(res.patient.name)
        setAge(res.patient.age)
        setEmail(res.patient.email)
        setAddress(res.patient.address)
        setPhone(res.patient.phone)
        setDate(res.patient.date)
        setTime(res.patient.time)
        // setSpecialist(res.patient.specialist)
        // if(res.patient.disease)
        // {
        //   setDisease(res.patient.disease)
        //   setColor('black')
        // }
        // else{
        //   setDisease('Yet to Consult Doctor')
        //   setColor('red')
        // }
        // if(res.patient.prescription)
        // {
        //   setPrescription(res.patient.prescription)
        //   setColor('black')
        // }else{
        //   setPrescription('Yet to Consult Doctor')
        //   setColor('red')
        // }
        // if(res.patient.date){
        //   setDate(res.patient.date)
        //   setColor('black')
        // }else{
        //   setDate('Yet to book appointment date')
        //   setColor('red')
        // }
        // if(res.patient.time){
        //   setTime(res.patient.time)
        //   setColor('black')
        // }else{
        //   setTime('Yet to book appointment time')
        //   setColor('red')
        // }
        // if(res.patient.specialist){
        //   setSpecialist(res.patient.specialist)
        //   setColor('black')
        // }else{
        //   setSpecialist('Yet to book specialist')
        //   setColor('red')
        // }
        
        

        console.log("Patient details fetched successfully")
    }
    catch(error)
{
    console.log("Error in fetching patient details ", error)
}
}

  return (
    <>
       <section className="h-100" style={{background:"#dbe0e3"}}>
        <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col">
        <div className="card card-registration my-4">
        <div className="row g-0">
        <div className="col-xl-6 d-xl-block">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaOZas1O1wRYg5I8CllXlUoxw707WKwgPRiw&usqp=CAU"
            alt="Sample photo" className="img-fluid"
            style={{'borderTopLeftRadius': ".25rem", 'borderBottomLeftRadius': '.25rem','height':'500px'}}/>
        </div>
        <div className="col-xl-6">
          <Form >
          <div className="card-body p-md-5 text-black">
            <h3 className="mb-5 text-uppercase" style={{color:"#301091",'fontWeight':'bolder','textAlign':'center'}}>Your Details</h3>
         
            <Table striped>                   
                      <tbody>
                        <tr>
                          <td style={{fontWeight:'bolder'}}>Name</td>
                          <td>{name}</td>
                        </tr>
                        <tr>
                          <td style={{fontWeight:'bolder'}}>Age</td>
                          <td>{age}</td>
                        </tr>
                        <tr>
                          <td style={{fontWeight:'bolder'}}>Email</td>
                          <td>{email}</td>
                        </tr>
                        <tr>
                          <td style={{fontWeight:'bolder'}}>Contact</td>
                          <td>{phone}</td>
                        </tr>
                        <tr>
                          <td style={{fontWeight:'bolder'}}>Address</td>
                          <td>{address}</td>
                        </tr>
                        {/* <tr>
                          <td style={{fontWeight:'bolder'}}>Date</td>
                          <td style={{'color':`${color}`}}>{date}</td>
                        </tr>
                        <tr>
                          <td style={{fontWeight:'bolder'}}>Specialist</td>
                          <td style={{'color':`${color}`}}>{specialist}</td>
                        </tr>
                        <tr>
                          <td style={{fontWeight:'bolder'}}>Time</td>
                          <td style={{'color':`${color}`}}>{time}</td>
                        </tr>
                        <tr>
                          <td style={{fontWeight:'bolder'}}>Disease</td>
                          <td style={{'color':`${color}`}}>{disease}</td>
                        </tr>
                        <tr>
                          <td style={{fontWeight:'bolder'}}>Prescription</td>
                          <td style={{'color':`${color}`}}>{prescription}</td>
                        </tr>
                       */}
                      </tbody>
                    </Table>
                    <button  type="button" className="btn btn-danger btn-lg" style={{fontWeight:'bolder', 'textAlign':'center'}}
                    onClick={()=>{
                    navigate(`/patientDashboard/${params.id}`)
                  }}>Close</button>
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

export default viewPatient