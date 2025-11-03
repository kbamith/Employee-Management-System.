package com.Devlopment.EMS_BACKEND.Mapper;

import com.Devlopment.EMS_BACKEND.dto.EmployeeDto;
import com.Devlopment.EMS_BACKEND.entity.Employee;

public class EmployeeMapper {
    public  static EmployeeDto maptoEmployeeDto(Employee employee) {
    return  new EmployeeDto(
            employee.getId(),
            employee.getFirstName(),
            employee.getLastName(),
            employee.getEmail()
    );
    }

    public  static Employee maptoEmployee(EmployeeDto employeeDto){
        return new Employee(
                employeeDto.getId(),
                employeeDto.getFirstName(),
                employeeDto.getLastName(),
                employeeDto.getEmail()
        );
    }

}
