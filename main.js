"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form');
    const resumeContainer = document.getElementById('resume');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const education = document.getElementById('education').value;
        const work = document.getElementById('work-experience').value;
        const skills = document.getElementById('skills').value.split(',');
        resumeContainer.innerHTML = '';
        const resumeHtml = `
      <h2>${name}</h2>
      <p>Email: ${email}</p>
      <h3>Eductaion</h3>
      <p>${education}</p>
      <h3>Work Experience</h3>
      <p>${work}</p>
      <h3>Skills</h3>
          <ul>
            ${skills.map(skil => `<li>${skil.trim()}</li>`).join('')}         
          </ul>
      `;
        resumeContainer.innerHTML = resumeHtml;
    });
});
