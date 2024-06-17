const repositorios = document.querySelector('#repos .row');
const cabecalho = document.querySelector('.header');
    
    function getapigit() {
        fetch('https://api.github.com/users/luizfgontijo/repos')
        .then(async res => {
            if (!res.ok) {
                console.log(res);
                throw new Error(res.status);
            }
    
            let data = await res.json();
            data.map(item => {
                let project = document.createElement('div');
    
                project.innerHTML = `
                <div class="col">
                    <div class="card-body">
                        <h5 class="card-title"><a href="repo.html?repo=${item.name}">${item.name}</a> </h5>
                        <p class="card-text">${item.description} </p>
                    </div>
                </div>
                `;
                repositorios.appendChild(project);
            });
        })
        .catch(error => {
            console.error('Error: ', error);
        });
    }
    
    function getheader() {
        fetch('https://api.github.com/users/luizfgontijo')
        .then(async res => {
            if (!res.ok) {
                console.log(res);
                throw new Error(res.status);
            }
    
            let data = await res.json();
            let infoheader = document.createElement('div');
            infoheader.innerHTML = `
                <div class="nomeh">
                    <a class="navbar-brand" href="#" id="header">${item.login}</a>
                </div>
            `;
                
            cabecalho.appendChild(infoheader);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
    
    getapigit();
    getheader(); 

    document.addEventListener('DOMContentLoaded', () => {
        fetch('assets/json/colegas.json')
            .then(response => response.json())
            .then(data => {
                const gridContainer = document.getElementById('grid');
    
                data.grid.forEach(person => {
                    const personDiv = document.createElement('div');
                    const personLink = document.createElement('a');
                    const personImg = document.createElement('img');
                    const personName = document.createElement('p');
    
                    personLink.href = person.href;
                    personLink.classList.add('pessoa');
    
                    personImg.src = person.img.src;
                    personImg.alt = person.img.alt;
                    personImg.classList.add('fotos');
    
                    personName.classList.add('nome');
                    personName.textContent = person.name;
    
                    personLink.appendChild(personImg);
                    personLink.appendChild(personName);
                    personDiv.appendChild(personLink);
                    gridContainer.appendChild(personDiv);
                });
            })
            .catch(error => console.error('Error fetching the JSON data:', error));
    });