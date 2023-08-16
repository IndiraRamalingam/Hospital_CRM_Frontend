import React, { useEffect, useState } from 'react'
import instance from '../services/instance';
import { Table , Dropdown} from 'react-bootstrap';
import { Link,useNavigate } from 'react-router-dom';
import SideBar from '../Pages/SideBar'

function ViewDoctor() {

  const[doctor,setDoctor]=useState([]);
  const navigate=useNavigate();
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

            <section className="h-100" style={{background:"#dbe0e3"}}>
                <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col">
                <div className="card my-4" >
                <div className="row g-0"></div>
                <div className="col-xl-12 ">
                <div className="card-body p-md-5 text-black">
                <h3 className="mb-1 text-uppercase" style={{color:"#301091",'fontWeight':'bolder','textAlign':'center'}}>Doctors List</h3>
              </div>
              <div class="table-responsive-sm text-nowrap">
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
                <div className="d-flex justify-content-end pt-3 pb-3">
                <button  type="button" className="btn btn-danger btn-lg" style={{fontWeight:'bolder', 'textAlign':'center'}}
                    onClick={()=>{
                    navigate('/adminDashboard')}}>
                    Close</button>
                    </div>
              </div>
              </div>
              </div>  
              </div>
              </div>
              </section>
           
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