import React,{useEffect,useState} from "react";
import Header from "./Header";
import  Employee  from "../Components/Employee";
import axios from "axios";


const AdminDashboard = () =>{
  const [employeData,setEmployeData] = useState([]);
  
  useEffect(()=>{
    fetchEmployeData();
  },[]);

  const fetchEmployeData = () =>{
   axios.get("http://localhost:8000/users").then((res)=>{
    setEmployeData(res.data.employees)
   })
  }
  return(
    <>
    <Header/>
    <Employee/>
    {/* <EmployeCard data={employeData}/> */}
    </>
  )
};

export default AdminDashboard;