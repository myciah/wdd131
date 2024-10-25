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



  const options = [
    {
      id: "zelda",
      name: "Agatha, The Legend of Zelda",
      
    },
    {
      id: "twilight princess",
      name: "Epona, The Legend of Zelda",
    },
    {
      id: "KH",
      name: "Kingdom Hearts Group, Kingdom Hearts",
    },
    {
      id: "Kingdom Hearts",
      name: "Pirate Sora, Kingdom Hearts",
    },
    {
      id: "KH E",
      name: "Elizabeth Swan, Kingdom Hearts",
    },
    {
        id: "FE",
        name: "Fire Emblem Group, Fire Emblem",
    }
  ];
  


let optionList = document.getElementById('choose').options;


options.forEach(option =>
  optionList.add(
    new Option(option.name)
  )
);

clickCounter();

