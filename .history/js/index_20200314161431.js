window.onload = () => {
  Works.map(project => {
    showProjects(project);
  });
};

const showProjects = sp => {
  project = ` <div class="col-md-3 p-4">
                        <a href=${sp.url} target="blank"><img src= alt= class="img-thumbnail"><a>
                        <h4 class="text-center text-break text-light mt-2"></h4>
                        <p class="text-center text-break text-light mt-2"></p>
                        <p class="text-center">

                    </div>`;
  document
    .getElementById("projectsSlot")
    .insertAdjacentHTML("beforeend", project);
};

<div class="card">
  <img class="card-img-top" src=${sp.image} alt=${sp.title}>
  <div class="card-body">
    <h5 class="card-title">${sp.title}</h5>
    <p class="card-text">${sp.desc}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
  <div class="card-body">
    <a href=${sp.github} class="text-light card-link" target="blank"><i class="fab fa-github-alt"></i>Repo</a>
    <a href= class="text-light card-link" target="blank"><i class="fab fa-github-alt"></i>Website</a>
  </div>
</div>
