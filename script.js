const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav= document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click',() =>{
        nav.classList.add('active')
    })
}
if (close) {
    close.addEventListener('click',() =>{
        nav.classList.remove('active');
    })
}

// products image change---------

var Mainimg=document.getElementById("MainImg");
  var Simg=document.getElementsByClassName("small-img");
  Simg[0].onclick=function(){
    Mainimg.src=Simg[0].src;
  }
  Simg[1].onclick=function(){
    Mainimg.src=Simg[1].src;
  }
  Simg[2].onclick=function(){
    Mainimg.src=Simg[2].src;
  }
  Simg[3].onclick=function(){
    Mainimg.src=Simg[3].src;
  }