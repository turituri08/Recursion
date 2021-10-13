const target = document.getElementById("imageTarget");

// const sliderImage = document.querySelectorAll(".card-img-top");
// const sliderName = document.querySelectorAll(".card-title");
// const sliderPrice = document.querySelectorAll(".card-text");

// console.log(sliderImage);
// console.log(sliderName);
// console.log(sliderPrice);

const sliderAnimal = document.querySelectorAll(".animalCard");

console.log(sliderAnimal);

let sliderShow = document.createElement("div");
let main = document.createElement("div");
let extra = document.createElement("div");

sliderShow.classList.add("col-12", "d-flex", "flex-nowrap", "overflow-hiddens");
main.classList.add("main");
extra.classList.add("extra");

main.append(sliderAnimal[0]);

sliderShow.append(main);
sliderShow.append(extra);
target.append(sliderShow);

main.setAttribute("data-index", "0");



function slide(value){
  let index = parseInt(main.getAttribute("data-index"));
  let currentElement = sliderAnimal.item(index);

  index = value;

  let nextElement = sliderAnimal.item(index);

  main.setAttribute("data-index", index.toString());

  animateMain(currentElement, nextElement);
}

function animateMain(currentElement, nextElement) {
  main.innerHTML = "";
  main.append(nextElement);
  
  extra.innerHTML = "";
  extra.append(currentElement);

  main.classList.add("expand-animation");
  extra.classList.add("deplete-animation");
}