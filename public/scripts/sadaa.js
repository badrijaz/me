const categoryContainer = document.getElementById("category");
const categoryArrow = document.getElementById("category-arrow");
const categoryVC = document.getElementById("category-vc");
const myVC = document.getElementById("my-vc");

let joinedVc = false;

const categoryVcInnerHTML = categoryVC.innerHTML;
const userInVc = `<div class="vc-users">
  <img src="./images/favicon.ico" alt="avatar" />
  <p>Badr</p>
</div>
`

const collapsedCateogry = `<img src="./images/speaker.svg" alt="speaker" />
  <img style="margin-left: 0.5rem;" src="./images/favicon.ico" alt="avatar" />
`
const collapsedCategoryDiv = document.createElement("div");
collapsedCategoryDiv.classList.add("discord-container-vc");
collapsedCategoryDiv.innerHTML = collapsedCateogry;

categoryContainer.addEventListener("click", (event) => {
  categoryArrow.classList.toggle("rotate");
  categoryVC.classList.toggle("hide");
  myVC.classList.toggle("hide");

  if (myVC.classList.contains("hide") && joinedVc) {
    categoryContainer.appendChild(collapsedCategoryDiv);
    return;
  }

  categoryContainer.removeChild(collapsedCategoryDiv);
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

const vcLock = document.getElementById("vc-lock");
function lock() {
  vcLock.classList.add("show");
}

function unlock() {
  vcLock.classList.remove("show");
}