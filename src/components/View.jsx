import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const View = () => {
    //const rows=[{name:'Maya',email:'mr@gmail.com',phone:7873456789},{name:'Arjun',email:'ar@gmail.com',phone:567894569},{name:'Sree',email:'sree@gmail.com',phone:123456789}]
    const [rows,setRows]=useState([])
    useEffect(()=>{
      axios.get('https://dummyjson.com/users').then((res)=>{
        //console.log(res.data.users)
        setRows(res.data.users)
      })
},[])
  return (
    <div>
        <TableContainer style={{marginTop:'7%'}} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
           {rows.map((row) => (
            <TableRow
              key={row.firstName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.firstName}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              
            </TableRow>
          ))} 
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}
