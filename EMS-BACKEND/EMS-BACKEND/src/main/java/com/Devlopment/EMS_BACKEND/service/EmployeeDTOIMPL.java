package com.Devlopment.EMS_BACKEND.service;

import com.Devlopment.EMS_BACKEND.Mapper.EmployeeMapper;
import com.Devlopment.EMS_BACKEND.dto.EmployeeDto;
import com.Devlopment.EMS_BACKEND.entity.Employee;
import com.Devlopment.EMS_BACKEND.exception.ResourceNotFoundException;
import com.Devlopment.EMS_BACKEND.repository.EmployeeRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EmployeeDTOIMPL implements  EmployeeService{
    private EmployeeRepository employeeRepository;
    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Employee employee = EmployeeMapper.maptoEmployee(employeeDto);
      Employee savedEmployee=  employeeRepository.save(employee);
        return EmployeeMapper.maptoEmployeeDto(savedEmployee);
    }

    @Override
    public EmployeeDto getElementById(Long empID) {
  Employee employee=employeeRepository.findById(empID).orElseThrow(()->new ResourceNotFoundException("Employee Not Found with the id"+empID));
   return EmployeeMapper.maptoEmployeeDto(employee);
    }

    @Override
    public List<EmployeeDto> getAllEmployees() {
       List<Employee> employees=employeeRepository.findAll();
       return employees.stream().map((employee) -> EmployeeMapper.maptoEmployeeDto(employee)).collect(Collectors.toList());
    }

    @Override
    public EmployeeDto updateEmployee(Long ID, EmployeeDto updatedEmployees) {
        Employee employee =employeeRepository.findById(ID)
                .orElseThrow(()->new ResourceNotFoundException("Employee of the id"+ID+"does not exists."));
        employee.setFirstName(updatedEmployees.getFirstName());
        employee.setLastName(updatedEmployees.getLastName());
        employee.setEmail(updatedEmployees.getEmail());
      Employee updatedEmployee = employeeRepository.save(employee);
      return EmployeeMapper.maptoEmployeeDto(updatedEmployee);
    }

    @Override
    public void DeleteEmployee(Long Id) {
        Employee employee =employeeRepository.findById(Id)
                .orElseThrow(()->new ResourceNotFoundException("Employee of the id"+Id+"does not exists."));
        employeeRepository.deleteById(Id);

    }
}


