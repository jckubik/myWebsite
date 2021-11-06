const mainNav = document.querySelector(`#main`);
const topOfNav = mainNav.offsetTop;
const projectDiv = document.querySelectorAll(`div.project`);

function fixMainNav() {
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = mainNav.offsetHeight + `px`;
    document.body.classList.add(`fixed-nav`);
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove(`fixed-nav`);
  }
}

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


// Event Listners ------------------------------------

// -- For sticky nav bar
window.addEventListener(`scroll`, fixMainNav);

// Project picture scales on hover
projectDiv.forEach(div => div.addEventListener(`mouseenter`, projectImgScale));

projectDiv.forEach(div => div.addEventListener(`mouseleave`, projectImgDescale));