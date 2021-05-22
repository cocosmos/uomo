/*Js for product gallery*/
var ProductImg = document.getElementById("ProductImg");
var SmallImg = document.getElementsByClassName("small-img");

SmallImg[0].onclick = function(){
  ProductImg.src = SmallImg[0].src;
}
SmallImg[1].onclick = function(){
  ProductImg.src = SmallImg[1].src;
}
SmallImg[2].onclick = function(){
  ProductImg.src = SmallImg[2].src;
}
SmallImg[3].onclick = function(){
  ProductImg.src = SmallImg[3].src;
}

var slider_img = document.querySelector('.ProductImg');
var i=0;

function prev(){
  if(i<= 0) i = SmallImg.length;
  i--;
  ProductImg.src = SmallImg[i].src;
}
function next(){
  if(i>= SmallImg.length-1) i = -1;
  i++;
  ProductImg.src = SmallImg[i].src;
}

var action = 1;

function zoom(){
  if ( action == 1 ) {
    ProductImg.style.transform = "scale(1.5)";
    ProductImg.style.transition = "transform 0.25s ease";
    action = 2;
} else {
    ProductImg.style.transform = "scale(1)";
    ProductImg.style.transition = "transform 0.25s ease";
    action = 1;
}
}
