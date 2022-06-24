const h1 = document.querySelector("h1");
const img = document.querySelector("img");
const specie = document.querySelector(".specie");
const button = document.querySelector(".req");
const card = document.querySelector(".card");

const ajax = new XMLHttpRequest();
ajax.open("GET", "https://rickandmortyapi.com/api/character");
ajax.send(null);
ajax.onreadystatechange = () => {
  if (ajax.readyState === 3) {
    console.log("Loading...");
  }
  if (ajax.readyState === 4) {
    if (ajax.status === 200) {
      const results = JSON.parse(ajax.responseText);
      const mathInit = Math.floor(Math.random() * results.results.length + 1);
      h1.innerHTML = results.results[mathInit].name;
      img.setAttribute("src", results.results[mathInit].image);
      specie.innerHTML = results.results[mathInit].species;
      if (results.results[mathInit].status === "Dead") {
        card.style.backgroundColor = "#ff000030";
      } else {
        card.style.backgroundColor = "#ffffff10";
      }
      button.addEventListener("click", () => {
        const mathEnd = Math.floor(Math.random() * results.results.length + 1);
        h1.innerHTML = results.results[mathEnd].name;
        img.setAttribute("src", results.results[mathEnd].image);
        if (results.results[mathEnd].status === "Dead") {
          card.style.backgroundColor = "#ff000030";
        } else {
          card.style.backgroundColor = "#ffffff10";
        }
      });
    }
  }
};
