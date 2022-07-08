var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;

  if (element.matches(".box")) {
  if (element === "hidden") {
    element.textContent = element.dataset.number;
    element.dataset.state = "visible";
  } else {
    element.textContent
  }
}});
