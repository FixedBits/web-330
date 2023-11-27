/*
============================================
; Title:  float-max-field.js
; Author: Victor Soto
; Date: 11/26/2023
============================================
*/ 

// Create a class named FloatMaxField
export class FloatMaxField {
    // Create a constructor and supply it with three parameters: name, field, and max
    constructor(name, field, max) {
        // Setting the parameters to class properties
        this.name = name;
        this.field = field;
        this.max = max;
    }
    
    // Create a function named validate
    validate() {
        // ParseFloat the field value and return true if the value is less than the max parameter
        if (parseFloat(this.field) < this.max) {
            return true;
        }
        else {
            return false;
        }
    }
    
    // Create a function named getMessage() and return the string message
    getMessage() {
        return this.name + " must be less than " +  this.max + ". You entered " + this.field + ".";
    }
}