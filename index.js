const banner = document.querySelector('.banner')

const images = ['donation11.jpg', 'donation6.jpg', 'donation7.jpg', 'donation8.jpg']

const changeBackground = (number) => {
    banner.style.backgroundImage = `url('images/${images[number]}')`;
}
let number = 0;

setInterval(() => {
    if (number === images.length) {
        number = 0;
    }
    changeBackground(number)
    number++;
    console.log(number)
}, 3000);
