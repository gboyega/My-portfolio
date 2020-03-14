window.onload = () => {
  Works.map(project => {
    showProjects(project);
  });
};

const showProjects = sp => {
  project = `<div class ="col-sm-3 mb-5" >
  <div class="card h-100 text-white border-info bg-dark mb-3">
  <img class="card-img-top" src=${sp.image} alt=${sp.title}>
  <div class="card-body">
    <h5 class="card-title">${sp.title}</h5>
    <p class="card-text">${sp.desc}</p>
  </div>
  <div class="card-footer">
    <a href=${sp.github} class="text-info card-link" target="blank"><i class="fab fa-github-alt"></i> Repo</a>
    <a href=${sp.url} class="text-info text-end card-link" target="blank"><i class="fas fa-globe"></i> lie</a>
  </div>
  </div>
</div>`;
  document
    .getElementById("projectsSlot")
    .insertAdjacentHTML("beforeend", project);
};
