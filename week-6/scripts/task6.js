
// create a global letiable to store date and time of christmas
const marvel_date_time = formatter()

const dt = new Date()

// create a function that will repeat once every second
function main()
{
    while (true)
    {
        setTimeout(function(){
            //   create a letiable to store current date and time
            let current_year = dt.getFullYear()
            let current_month = dt.getMonth()
            let current_date = dt.getDate()
            let current_time = dt.getTime()
            let current_date_time = [current_year, current_month, current_date, current_time]
            //   finds the closest marvel movie
            let closest = find_closest(marvel_date_time, current_date_time)
            //   edits element id nextMovie to closest[0]
            document.querySelector("#nextMovie").innerHTML = closest[0]
            //   formats closest for the find difference function
            closest.shift()
            //   calculate the difference between the two dates
            time_till_next = find_difference(current_date_time, closest)
            //   edits element id timeTillNext to time_till_next
            document.querySelector("#timeTillNext").innerHTML = time_till_next
        }, 1000)
        //   return nothing
    }
}


// create a function to calculate difference between two dates and times
function find_difference(date1, date2)
{
    //   find the difference in time
    let time_diff = Math.abs(date1[4] - date2[4])
    //   find the difference between the dates
    let date_diff = Math.abs(date1[3] - date2[3])
    //   find the difference between the months
    let month_diff = Math.abs(date1[2] - date2[2])
    //   find the difference between the years
    let year_diff = Math.abs(date1[1] - date2[1])
    //   store them in an array
    let full_difference = [year_diff, month_diff, date_diff, time_diff]
    //   return the array
    return full_difference
}


// create a function to figure out which marvel movie is next
function find_closest(marvel_list, current_date)
{
    //   compare the current date against each marvel movie coming up
    for (i = 0; i >= marvel_list.length; i += 0)
    {
        // compares year
        if (current_date[0] < marvel_list[i][1])
        {
            // compares month
            if (current_date[1] < marvel_list[i][2])
            {
                // compares date
                if (current_date[2] < marvel_list[i][3])
                {
                    // compares time
                    if (current_date[3] < marvel_list[i][4])
                    {
                        // return the one that is the closest without going over
                        return marvel_list[i]
                    }
                }
            }
        }
    }
    // if all movies have passed returns a sorry message
    return ["there are no more marvel movies", current_date[0], current_date[1], current_date[2], current_date[3]]
}

// create a function to open the api and format the information 
//   array formatted as [["movie_name", year#, month#, day#, time], ... ]
async function formatter()
{
    // Loads the json data file containing all known upcoming marvel movies as of 10/24/2022
    let marvel_movie_file = await fetch("week-6/data/marvel.json")
    // converts it to a usabole format
    let marvel_movie_object = JSON.parse(marvel_movie_file)
    // creates a list to store the values of each key in the json
    let marvel_movie_list = []
    // adds all values to the list in order
    for (let key in marvel_movie_object)
    {
        marvel_movie_list.push(marvel_movie_object[key])
    }
    // returns the list of values
    return marvel_movie_list
}
