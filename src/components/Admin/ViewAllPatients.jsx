import React, { useEffect, useState } from 'react'
import instance from '../services/instance';
import { Table , Dropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SideBar from '../Pages/SideBar'

function ViewAllPatients() {
  const[patient,setPatient]=useState([]);
  const [alarm, setAlarm] = useState(false);

  useEffect(()=>{
      viewPatient()
  },[alarm]);

  const viewPatient = async() =>{
      try{
          const response = await instance.protectedInstance.get('/admin/patients');
          console.log(response.data.allpatient)
          setPatient(response.data.allpatient) 
            console.log("Patients fetched successfully")
      }
      catch(error)
      {
          console.log("Error in fetching patients ", error)
      }
  }
  
  // patient.map((p)=>{
  //     console.log("PPPPP --- > "+p.name , p.disease,p.email)
  // })
  
  const deletePatient = async(id) =>{
      try{
          let response=await instance.protectedInstance.delete(`/admin/deletePatient/${id}`)
          if(response.status==200)
          {
              setAlarm(true);
              console.log("Deleted Patient successfully")
          }
      }
      catch(error)
      {
          console.log("Error in deleting patient ", error)
      }
  }

  return (

    <div id="page-top">
      <div id="wrapper">
        <SideBar/>
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">

              <div className='text-center'>
                <h1>LIST OF PATIENTS</h1>
                </div>      
                <br/>
                <div class="table-responsive-sm text-nowrap">
                    <Table striped >
                        <thead align='middle'>
                          <tr >
                            <th>#</th>
                            <th >Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Email ID</th>
                            <th>Contact</th>
                            <th>Address</th>
                            <th>Specialist</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead> 
                        {patient.map((p,i) =>{ 
                    
                            var statuss,color,prescribe;
                            if(!p.disease && !p.prescription)
                            {
                                statuss="Yet to consult"
                                color="danger"
                            }
                            else{
                                statuss="Consulted"
                                color="success"
                            }
                            return(  
                                <tbody key={p._id}  align='middle'>
                                <tr>
                                    <td>{i+1}</td>
                                    <td>{p.name}</td>
                                    <td>{p.age}</td>
                                    <td>{p.gender}</td>
                                    <td>{p.email}</td>
                                    <td>{p.phone}</td>
                                    <td>{p.address}</td>
                                    <td>{p.specialist}</td>
                                    <td>
                                        <span className={`badge bg-${color}`}>
                                        {statuss}
                                        </span>
                                    </td>
                                    <td>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                        Action
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                        <Dropdown.Item
                                            as={Link}
                                            to={`/editPatientByAdmin/${p._id}`}
                                        >
                                            Edit
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            onClick={() => {
                                                deletePatient(p._id);
                                            }}
                                        >
                                            Delete 
                                        </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    </td>
                                </tr>
                                </tbody>
                              );    
                            })}
                        </Table>
                        </div>

            </div>
            <a className="backtotop" href="#page-top">
              <i className="fas fa-angle-up"></i>
            </a>        
          </div>
        </div>
      </div>
  )
}

export default ViewAllPatients