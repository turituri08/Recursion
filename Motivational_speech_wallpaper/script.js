function createMotivationalWallPaper(paper, domObj){
  let innerFlex = document.createElement("div");
  innerFlex.classList.add("position");

  let imageUrl = document.createElement("img");
  imageUrl.classList.add("image", "mb-3");
  imageUrl.src = paper.url;

  let text = document.createElement("p");
  text.classList.add(paper.vertical, paper.horizontal, "text-width", "font-weight-bold");
  text.innerHTML = paper.text;
  text.style.color = paper.getColorCode();

  innerFlex.append(imageUrl);
  innerFlex.append(text);

  domObj.append(innerFlex);
}

class MotivationalWallPaper{
  constructor(text, color, url, vertical, horizontal){
    this.text = text;
    this.color = color;
    this.url = url;
    this.vertical = vertical;
    this.horizontal = horizontal;
  }

  getColorCode(){
    return "#" + this.color;
  }
}

const wallPaperDiv = document.getElementById("wallPaper");

let paper1 = new MotivationalWallPaper("Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint", "2c3e50", "https://recursionist.io/img/different-job.png", "center-vertical", "center-horizontal");
let paper2 = new MotivationalWallPaper("The scientist discovers a new type of material or energy and the engineer discovers a new use for it. - Gordon Lindsay Glegg", "2c3e50", "https://cdn.pixabay.com/photo/2018/02/23/04/38/laptop-3174729_1280.jpg", "bottom", "left");
let paper3 = new MotivationalWallPaper("Scientists study the world as it is, engineers create the world that never has been. - Theodore von Karman", "ecf0f1", "https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg", "top", "right");

createMotivationalWallPaper(paper1, wallPaperDiv);
createMotivationalWallPaper(paper2, wallPaperDiv);
createMotivationalWallPaper(paper3, wallPaperDiv);
