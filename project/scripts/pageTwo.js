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


  const cosplay = [
    {
      name: "Agatha",
      videogame: "Legend of Zelda",
      imageUrl:
      "./projectImages/agathazel.webp"
    },
    {
        name: "Elizabeth Swan",
        videogame: "Kingdom Hearts",
        imageUrl:
        "./projectImages/elizabeth.webp"
    },
      {
        name: "Epona",
        videogame: "The Legend of Zelda",
        imageUrl:
        "./projectImages/eponazelda.webp"
    },
      {
        name: "Byleth, Marth, Ike, Roy",
        videogame: "Fire Emblem",
        imageUrl:
        "./projectImages/fesmash.webp"
    },
      {
        name: "Sora, Riku, Mickey Mouse, Ventus",
        videogame: "Kingdom Hearts",
        imageUrl:
        "./projectImages/khthree.webp"
    },
      {
        name: "Pirate Sora",
        videogame: "Kingdom Hearts",
        imageUrl:
        "./projectImages/sorakh.webp"
    },
  ];

    for (let i = 0; i < cosplay.length; i++) {
        let cos = [cosplay[i].name, cosplay[i].videogame, cosplay[i].imageUrl];
        for (let j = 0; j < cos.length; j++) {
            document.getElementById("cos" + i + j).innerHTML = cos[j];
            document.getElementById("cos" + i + "2").src = cos[2]
            document.getElementById("cos" + i + "2").alt = cos[0]
        }

    }


