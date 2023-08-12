import React, { useEffect, useState } from 'react'
import instance from '../services/instance';
import { Table , Dropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function DoctorDashboard() {

    const[patient,setPatient]=useState([]);
    const [alarm, setAlarm] = useState(false);

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
    
    // patient.map((p)=>{
    //     console.log("PPPPP --- > "+p.name , p.disease,p.email)
    // })
    
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
        <div className='text-center'>
        <h1>LIST OF PATIENTS</h1>
        </div>      
        <br/>
            <Table striped >
                <thead align='middle'>
                  <tr >
                    <th>#</th>
                    <th >Name</th>
                    <th>Email ID</th>
                    <th>Contact</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead> 
                {patient.map((p,i) =>{ 
            
                    var statuss,color,prescribe;
                    if(!p.disease && !p.prescription)
                    {
                        statuss="Not Attended"
                        color="danger"
                        prescribe="Prescribe Medicine"

                    }
                    else{
                        statuss="Attended"
                        color="success"
                        prescribe="Re-Prescribe Medicine"
                    }
                    return(
                        // <li key={p._id}>
                        //     <p>{p.name}</p>
                        // </li>            
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
                                    Cancel Appointment
                                </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            </td>
                        </tr>
                        </tbody>
                    
                    );

                    
                })}
         </Table>
   </>
  )
}

export default DoctorDashboard