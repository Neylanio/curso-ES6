class App {
  constructor(){
    this.repositories = [];

    this.formEl = document.getElementById('repo-form');
    this.listEl = document.getElementById('repo-list');

    this.registerHandlers();
  }

  registerHandlers() {
    this.formEl.onsubmit = event => this.addRepository(event);
  }

  addRepository(event) {
    event.preventDefault(); // Para nao redirecionar à outra página quando clicar no BOTÃO submit
    
    this.repositories.push({
      name: 'Neylanio',
      description: 'Profile Github',
      avatar_url: 'https://avatars1.githubusercontent.com/u/15330671?v=4',
      html_url: 'http://github.com/Neylanio',
    });

    this.render();
  }

  render(){
    this.listEl.innerHTML = '';

    this.repositories.forEach(repo => {
      let imgEl = document.createElement('img');
      imgEl.setAttribute('src', repo.avatar_url);

      let titleEl = document.createElement('strong');
      titleEl.appendChild(document.createTextNode(repo.name));

      let descriptionEl = document.createElement('p');
      descriptionEl.appendChild(document.createTextNode(repo.description));

      let linkEl = document.createElement('a');
      linkEl.setAttribute('href', '#');
      linkEl.setAttribute('target', '_blank');
      linkEl.appendChild(document.createTextNode('Acessar'));

      let listItemEl = document.createElement('li');
      listItemEl.appendChild(imgEl);
      listItemEl.appendChild(titleEl);
      listItemEl.appendChild(descriptionEl);
      listItemEl.appendChild(linkEl);

      this.listEl.appendChild(listItemEl);

    });
  }
}

new App();