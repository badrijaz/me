const categoryContainer = document.getElementById("category");
const categoryArrow = document.getElementById("category-arrow");
const categoryVC = document.getElementById("category-vc");
const myVC = document.getElementById("my-vc");

const lockButton = document.getElementById("lock-button");
const unlockButton = document.getElementById("unlock-button");

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

// Join VC Button
categoryVC.addEventListener("click", (event) => {
  if (joinedVc) return;

  joinedVc = true;
  categoryVC.innerHTML += userInVc;
  categoryVC.classList.toggle("joined")
  categoryVC.style.cursor = "not-allowed";

  lockButton.style.opacity = 1;
  unlockButton.style.opacity = 1;

  lockButton.style.cursor = "pointer";
  unlockButton.style.cursor = "pointer";

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