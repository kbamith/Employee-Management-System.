package com.Devlopment.EMS_BACKEND.service;

import com.Devlopment.EMS_BACKEND.dto.EmployeeDto;

import java.util.List;

public interface EmployeeService {
    EmployeeDto createEmployee(EmployeeDto employeeDto);
    EmployeeDto getElementById(Long ID);
    List<EmployeeDto> getAllEmployees();
    EmployeeDto updateEmployee(Long ID,EmployeeDto employeeDto);
    void  DeleteEmployee(Long Id);
}
