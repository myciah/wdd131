// Get the current year
const currentYear = new Date().getFullYear();

// Update the element with the copyright date
document.getElementById("currentyear").textContent = ` ${currentYear}`;

let text = document.lastModified;
document.getElementById("lastModified").innerHTML = text

const hamburger = document.querySelector('.hamburgerM');
    const navMenu = document.querySelector('.navM');
    
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('hide');
    });


const button = document.querySelector('.button');
button.addEventListener('click', () => {
    navMenu.classList.toggle('hide');
  });



function myFunction() {
    var x = document.getElementById("waist");

    
    if (x.value <= 24) {
      document.getElementById("answer").innerHTML = "Your shirt size is an extra small";
    } else if (x.value == 27) {
      document.getElementById("answer").innerHTML = "Your shirt size is a small";
    } else if (x.value == 32) {
        document.getElementById("answer").innerHTML = "Your shirt size is a medium";
    } else if (x.value == 35) {
        document.getElementById("answer").innerHTML = "Your shirt size is a large";
    } else if (x.value == 41) {
        document.getElementById("answer").innerHTML = "Your shirt size is an extra large";
    } else if (x.value == 42) {
        document.getElementById("answer").innerHTML = "Your shirt size is an extra extra large";
    } else {
        document.getElementById("answer").innerHTML = "Please enter the number your waist is closest to out of the given numbers.";
    }
  }




