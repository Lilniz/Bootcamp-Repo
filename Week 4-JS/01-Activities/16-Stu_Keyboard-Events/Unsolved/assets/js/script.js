function keydownAction(event) {
  // TODO: Complete keydown function
  document.querySelector("#status").innerHTML = "KEYDOWN Event";
  document.querySelector("#code").innerHTML = event.keyCode
  console.log(event.keyCode)
  document.querySelector("#key").innerHTML = event.key
  console.log(event.key)
  console.log(event)
}

function keyupAction() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction);
