let lastScroll = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 100) {

        header.style.top = "-100px"; 
    } else {
        header.style.top = "0"; 
    }

    lastScroll = currentScroll; 
});


function generatePixelTransition() {
    const width = window.innerWidth; 
    const height = 250;
    const minSquareSize = 15;
    const maxSquareSize = 20; 
    let svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">`;


    const rows = Math.ceil(height / maxSquareSize);

    for (let row = 0; row < rows; row++) {

        const density = Math.pow(1 - (row / rows), 2);

        for (let i = 0; i < width; i += maxSquareSize) {

            const squareSize = Math.floor(Math.random() * (maxSquareSize - minSquareSize + 1)) + minSquareSize;

            if (Math.random() > density) {
                const y = row * maxSquareSize; 
                svg += `<rect x="${i}" y="${y}" width="${squareSize}" height="${squareSize}" fill="%23121212"/>`;
            }
        }
    }

    svg += `</svg>`;

    const encodedSvg = btoa(svg);
    const dataUri = `data:image/svg+xml;base64,${encodedSvg}`;

    document.querySelector('.pixel-transition').style.backgroundImage = `url("${dataUri}")`;
}

window.addEventListener("load", generatePixelTransition);





document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        question.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
});
