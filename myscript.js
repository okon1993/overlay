 var navbarBtn = document.querySelector(".navbar-btn");
 var navbarLinks = document.querySelector(".navbar-link");

 navbarBtn.addEventListener("click", toggleNavbar);
 function toggleNavbar(){
     let value = navbarLinks.classList.contains("navbar-collapse")
     if(value){
        navbarLinks.classList.remove("navbar-collapse")
        navbarBtn.classList.remove("changeBtn")
     }
     else{
        navbarLinks.classList.add("navbar-collapse")
        navbarBtn.classList.add("changeBtn")
     }
 }