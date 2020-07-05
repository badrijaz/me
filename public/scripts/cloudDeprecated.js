var body = document.getElementsByTagName("body")[0];

for (var i = 0; i < 2; i++) {
  var clouds = document.createElement("div");

  clouds.classList.add("clouds");

  var nuvem = document.createElement("div");
  var bcloud = document.createElement("div");
  var cloud = document.createElement("div");

  nuvem.classList.add("nuvem");
  bcloud.classList.add("bcloud");
  cloud.classList.add("cloud");

  var cloudsList = [nuvem, bcloud, cloud];

  clouds.style.position = "absolute";
  clouds.style.zIndex = "-1";
  clouds.style.left = "45%";
  clouds.style.bottom = "35%";

  for (cloudElement of cloudsList) {
    clouds.appendChild(cloudElement);
  }

  body.appendChild(clouds);
}
