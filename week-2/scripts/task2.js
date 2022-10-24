/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let name = "Jacob Hutchens"

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector("#name").innerHTML = name

// Step 3: declare and instantiate a variable to hold the current year
let c_year = "2022"

// Step 4: place the value of the current year variable into the HTML file
document.querySelector("#year").innerHTML = c_year

// Step 5: declare and instantiate a variable to hold the name of your picture
let image = "images/picture.jpg"

// Step 6: copy your image into the "images" folder
// Done

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector("img[src='images/placeholder.png']").src = "images/picture.png"





/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
let fav_foods = ["Suchi", "Mexican", "Southern"]

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector("#food").textContent = fav_foods

// Step 3: declare and instantiate a variable to hold another favorite food
let fav_food_2 = "Cajun"

// Step 4: add the variable holding another favorite food to the favorite food array
fav_foods.push(fav_food_2)

// Step 5: repeat Step 2
document.querySelector("#food").textContent = fav_foods

// Step 6: remove the first element in the favorite foods array
fav_foods.shift()

// Step 7: repeat Step 2
document.querySelector("#food").textContent = fav_foods

// Step 8: remove the last element in the favorite foods array
fav_foods.pop()

// Step 7: repeat Step 2
document.querySelector("#food").textContent = fav_foods


