function projectTitle(project) {

    var projectTitle = document.getElementsByClassName("project-title")[0];

    if (project === "azure")
        projectTitle.style.color = "rgb(76, 201, 223)";

    if (project === "locket")
        projectTitle.style.color = "#fdfd02";

    if (project === "steve")
        projectTitle.style.color = "#ff7e15";

    setTimeout(function () {
        projectTitle.style.color = "rgb(76, 201, 223)";
    }, 3000);
}

function resetProjectTitle() {
    var projectTitle = document.getElementsByClassName("project-title")[0];
    projectTitle.style.color = "rgb(76, 201, 223)";
}
