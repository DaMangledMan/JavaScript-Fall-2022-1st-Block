
// create a global variable to store date and time of christmas
var marvel_date_time = new Array()

var dt = new Date()

// create a function that will repeat once every second
function repeat()
{
    while (true)
    {
        setTimeout(function(){
            //   create a variable to store current date and time
            var current_year = dt.getFullYear()
            var current_month = dt.getMonth()
            var current_date = dt.getDate()
            var current_time = dt.getTime()
            var current_date_time = [current_year, current_month, current_date, current_time]
            //   finds the closest marvel movie
            var closest = find_closest(marvel_date_time, current_date_time)
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
    var time_diff = Math.abs(date1[4] - date2[4])
    //   find the difference between the dates
    var date_diff = Math.abs(date1[3] - date2[3])
    //   find the difference between the months
    var month_diff = Math.abs(date1[2] - date2[2])
    //   find the difference between the years
    var year_diff = Math.abs(date1[1] - date2[1])
    //   store them in an array
    var full_difference = [year_diff, month_diff, date_diff, time_diff]
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
function formatter()
{

}