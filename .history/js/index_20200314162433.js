window.onload = () => {
  Works.map(project => {
    showProjects(project);
  });
};

const showProjects = sp => {
  project = `<div class="card text-white bg-dark mb-3">
  <img class="card-img-top" src=${sp.image} alt=${sp.title}>
  <div class="card-body">
    <h5 class="card-title">${sp.title}</h5>
    <p class="card-text">${sp.desc}</p>
  </div>
  <div class="card-body">
    <a href=${sp.github} class="text-ifo card-link" target="blank"><i class="fab fa-github-alt"></i>Repo</a>
    <a href=${sp.url} class="text-success card-link" target="blank"><i class="fab fa-github-alt"></i>Website</a>
  </div>
</div>`;
  document
    .getElementById("projectsSlot")
    .insertAdjacentHTML("beforeend", project);
};
