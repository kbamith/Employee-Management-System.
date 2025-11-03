import React,{useEffect, useState} from 'react'
import {getEmployee, postEmployee, updateEmployee} from '../services/EmployeeService'
import { useNavigate,useParams } from 'react-router-dom';


const EmployeeComponent = () => {
  const {id} =useParams();
let[firstName,setFirstName]=useState("");
let[lastName,setLastName]=useState("");
let[email,setEmail]=useState("");
const[error,setError]=useState({
  firstName:"",
  lastName:"",
  email:""
})

let navigate=useNavigate();

function saveEmployee1(e){
  e.preventDefault();
  if(validateForm()){
    if(id){
      updateEmployee(id,{firstName,lastName,email}).then((response)=>{
        console.log(response.data);
        navigate('/')        
      }).catch((error)=>{
        console.log(error);
        
      })
    } else{
    const employee={firstName,lastName,email}
    console.log(employee)
   postEmployee({firstName,lastName,email}).then((response)=>{
    console.log(response.data);
    navigate('/')
  })
  }
} 
 }

 useEffect(()=>{
 if(id){
  getEmployee(id).then((response)=>{
    setFirstName(response.data.firstName);
    setLastName(response.data.lastName);
    setEmail(response.data.email)
  }).catch(error=>{
    console.log(error);
  })
 }
 },[id])

function pagetitle(){
  if(id){
    return <h2 className='text-center'>Update Employee</h2>
  }else{
    return   <h2 className='text-center'>Add Employee</h2>
  }
}


  function validateForm(){
    let valid=true;
    let temp=error
   if(firstName.trim()){
    temp.firstName=''
   }else{
    temp.firstName="Enter FirstName";
    valid=false;
   }
   if(lastName.trim()){
    temp.firstName=''
   }else{
    temp.lastName="Enter LastName";
    valid=false;
   }
    if(email.trim()){
    temp.email=''
   }else{
    temp.email="Enter Email";
    valid=false;
   }
   setError(temp);
   return valid;

  }



    return (
    <div className='container'>
      <br/>
        <div className='row'>
         <div className='card col-md-6 offset-md-3 offset-md-3'>
       {pagetitle()}
         <div className='card-body'>
            <form>
                <div className='from-group mb-2'>
                  <label className='form-label'>First Name:</label><br/>
                  <input
                  type='text'
                  placeholder='Employee First Name'
                  name='firstName'
                  value={firstName}
                  className={`for-control ${error.firstName ? 'is-invalid':''}`}
                  onChange={(e)=>{setFirstName(e.target.value)}}
                  >
                  </input>
                  {error.firstName && <div className='invalid-feedback'>{error.firstName}</div>}
                 </div>
                <div className='from-group mb-2'>
                  <label className='form-label'>Last Name:</label><br/>
                  <input
                  type='text'
                  placeholder='Employee Last Name'
                  name='LastName'
                  value={lastName}
                  className={`for-control ${error.lastName ? 'is-invalid':''}`}
                  onChange={(e)=>{setLastName(e.target.value)}}
                  >
                  </input>
                     {error.lastName && <div className='invalid-feedback'>{error.lastName}</div>}
                 </div>
                 <div className='from-group mb-2'>
                  <label className='form-label'>Email:</label><br/>
                  <input
                  type='text'
                  placeholder='Employee Email'
                  name='Emial'
                  value={email}
                  className={`for-control${error.email ? 'is-invalid':''}`}
                  onChange={(e)=>{setEmail(e.target.value)}}  
                  >
                  </input>
                     {error.email && <div className='invalid-feedback'>{error.email}</div>}
                 </div>
                 <button className='btn btn-success' onClick={saveEmployee1}>Submit</button>
            </form>

         </div>
         </div>
        </div>
    </div>
  )
}

export default EmployeeComponent
