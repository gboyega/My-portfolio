
const showProjects = (singleroject) => {
    project = ` <div class="col-md-3 p-4">
                        <img src="http://via.placeholder.com/300x300" alt="..." class="img-thumbnail">
                        <h4 class="text-center text-break text-light mt-2">Lrem</h4>
                        <p class="text-center text-break text-light mt-2">Lorem</p>

                        <div>
                            <span>
                                <a href="" class="text-light float-left ml-5"><i class="fab fa-github-alt" style="font-size: 2rem;"></i></a>
                            </span>
                            <span>
                                <a href="" class="text-light float-right mr-5"><i class="fas fa-external-link-square-alt" style="font-size: 2rem;"></i></a>
                            </span>
                        </div>

                    </div>`;
    document.getElementById("projects").insertAdjacentHTML("beforeend", project);
}