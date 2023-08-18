import React, { useEffect, useState } from 'react'
import instance from '../services/instance';
import { Table , Dropdown} from 'react-bootstrap';
import { Link,useNavigate } from 'react-router-dom';
import SideBar from '../Pages/SideBar'

function ViewAllPatients() {
  const navigate=useNavigate();
  const[patient,setPatient]=useState([]);
  const [alarm, setAlarm] = useState(false);

  useEffect(()=>{
      viewPatient()
  },[alarm]);

  const viewPatient = async() =>{
      try{
          const response = await instance.protectedInstance.get('/admin/patients');
          setPatient(response.data.allpatient) 
      }
      catch(error)
      {
          console.log("Error in fetching patients ", error)
      }
  }
  
  const deletePatient = async(id) =>{
      try{
          let response=await instance.protectedInstance.delete(`/admin/deletePatient/${id}`)
          if(response.status==200)
          {
            window.location.reload(false); 
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

            <div className="card-body p-md-5 text-black">
                <h3 className="mb-1 text-uppercase" style={{color:"#301091",'fontWeight':'bolder','textAlign':'center'}}>Patients List</h3>
              </div>     
                <div className="table-responsive text-nowrap">
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
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead> 
                        {patient.map((p,i) =>{ 
                    
                            var statuss,color;
                            if(p.disease.length==0 && p.prescription.length==0)
                            {
                                statuss="New"
                                color="danger"
                            }
                            else{
                                statuss="Regular"
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
                        <div className="d-flex justify-content-end pt-3 pb-3 pr-3">
                <button  type="button" className="btn btn-danger btn-lg" style={{fontWeight:'bolder', 'textAlign':'center'}}
                    onClick={()=>{
                    navigate('/adminDashboard')}}>
                    Close</button>
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