window.addEventListener('DOMContentLoaded', function() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); // leden je 0
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    document.getElementById('date').setAttribute('min', today);
});

let Questions = document.querySelectorAll(".question");

Questions.forEach((question) => {
    question.addEventListener("click", () => {

        let answer = question.nextElementSibling;
        let faqArrow = question.querySelector("span");
        
        answer.classList.toggle("is-active");
        question.classList.toggle("is-active");
        faqArrow.classList.toggle("is-active");
    });
});

const MenuOpen = document.getElementById("menuOpen")
const MenuClose = document.getElementById("menuClose")
const MenuBox = document.getElementById("menuBox")

MenuOpen.addEventListener("click", () => {
    MenuBox.classList.add("is-active")
    MenuOpen.classList.add("is-active")
})

MenuClose.addEventListener("click", () => {
    MenuBox.classList.remove("is-active")
    MenuOpen.classList.remove("is-active")
    
})

const NavLinks = document.querySelectorAll(".nav-link");

NavLinks.forEach(navLink => {
  navLink.addEventListener("mouseover", () => {

    navLink.classList.toggle("is-active");
  });

  navLink.addEventListener("mouseout", () => {

    navLink.classList.remove("is-active");
  });
});

const Bell = document.getElementById("bell")
const NotificationMenu = document.getElementById("notificationMenu")
const NotificationArrow = document.getElementById("notificationArrow")

Bell.addEventListener("click", () => {
    NotificationMenu.classList.add("is-active")
})
NotificationArrow.addEventListener("click", () => {
    NotificationMenu.classList.remove("is-active")
})

const Section2 = document.getElementById("section-2")
Section2.addEventListener("click", () => {
    MenuBox.classList.remove("is-active")
    MenuOpen.classList.remove("is-active")
})

const Section1 = document.getElementById("section-1")

Section1.addEventListener("click", () => {
    NotificationMenu.classList.remove("is-active")
})




const Slider = (value) => {
    document.getElementById("rangeValue").innerHTML = value + " %"
}




