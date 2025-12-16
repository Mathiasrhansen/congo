function myFunction() {
  var x = document.getElementById("burgermenu-links");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function toggleMobileDropdown(element) {
  element.parentElement.classList.toggle('active');
}