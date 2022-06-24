const h1 = document.querySelector("h1");
const img = document.querySelector("img");
const specie = document.querySelector(".specie");
const button = document.querySelector(".req");
const card = document.querySelector(".card");

function generate(results) {
  const mathInit = Math.floor(Math.random() * results.results.length + 1);
  h1.innerHTML = results.results[mathInit].name;
  img.setAttribute("src", results.results[mathInit].image);
  specie.innerHTML = results.results[mathInit].species;
  if (results.results[mathInit].status === "Dead") {
    card.style.backgroundColor = "#ff000030";
  } else {
    card.style.backgroundColor = "#ffffff10";
  }
}

fetch("https://rickandmortyapi.com/api/character", { method: "get" })
  .then(async (res) => {
    const results = await res.json();
    generate(results);
    button.addEventListener("click", () => {
      generate(results);
    });
  })
  .catch((err) => console.log(err));

console.log("Fora");
