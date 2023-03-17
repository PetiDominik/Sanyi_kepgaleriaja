window.addEventListener("load", main);
let lista = [
  "kepek/alszik.jpg",
  "kepek/bocsok.jpg",
  "kepek/cirkusz.jpg",
  "kepek/eszik.jpg",
  "kepek/integet.jpg",
  "kepek/maci.jpg",
  "kepek/medve.jpg",
  "kepek/taj.jpg",
];

function main() {
  const ARTICLE = document.querySelector("article");
  let txt = kepracsEloallit();
  let currentIndex = 0;

  ARTICLE.innerHTML += txt;

  const NAGYKEP = document.querySelector(".nagykep img");
  const JOBB = document.getElementById("jobb");
  const BAL = document.getElementById("bal");

  JOBB.addEventListener("click", function () {
    currentIndex = leptetes(1, currentIndex);
    NAGYKEP.src = lista[currentIndex];
  });
  BAL.addEventListener("click", function() {
    currentIndex = leptetes(-1, currentIndex);
    NAGYKEP.src = lista[currentIndex];
  });

  const KEPEK = document.querySelectorAll("article div img");
  for (let j = 0; j < KEPEK.length; j++) {
    KEPEK[j].addEventListener("click", function (event) {
      NAGYKEP.src = event.target.src;
      currentIndex = j;
    });
  }
}

function leptetes(ertek, currentIndex) {
  currentIndex += ertek;
  if (currentIndex < 0) {
    currentIndex = lista.length - 1;
  }
  if (currentIndex > lista.length - 1) {
    currentIndex = 0;
  }
  return currentIndex;
}

function kepracsEloallit() {
  let txt = "";

  for (let i = 0; i < lista.length; i++) {
    txt += `<div><img src="${lista[i]}" alt=""></div>`;
  }
  return txt;
}
