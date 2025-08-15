// Smooth scroll for menu links
document.querySelectorAll('.scroll-menu a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        let target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Popup logic
function openPopup(id) {
    document.getElementById(id).style.display = 'block';
}
function closePopup(id) {
    document.getElementById(id).style.display = 'none';
}

// Close popup on outside click
window.onclick = function(event) {
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => {
        if (event.target === popup) popup.style.display = "none";
    });
}
