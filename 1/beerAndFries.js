/*
 * Solution by Christina Mileva
 * GitHub - https://github.com/ChrisChrisi/Frontend-Javascript-First-Exam
 */


"use strict";

var beerAndFries = function (input) {
    if (!Array.isArray(input)) {
        throw new TypeError("The input should be array.");
    }

    if (input.some(function (elem) {
        return ( !elem.hasOwnProperty("type")
            || (elem["type"] !== "beer" && elem["type"] !== "fries")
            || !elem.hasOwnProperty("score")
            || (typeof elem["score"] !== "number")
            || elem["score"] % 1 !== 0  )
    })) {
        throw new TypeError("Some elements of the input array are with wrong data.");
    }

    var fries = [],
        beer = [];
    input.forEach(function (elem) {
        if (elem["type"] === "beer") {
            beer.push(elem["score"]);
        }
        else {
            fries.push(elem["score"])
        }
    });

    if (fries.length !== beer.length) {
        throw new TypeError("There should be equal quantity of fries and beer.");
    }

    var sortingFunc = function (a, b) {
        return a < b;
    };
    fries.sort(sortingFunc);
    beer.sort(sortingFunc);
    var result = 0;
    fries.forEach(function (friesScore, i) {
        result += (friesScore * beer[i]);
    });

    return result;

};

exports.beerAndFries = beerAndFries;