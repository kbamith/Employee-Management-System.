import React, { useEffect } from 'react'
import { deleteEmployee, listEmployee } from '../services/EmployeeService'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
const ListEmployeeComponent = () => {
    const [employee,SetEmployee]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
        getallEmployeees()
    },[])

function getallEmployeees(){
    listEmployee().then((response)=>{
            SetEmployee(response.data);
        }).catch(error=>console.log(error))
}

function AddNewEmployee(){
 navigate('add-employee')
}

function updateEmployee(id){
 navigate(`/edit-employee/${id}`)
}

function deleteEmployeebutton(id){
    deleteEmployee(id).then((response)=>{
        getallEmployeees()
    }).catch((error)=>{console.log(error)})
}

  return (
    <div className='container'>
        <h1 className='text-center'>List of all Employees</h1>
        <button className='btn btn-primary mb-2' onClick={AddNewEmployee}>Add Employee</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>Employee Fist Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    employee.map((employee)=>(
                      <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                        <td>
                            <button className='btn btn-info mx-1' onClick={()=>updateEmployee(employee.id)}>Update</button>
                        <button className='btn btn-danger' onClick={()=>deleteEmployeebutton(employee.id)}>Delete</button>
                        </td>
                      </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent