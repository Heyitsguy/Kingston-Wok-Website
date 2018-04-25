document.addEventListener('DOMContentLoaded', function(){
  let wrapper = document.querySelector(".wrapper");
  let top = document.querySelector(".top");
  let handle = document.querySelector(".handle");
  let skew = 0;
  let delta= 0;

  if (wrapper.className.indexOf("skewed") != -1){
    skew = 1000;
  }

  wrapper.addEventListener("mousemove", function(e){
    delta = (e.clientX - window.innerWidth/2) * 0.5;
    console.log(e.clientX); //Test only
    handle.style.left = e.clientX + delta + "px";
    top.style.width = e.clientX + skew + delta + 'px';
  });
});
