var mainAquaColor = "rgb(76, 201, 223)";

var projectTitleText;
var waves;
var topContainerBorder;

document.addEventListener('DOMContentLoaded', function () {
    projectTitleText = document.getElementsByClassName("project-title")[0];
    waves = document.getElementsByClassName("wave-front-path")[0];
    topContainerBorder = document.getElementsByClassName("top-container")[0];
});

function projectTitle(project) {

    if (project === "locket") {
        projectTitleText.style.color = "#fdfd02";
        waves.style.fill = "#fdfd02";
        topContainerBorder.style.borderBottom = "solid 1px #fdfd02";
    }

    if (project === "steve") {
        projectTitleText.style.color = "#ff7e15";
        waves.style.fill = "#ff7e15";
        topContainerBorder.style.borderBottom = "solid 1px #ff7e15";
    }

}

function resetProjectTitle() {

    projectTitleText.style.color = mainAquaColor;
    waves.style.fill = mainAquaColor;
    topContainerBorder.style.borderBottom = `solid 1px ${mainAquaColor}`;
}
