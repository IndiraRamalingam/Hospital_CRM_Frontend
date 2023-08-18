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
  const navigate=useNavigate();

  useEffect(() => {
    viewPatientDetails(params)
  }, []);

  const viewPatientDetails = async(params) =>{
    try{

        const response = await instance.protectedInstance.get(`/patient/patientDetails/${params.id}`);
        const res=response.data;
        setName(res.patient.name)
        setAge(res.patient.age)
        setEmail(res.patient.email)
        setAddress(res.patient.address)
        setPhone(res.patient.phone)
        setDate(res.patient.date)
        setTime(res.patient.time)
    }
    catch(error)
  {
    console.log("Error in fetching patient details ", error)
  }
}

  return (
    <>
       <section className="h-100 gradBG" >
       <div className=" d-flex justify-content-end align-items-center ">
          <button className="btn btn-danger mt-4 mr-5"  onClick={()=>
          {
            localStorage.clear();
            window.location.href = '/';
          }}>LogOut</button>
        </div>
        <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col">
        <div className="card card-registration my-4">
        <div className="row g-0">
        <div className="col-xl-6 d-none d-xl-block">
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