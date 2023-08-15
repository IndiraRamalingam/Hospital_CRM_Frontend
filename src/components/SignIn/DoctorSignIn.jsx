import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import instance from '../services/instance'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function DoctorSignIn() {
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[msg,setMsg]=useState('');
  const navigate=useNavigate();

  const handleSignin =(event) =>
  {
    event.preventDefault();
    signin({email,password})  
  }

  const signin = async({email,password})=>{
    if(email!="" && password!="")
    {
      try
      {  
          const response = await instance.authInstance.post('/doctor/signin',{email,password});
          console.log('login successful!');
          sessionStorage.setItem("token", response.data.token)
          console.log("TOKEN __> "+response.data.token);
          if (response.status === 200) {
            try{
             
              navigate(`/doctorDashboard`)
          }
          catch(error)
      {
          console.log("Error in fetching patient  ", error)
      }        
          }   
      }
      catch(error)
      {   
          setMsg("Invalid Email/Password");
      }     
    }
    else
    {
        if(email=="" && password==""){
          setMsg("Please enter your Email and password")
        }else if(email==""){
          setMsg("Email is required")
        }else{
          setMsg("Password cannot be empty")
        }
    }  
  }

  const formStyles = {
    background: "whitesmoke",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37)",
    width: "28rem",
    padding: "2rem",
    borderRadius: "1rem",
    margin: "0rem 1.5rem",
  };

    return (
//       <>
//         <div className="mx-auto col-10 col-md-8 col-lg-4 mt-5" style={formStyles}>
//             <Form onSubmit={handleSignin}>
//               <div>
//                 <h4 style={{ textAlign: "center" }}>DOCOTR LOGIN</h4>
//                 <br/>
//               </div>
//                 <Form.Group className="mb-3">
//                     <Form.Control 
//                     size="lg"
//                     type="email" 
//                     placeholder="Email ID"
//                     value={email}
//                     onChange={(event) => setEmail(event.target.value) }
//                     />
//                 </Form.Group>
// 
//                 <Form.Group className="mb-3">
//                     <Form.Control 
//                     size="lg"
//                     type='password'
//                     value={password}
//                     placeholder='Password'
//                     onChange={(event) => setPassword(event.target.value) }
//                     />
//                 </Form.Group>
//                 
//                 <p style={{ color: "red" }}>{msg}</p>
// 
//                 <div className="text-center">
//                     <Button variant="primary" type="submit">
//                        LogIn
//                     </Button>
//                 </div>
//               </Form>           
//         </div>
//       </>

        <>
        <section className="h-100" style={{background:"#dbe0e3"}}>
        <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col">
        <div className="card card-registration my-4">
        <div className="row g-0">
        <div className="col-xl-6 d-none d-xl-block">
          <img src="../src/assets/DoctorSignIn.avif"
            alt="Sample photo" className="img-fluid"
            style={{'borderTopLeftRadius': ".25rem", 'borderBottomLeftRadius': '.25rem','height':'450px'}}/>
        </div>
        <div className="col-xl-6">
        <Form onSubmit={handleSignin}>
          <div className="card-body p-md-5 text-black">
            <h3 className="mb-5 text-uppercase" style={{color:"#301091",'fontWeight':'bolder','textAlign':'center'}}>Sign In</h3>
              

            <div className="form-outline mb-4">
              <input type="email" className="form-control form-control-lg" 
              placeholder="Email ID"
              value={email}
              onChange={(event) => setEmail(event.target.value) }/>
            </div>

            <div className="form-outline mb-4">
              <input type="text" className="form-control form-control-lg" 
              placeholder='Password'
                  value={password}
                  onChange={(event) => setPassword(event.target.value) }/>
            </div>
            
            <div>
            <p style={{ color: "red" }}>{msg}</p>
            </div>

            <div className="d-flex justify-content-center pt-3 w-100">
              <button type="Submit" className="btn btn-primary btn-lg ">
              SIGN IN</button>             
            </div>
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

export default DoctorSignIn