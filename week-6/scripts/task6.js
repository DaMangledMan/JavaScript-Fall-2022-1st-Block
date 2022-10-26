
// create a global array to store date and time of all marvel names/release dates

let json_ = fetch("https://damangledman.github.io/JavaScript-Fall-2022-1st-Block/week-6/data/marvel.json")

document.getElementById("test1").innerHTML = "1 " + json_;

let stringed = JSON.stringify(json_)

document.getElementById("test2").innerHTML = "2 " + stringed;

let marvel_list = JSON.parse(stringed)

document.getElementById("test3").innerHTML = "3 " + marvel_list;


/*[
    [
        "Black Panther: Wakanda Forever",
        "11/11/2022"
    ],
    [
        "Kraven the Hunter",
        "01/13/2023"
    ],
    [
        "Ant-Man and the Wasp: Quantumania",
        "02/17/2023"
    ],
    [
        "Guardians of the Galaxy Vol. 3",
        "05/05/2023"
    ],
    [
        "Spider-Man: Across the Spider-Verse",
        "06/02/2023"
    ],
    [
        "The Marvels",
        "07/28/2023"
    ],
    [
        "Madame Web",
        "02/02/2024"
    ],
    [
        "Spider-Man: Across the Spider-Verse (Part Two)",
        "03/29/2024"
    ],
    [
        "Captain America: New World Order",
        "05/03/2024"
    ],
    [
        "Thunderbolts",
        "07/26/2024"
    ],
    [
        "Blade",
        "09/06/2024"
    ],
    [
        "Deadpool 3",
        "11/08/2024"
    ],
    [
        "Fantastic Four",
        "02/14/2025"
    ],
    [
        "The Kang Dynasty",
        "05/02/2025"
    ],
    [
        "Secret Wars",
        "05/01/2026"
    ]
]*/





//   finds the closest marvel movie and its release date
let closest_index = find_closest(marvel_list)
let closest_date = marvel_list[closest_index][1]
let closest_movie = marvel_list[closest_index][0]



// Update the count down every 1 second
var x = setInterval(function() {


    document.getElementById("nextMovie").innerHTML = closest_movie
    let release_date = new Date(closest_date).getTime()

    let time_till = find_difference(release_date)

    // Display the result in the element with id="demo"
    document.getElementById("timeTillNext").innerHTML = time_till

}, 1000);


// create a function to figure out which marvel movie is next
function find_closest(marvel_list)
{
    // gets time now
    let now = new Date().getTime()

    // compare the current date against each marvel movie coming up
    for (let i in marvel_list)
    {
        let marvel_date = new Date(marvel_list[i][1]).getTime()

        // compares the two dates
        if (marvel_date > now)
        {
            return i
        }


    }
    // if all movies have passed returns a sorry message
    return []
}


// create a function to calculate difference between two dates and times
function find_difference(marvel_date)
{
    // gets time now
    let now = new Date().getTime()
    // finds the difference between a date and now
    const distance = marvel_date - now
    // calculates the days, hours, minutes, and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24))
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((distance % (1000 * 60)) / 1000)
    // returns the exact distance till the marvel movie
    return days + "d " + hours + "h " + minutes + "m " + seconds + "s "
}


