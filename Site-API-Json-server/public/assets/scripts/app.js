//get my user:
fetch ('https://api.github.com/users/Md1o1')
   .then(res => res.json ())
   .then(data => document.getElementById('tela').innerHTML = data.bio, data.name)
   

/*Carrosel:


for repos: 
https://api.github.com/repos/Md1o1/DIW ||https://api.github.com/repos/Md1o1/AED || https://api.github.com/repos/Md1o1/CBPNK-MOD

for colleagues:
https://api.github.com/users/PedroQR || https://api.github.com/users/VictorGAC || https://api.github.com/users/naagaii || https://api.github.com/users/SanthiTaka  


https://getbootstrap.com/docs/5.0/components/card/#grid-cards
https://getbootstrap.com/docs/5.0/components/carousel/#with-captions
https://github.com/profdiegoaugusto/servidor-jsonserver
https://stackoverflow.com/questions/72389096/how-to-store-the-json-data-from-fetch-api-request-into-a-global-variable-javas
Thunder client extension

creating a card 
        fetch ('https://api.themoviedb.org/3/movie/popular?api_key=9c2c75d9d67c3f98cc98bb29450115c5&language=pt-BR')
           .then(res => res.json ())
           .then(data => {
                console.log ('Imprimindo filmes')
                let str = ''
                for (let i = 0; i < data.results.length; i++) {
                    let filme = data.results[i]
                    str += `<div class="card col-md-4" style="width: 18rem;">
                        <img src="https://image.tmdb.org/t/p/w500${filme.poster_path}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${filme.title}</h5>
                            <p class="card-text">${filme.overview}</p>
                            <a href="https://www.themoviedb.org/movie/${filme.id}" target="_blank" class="btn btn-primary">Mais detalhes</a>
                        </div>
                        </div>`
                }
                document.getElementById('tela').innerHTML = str
           })

*/