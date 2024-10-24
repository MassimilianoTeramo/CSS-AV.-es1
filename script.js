//esercizio 1

document.addEventListener('DOMContentLoaded', function() {
    let linkTwt = document.querySelector(".blog-sidebar .p-4:nth-of-type(3) li:nth-of-type(2)");
   linkTwt.style.display="none"

})

//esercizio 2

let linkContinua = document.querySelector(".jumbotron p a" );
linkContinua.addEventListener('click', function(linkContinua){
   
    
    let ElementToRemove = document.querySelector(".jumbotron h1")
    let ElementToRemove2 = document.querySelector(".jumbotron p:nth-of-type(1)")
   
        ElementToRemove.style.display="none"
        ElementToRemove2.style.display="none"
        linkContinua.preventDefault()
    })

//esercizio 3

let nomiAut = document.querySelectorAll(".blog-main .blog-post .blog-post-meta a")

for (let i=0; i<nomiAut.length; i++){
    nomiAut[i].addEventListener('mouseover', function(){
    
    alert(nomiAut[i].textContent)
   
    })}
