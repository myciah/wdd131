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