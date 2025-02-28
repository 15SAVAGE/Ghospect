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


// приведения двигаюца
document.addEventListener('DOMContentLoaded', function() {
    const ghosts = document.querySelectorAll('.ghost');

    ghosts.forEach(ghost => {
        const floatDuration = Math.random() * 5 + 3;
        const moveSideDuration = Math.random() * 5 + 4;

        const moveSideDistance = Math.random() * 200 + 50; 
        const moveSideDirection = Math.random() > 0.5 ? 1 : -1; 

        ghost.style.animation = `
            float ${floatDuration}s infinite ease-in-out alternate,
            moveSide ${moveSideDuration}s infinite ease-in-out alternate
        `;

        const styleSheet = document.styleSheets[0];
        styleSheet.insertRule(`
            @keyframes moveSide {
                0% { transform: translateX(0); }
                100% { transform: translateX(${moveSideDistance * moveSideDirection}px); }
            }
        `, styleSheet.cssRules.length);
    });
});
