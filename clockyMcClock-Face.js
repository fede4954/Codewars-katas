// Story
// Due to lack of maintenance the minute-hand has fallen off Town Hall clock face.

// And because the local council has lost most of our tax money to a Nigerian email scam there are no funds to fix the clock properly.

// Instead, they are asking for volunteer programmers to write some code that tell the time by only looking at the remaining hour-hand!

// What a bunch of cheapskates!

// Can you do it?

// Kata
// Given the angle (in degrees) of the hour-hand, return the time in HH:MM format. Round down to the nearest minute.

// Examples
// 12:00 = 0 degrees
// 03:00 = 90 degrees
// 06:00 = 180 degrees
// 09:00 = 270 degrees
// 12:00 = 360 degrees
// Notes
// 0 <= angle <= 360



//SOLUTION
var whatTimeIsIt = function(angle) {
    // if(angle === 0 || angle === 360) return '12:00'
  
    let hours = 0
    let minutes = 0
    let totalTimeInMinutes = angle / 0.5
  
    while(totalTimeInMinutes >= 60) {
      totalTimeInMinutes -= 60
      hours++
    }
  
    minutes = totalTimeInMinutes.toString()
    if(minutes < 10) minutes = '0' + minutes
    minutes = minutes.substr(0, 2)
    
    hours = hours.toString()
    if(hours < 10) hours = '0' + hours
    if(angle < 30) hours = '12'
  
    return `${hours}:${minutes}`
}