document.addEventListener('DOMContentLoaded', (event) => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.oncontextmenu = function() {
            return false;
        }
    });
});