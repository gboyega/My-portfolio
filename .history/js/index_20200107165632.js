window.onload= () => {Works.map((project)=>{showProjects(project)})};

const showProjects = (sp) => {
    project = ` <div class="col-md-3 p-4">
                        <a href=${sp.url} target="blank"><img src=${sp.image} alt=${sp.title} class="img-thumbnail"><a>
                        <h4 class="text-center text-break text-light mt-2">${sp.title}</h4>
                        <p class="text-center text-break text-light mt-2">${sp.desc}</p>

                        <div
                            <span>
                                <a href=${sp.github} class="text-light float-left ml-5" target="blank"><i class="fab fa-github-alt" style="font-size: 2rem;" ></i></a>
                            </span>

                    </div>`;
    document.getElementById("projectsSlot").insertAdjacentHTML("beforeend", project);
}