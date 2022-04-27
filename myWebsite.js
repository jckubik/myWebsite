const projectDiv = document.querySelectorAll(`div.project`);
const darkLightButtons = document.querySelectorAll(`.darkLightButton`);


function projectImgScale(event) {
  event.target.children.item(1).classList.add(`projectImgHover`);
  event.target.children.item(2).classList.add(`projectImgHover`);
  event.target.children.item(0).style.textDecoration = `underline`;
  console.log(event.target.children);
}

function projectImgDescale(event) {
  event.target.children.item(1).classList.remove(`projectImgHover`);
  event.target.children.item(2).classList.remove(`projectImgHover`);
  event.target.children.item(0).style.textDecoration = `none`;
}

function handleDarkLightMode(event) {
  const body = document.querySelector(`body`);
  const header = document.querySelector(`#header`);
  const lightButton = document.querySelector(`#lightButton`);
  const darkButton = document.querySelector(`#darkButton`);

  if (!body.getAttribute(`data-theme`)) {
    body.setAttribute(`data-theme`, `dark`);
    darkButton.classList.add(`hide-button`);
    lightButton.classList.remove(`hide-button`);
  } else {
    body.removeAttribute(`data-theme`);
    lightButton.classList.add(`hide-button`);
    darkButton.classList.remove(`hide-button`);
  }
}


// Event Listners ------------------------------------

// Project picture scales on hover
projectDiv.forEach(div => div.addEventListener(`mouseenter`, projectImgScale));
projectDiv.forEach(div => div.addEventListener(`mouseleave`, projectImgDescale));

// Dark/Light Mode
darkLightButtons.forEach(button => button.addEventListener(`click`, handleDarkLightMode));