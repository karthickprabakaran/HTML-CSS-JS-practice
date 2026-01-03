

const bodyEl = document.querySelector('body');

bodyEl.addEventListener('mousemove', () => {

    const xPosition = event.offsetX;
    const yPosition = event.offsetY;

    const spanEl = document.createElement('span');
    spanEl.style.left = xPosition + 'px';
    spanEl.style.top = yPosition + 'px';
    bodyEl.appendChild(spanEl);
    setTimeout(() => {
        spanEl.remove();
    }, 2000);
    
});