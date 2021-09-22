# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @astarinamaulida/lotide`

**Require it:**

`const _ = require('@astarinamaulida/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: accepts an array and returns the first element of an array
* `tail`: accepts an array and return the same array without the first element
* `middle`: accepts an array and return the middle element(s) of the array
* `countLetters`: accepts a string and return the occurence of the object
* `countOnly`: accepts an array and the parameter, then return the objects in the arrays 
* `eqArrays`: accepts two arrays and return true if they are equal
* `eqObjects`: accepts two arrays and return true if they are equal
* `findKey`: accepts an object and a callback,  
* `findKeyByValue`: accepts object and argument then return the key value and compare if they are equal
* `letterPositions`: accepts a string and return its index position character
* `map`: accepts an array and a callback then return it to modified array with applied callback function
* `takeUntil`: accepts an array and return the array up until the 
* `without`: accepts an array and return the new array without the argument that we set
* `assertArraysEqual`: accepts two arrays and compare them to check if they are equal
* `assertEqual`: accepts two values and compare them to check if they are equal
* `assertObjectsEqual`: accepts two objects as parameters and return true if they are equal