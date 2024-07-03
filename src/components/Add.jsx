import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'

export const Add = ({person}) => {
  const [page,setPage]=useState('Varshas')  
  const [count,setCount]=useState(0)
  const [form,setForm]=useState({
    name:person.name,
    email:person.email,
    password:person.password,
    address:person.address 
  })
  function valueAdd(){
   /* setCount(count+1)*/
   console.log(form)
  }
  function valueCap(e){
    //console.log(e)
    setForm({...form,[e.target.name]:e.target.value})
  }
  return (
    
        <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  > <h1>Welcome to {page} Page</h1>
    <div>
        <div>
      <TextField
        required
        id="outlined-required"
        label="Name"
        name='name'
        value={form.name}
        onChange={valueCap}
        
      />
      </div>
      <div>
      <TextField
        
        id="outlined-disabled"
        label="Email"
        type='email'
        name='email'
        value={form.email}
        onChange={valueCap}
      />
      </div>
      <div>
      <TextField
        id="outlined-password-input"
        label="password"
        type="password"
        autoComplete="current-password"
        name='password'
        value={form.password}
        onChange={valueCap}
      />
      </div>
      <div>
      <TextField
        id="outlined-read-only-input"
        label="Address"
        name='address'
        value={form.address}
        onChange={valueCap}
       
      />
      </div>
      </div>
      <div>
        <Button variant='contained' onClick={valueAdd}>Register</Button>
        <br></br>
       {/*<small>Button is clicked {count} times</small>*/}
        
      </div>
      </Box>
  )
}
