var a=document.querySelector("h1")
a.addEventListener("mouseover",function(){
    a.textContent="Moye Moye";
    a.style.color="red";
})

a.addEventListener("mouseout",function() {
    a.textContent="welcome to hell";
    a.style.color="black";
})

var b=document.querySelector("h2")
b.addEventListener("click",function(){
    b.textContent="sabu bhala ta";
    b.style.color="blue";
})
b.addEventListener("dbclick",function(){
    b.textContent="haan bhala";
    b.style.color="purple";
})