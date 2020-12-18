function projectTitle(project) {
    var projectTitle = document.getElementsByClassName("project-title")[0];
    var waves = document.getElementsByClassName("wave-front-path")[0];


    if (project === "locket") {
        projectTitle.style.color = "#fdfd02";
        waves.style.fill = "#fdfd02";
    }

    if (project === "steve") {
        projectTitle.style.color = "#ff7e15";
        waves.style.fill = "#ff7e15";
    }

}

function resetProjectTitle() {
    var projectTitle = document.getElementsByClassName("project-title")[0];
    var waves = document.getElementsByClassName("wave-front-path")[0];

    projectTitle.style.color = "rgb(76, 201, 223)";
    waves.style.fill = "rgb(76, 201, 223)";
}
