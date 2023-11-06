/*
============================================
; Title:  bill.js
; Author: Victor Soto
; Date:   5 November 2023
;===========================================
*/
export class Bill {
    constructor() {
        this._beverages = [];
        this._appetizers = [];
        this._mainCourses = [];
        this._desserts = [];
    }

    addBeverage(beverage) {
        this._beverages.push(beverage);
    }
    addAppetizer(appetizer) {
        this._appetizers.push(appetizer);
    }

    addMainCourse(mainCourse) {
        this._mainCourses.push(mainCourse);
    }

    addDessert(dessert) {
        this._desserts.push(dessert);
    }

    getTotal() {
        let total = 0;

        this._beverages.forEach(function(beverage) {
            total += parseFloat(beverage.price);
        });

        this._appetizers.forEach(function(appetizer) {
            total += parseFloat(appetizer.price);
        });

        this._mainCourses.forEach(function(mainCourse) {
            total += parseFloat(mainCourse.price);
        });

        this._desserts.forEach(function(dessert) {
            total += parseFloat(dessert.price);
        });

        return total.toFixed(2);
    }
}