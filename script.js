function scrollToContact(){

document
.getElementById("contact")
.scrollIntoView({

behavior:"smooth"

});

}



document
.querySelectorAll("nav a")
.forEach(link=>{


link.addEventListener("click",function(){

console.log("Navigation clicked");

});


});



document
.querySelector("form")
.addEventListener("submit",function(e){

e.preventDefault();


alert(
"Thank you for contacting Hepsi Café!"
);


this.reset();


});
