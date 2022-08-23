const url = "https://api.github.com/users"

async function getRepos(urlUser) {
    axios.get(urlUser)
    .then((res) => {
        const data = res.data
        data.forEach((repos) => {
            const modelReposBox = `
                <div class="projects_box projects_box-style">
                    <div class="projects_title">
                        <!-- FOLDER ICON -->
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.3333 15.8333C18.3333 16.2754 18.1577 16.6993 17.8452 17.0118C17.5326 17.3244 17.1087 17.5 16.6667 17.5H3.33334C2.89131 17.5 2.46739 17.3244 2.15483 17.0118C1.84227 16.6993 1.66667 16.2754 1.66667 15.8333V4.16667C1.66667 3.72464 1.84227 3.30072 2.15483 2.98816C2.46739 2.67559 2.89131 2.5 3.33334 2.5H7.50001L9.16667 5H16.6667C17.1087 5 17.5326 5.17559 17.8452 5.48816C18.1577 5.80072 18.3333 6.22464 18.3333 6.66667V15.8333Z" stroke="#837E9F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <a class="open_repos" href="${repos.html_url}" target="_blank">
                            <h4>${repos.name}</h4>
                        </a>
                    </div>
                    <br>

                    <p id="projectDescription">${repos.description}</p>
                    <br>
        
                    <ul>
                        <li>
                            <div>
                                <!-- STAR ICON -->
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 1.66667L12.575 6.88334L18.3333 7.725L14.1667 11.7833L15.15 17.5167L10 14.8083L4.85001 17.5167L5.83334 11.7833L1.66667 7.725L7.42501 6.88334L10 1.66667Z" stroke="#837E9F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <span>${repos.stargazers_count}</span>          
                            </div>

                            <div>
                                <!-- BRANCH ICON -->
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 2.5V12.5" stroke="#837E9F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M15 7.5C16.3807 7.5 17.5 6.38071 17.5 5C17.5 3.61929 16.3807 2.5 15 2.5C13.6193 2.5 12.5 3.61929 12.5 5C12.5 6.38071 13.6193 7.5 15 7.5Z" stroke="#837E9F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M5 17.5C6.38071 17.5 7.5 16.3807 7.5 15C7.5 13.6193 6.38071 12.5 5 12.5C3.61929 12.5 2.5 13.6193 2.5 15C2.5 16.3807 3.61929 17.5 5 17.5Z" stroke="#837E9F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M15 7.5C15 9.48912 14.2098 11.3968 12.8033 12.8033C11.3968 14.2098 9.48912 15 7.5 15" stroke="#837E9F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <span>${repos.forks}</span>                               
                            </div>
                        </li>

                        <li id="projectLangs">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="7.5" cy="7.5" r="6.5" fill="#E7DE79" stroke="#837E9F" stroke-width="2"/>
                            </svg>

                            <p>${repos.language}</p>
                        </li>
                    </ul>
                </div>            
            `
            const projectsContent = document.querySelector("#projectsContent")
            projectsContent.insertAdjacentHTML("beforeend", modelReposBox);
        });
    })
    .catch((error) => console.error(error))
}

async function getUser(user) {
    axios.get(`${url}/${user}`)
    .then((res) => {
        const data = res.data
        userAvatar.src = data.avatar_url
        userName.textContent = data.name

        getRepos(data.repos_url)
    })
    .catch((error) => console.error(error))
}

getUser("cancherinikaiky")