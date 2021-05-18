function btn_description(){
    var add=document.getElementById("additional");
    var desc=document.getElementById("description");
    var rev=document.getElementById("reviews");
    
    rev.style.display = "none";
    add.style.display = "none";
    desc.style.display = "block";
}

function btn_additional(){
    var add=document.getElementById("additional");
    var desc=document.getElementById("description");
    var rev=document.getElementById("reviews");
    
    rev.style.display = "none";
    desc.style.display = "none";
    add.style.display = "block";
}

function btn_reviews(){
    var add=document.getElementById("additional");
    var desc=document.getElementById("description");
    var rev=document.getElementById("reviews");
    
    rev.style.display = "block";
    add.style.display = "none";
    desc.style.display = "none";
}
