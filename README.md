# Gilded Rose Refactoring with TypeScript

## Context
The Gilded Rose is a kata where the goal is to refactor and document the existing code.
As an addition also an extra implemention "Conjured" is requested.

This Kata was originally created by Terry Hughes (http://twitter.com/TerryHughes). It is already on GitHub [here](https://github.com/NotMyself/GildedRose). See also [Bobby Johnson's description of the kata](http://iamnotmyself.com/2011/02/13/refactor-this-the-gilded-rose-kata/).

## Prerequisites
[NodeJs](https://nodejs.org/en/) installation is needed

## Installation
    npm install

## Testing
The code can be tested by running

    npm test

## Compiling the code
    npm run compile

## Test Structure
The project has 100% coverage and has different kinds of test files:
* tests to keep the existing funtionality: [products](/TypeScript/test/products) and [gildedRose](/TypeScript/test/gilded-rose.spec.ts) 
* tests to test the factory who creates items: [factory](/TypeScript/test/Factory.spec.ts) 
* unit tests for the specific items: [types](/TypeScript/test/types)

## Contribute
Don't hesistate to contribute to improve this code!
