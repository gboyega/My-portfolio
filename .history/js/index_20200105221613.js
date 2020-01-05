
const showProjects = (sp) => {
    project = ` <div class="col-md-3 p-4">
                        <img src=${sp.img} alt=${sp.title} class="img-thumbnail">
                        <h4 class="text-center text-break text-light mt-2">${sp.title}</h4>
                        <p class="text-center text-break text-light mt-2">${sp.desc}</p>

                        <div>
                            <span>
                                <a href=${sp.} class="text-light float-left ml-5"><i class="fab fa-github-alt" style="font-size: 2rem;"></i></a>
                            </span>
                            <span>
                                <a href="" class="text-light float-right mr-5"><i class="fas fa-external-link-square-alt" style="font-size: 2rem;"></i></a>
                            </span>
                        </div>

                    </div>`;
    document.getElementById("projects").insertAdjacentHTML("beforeend", project);
}