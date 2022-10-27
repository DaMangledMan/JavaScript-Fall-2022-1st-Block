

main()


async function main()
{

    let response = await fetch("https://damangledman.github.io/JavaScript-Fall-2022-1st-Block/week-6/data/marvel.json")

    let file = await response.json()
    
    let marvel_list = file["array"]



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

}
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


