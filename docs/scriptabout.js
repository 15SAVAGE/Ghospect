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
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        question.addEventListener('click', () => {
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-answer').style.maxHeight = '0';
                }
            });
            if (item.classList.contains('active')) {
                item.classList.remove('active');
                answer.style.maxHeight = '0'; 
            } else {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
});
// рыбки двигаюца
document.querySelectorAll('.fish img').forEach(fish => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    fish.style.setProperty('--x1', `${Math.random() * (screenWidth * 0.5 - 100)}px`); 
    fish.style.setProperty('--y1', `${Math.random() * (screenHeight * 0.5 - 100)}px`);
    fish.style.setProperty('--x2', `${Math.random() * (screenWidth * 0.5 - 100)}px`);
    fish.style.setProperty('--y2', `${Math.random() * (screenHeight * 0.5 - 100)}px`);
    fish.style.setProperty('--x3', `${Math.random() * (screenWidth * 0.5 - 100)}px`);
    fish.style.setProperty('--y3', `${Math.random() * (screenHeight * 0.5 - 100)}px`);
    fish.style.setProperty('--x4', `${Math.random() * (screenWidth * 0.5 - 100)}px`);
    fish.style.setProperty('--y4', `${Math.random() * (screenHeight * 0.5 - 100)}px`);
});


// хыхы пузирики
document.addEventListener("DOMContentLoaded", function () {
    const bubblesContainer = document.getElementById("bubbles-container");
    function createBubble() {
        const bubble = document.createElement("div");
        bubble.classList.add("bubble");
        const randomX = Math.random() * window.innerWidth;
        bubble.style.left = `${randomX}px`;
        const randomZIndex = [-1, 0, 1][Math.floor(Math.random() * 4)];
        bubble.style.zIndex = randomZIndex;
        const randomDelay = Math.random() * 2;
        bubble.style.animationDelay = `${randomDelay}s`;
        bubblesContainer.appendChild(bubble);
        bubble.addEventListener("animationend", () => {
            bubble.remove();
        });
    }
    for (let i = 0; i < 5; i++) {
        createBubble();
    }
    setInterval(createBubble, 2000);
});








document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('language-toggle');
    const elementsToTranslate = document.querySelectorAll('[data-lang-ru], [data-lang-en]');

    let isRussian = false;

    toggleButton.addEventListener('click', function () {
        isRussian = !isRussian;
        toggleButton.textContent = isRussian ? 'Русский' : 'English';

        elementsToTranslate.forEach(element => {
            if (isRussian) {
                if (element.dataset.langRu) {
                    element.textContent = element.dataset.langRu;
                }
            } else {
                if (element.dataset.langEn) {
                    element.textContent = element.dataset.langEn;
                }
            }
        });
    });
}); 
