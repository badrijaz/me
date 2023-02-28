const categoryContainer = document.getElementById("category");
const categoryArrow = document.getElementById("category-arrow");
const categoryVC = document.getElementById("category-vc");

let joiningVc = false;

const categoryVcInnerHTML = categoryVC.innerHTML;
const userInVc = `<div class="vc-users">
  <img src="./images/github.svg" alt="avatar" />
  <p>Badr</p>
</div>
`

categoryContainer.addEventListener("click", (event) => {
  categoryArrow.classList.toggle("rotate");
  categoryVC.classList.toggle("hide");
});

categoryVC.addEventListener("click", (event) => {
  if (joiningVc) return

  joiningVc = true;
  categoryVC.innerHTML += userInVc;

  setTimeout(() => {
    categoryVC.innerHTML = categoryVcInnerHTML;
    joiningVc = false;
  }, 200);
});