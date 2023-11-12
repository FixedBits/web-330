/*
============================================
; Title:  calorie-converter.js
; Author: Victor Soto
; Date:   11/12/2023
; Source: 
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
;===========================================
*/
'use strict';

// Add an import statement to the FoodModel.
import FoodModel from './food-model.js';

// Create a class named CalorieConverter with a static
// variable called data and populate it with 6 FoodModel objects.
class CalorieConverter {
    static data = [
        new FoodModel(1007, 'Egg', 78),
        new FoodModel(1008, 'Apple', 95),
        new FoodModel(1009, 'Hamburger', 354),
        new FoodModel(1010, 'Fries', 400),
        new FoodModel(1011, 'Banana', 105),
        new FoodModel(1012, 'Soda', 150)
    ];

    // Create a static function named find with a single string parameter.
    // Using JavaScript's filter function, return a new array of data 
    // with the objects matching the parameter string.
    // Use the FoodModel name field to compare the parameter string value against.
 static find(name) {
        return this.data.filter(item => item.name.toLowerCase() === name.toLowerCase());
    }
}

// Export the class
export default CalorieConverter;
