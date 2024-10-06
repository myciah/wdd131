// Get the current year
const currentYear = new Date().getFullYear();

// Update the element with the copyright date
document.getElementById("currentyear").textContent = ` ${currentYear}`;

let text = document.lastModified;
document.getElementById("lastModified").innerHTML = text


//function calculateWindChill(temp, windSpeed) {
  //  let temp = 60
  //  let windSpeed = 20
  
   // // Calculate windchill using the formula
   // const windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16);
  
   // // Round the result to one decimal place
   // return Math.round(windChill * 10) / 10;
 // }
////document.getElementById("wc").textContent = ` ${windChill}`;

let temp = 60
let windspeed = 20
let windChill = "0";
calculateWindChill(temp, windspeed);

function calculateWindChill(temp, windspeed) {
    // windChill = "10";
    if (temp <= 50 && windspeed > 3) {
        temp <= 50 && windspeed > 3
        return "N/A"}
    else {
    windChill = (35.74 + 0.6215 * temp - 35.75 * windspeed**0.16 + 0.4275 * temp * windspeed**0.16).toFixed(2);
     //return windChill.toFixed(2);
    }
    
}

document.getElementById("wc").innerHTML = windChill;