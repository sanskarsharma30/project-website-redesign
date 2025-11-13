document.addEventListener("DOMContentLoaded", () => {
    
    const container = document.querySelector('.card-container');
    const leftBtn = document.getElementById('scrollLeft');
    const rightBtn = document.getElementById('scrollRight');

    
    const scrollContainer = (direction) => {
        
        const card = container.querySelector('.card');        
        if (!card) return;        
        const scrollAmount = card.clientWidth + 32; 
        if (direction === 'left') {
            container.scrollBy({
                left: -scrollAmount, 
                behavior: 'smooth'
            });
        } else {
            container.scrollBy({
                left: scrollAmount, 
                behavior: 'smooth'
            });
        }
    };

    leftBtn.addEventListener('click', () => scrollContainer('left'));
    rightBtn.addEventListener('click', () => scrollContainer('right'));
});