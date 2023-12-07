const burger = document.querySelector(".burger-menu")
const burgerClose = document.querySelector(".burger-menu-close")
const navBar = document.querySelector(".navigation")
console.log(navBar)

burger.addEventListener("click", (e)=>{
    e.preventDefault();
    burger.classList.add('active');
    navBar.classList.add('active');
    // e.classList.add("active");
})

burgerClose.addEventListener("click", (e)=>{
    e.preventDefault();
    burgerClose.classList.remove('active');
    navBar.classList.remove('active');
    // e.classList.add("active");
})

