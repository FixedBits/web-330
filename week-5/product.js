/*
============================================
; Title:  product.js
; Author: Victor Soto
; Date:   11/18/2023
; Source: buwebdev/web-330 GitHub: https://github.com/buwebdev/web-330
;===========================================
*/
"use strict";


// Create a class named Product with a constructor and two parameters: name and price
// Export the class
export class Product {
    constructor(name, price) {
        // In the body of the constructor set the class properties to the parameters
        this.name = name;
        this.price = price;
        
        // Add a new property for id. Generate a new random value and assign it to the id field
        this.id = Math.random().toString(16).slice(2);
    }
}

