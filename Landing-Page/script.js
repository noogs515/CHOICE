let scrolled = false; // Flag to ensure the jump happens only once

window.addEventListener('scroll', function () {
    const bottomNav = document.getElementById('bottomNav');
    const description = document.getElementById('description');

    if (window.scrollY > 80 && !scrolled) { // When scroll exceeds 100px and not already scrolled
        bottomNav.classList.add('fixedNav');  // Add fixedNav class to bottomNav
        description.scrollIntoView({ behavior: 'smooth' });  // Scroll smoothly to the description
        scrolled = true; // Set flag to true to prevent further jumps
    } else if (window.scrollY <= 100) {
        bottomNav.classList.remove('fixedNav');  // Remove fixedNav class from bottomNav
        scrolled = false; // Reset flag when scrolled back to the top
    }
});


document.getElementById("apply").addEventListener("click", function() {
    window.location.href = "Job Application/index.html";
});
