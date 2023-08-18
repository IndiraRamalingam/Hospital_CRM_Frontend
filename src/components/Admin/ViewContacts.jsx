import React, { useEffect, useState } from 'react'
import instance from '../services/instance';
import { Table , Button} from 'react-bootstrap';
import { Link,useNavigate } from 'react-router-dom';
import SideBar from '../Pages/SideBar'

function ViewContacts() {
    const[contact,setContact]=useState([]);
    const [alarm, setAlarm] = useState(false);
    const navigate=useNavigate();
  
    useEffect(()=>{
      viewContact()
  },[alarm]);
  
  const viewContact = async() =>{
      try{
          const response = await instance.protectedInstance.get('/admin/getAllContacts');
          setContact(response.data.allcontact) 
      }
      catch(error)
      {
          console.log("Error in fetching contacts ", error)
      }
  }
 
  const deleteContact = async(id) =>{
      try{
          let response=await instance.protectedInstance.delete(`/admin/deleteContact/${id}`)
          if(response.status==200)
          {
              setAlarm(true);
          }
      }
      catch(error)
      {
          console.log("Error in deleting contact ", error)
      }
  }
  

  return (
    <div id="page-top">
        <div id="wrapper">
        <SideBar/>
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
            
            <div className="card-body p-md-5 text-black">
                <h3 className="mb-1 text-uppercase" style={{color:"#301091",'fontWeight':'bolder','textAlign':'center'}}>List Of Queries</h3>
              </div>     
                <br/>
                <div className="table-responsive text-nowrap">
                    <Table striped >
                        <thead align='middle'>
                          <tr >
                            <th>#</th>
                            <th >Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Message</th>
                            <th>Action</th>
                          </tr>
                        </thead> 
                        {contact.map((p,i) =>{ 
                               
                            return(  
                                <tbody key={p._id}  align='middle'>
                                <tr>
                                    <td>{i+1}</td>
                                    <td>{p.name}</td>      
                                    <td>{p.email}</td>
                                    <td>{p.phone}</td>
                                    <td>{p.message}</td>                                                 
                                    <td>    
                                        <Button variant='danger'  onClick={() => {
                                                deleteContact(p._id);
                                            }}>
                                            Delete
                                            </Button>                                    
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

export default ViewContacts