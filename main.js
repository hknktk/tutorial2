{
  let menuBtn = document.getElementById("menuBtn");
  let sideNav = document.getElementById("sideNav");

  sideNav.style.right = "-250px";
  menuBtn.onclick = function(){
    if(sideNav.style.right === "-250px"){
      sideNav.style.right = "0";
    }
    else{
      sideNav.style.right = "-250px";
    }
  };

  let scroll = new SmoothScroll('a[href*="#"]',{
    speed:1000,
    speedAsDuration:true
  });

  let mask = document.getElementById('mask');

  menuBtn.addEventListener('click',()=>{
    mask.style.opacity = 1;
    mask.style.visibility = "visible";
  })

  mask.addEventListener('click',()=>{
    sideNav.style.right = "-250px";
    mask.style.opacity = 0;
    mask.style.visibility = "hidden";
  });

  sideNav.addEventListener('click',()=>{
    sideNav.style.right = "-250px";
    mask.style.opacity = 0;
    mask.style.visibility = "hidden";
  })
  
  
}