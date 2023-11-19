/*
============================================
; Title:  cart-component.js
; Author: Victor Soto
; Date:   11/18/2023
;===========================================
*/
 "use strict";

// Create a new class named CartComponent that extends JavaScripts HTMLElement object
class CartComponent extends HTMLElement {
    constructor() {
        // Call super() function for the HTMLElement parent object
        super();
    }

// Add a function named connectedCallback()
connectedCallback() {
    // Set the innerHTML to a string for the font-awesome shopping-cart icon
    this.innerHTML = `
        <div id="cart-container">
            <i id="cartIcon" class="fa fa-shopping-cart"></i>
            <span>&nbsp;</span>
            <span id="cart-count"></span>
        </div>
    `;
}}

// Outside of the class declaration, call the customElements.define() function
// Pass-in the string value cart-component and the CartComponent class
customElements.define('cart-component', CartComponent);