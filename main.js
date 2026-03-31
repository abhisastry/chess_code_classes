document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-btn');
    const pageSections = document.querySelectorAll('.page-section');

    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and sections
            navButtons.forEach(b => b.classList.remove('active'));
            pageSections.forEach(s => s.classList.remove('active'));

            // Add active class to clicked button
            btn.classList.add('active');

            // Show target section
            const targetId = btn.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });
});
