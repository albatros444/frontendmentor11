const button = document.querySelector(
  ".card__article__personData__linksContainer__linksButton"
);
const modal = document.querySelector(
  ".card__article__personData__linksContainer__linksModal"
);
const buttonMobile = document.querySelector(
  ".card__modalForMobile__linksButton"
);
const modalMobile = document.querySelector(".card__modalForMobile");
///desktop
button.addEventListener("click", () => {
  modalMobile.classList.toggle("visibleMobile");
  modal.classList.toggle("visibleDesktop");
  button.classList.toggle("open");
});
///mobile

buttonMobile.addEventListener("click", () => {
  modalMobile.classList.toggle("visibleMobile");
  modal.classList.toggle("visibleDesktop");
  button.classList.toggle("open");
});
