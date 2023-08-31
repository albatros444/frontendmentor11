const button = document.querySelector(
  ".card__article__personData__linksContainer__linksButton"
);
const modal = document.querySelector(
  ".card__article__personData__linksContainer__linksModal"
);
button.addEventListener("click", () => {
  modal.classList.toggle("visible");
  button.classList.toggle("open");
});
