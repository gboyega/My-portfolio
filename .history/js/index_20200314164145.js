window.onload = () => {
  Works.map(project => {
    showProjects(project);
  });
};

const showProjects = sp => {
  project = `<div class ="col-sm-4 mb-5" >
  <div class="card text-white border-info bg-dark mb-3">
  <img class="card-img-top" src=${sp.image} alt=${sp.title}>
  <div class="card-body">
    <h5 class="card-title">${sp.title}</h5>
    <p class="card-text">${sp.desc}</p>
  </div>
  <div class="card-footer">
    <a href=${sp.github} class="text-info card-link" target="blank"><i class="fab fa-github-alt"></i>Repo</a>
    <a href=${sp.url} class="text-info card-link" target="blank"><i class="fab fa-github-alt"></i>Website</a>
  </div>
  </div
</div>`;
  document
    .getElementById("projectsSlot")
    .insertAdjacentHTML("beforeend", project);
};
