console.log("Copyright 2023: All rights reserved by Saket Raman.");

var once = true;

window.addEventListener("mousedown", function(e){
    if(e.target.tagName == "BUTTON"){
        if(e.target.id == "1"){
            window.open("https://www.theworldcounts.com/challenges/trade-and-poverty/effects-of-poverty", "_blank");
        }else{
        localStorage.setItem("Image", e.target.id+".png");
        localStorage.setItem("sngno", e.target.id);
        window.open = "xtra.html", "_blank";
        }
    }
});
