package com.Devlopment.EMS_BACKEND.controller;

import com.Devlopment.EMS_BACKEND.dto.EmployeeDto;
import com.Devlopment.EMS_BACKEND.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/employees")
@AllArgsConstructor
public class EmployeeController {
 private EmployeeService employeeService;

@PostMapping()
 public ResponseEntity<EmployeeDto> createEmployee (@RequestBody  EmployeeDto employeeDto){
     EmployeeDto savedEmployee=employeeService.createEmployee(employeeDto);
     return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
 }

// Get employee Rest Api
    @GetMapping("{id}")
    public ResponseEntity<EmployeeDto> getEmployeeByID(@PathVariable("id") Long employeeID){
    EmployeeDto employeeDto=employeeService.getElementById(employeeID);
    return ResponseEntity.ok(employeeDto);
    }

    // Build the get all employees
   @GetMapping()
    public ResponseEntity<List<EmployeeDto>> getAllEmployess(){
    List<EmployeeDto> employees =employeeService.getAllEmployees();
    return ResponseEntity.ok(employees);
    }

    @PutMapping("{id}")
    public   ResponseEntity<EmployeeDto> updateEmployee(@PathVariable("id") Long employeeID,@RequestBody EmployeeDto updateemployee){
    EmployeeDto employeeDto=employeeService.updateEmployee(employeeID,updateemployee);
    return ResponseEntity.ok(employeeDto);
    }
    //Build the delete
@DeleteMapping("{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("id") Long empID){
    employeeService.DeleteEmployee(empID);
return ResponseEntity.ok("Employee deleted Successfully. ");
    }


}
