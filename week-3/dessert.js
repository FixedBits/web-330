/*
============================================
; Title:  dessert.js
; Author: Victor Soto
; Date:   5 November 2023
;===========================================
*/


import { Product } from "./product.js";

export class Dessert extends Product {
    constructor(name, price) {
        super(name, price);
    }
}