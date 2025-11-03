package com.Devlopment.EMS_BACKEND.exception;

import org.antlr.v4.runtime.RuntimeMetaData;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException{
public  ResourceNotFoundException(String message){
    super(message);
}
}
