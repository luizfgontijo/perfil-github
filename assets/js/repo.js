function getRepo() {
    const urlParams = new URLSearchParams(window.location.search);
    const repoName = urlParams.get('repo');
  
    if (!repoName) {
      document.getElementById('repo-details').innerHTML = '<p>Repositório não encontrado.</p>';
      return;
    }
  
    fetch(`https://api.github.com/repos/luizfgontijo/${repoName}`)
      .then(async res => {
        if (!res.ok) {
          console.log(res)
          throw new Error(res.status);
        }
  
        let item = await res.json();
  
        document.getElementById('repo-details').innerHTML = `
          <h1 id="nomeh1">${item.name}</h1>
          <hr>
    
          <div class="repositorios">
            <h3>Descrição:</h3>
            <p class="descricao">${item.description}</p>
            <h3>Data de Criação:</h3>
            <p class="descricao">${Intl.DateTimeFormat('pt-BR').format(new Date(item.created_at))}</p>
            <h3>Linguagem:</h3>
            <p class="descricao">${item.language || 'Não especificado'}</p>
            <h3>Link de acesso:</h3>
            <p class="descricao"><a href="${item.html_url}" target="_blank">${item.html_url}</a></p>
            <h3>Tópicos:</h3>
            <div class="espacamento">
              ${item.topics.map(topic => `<div class="esptopicos"><p class="topicos">${topic}</p></div>`).join('')}
            </div>
          </div>`;
      })
      .catch(error => {
        console.error('Error:', error);
        document.getElementById('repo-details').innerHTML = '<p>Erro ao carregar detalhes do repositório.</p>';
      });
  }
  
  getRepo();