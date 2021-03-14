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


  let mask = document.getElementById('mask');

  menuBtn.addEventListener('click',()=>{
    mask.classList.toggle("active");
  })

  mask.addEventListener('click',()=>{
    sideNav.style.right = "-250px";
    mask.classList.toggle("active");
  });

  sideNav.addEventListener('click',()=>{
    sideNav.style.right = "-250px";
  });

  sideNav.addEventListener('click',()=>{
    mask.classList.toggle("active");
  })


  
  
}