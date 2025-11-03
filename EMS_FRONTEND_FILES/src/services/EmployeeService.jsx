import axios from 'axios';

const rest_api_base_url='http://localhost:8080/api/employees';

export const listEmployee=()=>axios.get(rest_api_base_url);

export const postEmployee=(employee)=>axios.post(rest_api_base_url,employee)

export const getEmployee =(employeeID)=>axios.get(rest_api_base_url+'/'+employeeID)

export const updateEmployee =(employeeID,employee)=>axios.put(rest_api_base_url+'/'+employeeID,employee);

export const deleteEmployee=(employeeID)=>axios.delete(rest_api_base_url+'/'+employeeID);