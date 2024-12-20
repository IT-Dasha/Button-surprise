var spotlight = document.querySelector('.spotlight');
        var spotlightSize = 'transparent 160px, rgba(0, 0, 0, 0.95) 200px)';
        
        window.addEventListener("DOMContentLoaded", () => {
            window.addEventListener('mousemove', e => updateSpotlight(e));

            function updateSpotlight(e) {
                spotlight.style.backgroundImage = `radial-gradient(circle at ${e.pageX / window.innerWidth * 100}% ${e.pageY / window.innerHeight * 100}%, ${spotlightSize}`;
            }
        });