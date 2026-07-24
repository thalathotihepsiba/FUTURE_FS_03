function scrollToContact(){

    document
    .getElementById("contact")
    .scrollIntoView({
        behavior:"smooth"
    });

}


document.querySelectorAll("nav a")
.forEach(link=>{

link.addEventListener("click",function(){

console.log("Section opened");

});

});
