/* Card rotation */
const card = [...document.querySelectorAll('.card')];

const cards = card.forEach;

let flag = true;

function rotateCard() {

    if (flag) {
        this.style.transform = "rotateY(180deg)";
        flag = false;
    } else {
        this.style.transform = "rotateY(0deg)"
        flag = true;
    }
};

for (let i = 0; i < card.length; i++) {
    const element = card[i];
    element.addEventListener('click', rotateCard);
}
