const targetImage = document.getElementById("targetImage");
const sliderImage = targetImage.querySelectorAll(".sliderImage");

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

main.append(sliderImage[0]);

sliderShow.append(main);
sliderShow.append(extra);
targetImage.append(sliderShow);

for(let i = 0; i < btns.length; i++){
  btns[i].addEventListener("click", function(){
    alert("クリックされました");
  });
}

function slide(value){
  
}
