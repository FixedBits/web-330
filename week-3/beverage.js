/*
============================================
; Title:  beverage.js
; Author: Victor Soto
; Date:   5 November 2023
; Description: JavaScript class - Beverage
;===========================================
*/

import { Product } from "./product.js";
export class Beverage extends Product{
    constructor(name, price) {
        super(name, price);
    }
}

