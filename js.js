function showSection(id) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    const active = document.getElementById(id);
    if (active) {
        active.style.display = 'block';
        active.scrollIntoView({ behavior: 'smooth' });
    }
}