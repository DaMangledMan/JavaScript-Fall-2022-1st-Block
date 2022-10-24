/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
function add(number1, number2) {
    
    // Step 2: In the function, return the sum of the parameters number1 and number2
    return number1 + number2
}

// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
function addNumbers() {

    let number1 = document.getElementById("addend1")
    let number2 = document.getElementById("addend2")

    let sum = add(number1, number2)

    // Step 4: Assign the return value to an HTML form element with an ID of sum
    document.getElementById("#sum").value = '${sum}'
    return 
}

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
document.getElementById("addNumbers").addEventListener("click", addNumbers)

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
function subtract(number1, number2) {
    
    return number1 - number2
}

function subtractNumbers() {

    let number1 = document.getElementById("addend1")
    let number2 = document.getElementById("addend2")

    let subtract = subtract(number1, number2)

    document.getElementById("#subtract").value = '${subtract}'
    return 
}

document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers)

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
function multiply(number1, number2) {
    
    return number1 * number2
}

function multiplyNumbers() {

    let number1 = document.getElementById("addend1")
    let number2 = document.getElementById("addend2")

    let multiply = multiply(number1, number2)

    document.getElementById("#multiply").value = '${multiply}'
    return 
}

document.getElementById("mulitplyNumbers").addEventListener("click", multiplyNumbers)

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
function divide(number1, number2) {
    
    return number1 / number2
}

function divideNumbers() {

    let number1 = document.getElementById("addend1")
    let number2 = document.getElementById("addend2")

    let divide = divide(number1, number2)

    document.getElementById("#divide").value = '${divide}'
    return 
}

document.getElementById("divideNumbers").addEventListener("click", divideNumbers)

// Step 9: Test all of the mathematical functionality of the task3.html page.
"unable to test because of the reasons listed in the READ_ME.txt file"







/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
let date = new Date()

// Step 2: Declare a variable to hold the current year
let year = year

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
year = getFullYear(date)

// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.querySelector("#year").innerHTML = year







/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.querySelector("#array").innerHTML = numbers

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the result to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
function find_odds(array) {
    odds = []
    for ( i = 0; i < array.length; i += 0 ) {
        if (array[i] % 2 == 1){
            odds.push(array[i])
        }
    }
    return odds
}

document.querySelector("#odds").innerHTML = find_odds(numbers)

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
function find_evens(array) {
    evens = []
    for ( i = 0; i < array.length; i += 0 ) {
        if (array[i] % 2 == 0){
            odds.push(array[i])
        }
    }
    return evens
}

document.querySelector("#evens").innerHTML = find_evens(numbers)

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
function summed_array(array) {
    sum = 0
    for ( i = 0; i < array.length; i += 0 ) {
        sum += array[i]
    }
    return sum
}

document.querySelector("#sumOfArray").innerHTML = summed_array(numbers)

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
function doubled_array(array) {
    doubled = []
    for ( i = 0; i < array.length; i += 0 ) {
        let double = array[i] * 2
        doubled.push(double)
    }
    return doubled
}

document.querySelector("#multiplied").innerHTML = doubled_array(numbers)

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
document.querySelector("#sumOfMultiplied").innerHTML = summed_array(doubled_array(numbers))
