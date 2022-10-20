
// create a global variable to store date and time of christmas
//   array stored as [month#, day#, time]
var Christmas_date_time = [12, 25, 0]

var dt = new Date()

// create a function that will repeat once every second
function repeat()
{
    while (true)
    {
        setTimeout(function(){
            //   create a variable to store current date and time
            var current_month = dt.getMonth()
            var current_date = dt.getDate()
            var current_time = dt.getTime()
            var current_date_time = [current_month, current_date, current_time]
            //   calculate the difference between the two dates
            find_difference(current_date_time, Christmas_date_time)
        //   return nothing
        }, 1000)
    }
}


// create a function to calculate difference between two dates and times
function find_difference(date1, date2)
{
    //   find the difference in time
    var time_diff = Math.abs(date1[2], date2[2])
    //   find the difference between the dates
    var date_diff = Math.abs(date1[1], date2[1])
    //   find the difference between the months
    var month_diff = Math.abs(date1[0], date2[0])
    //   store them in an array
    var full_difference = [month_diff, date_diff, time_diff]
    //   return the array
    return full_difference
}