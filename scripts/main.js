let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let mountains_front = document.getElementById('mountains_front');
let text = document.getElementById('text');
let kiki = document.getElementById('kiki');

const isMobile = window.innerWidth <= 768;

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    const multiplier = isMobile ? 0.5 : 1;
    
    stars.style.transform = `translateX(${value * 0.5 * multiplier}px)`;
    moon.style.transform = `translateY(${value * 0.8 * multiplier}px)`;
    mountains_behind.style.transform = `translateY(${value * 0.3 * multiplier}px)`;
    mountains_front.style.transform = `translateY(${value * 0}px)`;
    
    if (isMobile) {
        text.style.transform = `translate(-50%, calc(-50% + ${value * 0.8}px))`;
    } else {
        text.style.transform = `translate(calc(-50% + ${value * 2}px), -50%)`;
    }
    
    kiki.style.transform = `translate(-50%, ${value * 1.1 * multiplier}px)`;
});


window.addEventListener('resize', function() {
    
    const newIsMobile = window.innerWidth <= 768;
    if (newIsMobile !== isMobile) {
        location.reload(); // Simple reload to apply new mobile settings
    }
});