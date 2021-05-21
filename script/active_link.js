// Get the container element
var btnContainer = document.getElementById("shop-single__link");

// Get all buttons with class="shop-linkl" inside the container
var btns = btnContainer.getElementsByClassName("shop-link");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("shop-link__active");
    current[0].className = current[0].className.replace(" shop-link__active", "");
    this.className += " shop-link__active";
  });
}