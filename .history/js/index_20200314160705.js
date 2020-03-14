window.onload = () => {
  Works.map(project => {
    showProjects(project);
  });
};

const showProjects = sp => {
  project = ` <div class="col-md-3 p-4">
                        <a href=${sp.url} target="blank"><img src= alt=${sp.title} class="img-thumbnail"><a>
                        <h4 class="text-center text-break text-light mt-2">${sp.title}</h4>
                        <p class="text-center text-break text-light mt-2">${sp.desc}</p>
                        <p class="text-center"><a href=${sp.github} class="text-light" target="blank"><i class="fab fa-github-alt"></i>Repo</a></p>

                    </div>`;
  document
    .getElementById("projectsSlot")
    .insertAdjacentHTML("beforeend", project);
};

<div class="card">
  <img class="card-img-top" src=${sp.image} alt=>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
