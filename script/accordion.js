var acc = document.getElementsByClassName("accordion__question");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var accordion__answer = this.nextElementSibling;
    if (accordion__answer.style.maxHeight) {
      accordion__answer.style.maxHeight = null;
    } else {
      accordion__answer.style.maxHeight = accordion__answer.scrollHeight + "px";
    } 
  });
}