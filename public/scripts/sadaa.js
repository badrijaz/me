const categoryContainer = document.getElementById("category");
const categoryArrow = document.getElementById("category-arrow");
const categoryVC = document.getElementById("category-vc");
const myVC = document.getElementById("my-vc");

let joinedVc = false;

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
  if (joinedVc) return;

  joinedVc = true;
  categoryVC.innerHTML += userInVc;
  categoryVC.classList.toggle("joined")
  categoryVC.style.cursor = "not-allowed";

  setTimeout(() => {
    categoryVC.innerHTML = categoryVcInnerHTML;

    myVC.style.display = "block";
  }, 200);
});