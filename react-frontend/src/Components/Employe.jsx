import React, { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router';
import axios from "axios";

export default function Employe(){
    const params= useParams();
    const [user,setUser] = useState([]);
    

    useEffect(()=>{
        fetchEmployeData();
      },[]);
    
      
    
      const fetchEmployeData = async() =>{
       await axios.get(`http://localhost:8000/user/${params?.user_email}`).then((res)=>{
       setUser(res.data.employees)
       })
      }
    
    return(
        <Card sx={{width:250}}>
             <Typography variant="h3" gutterBottom>
           User Details:
          </Typography>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
           Name: {user.name}
          </Typography>
          <Typography variant="h5" component="div">
            Admin: {user?.isAdmin?.toString()}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Know More</Button>
        </CardActions>
      </Card>
  
    )
}