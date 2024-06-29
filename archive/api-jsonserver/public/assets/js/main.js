document.addEventListener("DOMContentLoaded", () => {
  const username = "Md1o1";
  const apiUrl = `https://api.github.com/users/${username}`;

  // Buscar dados do perfil do usuário
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector("#profile-name").textContent = data.name;
      document.querySelector("#profile-avatar").src = data.avatar_url;
      document.querySelector("#profile-bio").textContent = data.bio;
    });
  // Buscar dados dos repositórios do usuário
  fetch(`${apiUrl}/repos`)
    .then((response) => response.json())
    .then((data) => {
      const reposContainer = document.querySelector("#repos");
      data.forEach((repo) => {
        const repoCard = document.createElement("div");
        repoCard.classList.add("col-md-4", "mb-4");
        repoCard.innerHTML = `
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${repo.name}</h5>
                            <p class="card-text">${repo.description}</p>
                            <a href="repo.html?repo=${repo.name}" class="btn btn-primary">Detalhes</a>
                        </div>
                    </div>
                `;
        reposContainer.appendChild(repoCard);
      });
    });

  // Função para buscar dados do carrossel
  document.addEventListener("DOMContentLoaded", function () {
    fetch("../../db/db.json")
      .then((response) => response.json())
      .then((data) => populateCarousel(data))
      .catch((error) => console.error("Error fetching JSON:", error));

    document.getElementById("prevBtn").addEventListener("click", function () {
      $("#profileCarousel").carousel("prev");
    });

    document.getElementById("nextBtn").addEventListener("click", function () {
      $("#profileCarousel").carousel("next");
    });
  });

  function populateCarousel(data) {
    const carouselInner = document.getElementById("carousel-inner");
    carouselInner.innerHTML = "";
    data.forEach((profile, index) => {
      const isActive = index === 0 ? "active" : "";
      const carouselItem = `
            <div class="carousel-item ${isActive}">
                <img src="${profile.avatar_url}" alt="${profile.login}'s avatar" width="150" height="150" />
                <div class="info"><strong>Username:</strong> ${profile.login}</div>
                <div class="info"><strong>Bio:</strong> ${profile.bio}</div>
                <div class="info"><strong>Followers:</strong> ${profile.followers}</div>
                <div class="info"><strong>Following:</strong> ${profile.following}</div>
            </div>
        `;
      carouselInner.innerHTML += carouselItem;
    });
  }

  // Nomes de usuários dos seus colegas
  const colleagues = ["naagaii", "Fernanda-Sabino", "PedroQR", "VictorGAC"];

  // Buscar dados dos colegas
  colleagues.forEach((colleague) => {
    fetch(`https://api.github.com/users/${colleague}`)
      .then((response) => response.json())
      .then((data) => {
        const colleaguesContainer = document.querySelector("#colleagues");
        const colleagueCard = document.createElement("div");
        colleagueCard.classList.add("col-md-2", "text-center", "mb-4");
        colleagueCard.innerHTML = `
                <img src="${
                  data.avatar_url
                }" class="img-fluid rounded-circle" alt="${data.login}">
                <p>${data.name || data.login}</p>
                <a href="${
                  data.html_url
                }" class="btn btn-primary" target="_blank">GitHub</a>
                `;
        colleaguesContainer.appendChild(colleagueCard);
      });
  });
});
