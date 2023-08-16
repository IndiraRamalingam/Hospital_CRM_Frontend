import React, { useEffect, useState } from 'react'
import instance from '../services/instance';
import { Table , Dropdown} from 'react-bootstrap';
import { Link ,useNavigate,useParams} from 'react-router-dom';

function ViewPatientList() {

    const[patient,setPatient]=useState([]);
    const [alarm, setAlarm] = useState(false);
    const navigate=useNavigate();
    const params=useParams();

    useEffect(()=>{
        viewPatient()
    },[alarm]);

    const viewPatient = async() =>{
        try{
            const response = await instance.protectedInstance.get('/doctor/view_patients');
            console.log(response.data.patients)
            setPatient(response.data.patients) 
            console.log("Patients fetched successfully")
        }
        catch(error)
        {
            console.log("Error in fetching patients ", error)
        }
    }
    
    
    const deletePatient = async(id) =>{
        try{
            let response=await instance.protectedInstance.delete(`/doctor/delete_patients/${id}`)
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
   <>
        <section className="h-100" style={{background:"#dbe0e3"}}>
        <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col">
        <div className="card my-4" >
        <div className="row g-0"></div>
        <div className="col-xl-12 ">
        <div className="card-body p-md-5 text-black">
        <h3 className="mb-1 text-uppercase" style={{color:"#301091",'fontWeight':'bolder','textAlign':'center'}}>Appointment List</h3>
    </div>
    <div class="table-responsive-sm text-nowrap"> 
    <Table striped >
                <thead align='middle'>
                  <tr >
                    <th>#</th>
                    <th >Patient Name</th>
                    <th>Email ID</th>
                    <th>Contact</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead> 
                {patient.map((p,i) =>{             
                    var statuss,color,prescribe;
                    if(p.disease.length==0 && p.prescription.length==0)
                    {
                        statuss="Not Attended"
                        color="danger"
                        prescribe="Prescribe Medicine"

                    }
                    else{
                        statuss="Attended"
                        color="success"
                        prescribe="View Report and Prescribe"
                    }
                    return(          
                        <tbody key={p._id}  align='middle'>
                        <tr>
                            <td>{i+1}</td>
                            <td>{p.name}</td>
                            <td>{p.email}</td>
                            <td>{p.phone}</td>
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
                                    to={`/editPatient/${p._id}`}
                                >
                                    {prescribe}
                                </Dropdown.Item>
                                <Dropdown.Item
                                    onClick={() => {
                                        deletePatient(p._id);
                                    }}
                                >
                                    Delete Patient
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
         <div className="d-flex justify-content-end pt-3 pb-3">
        <button  type="button" className="btn btn-danger btn-lg" style={{fontWeight:'bolder', 'textAlign':'center'}}
            onClick={()=>{
            navigate(`/doctorDashboard/${params.id}`)}}>
            Close</button>
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

export default ViewPatientList