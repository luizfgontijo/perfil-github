const repositorios = document.querySelector('#repos .row');
    const perfil = document.querySelector('.Perfil');
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

    function getperfil() {
        
    }