const cardTitle = document.querySelector(".card-title");
const card = document.querySelector(".card");
cardTitle.addEventListener("mouseover", () => {
  card.classList.toggle("active");
});

cardTitle.addEventListener("mouseout", () => {
  card.classList.toggle("active");
});
