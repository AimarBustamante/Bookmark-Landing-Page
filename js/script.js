// Variables

const navButton = document.querySelector(".nav__button");
const navMenu = document.querySelector(".nav__container");

const tabButtons = document.querySelectorAll(".features__tab")

const clickQuestions = document.querySelectorAll(".article__question")

// Nav Menu Function
navButton.addEventListener('click', ()=>{

    const navLogo = document.querySelector('.nav__logo');
    navMenu.classList.toggle('nav__container--active');

    if(navMenu.classList.contains('nav__container--active')){
        navLogo.setAttribute('src', './images/logo-bookmark-white.svg');
        navButton.setAttribute('src', '././images/icon-close.svg');
    }else{
        navLogo.setAttribute('src', './images/logo-bookmark.svg');
        navButton.setAttribute('src', '././images/icon-hamburger.svg');
    }

});

// Tab Buttons Functions

const removeActiveElements = (selector) =>{
    const elementsActive = document.querySelectorAll(`.${selector}`);

    if (elementsActive.length){
        elementsActive.forEach(elementActive =>{
            elementActive.classList.remove(selector)
        })
    }
}

tabButtons.forEach(tabButton =>{
    tabButton.addEventListener('click', (e)=>{
        e.preventDefault();

        if(!tabButton.classList.contains('features__tab--active')){
            
            const articleNumber = tabButton.getAttribute('data-article');

            const articleShow = document.querySelector(`.features__article:nth-of-type(${articleNumber})`);

            console.log(articleNumber);

            removeActiveElements('features__article--active');
            removeActiveElements('features__tab--active');


            articleShow.classList.add('features__article--active');
            tabButton.classList.add('features__tab--active');

        }
    })
});

// FAQ Function

clickQuestions.forEach(clickQuestion => {
    clickQuestion.addEventListener("click", ()=>{

        const arrow = clickQuestion.children[0];
        arrow.classList.toggle("article__arrow--rotate")

        const answerContainer = clickQuestion.nextElementSibling;
        answerContainer.classList.toggle("article__content--show")
        console.log();
    });
});

window.addEventListener("resize", ()=>{
    const isMenuActive = document.querySelector(".nav__container--active")

    if (isMenuActive) {
        const navLogo = document.querySelector('.nav__logo');
        navMenu.classList.remove("nav__container--active")
        navLogo.setAttribute('src', './images/logo-bookmark.svg');
        navButton.setAttribute('src', '././images/icon-hamburger.svg');
    }
})