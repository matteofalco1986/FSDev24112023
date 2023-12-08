const print = (...args) => {
    console.log(...args);
}

// Sets the header and the button inside a class if a certain condition is met.
const setColorChange = () => {
    const header = document.querySelector('header')
    const button = document.querySelector('.getStarted');
    const topPage = document.getElementById('topPage')
    window.addEventListener("scroll", function(){
        if (topPage.getBoundingClientRect().bottom < header.offsetHeight * 2){
            header.classList.add("colorWhite");
            button.classList.add("colorGreen");
        } else {
            header.classList.remove("colorWhite");
            button.classList.remove("colorGreen");
        }
    })
}

// Global array variable of all letters in the SVG
const svgArt = document.querySelector('svg g g');
const transitionDuration = 500 + 'ms'
const randomizeSpeed = 3;

const randomizeLetters = () => {
    let randomNumber =  Math.floor(Math.random() * (svgArt.children.length + 1));
    let element = svgArt.children[randomNumber];
    if (parseInt(element.getAttribute('opacity')) === 0){
        element.setAttribute('opacity', 1);
        element.style['transition-duration'] = transitionDuration;
    } else {
        element.setAttribute('opacity', 0);
        element.style['transition-duration'] = transitionDuration;
    }
}


window.onload = () => {
    setColorChange();
    let intervalId = setInterval(randomizeLetters, randomizeSpeed)
}




