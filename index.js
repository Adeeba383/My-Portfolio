
function showSection(id) {

    const sections = document.querySelectorAll('.about_section');
    sections.forEach(section => section.style.display = 'none');

    
    const target = document.getElementById(id);
    if (target) {
        target.style.display = 'block';
    }
}

function show(id) {

        const allSections = document.querySelectorAll('.about_services');
        allSections.forEach(section => {
            section.classList.remove('active');
        });

        const activeSection = document.getElementById(id);
        activeSection.classList.add('active');
}

function showProjects(category) {
    const allProjects = document.querySelectorAll('.projects');
    allProjects.forEach(project => {
        project.style.display = 'none';
    });

    const selectedProjects = document.getElementById(category + 'Projects');
    selectedProjects.style.display = 'block';

}

   