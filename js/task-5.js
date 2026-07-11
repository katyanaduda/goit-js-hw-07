function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

function handleColor() {
    const $color = document.querySelector('span.color');
    const $body = document.querySelector('body');
    const $button = document.querySelector('button');

    function changeColor() {
        const randomColor = getRandomHexColor();
        $color.textContent = randomColor;
        $body.style.backgroundColor = randomColor;
    }

    $button.addEventListener('click', changeColor);
}

handleColor();