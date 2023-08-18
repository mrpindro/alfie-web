// home page

const homeImg = document.getElementById('hm-img');

const changeHomeImg = () => {
    setTimeout(() => {
        homeImg.src = 'img/work1.JPG';
    }, 0)
    setTimeout(() => {
        homeImg.src = 'img/igbo-comunion.JPG';
    }, 12000)
}

changeHomeImg();

setInterval(() => {
    changeHomeImg()
}, 24000);


// toggle light and dark mode 
const toggle = document.querySelector('.toggle');
const toggleBtn = document.querySelector('.toggle1');

toggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    toggleBtn.classList.toggle('toggle-btn');
})


// Navigation visibility 
const navBar = document.querySelector('.nav-bar');
const navBarIcon = document.querySelector('.fa-bars');
const navBarIcon1 = document.querySelector('.fa-xmark');
const navigations = document.querySelector('.nav-ul');


navBar.onclick = function() {
    navigations.classList.toggle('nav-ul-visible') ? 
    navBarIcon.className = 'fa-solid fa-xmark' :
    navBarIcon.className = 'fa-solid fa-bars';  
}


