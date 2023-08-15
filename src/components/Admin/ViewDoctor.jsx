import React, { useEffect, useState } from 'react'
import instance from '../services/instance';
import { Table , Dropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SideBar from '../Pages/SideBar'

function ViewDoctor() {

  const[doctor,setDoctor]=useState([]);
  const [alarm, setAlarm] = useState(false);

  useEffect(()=>{
    viewDoctor()
},[alarm]);

const viewDoctor = async() =>{
    try{
        const response = await instance.protectedInstance.get('/admin/doctors');
        console.log(response.data.alldoctors)
        setDoctor(response.data.alldoctors) 
          console.log("Doctors fetched successfully")
    }
    catch(error)
    {
        console.log("Error in fetching Doctors ", error)
    }
}

// patient.map((p)=>{
//     console.log("PPPPP --- > "+p.name , p.disease,p.email)
// })

const deleteDoctor = async(id) =>{
    try{
        let response=await instance.protectedInstance.delete(`/admin/deleteDoctor/${id}`)
        if(response.status==200)
        {
            setAlarm(true);
            console.log("Deleted Doctor successfully")
        }
    }
    catch(error)
    {
        console.log("Error in deleting doctor ", error)
    }
}

  return (
    <>
   <div id="page-top">
        <div id="wrapper">
        <SideBar/>
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">

            <div className='text-center'>
                <h1>LIST OF DOCTORS</h1>
                </div>      
                <br/>
                    <Table striped >
                        <thead align='middle'>
                          <tr >
                            <th>#</th>
                            <th >Name</th>
                            <th>Email ID</th>
                            <th>Specialist</th>
                            <th>Fee</th>
                            <th>Action</th>
                          </tr>
                        </thead> 
                        {doctor.map((p,i) =>{ 
                            return(  
                                <tbody key={p._id}  align='middle'>
                                <tr>
                                    <td>{i+1}</td>
                                    <td>{p.name}</td>      
                                    <td>{p.email}</td>
                                    <td>{p.specialist}</td>
                                    <td>{p.fee}</td>
                                    <td>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                        Action
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                        <Dropdown.Item
                                            as={Link}
                                            to={`/editDoctor/${p._id}`}
                                        >
                                            Edit
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            onClick={() => {
                                                deleteDoctor(p._id);
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
                  <a className="backtotop" href="#page-top">
              <i className="fas fa-angle-up"></i>
            </a>        
          </div>
        </div>
      </div>

    </>
  )
}

export default ViewDoctor