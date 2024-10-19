// Get the current year
const currentYear = new Date().getFullYear();

// Update the element with the copyright date
document.getElementById("currentyear").textContent = ` ${currentYear}`;

let text = document.lastModified;
document.getElementById("lastModified").innerHTML = text


const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];


  let select = document.getElementById("choose");
  let elmts = ["HTML", "CSS", "JS", "PHP", "jQuery"];

  // Main function
  function GFG_Fun() {
      for (let i = 0; i < products.name.length; i++) {
          let optn = products.name[i];
          let el = document.createElement("option");
          el.textContent = optn;
          el.value = optn;
          select.appendChild(el);
      }
      res.innerHTML = "Elements Added";
  }

