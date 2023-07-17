
{
  let button = document.querySelector(".js-bodyBackgdound");
  let body = document.querySelector(".js-body");

  button.addEventListener("click", () => {
    body.classList.toggle("bodyBackgdoundColor");
  });
}




{ // I option
  let box = document.querySelector(".js-advertisingBox");
  let button = document.querySelector(".js-advertisingButton");
  let showHideWord = document.querySelector(".js-advertisingWord");

  button.addEventListener("click", () => {
    if (box.classList.toggle("js-advertisingBox")) {
      (showHideWord.innerText = "Pokaz");
    } else {
      (showHideWord.innerText = "Ukryj");
    } 
  });
}


  
// { // II option
//   let box = document.querySelector(".js-advertisingBox");
//   let button = document.querySelector(".js-advertisingButton");
//   let showHideWord = document.querySelector(".js-advertisingWord");

//   button.addEventListener("click", () => {
//     box.classList.toggle("js-advertisingBox");
//     showHideWord.innerText = box.classList.contains("js-advertisingBox") ? "Pokaż" : "Ukryj";
//   });
// }