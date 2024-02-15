import React, { useState } from 'react';
import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { TextField } from '@mui/material';
import Form from 'react-bootstrap/Form';
import './Register.css';
import { Link } from 'react-router-dom';

function Register() {

  const [formData,setFormData] = useState({name:"",email:"",password:""});

  const register =async(e)=>{
    console.log(formData);
    let dataObj;
    await fetch('http://localhost:4000/user/register', {
      method: 'POST',
      headers: {
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => {dataObj=data});

      if (dataObj.success) {
        localStorage.setItem('auth-token',dataObj.token);
        window.location.replace("/");
      }
      else
      {
        alert(dataObj.errors)
      }
  
    e.preventDefault();
  }

  const changeHandler = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value});
    }

  return (
    <div>
      <div className="background-container"></div>
      <div className="register-container">
        <h2>Register</h2>

        <Form className='w-100'>
          <div className='mb-2'>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField name="name" value={formData.name} onChange={changeHandler} className='input-field' id="input-with-sx" label=" Name" variant="standard" />
            </Box>
          </div>
          <div className='mb-2'>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField name="email" value={formData.email} onChange={changeHandler} className='input-field' id="standard-basic" label="Email" variant="standard" />
            </Box>
          </div>
          <div className='mb-2'>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField name="password" value={formData.password} onChange={changeHandler} type='password' className='input-field' id="standard-basic" label="Password" variant="standard" />
            </Box>
          </div>
          
        </Form>
        <button onClick={register} type='submit' style={{ backgroundColor:"#2E8BC0", color:"white" }} className='btn w-100 mt-4'>Sign Up</button>

        <div className="mt-3">
          <p className="mb-4  text-center">
            Already have an account?{' '}
            <Link to="/login">Login Now</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
