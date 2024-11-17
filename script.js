// Fetch Dynamic Content
document.addEventListener("DOMContentLoaded", () => {
    fetch("./data/projects.json")
        .then(response => response.json())
        .then(data => {
            // Bio
            document.getElementById("name").innerText = data.name;
            document.getElementById("summary").innerText = data.summary;

            // Skills
            const skillsList = document.getElementById("skills-list");
            data.skills.forEach(skill => {
                const li = document.createElement("li");
                li.innerText = skill;
                skillsList.appendChild(li);
            });

            // Projects
            const projectsContainer = document.getElementById("projects-container");
            data.projects.forEach(project => {
                const div = document.createElement("div");
                div.className = "project";
                div.innerHTML = `
                    <h4>${project.title}</h4>
                    <p>${project.description}</p>
                    <a href="${project.link}" target="_blank">View Project</a>
                `;
                projectsContainer.appendChild(div);
            });
        });
});

// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode-active");
}
