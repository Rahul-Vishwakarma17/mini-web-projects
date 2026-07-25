function moveTarget() {
    const maxWidth = 400;
    const maxHeight = 400;

    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);

    target.style.left = randomX + 'px';
    target.style.top = randomY + 'px';
}

const button = document.getElementById('yes');
button.addEventListener('click', function () {
    alert('Congratulation I Love You ')
});


const target = document.getElementById('target');
target.addEventListener('mouseenter', function () {
    moveTarget();
});

