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

        if (flag) {
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

    // HEADER

    const memoji = document.querySelector('.memoji-container');
    const bulb = document.querySelector('.fa-lightbulb');
    const task = document.querySelector('.fa-tasks');
    const calendar = document.querySelector('.fa-calendar-check');
    const hand = document.querySelector('.fa-handshake');
    const comments = document.querySelector('.fa-comments');
    const wrapper = document.querySelector('.wrapper');

    bulb.addEventListener("mouseover", () => {
        memoji.style.backgroundImage = "url(/img/up.png)";
    })

    task.addEventListener('mouseover', () => {
        memoji.style.backgroundImage = "url(/img/left.png)";
    })

    calendar.addEventListener("mouseover", () => {
        memoji.style.backgroundImage = "url(/img/right.png)";
    })

    hand.addEventListener("mouseover", () => {
        memoji.style.backgroundImage = "url(/img/left-up.png)";
    })

    comments.addEventListener("mouseover", () => {
        memoji.style.backgroundImage = "url(/img/right-up.png)";
    })

    wrapper.addEventListener("click", () => {
        memoji.style.backgroundImage = "url(/img/front.png)";
    })
