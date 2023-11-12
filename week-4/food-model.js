/*
============================================
; Title:  food-model.js
; Author: Victor Soto
; Date:   11/12/2023
; Sources: 
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
- https://www.freecodecamp.org/news/module-exports-how-to-export-in-node-js-and-javascript/
;===========================================
*/

'use strict';

// Create a class named FoodModel with a constructor.
class FoodModel{

    // Give the constructor three parameters: id, name, and calories.
    constructor(id, name, calorie) {
        this.id = id;
        this.name = name;
        this.calorie = calorie;
    }
}
    // Export the class.
export default FoodModel;
