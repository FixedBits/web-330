/*
============================================
; Title:  validator.js
; Author: Victor Soto
; Date: 11/26/2023
============================================
*/

// Import statements for RequiredField, FloatField, FloatMinField, FloatMaxField
import { RequiredField } from "./required-field.js";
import { FloatField } from "./float-field.js";
import { FloatMinField} from "./float-min-field.js";
import { FloatMaxField } from "./float-max-field.js";

export class Validator 
{
    // Create two class properties: validators and messages with an empty array
    validators = [];
    messages = [];
    
    // Create class constructor with two parameters: name and field
    constructor(name, field) {
        this.name = name;
        this.field = field;
    }

    // Create a function named addRequiredField() 
    addRequiredField() {
        // New instance of the RequiredField class to the validators array using the name and field as parameters
        this.validators.push(new RequiredField(this.name, this.field));
    }
    
    // Create a function named addRequiredFloatField() 
    addRequiredFloatField() {
        // New instance of the FloatField class to the validators array using the name and field as parameters
        this.validators.push(new FloatField(this.name, this.field));
    }
    
    // Create a function named addFloatMinField() with a single parameter for min
    addFloatMinField(min) {
        // New instance of the FloatMinField class to the validators array
        // using the name, field, and min as parameters
        this.validators.push(new FloatMinField(this.name, this.field, min));
    }
    
    // Create a function named addFloatMaxField() with a single parameter for max
    addFloatMaxField(max) {
        // New instance of the FloatMaxField class to the validators array
        // using the name, field, and max as parameters
        this.validators.push(new FloatMaxField(this.name, this.field, max));
    }
    
    // Create a function named validate()
    validate() {
        // Using a for…of statement, iterate over the validators array and call the iterated objects validate function
        for (let validator of this.validators) {
            // If false, push the iterated objects getMessage() function to the class properties message array and return the value false
            if (!validator.validate()) {
                this.messages.push(validator.getMessage());
            }
        }
        
        return this.messages.length == 0;
    }
}