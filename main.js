{
  let menuBtn = document.getElementById("menuBtn");
  let sideNav = document.getElementById("sideNav");

  sideNav.style.right = "-100%";
  menuBtn.onclick = function(){
    if(sideNav.style.right === "-100%"){
      sideNav.style.right = "0";
      sideNav.style.opacity = "1";
    }
    else{
      sideNav.style.right = "-100%";
      sideNav.style.opacity = "0";
    }
  };


  let mask = document.getElementById('mask');

  menuBtn.addEventListener('click',()=>{
    mask.classList.toggle("active");
  })

  mask.addEventListener('click',()=>{
    sideNav.style.right = "-100%";
    mask.classList.toggle("active");
    sideNav.style.opacity = "0";
  });

  sideNav.addEventListener('click',()=>{
    sideNav.style.right = "-100%";
  });

  sideNav.addEventListener('click',()=>{
    mask.classList.toggle("active");
    sideNav.style.opacity = "0";
  })


  
  
}