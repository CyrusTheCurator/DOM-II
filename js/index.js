// Your code goes here

//our image toggling callback functions for busImage
let funBus = event => {
  event.target.src = "./img/fun-bus.jpg";
};

let funnerBus = event => {
  event.target.src = "./img/funnerBus.png";
};

//select top bus image and create mouseover event with callbacks
let busImage = document.querySelector(".intro img");

busImage.addEventListener("mouseenter", funnerBus);
busImage.addEventListener("mouseleave", funBus);

//point to bottom image element
let bottomBoat = document.querySelector(".content-destination img");

//event callback handles input of letter T to change boat image
let changeTheBoat = event => {
  console.log("callback triggered on  BOAT");
  console.log(event.code);
  if (event.code == "KeyT") {
    bottomBoat.src = "./img/oldBoat.png";
    console.log("the if statement works");
    alert("you went and made the boat OLD");
  }
};
//add event listener to window
window.addEventListener("keydown", changeTheBoat);

//create body selector
let htmlBody = document.querySelector("body");

let themeToggle = event => {
  if (event.target.style.backgroundColor == "white") {
    event.target.style.backgroundColor = "black";
    event.target.style.color = "white";
  } else {
    event.target.style.backgroundColor = "white";
    event.target.style.color = "black";
  }
};

htmlBody.addEventListener("dblclick", themeToggle);

let contentPickContainer = document.querySelector(".container.home");
let mainButtonsContainer = document.createElement("div");
mainButtonsContainer.classList.add("content-pick");
mainButtonsContainer.style.flexDirection = "column";
mainButtonsContainer.style.align = "center";

contentPickContainer.appendChild(mainButtonsContainer);

let addButton = event => {
  let newButton = document.createElement("div");
  let newButtonContainer = document.createElement("div");
  newButtonContainer.classList.add("destination");
  newButton.classList.add("btn");
  newButton.textContent = "ENDLESS BUTTONS!";
  newButtonContainer.appendChild(newButton);
  mainButtonsContainer.appendChild(newButtonContainer);
};

window.addEventListener("scroll", addButton);

let middleImgContainer = document.querySelector(
  ".content-section .img-content"
);
let middleImg = document.querySelector(".content-section img");
let imageContentContainer = document.querySelector(".content-section");
let moveImage = event => {
  let clonedImgContainer = middleImgContainer.cloneNode(true);
  console.log(clonedImgContainer);
  imageContentContainer.appendChild(middleImg);
};

middleImg.addEventListener("drag", moveImage);

let topParagraphContainer = document.querySelector(".intro");
let topParagraph = document.querySelector(".intro p");
let starTrekString =
  "I can't. As much as I care about you, my first duty is to the ship. Our neural pathways have become accustomed to your sensory input patterns. The look in your eyes, I recognize it. You used to have it for me. Computer, lights up! Yesterday I did not know how to eat gagh. Maybe we better talk out here; the observation lounge has turned into a swamp. I've had twelve years to think about it. And if I had it to do over again, I would have grabbed the phaser and pointed it at you instead of them. In all trust, there is the possibility for betrayal. Damage report! What? We're not at all alike! We know you're dealing in stolen ore. But I wanna talk about the assassination attempt on Lieutenant Worf. Fate protects fools, little children and ships named Enterprise. When has justice ever been as simple as a rule book?";

let changeText = () => {
  console.log("we triggered a select event");
  topParagraph.textContent = starTrekString;
};

topParagraph.addEventListener("auxclick", changeText);

let canalImage = document.querySelector(".inverse-content .img-content img");

let changeCanalImage = event => {
  canalImage.setAttribute("src", "./img/HaHa.png");
};

window.addEventListener("resize", changeCanalImage);

window.addEventListener("load", event => {
  alert("and there you have it, the page has loaded. Can you believe it?");
});

let addTextToParagraph = () => {
  topParagraph.textContent = `${topParagraph.textContent} KEEP SCROLLING! YESSSSSSS`;
};

window.addEventListener("wheel", addTextToParagraph);

let cheeseMode = () => {
  console.log("ACTIVATING: CHEESE MODE");
  busImage.src =
    "http://images.dailyhive.com/20181030113542/shutterstock_585494807.jpg";
  middleImg.src =
    "https://cdn11.bigcommerce.com/s-7c08qbh/images/stencil/1280x1280/products/225/913/Idiazabal_web_edited_db__24833.1432909422.jpg?c=2&imbypass=on";
  canalImage.src =
    "https://uwshop.com/media/catalog/product/cache/532ba7779a06e9abafb6b81ec5ec33c2/faomwif1001.jpg";
  bottomBoat.src =
    "https://previews.123rf.com/images/mikailain/mikailain1106/mikailain110600010/9720840-business-cheese-man.jpg";
};

middleImg.addEventListener("dragover", cheeseMode);
