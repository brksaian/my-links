function toggleTheme() {
  var element = document.documentElement;
  element.classList.toggle("light");

  const img = element.querySelector("#profile img");

  if (element.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png");
  } else {
    img.setAttribute("src", "./assets/avatar.png");
  }
}
