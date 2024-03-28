document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.h2-container h2');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Hide all content sections
            document.querySelectorAll('.content-section').forEach(section => {
                section.style.display = 'none';
            });

            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));

            // Add active class to clicked tab
            this.classList.add('active');

            // Show the corresponding content section
            const contentId = 'content-' + this.id;
            const contentSection = document.getElementById(contentId);
            if (contentSection) {
                contentSection.style.display = 'block';
            }
        });
    });
});
