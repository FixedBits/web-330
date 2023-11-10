/*
============================================
; Title:  main-course.js
; Author: Victor Soto
; Date:   5 November 2023
; Description: JavaScript class - Product
;===========================================
*/
  "use strict";
import { Product } from "./product.js";

export class MainCourse extends Product {
    constructor(name, price) {
        super(name, price);
    }
}