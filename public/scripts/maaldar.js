const categoryContainer = document.getElementById("category");
const categoryArrow = document.getElementById("category-arrow");
const categoryVC = document.getElementById("category-vc");

categoryContainer.addEventListener("click", (event) => {
  categoryArrow.classList.toggle("rotate");
  categoryVC.classList.toggle("hide");
});