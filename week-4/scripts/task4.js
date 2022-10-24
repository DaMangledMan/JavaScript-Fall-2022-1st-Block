/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let info = new Object()

// Step 2: Inside of the object, add a property named name with a value of your name as a string
info["name"] = ["Jacob G. Hutchens"]

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
info["photo"] = ["images/picture.png"]

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
info["favoriteFoods"] = ["Suchi", "Mexican", "Southern"]

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
info["hobbies"] = ["Wood Working", "Metal Working", "Long Boarding", "Wake Boarding"]

// Step 6: Add another property named placesLived with a value of an empty array
info["placesLived"] = []

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
// Step 8: For each property, add appropriate values as strings
var Texas = {
    "place" : "Texas",
    "Length" : "18 years"
}

info["placesLived"].push(Texas)

// Step 9: Add additional objects with the same properties for each place you've lived
var Idaho = {
    "place" : "Idaho",
    "Length" : "1 year"
}

info["placesLived"].push(Idaho)



/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector("#name").innerHTML = info["name"]

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector("#photo").src = info["photo"]

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector("#photo").alt = info["name"]

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
const ul_food = document.getElementById("favorite-foods")
for (i = 0; i < info["favoriteFoods"].length; i += 1)
{
    const li = document.createElement("li")

    li.innerHTML = info["favoriteFoods"][i]
    ul_food.appendChild(li)
}

// Step 6: Repeat Step 4 for each hobby in the hobbies property
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
const ul_hob = document.getElementById("hobbies")
for (i = 0; i < info["hobbies"].length; i += 1)
{
    const li = document.createElement("li")

    li.innerHTML = info["hobbies"][i]
    ul_hob.appendChild(li)
}

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
const dl_lived = document.getElementById("places-lived")
for (i = 0; i < info["placesLived"].length; i += 1)
{
    const dt = document.createElement("dt")
    const dd = document.createElement("dd")

    dt.innerHTML = info["placesLived"][i]["place"]
    dd.innerHTML = info["placesLived"][i]["Length"]

    dl_lived.appendChild(dt)
    dl_lived.appendChild(dd)
}
