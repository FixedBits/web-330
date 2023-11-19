/*
============================================
; Title:  shopping-cart.js
; Author: Victor Soto
; Date:   11/18/2023
; Source: buwebdev/web-330 GitHub: https://github.com/buwebdev/web-330
;===========================================
*/

"use strict";

// Create a class named ShoppingCart
// Export the class
export class ShoppingCart {
    // Give it a constructor
    constructor() {
        // In the body of the class’s constructor create a property for products and assign it an empty array
        this.products = [];
    }

    // Create a function named count
    count() {
        // Return the length of the products array
        return this.products.length;
    }

    // Create a function named add with a single parameter for a product object
    add(product) {
        // In the body of the function, add the product object to the products array
        this.products.push(product);
    }
    
    // Using JavaScript Iterators, create an iterator
    *[Symbol.iterator]() {
        // In the body use a for…of statement to loop over the products array
        for (const product of this.products) {
            // Yield return each iterated product object
            yield product;
        }
    }
}

