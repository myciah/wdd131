// Get the current year
const currentYear = new Date().getFullYear();

// Update the element with the copyright date
document.getElementById("currentyear").textContent = ` ${currentYear}`;

let text = document.lastModified;
document.getElementById("lastModified").innerHTML = text

//windChill function
let temp = 60
let windspeed = 20
let windChill = 0;
calculateWindChill(temp, windspeed);

function calculateWindChill(temp, windspeed) {
    if (temp <= 50 &&  windspeed > 3) {
        return windChill = "N/A"}
    else {
    return windChill = (35.74 + 0.6215 * temp - 35.75 * windspeed**0.16 + 0.4275 * temp * windspeed**0.16).toFixed(2);
    }
    
}

document.getElementById("wc").innerHTML = windChill;