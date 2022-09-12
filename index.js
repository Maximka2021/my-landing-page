const navbarSection = document.querySelector('.navbar-section');
const link = document.getElementsByClassName('link');
const navbarBrend = document.querySelector('.navbar-brend');
const closeLogInBtn = document.getElementById('btn-close');
const logInWindow = document.getElementById('log-in');
const logInSignInBtn = document.getElementById('log-in-sign-in-btn');

window.addEventListener('scroll', () =>{
    let scrolled = Math.floor(window.scrollY);
    if(scrolled != 0){
        navbarSection.classList.add('background');
        navbarBrend.classList.add('color-header');
        for(let i = 0; i < link.length; i++){
            link[i].classList.add('color-link');
        }
    }else{
        navbarSection.classList.remove('background');
        navbarBrend.classList.remove('color-header');
        for(let i = 0; i < link.length; i++){
            link[i].classList.remove('color-link');
        }
    }
})

closeLogInBtn.addEventListener('click', () =>{
    logInWindow.style.display = 'none';
})

logInSignInBtn.addEventListener('click', () =>{
    logInWindow.style.display = 'block';
})



