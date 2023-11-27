/*
============================================
; Title:  required-field.js
; Author: Victor Soto
; Date: 11/26/2023
============================================
*/ 


// Creating a class named RequiredField
export class RequiredField {
    // Creating a constructor and supply it with two parameters: name and field
    constructor(name, field){
        // Setting the parameters to class properties
        this.name = name;
        this.field = field;
    }
    
    // Creating a function named validate
    validate() {
        // Will return true if this.field is a string value and false if not
        return Boolean(this.field);
    }
    
    // Creating a function named getMessage() and return the string message
    getMessage() {
        return this.name + " is a required field.";
    }

}