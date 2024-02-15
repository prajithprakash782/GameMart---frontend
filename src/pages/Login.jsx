import React, { useState } from 'react'
import './Login.css'
import user from '../Assets/user.png'
import {Form} from 'react-bootstrap'
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { Link } from 'react-router-dom';

function Login() {
  

  const [formData,setFormData] = useState({email:"",password:""});

  const login =async(e)=>{
    e.preventDefault();
    console.log(formData);
    let dataObj;
    await fetch('http://localhost:4000/user/login', {
      method: 'POST',
      headers: {
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => {dataObj=data});
      console.log(dataObj);
      if (dataObj.success) {
        localStorage.setItem('auth-token',dataObj.token);
        window.location.replace("/");
      }
      else
      {
        alert(dataObj.errors)
      }
    
  }

  const changeHandler = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value});
    }


  return (
    <div>
      <div className="background-container"></div>
      
      <div className="login-container">
        <h2>Login</h2>
        <div className="profile-pic">
          
          <img width='150px'height='150px' src={user} alt="User Profile" />
        </div>
        <Form onSubmit={login} className='mb-2 w-100'>
                
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                  <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                  <TextField name="email" value={formData.email} onChange={changeHandler} className='w-100 mb-2' id="standard-basic" label="Email" variant="standard" />
                  
                </Box>
              
  
              <div className='w-100'>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                  <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                  <TextField name="password" value={formData.password} onChange={changeHandler} type='password' className='w-100' id="standard-basic" label="Password" variant="standard"  />
                 
    
                </Box>
              </div>
  
  
              <button type='submit' style={{backgroundColor:"#2E8BC0" ,color:"white"}} className='btn w-100 mt-4'>Log In</button>
            </Form>
            <div className="mt-3">
              <p className="mb-0  text-center">
                Don't have an account?{' '}
                <Link to="/register">Sign Up</Link>
              </p>
            </div>

      </div>
    </div>
  )
}

export default Login