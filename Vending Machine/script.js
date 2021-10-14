const targetImage = document.getElementById("targetImage");
const sliderImages = targetImage.querySelectorAll(".sliderImage");

const targetBtn = document.getElementById("targetBtn");
const btns = targetBtn.querySelectorAll(".btn");

let sliderShow = document.createElement("div");
let main = document.createElement("div");
let extra = document.createElement("div");

// 画像を表示する部分のクラス
sliderShow.classList.add("col-8","d-block", "mx-auto");
// mainが出現する画像、extraが消えていく画像
main.classList.add("main");
extra.classList.add("extra");

main.append(sliderImages[0]);

sliderShow.append(main);
sliderShow.append(extra);
targetImage.append(sliderShow);

main.setAttribute("image-index", "0");
setAnimalNameAndPrice(sliderImages[0]);

// 全てのボタンぼクリックに対応 for文で回すとどのボタンをクリックしても反応するようにできる。
for(let i = 0; i < btns.length; i++){
  btns[i].addEventListener("click", function(){
    // もしクリックされた画像のボタンが現在の画像と同じなら何もしない。
    if(parseInt(main.getAttribute("image-index")) == i) return;
    // 画像をスライドさせて、現在の画像(main)のimage-index属性をクリックされた画像にする。
    slide(i);
    main.setAttribute("image-index", i)
  });
}

function slide(value){
  let index = parseInt(main.getAttribute("image-index"));
  
  let currentElement = sliderImages.item(index);

  index = value;

  let nextElement = sliderImages.item(index);

  setAnimalNameAndPrice(nextElement);

  animateMain(currentElement, nextElement);
}

function animateMain(currentElement, nextElement) {
  main.innerHTML = "";
  main.append(nextElement);
  
  extra.innerHTML = "";
  extra.append(currentElement);

  main.classList.add("expand-animation");
  extra.classList.add("deplete-animation");
  
  sliderShow.innerHTML = "";
  sliderShow.append(extra);
  sliderShow.append(main);
}

function setAnimalNameAndPrice(animal){
  // 画像のdata-name, data-priceを取得し、span要素のidにinnerHTMLで入れている。

  let animalName = animal.getAttribute("data-name");
  let animalPrice = animal.getAttribute("data-price");

  let name = document.getElementById("name");
  let price = document.getElementById("price");

  name.innerHTML = animalName;
  price.innerHTML = animalPrice;
}
