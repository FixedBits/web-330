/*
============================================
; Title:  float-field.js
; Author: Victor Soto
; Date: 11/26/2023
============================================
*/

// Create a class named FloatField. 
// Export the class. 
export class FloatField {

    // Create a constructor and supply it with two parameters: name and field. 
    constructor(name, field) {
        this.name = name;
        this.field = field;
    }


    // Create a function named validate.  In the body of the function return true 
    // if you can parseFloat the value and false if not (hint: you will need to 
    // check for NaN values; you can do this by calling JavaScript’s built-in isNaN() function). 

    validate() {
        if (!isNaN(this.field)) {
            return true; 
        } 
        else {
            return false;
        }
    }


    // Create a function named getMessage() and return the 
    // string message “<name> must be a float value.  You entered <field>” 

    getMessage() {
        return this.name + " must be a float value.  You entered " + this.field;
    }


}