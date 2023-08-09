import React, {useEffect, useState} from "react";
import axios from "axios";
import TableData from "./TableData";

const headCells = [
  {
    id: '_id',
    numeric: true,
    disablePadding: true,
    label: 'ID',
  },
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Name',
  },
  {
    id: 'email',
    numeric: false,
    disablePadding: false,
    label: 'E-Mail',
  },
  {
    id: 'isAdmin',
    numeric: false,
    disablePadding: false,
    label: 'Is Admin',
  },
  {
    id: 'isActive',
    numeric: false,
    disablePadding: false,
    label: 'Is Active',
  }
];

const Employee = () =>{
  const [employeData,setEmployeData] = useState([]);
  
  useEffect(()=>{
    fetchEmployeData();
  },[]);

  function createData(data) {
    console.log(data,'fn');
    return data.map((item,index)=>{
      // console.log(item,'map');
      return {...item, id:index}
    })
  }

  const fetchEmployeData = () =>{
   axios.get("http://localhost:8000/users").then((res)=>{
    setEmployeData(createData(res.data.employees))
   })
  }

  const deleteEmp = () =>{
    console.log('delete');
    axios.delete("http://localhost:8000/user/").then((res)=>{
     setEmployeData(createData(res.data.employees))
    })
   }


 return(<TableData headData={headCells} tableData={employeData} deleteEmployee={deleteEmp}/>)
}

export default Employee;