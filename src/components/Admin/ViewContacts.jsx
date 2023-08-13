import React, { useEffect, useState } from 'react'
import instance from '../services/instance';
import { Table , Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SideBar from '../Pages/SideBar'

function ViewContacts() {
    const[contact,setContact]=useState([]);
    const [alarm, setAlarm] = useState(false);
    const[status,setStatus]=useState('Open')
    const[color,setColor]=useState('danger')
  
    useEffect(()=>{
      viewContact()
  },[alarm]);
  
  const viewContact = async() =>{
      try{
          const response = await instance.protectedInstance.get('/admin/getAllContacts');
          console.log(response.data.allcontact)
          setContact(response.data.allcontact) 
            console.log("Contacts fetched successfully")
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
              console.log("Deleted Contact successfully")
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
            <div className='text-center'>
                <h1>LIST OF QUERIES</h1>
                </div>      
                <br/>
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
            <a className="backtotop" href="#page-top">
              <i className="fas fa-angle-up"></i>
            </a>        
          </div>
        </div>
      </div>
  )
}

export default ViewContacts