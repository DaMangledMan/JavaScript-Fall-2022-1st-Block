
// runs the main function
main()


// creates the main function to go through the whole program
async function main()
{
    // fetchs the json file from its true source
    let response = await fetch("https://damangledman.github.io/JavaScript-Fall-2022-1st-Block/week-6/data/marvel.json")
    // converts the response into a json
    let file = await response.json()
    // extracts the list from the json
    let marvel_list = file["array"]
    // Update the count down every 1 second
    var x = setInterval(function() {
        // finds the closest movie and sets variables to be the name and the date
        let closest_list = find_closest(marvel_list)
        let closest_date = closest_list[1]
        let closest_movie = closest_list[0]
        // prints the name to the screen
        document.getElementById("nextMovie").innerHTML = closest_movie
        // formats the date to the Date format
        let release_date = new Date(closest_date).getTime()
        // calculates the difference between the two dates
        let time_till = find_difference(release_date)
        // Display the result in the element with id="demo"
        document.getElementById("timeTillNext").innerHTML = time_till
    }, 1000);
}


// create a function to figure out which marvel movie is next
function find_closest(marvel_list)
{
    // gets time now
    let now = new Date().getTime()
    // compare the current date against each marvel movie coming up
    for (let i in marvel_list)
    {
        // converts the dates to Date format
        let marvel_date = new Date(marvel_list[i][1]).getTime()
        // compares the two dates
        if (marvel_date > now)
        {
            // returns the index of the closest marvel movie
            return marvel_list[i]
        }
    }
    // if there are no more movies left in the json it returns this instead
    return ["Sorry. This Website is out of date.", new Date().getTime()]
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
