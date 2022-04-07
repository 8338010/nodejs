const express = require('express');
const welcome = require('../logger/logger')
const helperModul = require('../util/helper')
const formulaToString = require('../validator/formatter')
const lodash = require('lodash')


const router = express.Router();


router.get('/test-me', function (req, res) {
    res.send('My  welcome first ever api!')
   // logger call function
    welcome.welcome()
    //helperModul call function
    helperModul.printTodayDate()
    helperModul.printgetBatchinfo()
    helperModul.printTodayMonth()

    formulaToString.trimString()
    formulaToString.changeCaseToLower()
    formulaToString.changeCaseToUpper()
});
router.get('/hello', function (req, res) {
    // Problem a Create an array of strings containing the names all the months of a year and split the array into 4 equally sized sub-arrays using the chunk function. Print these sub-arrays)
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    let subArrays = lodash.chunk(months, 3)
    console.log('The result after splitting the months array is ', subArrays)
    
    // Problem b Create an array containing the first 10 odd numbers. Using the tail function, return the last 9 elements of it and print them on console.)
    
    let oddNumbers = [1,3,5,7,9,11,13,15,17,19]
    console.log('The last 9 odd numbers in the array are: ', lodash.tail(oddNumbers))
    
    // Problem c)
    let a = [1 , 2, 1, 4]
    let b = [2, 3, 4, 3]
    let c = [6, 1, 5, 10]
    let d = [1, 1, 1]
    let e = [1, 2, 3, 4, 5]
    
    console.log('Final array or unique numbers is : ', lodash.union(a, b, c, d, e))
    
    // Problem d)
    let arrayOfKeyValuePairs = [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
    console.log('The object created from arrays is :', lodash.fromPairs(arrayOfKeyValuePairs))
        res.send('My hello api!')
    });
    
module.exports = router;
// adding this comment for no reason



router.get('/movies', function (req, res) {
    //console.log('These are the request query parameters: ', req.query)
    //res.send('My first ever api!')
    let movies = [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
     
        res.send(movies)
});
