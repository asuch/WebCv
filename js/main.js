    /* NAVBAR */

let prevScrollPos = window.pageYOffset;
const nav = document.querySelector('nav');

window.onscroll = () => {
    let currentScrollPos = window.pageYOffset
    if (prevScrollPos > currentScrollPos) {
        nav.style.top = "20px";
    } else {
        nav.style.top = "-70px";
    }
    prevScrollPos = currentScrollPos;
}

/* SKILLS WINDOWS */

const windows = [...document.querySelectorAll('.skill-window')];

let flag = true;

function rotateWindow() {

    if(flag) {
        this.style.transform = "rotateY(180deg)";
        flag = false;
    } else {
        this.style.transform = "rotateY(0deg)"
        flag = true;
    }
};

for (let i = 0; i < windows.length; i++) {
    const element = windows[i];
    element.addEventListener('click', rotateWindow);
}

/* PHONE ICON */

const phone = document.querySelector('.phone');

phone.addEventListener("click", () => {
    alert("Mój numer telefonu: 664 038 460")
});

/* SCROLL */

const actualScroll = window.scrollY;
let scrollActive = true;

window.addEventListener('scroll', () => {
    const actualScroll = window.scrollY;
    
    if (actualScroll > 1000 && scrollActive == true) {
        alert("Wciśnij ikonę umiejętności aby poznać szczegóły")
        scrollActive = false;
    }
})