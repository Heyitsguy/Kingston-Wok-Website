document.addEventListener('DOMContentLoaded', function(){
  let wrapper = document.querySelector(".wrapper");
  let top = document.querySelector(".top");
  let handle = document.querySelector(".handle");
  let skew = 0;
  let delta= 0;

  if (wrapper.className.indexOf("skewed") != -1){
    skew = 985;
  }

  wrapper.addEventListener("mousemove", function(e){
    delta = (e.clientX - window.innerWidth/2) * 0.5;
    handle.style.left = e.clientX + delta + "px";
    top.style.width = e.clientX + skew + delta + 'px';
  });
});

var burgerContainer = document.getElementById("burger-container");

burgerContainer.addEventListener('click', function(){
  let overlay = document.querySelector('.overlay');
  setTimeout(function(){
    overlay.classList.toggle('display-block');
  },300);
  this.classList.toggle('open');
});
