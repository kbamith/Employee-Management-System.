package com.Devlopment.EMS_BACKEND.repository;

import com.Devlopment.EMS_BACKEND.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee,Long> {
}
